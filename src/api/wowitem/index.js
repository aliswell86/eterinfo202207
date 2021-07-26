const Router = require('koa-router');
const wowitemCtrl = require('./wowitem.ctrl');

const boxs = new Router();

boxs.get('/list', wowitemCtrl.wowitemList);

module.exports = boxs;
