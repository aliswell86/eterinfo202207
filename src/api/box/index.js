const Router = require('koa-router');
const boxCtrl = require('./boxs.ctrl');

const boxs = new Router();

boxs.get('/list', boxCtrl.boxList);

module.exports = boxs;
