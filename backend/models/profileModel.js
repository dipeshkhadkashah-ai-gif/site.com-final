const mongoose = require("mongoose"); //module for profile route

//profile module starts here
const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Profile", profileSchema); 

