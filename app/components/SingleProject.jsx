// // when navigating to /projects/:id
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateProject,
  fetchSingleProject,
  unassignProject,
} from "../redux/singleProject";

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
            <p className={this.props.project.priority > 8 ? "urgent" : ""}>
              Priority: {priority}
            </p>
            <p id="description">{description}</p>
            <p>Completion Status: {completed ? "Complete" : "In progress"}</p>
            <label htmlFor="completed">Mark as complete </label>
            <input
              type="checkbox"
              name="completed"
              onChange={this.handleChange}
              checked={!!completed}
            />
            <Link
              to={{
                pathname: `/projects/update/${this.props.project.id}`,
                state: { project: this.props.project },
              }}
            >
              <button type="button" id="edit-button">
                Edit
              </button>
            </Link>
          </div>
          <div className="single-project-robots">
            {robots.length === 0 ? (
              <p>There's no one working on this!</p>
            ) : (
              robots.map((robot) => (
                <div className="projects-assigned-to" key={robot.id}>
                  <div>
                    <h1>{robot.name}</h1>
                    <img src={robot.imageUrl} />
                    <p>{robot.fuelType}</p>
                    <p>{robot.fuelLevel}</p>
                    <button
                      type="button"
                      onClick={() => this.unassignButton(robot.id)}
                    >
                      Unassign
                    </button>
                  </div>
                </div>
              ))
            )}
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
