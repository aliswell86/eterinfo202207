const Item = require('../../models/Item');

/* 무기 목록 조회
  GET /api/item/weapon
*/
exports.weaponList = async (ctx) => {
  try {
    const items = await Item.find({"$and":[{ctype: "1"}/*,{"$or":[{tier: "7"},{tier: "10"}]}*/]}).sort({"order": 1}).exec();
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
    const itemInfo = await Item.findById(id).exec();
    
    // 존재하지 않음
    if (!itemInfo) {
      ctx.status = 404;
      return;
    }

    const poweredByDmg = poweredByCalc(itemInfo.dmg);
    const item = {
      itemInfo: itemInfo,
      poweredByDmg: poweredByDmg
    }
    
    ctx.body = item;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

poweredByCalc = (item_dmg) => {
  var up_classes = [1, 1.1, 1.3, 1.5, 2, 3, 4];
  var up_rate = [0,1,2,3,4,5,6,7,8,9,1,1,1,3,3,3,6,6,6,10];
  var up_list = [];
  var up_cls_list = [];
  var calc_num = Number(item_dmg);
  var result_num = Number(item_dmg);

  for(var i in up_classes) {
    up_cls_list = [];
    calc_num = Number(item_dmg);
    result_num = Number(item_dmg);
    for(var j in up_rate) {
      calc_num = (calc_num/100*up_rate[j]) + calc_num;
      result_num = Math.round(calc_num);
      up_cls_list.push(Math.floor(result_num*up_classes[i]));
    }

    up_list.push(up_cls_list)
  }

  return up_list;
};