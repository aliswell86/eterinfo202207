const Router = require('koa-router');
const authCtrl = require('./auth.ctrl');

const auth = new Router();

auth.get('/naverLogin', authCtrl.naverLogin);
auth.get('/naverlogincallback', authCtrl.naverlogincallback);

module.exports = auth;
