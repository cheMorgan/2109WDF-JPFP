const router = require("express").Router();
const Project = require("../db/project");
const Robot = require("../db/robot");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id, { include: Robot });
    res.send(project);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.send(await Project.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id, { include: Robot });
    if (req.body.robotId) {
      await project.removeRobot(req.body.robotId);
      res.send(project);
    } else {
      res.send(await project.update(req.body));
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.destroy();
    res.send("project");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
