import React from "react";
import { connect } from "react-redux";
import { deleteRobot, fetchRobots } from "../redux/robots";
import { fetchSingleRobot } from "../redux/singleRobot";
import EachBot from "./EachBot";
import { Link } from "react-router-dom";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.setRobots();
  }
  handleClick(id) {
    this.props.setRobot(id);
  }
  handleDelete(id) {
    this.props.deleteRobot(id);
  }

  render() {
    const { robots } = this.props;
    return (
      <div>
        <Link to="/robots/add">
          <button type="button" className="add-button">
            Add Robot
          </button>
        </Link>
        <h1 className="title">All Robots</h1>
        <div className="thing-container">
          {robots.map((robot) => (
            <div key={robot.id}>
              <EachBot
                robot={robot}
                handleClick={this.handleClick}
                handleDelete={this.handleDelete}
              />
            </div>
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
    deleteRobot: (id) => dispatch(deleteRobot(id)),
  };
};

export default connect(mapState, mapDispatch)(AllRobots);
