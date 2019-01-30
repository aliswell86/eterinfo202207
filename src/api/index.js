const Router = require('koa-router');
const items = require('./item');
const boxs = require('./box');
const common = require('./common');
const auth = require('./auth');
const api = new Router();

api.use('/item', items.routes());
api.use('/box', boxs.routes());
api.use('/common', common.routes());
api.use('/auth', auth.routes());

module.exports = api;
