const Router = require('koa-router');
const authCtrl = require('./auth.ctrl');

const auth = new Router();

auth.get('/naverLogin', authCtrl.naverLogin);
auth.get('/naverlogincallback', authCtrl.naverlogincallback);
auth.get('/check', authCtrl.check);
auth.get('/logout', authCtrl.logout);

module.exports = auth;
