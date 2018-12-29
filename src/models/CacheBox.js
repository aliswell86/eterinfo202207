const mongoose = require('mongoose');

const {Schema} = mongoose;

const CacheBox = new Schema({
  packageCode: {type:String},
  packageName: {type:String},
  cost: {type:String},
  itemInfo: [{
    imgSrc: {type:String},
    itemName: {type:String},
    itemDesc: {type:String},
    trscYn: {type:String},
    luck: {type:String}
  }]
});

module.exports = mongoose.model('EterBox', CacheBox);
