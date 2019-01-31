const mongoose = require('mongoose');

const {Schema} = mongoose;

const LoginLnk = new Schema({
  key: {type:String},
  social: {type:String},
  verify: {type:Boolean},
  regdate: {
    type: Date,
    default: new Date() //현재 날짜를 기본으로 설정
  }
});

module.exports = mongoose.model('LoginLnk', LoginLnk);
