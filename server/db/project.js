const Sequelize = require("sequelize");
const db = require("./database");

const Project = db.define("project", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,

    isEmpty: false,
  },
  deadline: {
    type: Sequelize.STRING,
  },
  priority: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10,
      min: 1,
    },
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Project;
