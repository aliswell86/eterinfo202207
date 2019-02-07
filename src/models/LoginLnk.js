const mongoose = require('mongoose');

const {Schema} = mongoose;

const LoginLnk = new Schema({
  state_key: {type:String},
  token: {type:String},
  profile_info: {type:Object},
  social: {type:String},
  verify: {type:Boolean},
  callbackURL: {type:String},
  regdate: {
    type: Date,
    default: new Date() //현재 날짜를 기본으로 설정
  }
});

module.exports = mongoose.model('LoginLnk', LoginLnk);
