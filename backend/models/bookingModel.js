const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User"
// },
  name: {
    type: String,
    required: [true],
    maxlength: [30],
    minlength: [4],
  },
  email: {
    type: String,
    required: [true],
    unique: true,
  },
  address: {
    type: String,
 required:true
  },
  contact: {
    type: Number,
    maxlength: 10,
    unique: true,
  },
  session: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  equipments: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  isPaid:{
    type:Boolean,
    default:false
  }
});
module.exports = mongoose.model("Booking", bookingSchema);
