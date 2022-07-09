const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
   require:true,
   unique:true
  },
  phone: {
    type: Number,
    maxlength: 10,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Contact", contactSchema);
