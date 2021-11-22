import React from "react";
import { connect } from "react-redux";
import { updateRobot } from "../redux/robots";
import { setRobot } from "../redux/singleRobot";

class RobotUpdateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fuelLevel: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.setRobot(+this.props.match.params.id);
  }
  componentDidUpdate(props) {
    if (props.robot.id !== this.props.robot.id) {
      this.setState({
        ...this.props.robot,
      });
    }
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateRobot({ ...this.state, id: +this.props.match.params.id }); // without the braces, won't work; need to explicitly send an obj
  }
  render() {
    const { name, fuelLevel } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="form">
        <form id="robot-update-form" onSubmit={handleSubmit}>
          <label htmlFor="robotName">Name: </label>
          <input name="name" value={name} onChange={handleChange} />
          <input name="fuelLevel" value={fuelLevel} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
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
    updateRobot: (robot) => dispatch(updateRobot(robot, history)),
    setRobot: (id) => dispatch(setRobot(id)),
  };
};

export default connect(mapState, mapDispatch)(RobotUpdateForm);
