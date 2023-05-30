const { addProject, deleteProject, getProject } = require("../services/projectServices");

const router = require("express").Router();

router.get("/getProject", getProject);
router.post("/addProject", addProject);
router.delete("/deleteProject", deleteProject);

module.exports = router;