import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";
import EachProject from "./EachProject";
import { Link } from "react-router-dom";

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.setProjects();
  }
  render() {
    const { projects } = this.props;
    return (
      <div className="thing-contianer">
        {projects.map((project) => (
          <EachProject project={project} key={project.id} />
        ))}
        <Link to="/projects/add">Add a project</Link>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
