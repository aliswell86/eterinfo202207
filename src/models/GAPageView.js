
var mongoose = require("mongoose");

var GAPageView = mongoose.Schema({
  item_nm:{type:String},

  period: {type:String},
  min_date: {type:String},
  max_date: {type:String},
  info: [{
    url: {type:String},
    count: {type:String},
    rank: {type:String}
  }],
  del_yn: {type:String}
});

var GAPageView = mongoose.model("GAPageView", GAPageView);
module.exports = GAPageView;
