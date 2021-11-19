// when navigating to /projects/:id
import React from "react";
import { connect } from "react-redux";
import { fetchSingleProject } from "../redux/singleProject";
import { fetchSingleRobot } from "../redux/singleRobot";
import ProjectUpdateForm from "./ProjectUpdateForm";
import RobotsAssignedTo from "./RobotsAssignedTo";

class SingleProject extends React.Component {
  componentDidMount() {
    this.props.setProject(+this.props.match.params.id);
  }
  render() {
    const { title, deadline, priority, description, completed } =
      this.props.project;
    const robots = this.props.project.robots || [];

    return (
      <div>
        <div className="single-project">
          <h1>{title}</h1>
          <p>{deadline}</p>
          <p>{priority}</p>
          <p>{description}</p>
          <p>Completion Status: {completed ? "Complete" : "In progress"}</p>
        </div>
        <div className="single-project-robots">
          {robots.length === 0 ? (
            <p>There's no one on this! Fix it!</p>
          ) : (
            robots.map((robot) => (
              <RobotsAssignedTo
                robot={robot}
                key={robot.id}
                project={this.props.project}
                history={this.props.history}
              />
            ))
          )}
        </div>
        <ProjectUpdateForm
          ownProps={this.props}
          projectId={this.props.match.params.id}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    project: state.singleProject,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setProject: (id) => dispatch(fetchSingleProject(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
