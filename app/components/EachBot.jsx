import React from "react";
import { Link } from "react-router-dom";

const EachBot = (props) => {
  const { robot } = props;
  return (
    <div>
      <div className="oneBot">
        <div className="text-each-bot">
          <Link to={`/robots/${robot.id}`} className="name-links">
            {robot.name}
          </Link>
          <p>{robot.fuelType}</p>
          <p>Fuel level: {robot.fuelLevel}</p>
        </div>
        <img src={robot.imageUrl} className="image-each-bot" />
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={() => props.handleDelete(robot.id)}
      >
        X
      </button>
    </div>
  );
};
export default EachBot;
