// // when navigating to /projects/:id
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateProject,
  fetchSingleProject,
  unassignProject,
} from "../redux/singleProject";
// import RobotsAssignedTo from "./RobotsAssignedTo";

class SingleProject extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.unassignButton = this.unassignButton.bind(this);
  }
  componentDidMount() {
    this.props.setProject(+this.props.match.params.id);
  }
  handleChange() {
    this.props.updateProject({
      ...this.props.project,
      completed: !this.props.project.completed,
    });
  }
  unassignButton(id) {
    const obj = { ...this.props.project, robotId: id };
    console.log("Inside SingleProject", obj);
    this.props.unassign(obj);
  }
  render() {
    const { title, priority, description, completed } = this.props.project;
    const date = this.props.project.deadline || "";

    const robots = this.props.project.robots || [];

    return (
      <div>
        <div>
          <div className="single-project">
            <h1>{title}</h1>
            <p>Deadline : {date.slice(0, 10)}</p>
            <p>Priority: {priority}</p>
            <p>{description}</p>
            <p>Completion Status: {completed ? "Complete" : "In progress"}</p>
            <input
              type="checkbox"
              name="completed"
              onChange={this.handleChange}
              checked={!!completed}
            />
          </div>
          <div className="single-project-robots">
            {robots.length === 0 ? (
              <p>There's no one on this! Fix it!</p>
            ) : (
              robots.map((robot) => (
                <div className="projects-assigned-to" key={robot.id}>
                  <h1>{robot.name}</h1>
                  <button
                    type="button"
                    onClick={() => this.unassignButton(robot.id)}
                  >
                    Unassign
                  </button>
                </div>
              ))
            )}
            <Link
              to={{
                pathname: `/projects/update/${this.props.project.id}`,
                state: { project: this.props.project },
              }}
            >
              <button type="button">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    project: state.singleProject,
  };
};
const mapDispatch = (dispatch, { history }) => {
  return {
    setProject: (id) => dispatch(fetchSingleProject(id)),
    updateProject: (project) => dispatch(updateProject(project, history)),
    unassign: (project) => dispatch(unassignProject(project, history)),
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
