import React from "react";
import { Link } from "react-router-dom";

const EachBot = (props) => {
  const { robot } = props;

  return (
    <div className="oneBot">
      {/* <h1>{robot.name}</h1> */}
      <div className="text-each-bot">
        <Link to={`/robots/${robot.id}`}>{robot.name}</Link>
        <p>{robot.fuelType}</p>
        <p>{robot.fuelLevel}</p>
      </div>
      <img src={robot.imageUrl} className="image-each-bot" />
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
// had a click handler on Link that would set single robot. Unnecessary
export default EachBot;
