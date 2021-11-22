import React from "react";
import { connect } from "react-redux";
import { updateProject } from "../redux/projects";

class RobotsAssignedTo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick() {
  //   const obj = { ...this.props.project, robotId: this.props.robot.id };
  //   this.props.unassign(obj);
  // }
  render() {
    const { robot } = this.props;
    return (
      <div className="projects-assigned-to">
        <h1>{robot.name}</h1>
        <button
          type="button"
          onClick={(id) => this.props.handleClick(robot.id)}
        >
          Unassign
        </button>
      </div>
    );
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    unassign: (obj) => dispatch(updateProject(obj, history)),
  };
};

export default connect(null, mapDispatch)(RobotsAssignedTo);
