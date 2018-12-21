const Router = require('koa-router');
const itemCtrl = require('./items.ctrl');

const items = new Router();

items.get('/weapon', itemCtrl.weaponList);
items.get('/weapon/:id', itemCtrl.weaponView);

module.exports = items;
