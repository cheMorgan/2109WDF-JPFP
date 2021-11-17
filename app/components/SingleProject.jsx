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
    const { title, deadline, priority, description, robots } =
      this.props.project;
    console.log(this.props);
    return (
      <div className="single-project">
        <h1>{title}</h1>
        <p>{deadline}</p>
        <p>{priority}</p>
        <p>{description}</p>
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
