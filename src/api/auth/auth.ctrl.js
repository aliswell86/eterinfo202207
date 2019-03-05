 client_id = 'TzAMy0C4TJMXLng6Knct';
const client_secret = 'k_njwReb2_';
// const redirectURI = encodeURI("http://localhost:3000/naverlogincallback");
const redirectURI = encodeURI("http://localhost:8002/api/auth/naverlogincallback");
// const redirectURI = encodeURI("http://localhost:8002/callback");
const LoginLnk = require('../../models/LoginLnk');
const EterinfoMmbr = require('../../models/EterinfoMmbr');
const GAPageView = require("../../models/GAPageView");
const requestPromise = require('request-promise');
const moment = require('moment');
const {google} = require('googleapis');
const oauth2Client = new google.auth.OAuth2(
  '914832969749-8c7g8986hodnstj58eluijnbj1aml16g.apps.googleusercontent.com',
  'oN6AslW0GvPb0gFODMmvW6mm',
  // 'http://localhost:8002/api/auth/googletoken'
  'http://eterinfo.kr/api/auth/googletoken'
);

/* 네이버아이디로 로그인
  GET /api/auth/naverlogin
*/
exports.naverLogin = async (ctx) => {
  const {referer, host} = ctx.headers;
  const callbackURL = referer.substr(referer.indexOf(host) + (host.length));
  const state = generateKey();
  const api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
  const newLogin = new LoginLnk({
    state_key: state, token: '', profile_info: {}, social: 'naver', verify: false, callbackURL: callbackURL
  });

  try {
    await newLogin.save();

    ctx.res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    ctx.res.end(api_url);
  } catch(e) {
    ctx.throw(e);
  }
};

/* 네이버아이디로 로그인 콜백
  GET /api/auth/naverlogincallback
*/
exports.naverlogincallback = async (ctx) => {
  const {code, state} = ctx.query;
  const api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
  const request = require('request');
  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };

  let result_token = '';
  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log("토큰조회 : " + body);
      result_token = JSON.parse(body);
    }else{
      console.log('error1 = ' + response.statusCode, error);
    }
  }).on('complete', () => {
    const {access_token, refresh_token, expires_in} = result_token;
    const header = 'Bearer ' + access_token;
    const api_url = 'https://openapi.naver.com/v1/nid/me';
    const options = {
      url: api_url,
      headers: {'Authorization': header}
    };

    let result_profile = '';
    request(options, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        console.log("프로필조회 : " + body);
        result_profile = JSON.parse(body);
      } else {
        console.log('error2 = ' + response.statusCode, error);
      }
    }).on('complete', async () => {
      require("date-utils");
      const date = new Date();
      const currDate = date.toFormat("YYYYMMDDHH24MISS");
      const {response} = result_profile;
      const seqObj = {state_key: state};
      const udtObj = {
        token: access_token,
        refresh_token: refresh_token,
        expires_in: expires_in,
        profile_info: response,
        verify: true,
        curr_date: currDate
      };
      const {nickname, profile_img, id} = response;
      const mmbrSeqObj = {naverid: id};
      const mmbrUdtObj = {
        nickname: nickname === undefined ? '' : nickname,
        profile_img: profile_img === undefined ? '' : profile_img,
        curr_date: currDate
      }

      try {
        const eterinfoMmbr = await EterinfoMmbr.findOneAndUpdate(mmbrSeqObj, mmbrUdtObj, {
          new: true, upsert: true
        }).exec();

        const loginLnk = await LoginLnk.findOneAndUpdate(seqObj, udtObj, {
          new: true
        }).exec();

        if(!loginLnk) {
          ctx.status = 404;
          return;
        }
      } catch(e) {
        ctx.throw(e, 500);
      }
    });
  });
  
  try {
    const loginLnk = await LoginLnk.find({"state_key": state}).exec();
    if(loginLnk.length === 1) {
      ctx.session.logged = true;
      ctx.session.state = state;
      ctx.redirect(loginLnk[0].callbackURL);
    }else{
      ctx.redirect('/');
    }
  } catch(e) {
    ctx.throw(e, 500);
  }
};

/* 로그인체크
  GET /api/auth/check
*/
exports.check = async (ctx) => {
  const {logged, state, profileId} = ctx.session;
  const findObj = {'$and': [
      {verify: true}, 
      {state_key: state}
    ]
  };

  const bodyLogged = !!logged;
  const bodyState = bodyLogged ? state : '';
  let bodyProfileID = (bodyLogged && profileId !== undefined) ? profileId : '';
  
  if(bodyLogged && profileId === undefined) {
    try {
      const loginLnk = await LoginLnk.findOne(findObj).exec();
      
      if(!!loginLnk) {
        const {id} = loginLnk.profile_info;

        ctx.session.profileId = id;
        bodyProfileID = id;
      }
      
      ctx.body = {
        logged: bodyLogged,
        stateKey: bodyState,
        profileId: bodyProfileID
      }
    } catch(e) {
      ctx.throw(e, 500);
    }
  }else{
    ctx.body = {
      logged: bodyLogged,
      stateKey: bodyState,
      profileId: bodyProfileID
    }
  }
};

