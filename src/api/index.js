const Router = require('koa-router');
const items = require('./item');
const api = new Router();

api.use('/item', items.routes());

module.exports = api;
