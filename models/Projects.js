const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcrypt');

require('dotenv').config();

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name can\'t be empty'],
        trim: true
    },
    language: {
        type: String,
        required: [true, 'Username can\'t be empty'],
        trim: true
    },
    dsl:{
        type: Object
    },
    segments:{
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pipelines'
        }],
        default: []
    }
});

module.exports = mongoose.model("Project", ProjectSchema);