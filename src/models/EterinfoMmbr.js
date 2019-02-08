const mongoose = require('mongoose');

const {Schema} = mongoose;

const EterinfoMmbr = new Schema({
  naverid: {type:String},
  nickname: {type:String},
  profile_img: {type:String},
  comment: {type:String},
  curr_date: {type:String}
});

module.exports = mongoose.model('EterinfoMmbr', EterinfoMmbr);
