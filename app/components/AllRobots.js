import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";
import SingleRobot from "./SingleRobot";
import { Link } from "react-router-dom";
import { fetchSingleRobot } from "../redux/singleRobot";
import Robot from "./Robot";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.setRobots();
  }
  handleClick(id) {
    this.props.setRobot(id);
  }
  render() {
    const { robots, robot } = this.props;
    return (
      <div>
        <h1 className="title">All Robots</h1>
        <div className="thing-container">
          {robots.map((oneRobot) => (
            <Robot
              key={oneRobot.id}
              robot={oneRobot}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    robots: state.robots,
    robot: state.singleRobot,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setRobots: () => dispatch(fetchRobots()),
    setRobot: (id) => dispatch(fetchSingleRobot(id)),
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
