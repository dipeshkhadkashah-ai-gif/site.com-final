const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    experience: {
        type: String,
        require: true
    },
    skill : {
        type: String,
        require: true
    },
    hour : {
        type: String,
        require: true
    },
})

module.exports = mongoose.model("Job", jobSchema ); 