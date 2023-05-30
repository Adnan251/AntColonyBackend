const { executePipe } = require("../services/pipeServices.js");

const router = require("express").Router();

router.post("/executePipe", executePipe);

module.exports = router;