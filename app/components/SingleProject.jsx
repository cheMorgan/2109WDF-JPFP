// when navigating to /projects/:id
import React from "react";
import { connect } from "react-redux";
import { fetchSingleProject } from "../redux/singleProject";
import { fetchSingleRobot } from "../redux/singleRobot";

class SingleProject extends React.Component {
  componentDidMount() {
    this.props.setProject(+this.props.match.params.id);
  }
  render() {
    const { title, deadline, priority, description } = this.props.project;
    const robots = this.props.project.robots || [];
    console.log("Inside single-project", this.props.project.robots);
    return (
      <div>
        <div className="single-project">
          <h1>{title}</h1>
          <p>{deadline}</p>
          <p>{priority}</p>
          <p>{description}</p>
        </div>
        <div className="single-project-robots">
          {robots.length === 0 ? (
            <p>There's no one on this! Fix it!</p>
          ) : (
            robots.map((robot) => <p key={robot.id}>{robot.name}</p>)
          )}
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
const mapDispatch = (dispatch) => {
  return {
    setProject: (id) => dispatch(fetchSingleProject(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
