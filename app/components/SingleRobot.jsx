// when navigating to /robots/:id
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleRobot } from "../redux/singleRobot";
import ProjectsAssignedTo from "./ProjectsAssignedTo";
import RobotUpdateForm from "./RobotUpdateForm";

class SingleRobot extends React.Component {
  constructor() {
    super();
    this.handle = this.handle.bind(this);
  }
  componentDidMount() {
    this.props.setRobot(+this.props.match.params.id);
  }
  handle(evt) {
    console.log("event target inside handle click", evt.target);
  }
  render() {
    console.log(this.props);
    const { robot } = this.props;
    const projects = robot.projects || [];
    return (
      <div>
        <div id="single-robot">
          <img src={robot.imageUrl} />
          <h1>{robot.name}</h1>
          <p>{robot.fuelType}</p>
          <p>{robot.fuelLevel}</p>
        </div>
        <div className="single-robot-projects">
          {projects.length === 0 ? (
            <p>Give this bot some work!</p>
          ) : (
            projects.map((project) => (
              <ProjectsAssignedTo
                history={this.props.history}
                project={project}
                robot={robot}
                key={project.id}
                handleClick={this.handle}
              />
            ))
          )}
        </div>
        <Link to={`/robots/update/${robot.id}`}>Update</Link>
      </div>
    );
  }
}
// If robot has no projects, put the link to add?
const mapState = (state) => {
  return {
    robot: state.singleRobot,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setRobot: (id) => dispatch(fetchSingleRobot(id)),
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
