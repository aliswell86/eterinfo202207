
var mongoose = require("mongoose");

var GAPageView = mongoose.Schema({
  item_nm:{type:String},

  period: {type:String},
  min_date: {type:String},
  max_date: {type:String},
  info: [{
    weaponId: {type:String},
    count: {type:Number},
    rank: {type:Number}
  }],
  del_yn: {type:String}
});

var GAPageView = mongoose.model("GAPageView", GAPageView);
module.exports = GAPageView;
