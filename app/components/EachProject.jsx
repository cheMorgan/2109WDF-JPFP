import React from "react";
import { Link } from "react-router-dom";

const EachProject = (props) => {
  const { project } = props;
  return (
    <div className="oneProject">
      <Link to={`/projects/${project.id}`}>{project.title}</Link>
      <p>deadline: {project.deadline}</p>
      <button
        className="delete-button"
        type="button"
        onClick={() => props.handleDelete(project.id)}
      >
        X
      </button>
    </div>
  );
};

export default EachProject;
