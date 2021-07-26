const Router = require('koa-router');
const items = require('./item');
const boxs = require('./box');
const common = require('./common');
const auth = require('./auth');
const wowitem = require('./wowitem');
const api = new Router();

api.use('/item', items.routes());
api.use('/box', boxs.routes());
api.use('/common', common.routes());
api.use('/auth', auth.routes());
api.use('/wowitem', wowitem.routes());

module.exports = api;
