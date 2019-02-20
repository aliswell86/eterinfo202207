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
    const poweredByCri = criByCalc(itemInfo.cri);
    const item = {
      itemInfo: itemInfo,
      poweredByDmg: poweredByDmg,
      poweredByCri: poweredByCri
    }
    
    ctx.body = item;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.plusUpGrid = (ctx) => {
  ctx.body = plusUpGrid();
};

/* 방어구 목록 조회
  GET /api/item/armmor
*/
exports.armmorList = async (ctx) => {
  try {
    const items = await Item.find({"$and":[{ctype: "2"}/*,{"$or":[{tier: "7"},{tier: "10"}]}*/]}).sort("order").sort("tier").exec();
    ctx.body = items;
  } catch(e) {
    ctx.throw(e);
  }
};

/* 코튬날개 목록 조회
  GET /api/item/custome
*/
exports.costumeList = async (ctx) => {
  try {
    const items = await Item.find({"$or":[{ctype: "3"},{ctype: "4"}]}).sort("order").sort("tier").exec();
    ctx.body = items;
  } catch(e) {
    ctx.throw(e);
  }
};

/* 악세 목록 조회
  GET /api/item/accessory
*/
exports.accessoryList = async (ctx) => {
  try {
    const items = await Item.find({"$or":[{ctype: "5"},{ctype: "6"},{ctype: "7"},{ctype: "8"},{ctype: "9"},{ctype: "10"},{ctype: "11"},{ctype: "12"}]}).sort("order").sort("tier").exec();
    ctx.body = items;
  } catch(e) {
    ctx.throw(e);
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

criByCalc = (item_cri) => {
  var up_classes = [1, 1.1, 1.3, 1.5, 2, 3, 4];
  var up_list = [];

  for(var i in up_classes) {
    up_list.push(Math.floor(Number(item_cri)*up_classes[i]));
  }

  return up_list;
};

plusUpGrid = () => {
  var base_value1 = 1.111111111;
  var base_value2 = 1.666666666;
  var base_value3 = 2.50;
  var value1_ary = [];
  var value2_ary = [];
  var value3_ary = [];
  var result_obj = {};
  var str_rt = 0.5;
  for(var i=0; i<11; i++) {
    var value = str_rt+(i*0.1);
    value1_ary.push((base_value1 * value));
    value2_ary.push((base_value2 * value));
    value3_ary.push((base_value3 * value));
  }
  
  result_obj.value1 = value1_ary;
  result_obj.value2 = value2_ary;
  result_obj.value3 = value3_ary;
  
  var real_result_list =[]
  var result_list = [];
  var list = [];
  var list_sub = [];
  var calc_value = 0;
  var armorr_ary = [1, 2, 6];

  for(var a=0; a<3; a++) {
    result_list = [];
    calc_value = 0;
    for(var j=0; j<3; j++) {
      list = [];
      calc_value = 0;
      for(var jj=2; jj<11; jj++) {
        list_sub = [];
        calc_value = 0;
        for(jjj=0; jjj<15; jjj++) {
          if(jjj>=0 && jjj<=4) {
            calc_value = calc_value + Number(eval("value"+(j+1)+"_ary[jj]"));
          }else if(jjj>=5 && jjj<=9) {
            calc_value = calc_value + Number(eval("value"+(j+1)+"_ary[jj]")*2);
          }else{
            calc_value = calc_value + Number(eval("value"+(j+1)+"_ary[jj]")*3);
          }
  
          list_sub.push((calc_value*armorr_ary[a]).toFixed(2));
        }
        list.push(list_sub);
      }
      result_list.push(list);
    }
    real_result_list.push(result_list);
  }

  return real_result_list;
}