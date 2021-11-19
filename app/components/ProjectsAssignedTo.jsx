import React from "react";
import { connect } from "react-redux";
import { updateProject } from "../redux/projects";
import { updateRobot } from "../redux/robots";
import { unassign } from "../redux/singleRobot";

class ProjectsAssignedTo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const obj = { ...this.props.robot, projectId: this.props.project.id };
    this.props.unassign(obj);
  }
  render() {
    const { project } = this.props;
    console.log(project.RobotProject);
    return (
      <div className="projects-assigned-to">
        <h1>{project.title}</h1>
        <p>{project.completed}</p>
        <p>{project.priority}</p>
        <p>{project.description}</p>
        <button type="button" onClick={this.handleClick}>
          Unassign
        </button>
      </div>
    );
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    unassign: (obj) => dispatch(unassign(obj, history)),
  };
};

export default connect(null, mapDispatch)(ProjectsAssignedTo);
