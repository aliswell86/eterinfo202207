const client_id = 'TzAMy0C4TJMXLng6Knct';
const client_secret = 'k_njwReb2_';
const redirectURI = encodeURI("http://localhost:8002/api/auth/naverlogincallback");
// const session = require('koa-session');
// const Koa = require('koa');
// const app = new Koa();

/* 네이버아이디로 로그인
  GET /api/auth/naverlogin
*/
exports.naverLogin = async (ctx) => {
  const state = generateKey();
  const api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
  // const sessionConfig = {maxAge: 86400000};

  try {
    // app.use(session(sessionConfig, app));
    // app.keys = ['ss'];

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
  const code = ctx.query.code;
  const state = ctx.query.state;
  const api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
  const request = require('request');
  const options = {
    url: api_url,
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };
  
  try {
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // ctx.res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        // ctx.res.end(body);
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