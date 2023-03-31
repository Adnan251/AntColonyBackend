const { register } = require("../services/UserService");
const { login } = require("../services/UserService");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;