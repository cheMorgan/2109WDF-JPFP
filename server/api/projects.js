const router = require("express").Router();
const Project = require("../db/project");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
