import React from "react";
import { Link } from "react-router-dom";

const Robot = (props) => {
  const { robot, handleClick } = props;
  return (
    <div className="oneBot">
      <h1>{robot.name}</h1>

      <p>number of projects</p>
      <p>{robot.fuelType}</p>
      <p>{robot.fuelLevel}</p>
      <img src={robot.imageUrl} />
    </div>
  );
};

export default Robot;
