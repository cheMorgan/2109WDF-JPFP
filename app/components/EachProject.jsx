import React from "react";
import { Link } from "react-router-dom";

const EachProject = (props) => {
  const { project } = props;
  const date = props.project.deadline || "";

  return (
    <div className="oneProject">
      <h2>{project.title}</h2>
      <p>
        {props.project.completed
          ? "This project is completed"
          : "This project is currently in progress"}
      </p>
      <Link to={`/projects/${project.id}`}>See more</Link>
      <p>Deadline: {date.slice(0, 10)}</p>
      <button
        className="delete-button-proj"
        type="button"
        onClick={() => props.handleDelete(project.id)}
      >
        X
      </button>
    </div>
  );
};

export default EachProject;
