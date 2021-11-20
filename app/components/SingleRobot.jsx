// when navigating to /robots/:id
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleRobot, unassign } from "../redux/singleRobot";
import ProjectsAssignedTo from "./ProjectsAssignedTo";
import RobotUpdateForm from "./RobotUpdateForm";

class SingleRobot extends React.Component {
  constructor(props) {
    super(props);
    this.unassignButton = this.unassignButton.bind(this);
  }
  componentDidMount() {
    this.props.setRobot(+this.props.match.params.id);
  }
  unassignButton(id) {
    const obj = { ...this.props.robot, projectId: id };
    this.props.unassign(obj);
  }

  render() {
    const { robot } = this.props;
    // console.log(robot);
    const projects = robot.projects || [];
    return (
      <div id="robot-page">
        <div id="single-robot">
          <img src={robot.imageUrl} className="robot-image" />
          <h1>{robot.name}</h1>
          <p>{robot.fuelType}</p>
          <p>{robot.fuelLevel}</p>
        </div>
        <div className="single-robot-projects">
          {projects.length === 0 ? (
            <p>Give this bot some work!</p>
          ) : (
            projects.map((project) => (
              <div className="projects-assigned-to" key={project.id}>
                <h1>{project.title}</h1>
                <p>{project.completed}</p>
                <p>{project.priority}</p>
                <p>{project.description}</p>
                <button
                  type="button"
                  onClick={() => this.unassignButton(project.id)}
                >
                  Unassign
                </button>
              </div>
            ))
          )}
        </div>
        <Link to={`/robots/update/${robot.id}`}>Update</Link>
      </div>
    );
  }
}
{
  /* <ProjectsAssignedTo
  history={this.props.history}
  project={project}
  robot={robot}
  key={project.id}
/> */
}
// If robot has no projects, put the link to add?
const mapState = (state) => {
  return {
    robot: state.singleRobot,
  };
};
const mapDispatch = (dispatch, { history }) => {
  return {
    setRobot: (id) => dispatch(fetchSingleRobot(id)),
    unassign: (obj) => dispatch(unassign(obj, history)),
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
/*
<div id="single-robot">
      <img src={robot.imageUrl} />
      <h1>{robot.name}</h1>
      <p>{robot.fuelType}</p>
      <p>{robot.fuelLevel}</p>
      {robot.projects.length !== 0 ? (
        <ul>
          {robot.projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      ) : (
        <p>Give em' some work!</p>
      )}
    </div>
*/
