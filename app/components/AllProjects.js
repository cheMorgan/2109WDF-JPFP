import React from "react";
import { connect } from "react-redux";
import { deleteProject, fetchProjects } from "../redux/projects";
import EachProject from "./EachProject";
import { Link } from "react-router-dom";

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.setProjects();
  }
  handleDelete(id) {
    this.props.deleteProject(id);
  }
  render() {
    const { projects } = this.props;
    return (
      <div>
        <Link to="/projects/add">
          <button type="button" className="add-button">
            Add a project
          </button>
        </Link>
        <h1>All Projects</h1>
        <div className="all-projects-view">
          {projects.map((project) => (
            <EachProject
              project={project}
              key={project.id}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
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
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
