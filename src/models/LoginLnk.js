const mongoose = require('mongoose');

const {Schema} = mongoose;

const LoginLnk = new Schema({
  state_key: {type:String},
  token: {type:String},
  refresh_token: {type:String},
  expires_in: {type:String},
  profile_info: {type:Object},
  social: {type:String},
  verify: {type:Boolean},
  callbackURL: {type:String},
  curr_date: {type:String}
});

module.exports = mongoose.model('LoginLnk', LoginLnk);
