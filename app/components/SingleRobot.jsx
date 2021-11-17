// when navigating to /robots/:id
import React from "react";
import { connect } from "react-redux";
import { fetchSingleRobot } from "../redux/singleRobot";

class SingleRobot extends React.Component {
  componentDidMount() {
    this.props.setRobot(+this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    const { robot } = this.props;
    return (
      <div id="single-robot">
        <img src={robot.imageUrl} />
        <h1>{robot.name}</h1>
        <p>{robot.fuelType}</p>
        <p>{robot.fuelLevel}</p>
      </div>
    );
  }
}

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
