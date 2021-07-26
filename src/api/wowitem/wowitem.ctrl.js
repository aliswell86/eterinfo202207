const WowItem = require('../../models/WowItem');

/* 뽑기박스 목록조회
  GET /api/wowitem/list
*/
exports.wowitemList = async (ctx) => {
  try {
    const list = await WowItem.find().exec();
    ctx.body = list;
  } catch(e) {
    ctx.throw(e);
  }
};