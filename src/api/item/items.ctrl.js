const Item = require('../../models/Item');

/* 무기 목록 조회
  GET /api/item/weapon
*/
exports.weaponList = async (ctx) => {
  try {
    const items = await Item.find({"$and":[{ctype: "1"},{"$or":[{tier: "9"},{tier: "10"}]}]}).sort({"order": 1}).exec();
    ctx.body = items;
  } catch(e) {
    ctx.throw(e);
  }
};

/* 무기 목록 조회
  GET /api/item/weapon/:id
*/
exports.weaponView = async (ctx) => {
  const { id } = ctx.params;

  try {
    const item = await Item.findById(id).exec();
    
    // 존재하지 않음
    if (!item) {
      ctx.status = 404;
      return;
    }
    
    ctx.body = item;
  } catch (e) {
    ctx.throw(e, 500);
  }
};