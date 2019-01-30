/* 네이버아이디로 로그인
  GET /api/auth/naverlogin
*/
const client_id = 'TzAMy0C4TJMXLng6Knct';
const client_secret = 'k_njwReb2_';
const state = "RAMDOM_STATE";
const redirectURI = encodeURI("/api/auth/naverlogincallback");
let api_url = "";

exports.naverLogin = async (ctx) => {
  try {
    api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
    ctx.res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    ctx.res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
    console.log("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
  } catch(e) {
    ctx.throw(e);
  }
};

/* 네이버아이디로 로그인 콜백
  GET /api/auth/naverlogincallback
*/
exports.naverlogincallback = async (ctx) => {
  try {
    code = ctx.req.query.code;
    state = ctx.req.query.state;
    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
    const request = require('request');
    const options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
     };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        ctx.res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        ctx.res.end(body);
      } else {
        ctx.res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
  } catch(e) {
    ctx.throw(e);
  }
};