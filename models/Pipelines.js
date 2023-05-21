const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcrypt');

require('dotenv').config();

const PipelineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name can\'t be empty'],
        trim: true
    },
    script: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Pipeline", PipelineSchema);