const AdpickInfo = require('../../models/AdpickInfo');

/* 뽑기박스 목록조회
  GET /api/box/list
*/
exports.adpick = async (ctx) => {
  try {
    const adpick = await AdpickInfo.find({del_yn: 'N'}).exec();
    ctx.body = adpick;
  } catch(e) {
    ctx.throw(e);
  }
};