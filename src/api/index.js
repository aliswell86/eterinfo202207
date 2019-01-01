const Router = require('koa-router');
const items = require('./item');
const boxs = require('./box');
const api = new Router();

api.use('/item', items.routes());
api.use('/box', boxs.routes());

module.exports = api;
