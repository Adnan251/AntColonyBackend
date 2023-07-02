const {register, login, checkMFA, setupMFA } = require("../services/userServices");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/mfa", setupMFA);
router.post("/mfa", checkMFA)

module.exports = router;