const Router = require('koa-router');
const itemCtrl = require('./items.ctrl');

const items = new Router();

items.get('/weapon', itemCtrl.weaponList);
items.get('/weapon/:id', itemCtrl.weaponView);
items.get('/plusup', itemCtrl.plusUpGrid);

items.get('/armmor', itemCtrl.armmorList);
items.get('/costume', itemCtrl.costumeList);
items.get('/accessory', itemCtrl.accessoryList);

module.exports = items;
