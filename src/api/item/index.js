const Router = require('koa-router');
const itemCtrl = require('./items.ctrl');

const items = new Router();

items.get('/weapon', itemCtrl.weaponList);
items.get('/weapon/:id', itemCtrl.weaponView);
items.get('/plusup', itemCtrl.plusUpGrid);

items.get('/armmor', itemCtrl.armmorList);

module.exports = items;
