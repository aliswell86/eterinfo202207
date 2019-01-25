const Router = require('koa-router');
const items = require('./item');
const boxs = require('./box');
const common = require('./common');
const api = new Router();

api.use('/item', items.routes());
api.use('/box', boxs.routes());
api.use('/common', common.routes());

module.exports = api;