/* 로그아웃
  GET /api/auth/logout
*/
exports.logout = async (ctx) => {
  const {state} = ctx.session;

  try {
    const loginLnk = await LoginLnk.findOneAndUpdate({state_key: state}, {verify: false}, {
      new: true
    }).exec();

    if(!loginLnk) {
      ctx.session = null;
      ctx.status = 404;
      return;
    }

    ctx.session = null;
    ctx.status = 202; //No Content - 정상
  } catch(e) {
    ctx.throw(e, 500);
  }
};

/* 로그아웃
  GET /api/auth/logout
*/
exports.gaPageView = (ctx) => {
  const scopes = [
    'https://www.googleapis.com/auth/analytics'
  ];
  
  const url = oauth2Client.generateAuthUrl({
    scope: scopes
  });

  ctx.redirect(url);
}

exports.googleToken = async (ctx) => {
  const {code} = ctx.query;
  const {tokens} = await oauth2Client.getToken(code);
  const {access_token} = tokens;
  const yesterDay = moment().add(-1, 'days').format('YYYY-MM-DD');
  const beforeWeekDay = moment().add(-7, 'days').format('YYYY-MM-DD');
  const beforeMonthDay = moment().add(-30, 'days').format('YYYY-MM-DD');
  const analytics_url_yesterday = 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A179440961&start-date='+yesterDay+'&end-date='+yesterDay+'&metrics=ga%3Apageviews&dimensions=ga%3ApagePath&sort=-ga%3Apageviews&max-results=200&access_token=' + access_token;
  const analytics_url_week = 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A179440961&start-date='+beforeWeekDay+'&end-date='+yesterDay+'&metrics=ga%3Apageviews&dimensions=ga%3ApagePath&sort=-ga%3Apageviews&max-results=200&access_token=' + access_token;
  const analytics_url_month = 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A179440961&start-date='+beforeMonthDay+'&end-date='+yesterDay+'&metrics=ga%3Apageviews&dimensions=ga%3ApagePath&sort=-ga%3Apageviews&max-results=200&access_token=' + access_token;
  
  console.log("::START:: - " + moment().format('YYYY-MM-DD HH:mm:ss'));

  try {
    await GAPageView.deleteMany({max_date: yesterDay.replace(/-/gi, '')}).exec();
    await GAPageView.updateMany({}, {del_yn: 'Y'}).exec();
  } catch(e) {
    ctx.throw(e);
  }
  
  // 일
  console.log("analytics_url_yesterday : " + analytics_url_yesterday);
  requestPromise(analytics_url_yesterday).then(async (res) => {
    gaPageViewInsert(res, yesterDay, yesterDay, 'day');
  });
  // 주
  console.log("analytics_url_week : " + analytics_url_week);
  requestPromise(analytics_url_week).then(async (res) => {
    gaPageViewInsert(res, beforeWeekDay, yesterDay, 'week');
  });
  // 월
  console.log("analytics_url_month : " + analytics_url_month);
  requestPromise(analytics_url_month).then(async (res) => {
    gaPageViewInsert(res, beforeMonthDay, yesterDay, 'month');
  });

  ctx.redirect('/');
}

generateKey = () => {
  const randtoken = require('rand-token');
  const token = randtoken.generate(16);
  return token;
}

gaPageViewInsert = async (res, strDate, endDate, inPeriod) => {
  const rows = JSON.parse(res).rows;

  const result = {
    period: inPeriod,
    min_date: strDate.replace(/-/gi, ''),
    max_date: endDate.replace(/-/gi, ''),
    info: infoGroupby(rows),
    del_yn: 'N'
  };

  const gaPageView = new GAPageView(result);

  try {
    await gaPageView.save();
  } catch (e) {
    ctx.throw(e, 500);
  }
}

const infoGroupby = (info) => {
  let infoGroupby = [];

  info.forEach(obj => {
    const url = obj[0];
    const count = Number(obj[1]);
    const weaponId = url.indexOf('/wp/') > -1 ? url.substr('/wp/'.length, url.length) :
    url.indexOf('/custom/') > -1 ? url.substr('/custom/'.length, url.length) : url;

    if(infoGroupby.length === 0 && !(weaponId.indexOf('/') > -1)) {
      infoGroupby.push({
        weaponId: weaponId,
        count: count
      });
    }else{
      let sameBoolean = false;

      infoGroupby.forEach((obj1, i) => {
        if(obj1.weaponId === weaponId) {
          infoGroupby[i].count = Number(obj1.count) + count;
          sameBoolean = true;
          return false;
        }
      });

      if(!sameBoolean && !(weaponId.indexOf('/') > -1)) {
        infoGroupby.push({
          weaponId: weaponId,
          count: count
        });
      }
    }
  });

  return infoGroupby.sort((a, b) => { 
    return a.count < b.count ? 1 : a.count > b.count ? -1 : 0;  
  }).slice(0, 20).map((obj, count) => {
    return {
      ...obj,
      rank: count + 1
    }
  });
};``