import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleRobot, unassignRobot } from "../redux/singleRobot";

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
    const projects = robot.projects || [];

    return (
      <div>
        <div className="robot-bio">
          <img src={robot.imageUrl} className="robot-image" id="robo-image" />
          <h1 className="robo-bio">{robot.name}</h1>
          <p className="robo-bio">This robot runs on {robot.fuelType} fuel</p>
          <p className="robo-bio">Fuel level: {robot.fuelLevel}</p>
          <Link
            to={{
              pathname: `/robots/update/${robot.id}`,
              state: {
                robot: this.props.robot,
              },
            }}
          >
            <button type="button">Edit</button>
          </Link>
        </div>
        <div>
          <h2>Currently working on: </h2>
        </div>
        <div className="robot-projects">
          {projects.length === 0 ? (
            <p>This bot is on break</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="robot-project-item">
                <h1>{project.title}</h1>
                <p>{project.completed}</p>
                <p className={project.priority > 8 ? "urgent" : ""}>
                  Priority: {project.priority}
                </p>
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
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    robot: state.singleRobot,
  };
};
const mapDispatch = (dispatch, { history }) => {
  return {
    setRobot: (id) => dispatch(fetchSingleRobot(id)),
    unassign: (robot) => dispatch(unassignRobot(robot, history)),
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);
