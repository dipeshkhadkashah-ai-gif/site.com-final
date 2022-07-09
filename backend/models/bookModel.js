const mongoose = require("mongoose"); //module for reservation route

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
email:{
    type: String,
    required: true,
    unique: true
},
  contact:{
    type:Number,
    unique: true,
    required: true
  },
});

module.exports = mongoose.model("Book", bookSchema);
