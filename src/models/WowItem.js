const mongoose = require('mongoose');

const {Schema} = mongoose;

const WowItem = new Schema({
  zone: {type:String},
  voss: {type:String},
  voss_seq: {type:String},
  info: {type:String}
});

module.exports = mongoose.model('WowItem', WowItem);
