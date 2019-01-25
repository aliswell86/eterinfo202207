const Router = require('koa-router');
const commonCtrl = require('./common.ctrl');

const boxs = new Router();

boxs.get('/adpick', commonCtrl.adpick);

module.exports = boxs;
