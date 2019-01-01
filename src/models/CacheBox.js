const mongoose = require('mongoose');

const {Schema} = mongoose;

const CacheBox = new Schema({
  packageCode: {type:String},
  packageName: {type:String},
  cost: {type:String},
  imgSrc: {type:String},
  itemInfo: [{
    seq: {type:String},
    imgSrc: {type:String},
    itemName: {type:String},
    itemDesc: {type:String},
    trscYn: {type:String},
    luck: {type:String}
  }]
});

module.exports = mongoose.model('CacheBox', CacheBox);
