const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryptoJS = require("crypto-js");
const speakeasy = require('speakeasy');

require('dotenv').config();

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Name can\'t be empty'],
        minlength: 3,
        maxlength: 25,
        trim: true,
        select: false
    },
    last_name: {
        type: String,
        required: [true, 'Lastname can\'t be empty'],
        minlength: 4,
        maxlength: 30,
        trim: true,
        select: false
    },
    username: {
        type: String,
        required: [true, 'Username can\'t be empty'],
        minlength: 5,
        maxlength: 25,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Valid email required'
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password can\'t be empty'],
        validate: {
            validator: validator.isStrongPassword,
            message: 'Valid password'
        },
        select: false
    },
    mfa_key:{
        type: String,
        trim: true,
        select: false
    },
    mfa_activity:{
        type: Boolean,
        default: false
    },
    projects: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Projects'
        }],
        default: []
    },
    createdAt: {
        type: Date,
        unique: true
    }
});

UserSchema.pre('save', async function () {
    var sec = speakeasy.generateSecret();
    this.mfa_key = cryptoJS.AES.encrypt(sec.base32, process.env.CRYPTO_SECRET).toString();
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    this.createdAt = new Date().toISOString();
});

UserSchema.methods.createJWT = function () {
    return jwt.sign({ 'id': this._id, 'username': this.username, 'email':this.email }, process.env.JWT_SECRET);
}

UserSchema.methods.comparePassword = async function (pass) {
    return await bcryptjs.compare(pass, this.password);
}

module.exports = mongoose.model("Users", UserSchema);