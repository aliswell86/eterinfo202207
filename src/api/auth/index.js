const Router = require('koa-router');
const authCtrl = require('./auth.ctrl');

const auth = new Router();

auth.post('/naverLogin', authCtrl.naverLogin);
auth.post('/naverlogincallback', authCtrl.naverlogincallback);

module.exports = auth;
