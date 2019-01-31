const client_id = 'TzAMy0C4TJMXLng6Knct';
const client_secret = 'k_njwReb2_';
const redirectURI = encodeURI("http://localhost:8002/api/auth/naverlogincallback");
const LoginLnk = require('../../models/LoginLnk');

/* 네이버아이디로 로그인
  GET /api/auth/naverlogin
*/
exports.naverLogin = async (ctx) => {
  const state = generateKey();
  const api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
  const newLogin = new LoginLnk({
    key: state, social: 'naver', verify: false 
  });

  try {
    // app.use(session(sessionConfig, app));
    // app.keys = ['ss'];

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
  
  try {
    request.get(options, async (error, response, body) => {
      if (!error && response.statusCode == 200) {
        // ctx.res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        // ctx.res.end(body);

        const loginLnk = await LoginLnk.find({"key": state}).exec();
        if(loginLnk.length === 1) {
          ctx.session.logged = true;
        }
      } else {
        // ctx.res.status(response.statusCode).end();
        ctx.throw(e, 500);
      }
    });
  } catch(e) {
    ctx.throw(e);
  }

  ctx.redirect('/');
};

generateKey = () => {
  const randtoken = require('rand-token');
  const token = randtoken.generate(16);
  return token;
}