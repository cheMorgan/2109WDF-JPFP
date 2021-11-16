import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.setRobots();
  }
  render() {
    const { robots } = this.props;
    return (
      <div className="thing-container">
        {robots.map((robot) => (
          <div className="oneBot">
            <h1>{robot.name}</h1>
            <p>number of projects</p>
            <p>{robot.fuelType}</p>
            <p>{robot.fuelLevel}</p>
            <img src={robot.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    robots: state.robots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
