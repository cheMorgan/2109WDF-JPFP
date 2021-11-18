const Sequelize = require("sequelize");
const db = require("./database");

const Robot = db.define("robot", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fuelType: {
    type: Sequelize.STRING,
    validate: {
      isIn: [["gas", "diesel", "electric"]],
    },
    defaultValue: "electric",
  },
  fuelLevel: {
    type: Sequelize.FLOAT,
    defaultValue: 100,
    validate: {
      max: 100,
      min: 0,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://scx2.b-cdn.net/gfx/news/2019/3-robot.jpg",
  },
});

module.exports = Robot;
