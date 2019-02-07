const client_id = 'TzAMy0C4TJMXLng6Knct';
const client_secret = 'k_njwReb2_';
// const redirectURI = encodeURI("http://localhost:3000/naverlogincallback");
const redirectURI = encodeURI("http://localhost:8002/api/auth/naverlogincallback");
// const redirectURI = encodeURI("http://localhost:8002/callback");
const LoginLnk = require('../../models/LoginLnk');

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
      result_token = JSON.parse(body);
    }else{
      console.log('error1 = ' + response.statusCode, error);
    }
  }).on('complete', () => {
    const {access_token} = result_token;
    const header = 'Bearer ' + access_token;
    const api_url = 'https://openapi.naver.com/v1/nid/me';
    const options = {
      url: api_url,
      headers: {'Authorization': header}
    };

    let result_profile = '';
    request(options, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        result_profile = JSON.parse(body);
      } else {
        console.log('error2 = ' + response.statusCode, error);
      }
    }).on('complete', async () => {
      const {response} = result_profile;
      const seq_obj = {"state_key": state};
      const update_obj = {
        token: access_token,
        profile_info: response,
        verify: true
      };
      console.log('==== seq_obj =====');
      console.log(seq_obj);
      console.log('==== update_obj =====');
      console.log(update_obj);
      try {
        const loginLnk = await LoginLnk.findOneAndUpdate(seq_obj, update_obj, {
          new: true
        }).exec();

        console.log('==== update_after =====');
        console.log(loginLnk);

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

exports.check = async (ctx) => {
  console.log(ctx.session);
  const {logged, state, profileId} = ctx.session;
  const findObj = {'$and': [
      {verify: true}, 
      {state_key: state}
    ]
  };
  console.log(logged +"&&"+ profileId);
  try {
    if(logged) {
      const bodyLogged = !!logged;
      const bodyState = bodyLogged ? state : '';
      let bodyToken = '';
      let bodyProfileID = '';

      if(profileId === undefined) {
        const loginLnk = await LoginLnk.findOne(findObj).exec();
        
        if(!!loginLnk) {
          const {token} = loginLnk;
          const {id} = loginLnk.profile_info;

          ctx.session.profileId = id;
          bodyProfileID = id;
          bodyToken = token;
        }

        ctx.body = {
          logged: bodyLogged,
          token: bodyToken,
          stateKey: bodyState,
          profileId: bodyProfileID
        };
      }
      console.log(ctx.body);
    }else{
      ctx.statue = 202;
    }
  } catch(e) {
    ctx.throw(e, 500);
  }
};

exports.logout = (ctx) => {
  ctx.session = null;
  ctx.status = 202; //No Content - 정상
};

generateKey = () => {
  const randtoken = require('rand-token');
  const token = randtoken.generate(16);
  return token;
}