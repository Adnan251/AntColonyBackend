const bcryptjs = require('bcrypt');
const Profiles = require('../models/Profiles.js');
const Users = require('../models/Users.js');
const ProfileService = require('./ProfileService.js');



module.exports = {
    register: register,
    login: login,
};