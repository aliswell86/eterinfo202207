const Router = require('koa-router');
const itemCtrl = require('./items.ctrl');

const items = new Router();

items.get('/weapon', itemCtrl.weaponList);

module.exports = items;
