import React from "react";
import { Link } from "react-router-dom";

const EachProject = (props) => {
  const { project } = props;
  return (
    <div className="oneProject">
      <Link to={`/projects/${project.id}`}>{project.title}</Link>
      <p>deadline: {project.deadline}</p>
    </div>
  );
};

export default EachProject;
