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
    defaultValue:
      "https://static.wikia.nocookie.net/pixar/images/d/de/Wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20170807223723",
  },
});

module.exports = Robot;
