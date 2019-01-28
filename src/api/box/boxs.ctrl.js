const Box = require('../../models/CacheBox');

/* 뽑기박스 목록조회
  GET /api/box/list
*/
exports.boxList = async (ctx) => {
  try {
    const boxs = await Box.find().sort({"packageCode": 1}).exec();
    console.log(boxs);
    ctx.body = boxs;
  } catch(e) {
    ctx.throw(e);
  }
};