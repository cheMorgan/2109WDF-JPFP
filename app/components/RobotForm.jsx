import React from "react";
import { connect } from "react-redux";
import { createRobot, updateRobot } from "../redux/robots";
import { setRobot } from "../redux/singleRobot";

class RobotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fuelType: "electric",
      fuelLevel: 100,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.setRobot(+this.props.match.params.id);
      this.setState({
        ...this.props.location.state.robot,
      });
    }
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
    if (this.props.match.params.id) {
      this.props.updateRobot({
        ...this.state,
        id: +this.props.match.params.id,
      });
    } else {
      this.props.createNewRobot({ ...this.state });
    }
  }
  render() {
    const { name, fuelLevel } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="form">
        <form id="new-robot-form" onSubmit={handleSubmit}>
          <label htmlFor="robotName">Name: </label>
          <input name="name" value={name} onChange={handleChange} />
          <label htmlFor="fuelLevel">Fuel Level </label>
          <input
            name="fuelLevel"
            value={fuelLevel}
            onChange={handleChange}
            type="number"
            min="0"
            max="100"
          />
          <label htmlFor="fuelType">Choose a fuel type </label>
          <select name="fuelType" id="fuelTypeSelector" onChange={handleChange}>
            <option value="electric">Electric</option>
            <option value="diesel">Diesel</option>
            <option value="gas">Gas</option>
          </select>
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
    createNewRobot: (robot) => dispatch(createRobot(robot, history)),
  };
};

export default connect(mapState, mapDispatch)(RobotForm);
