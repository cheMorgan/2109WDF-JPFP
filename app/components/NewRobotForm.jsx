import React from "react";
import { connect } from "react-redux";
import { createRobot } from "../redux/robots";

class NewRobotForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fuelType: "electric",
      fuelLevel: 100,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createNewRobot({ ...this.state }); // without the braces, won't work; need to explicitly send an obj
  }
  render() {
    const { name, fuelLevel } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="form">
        <form id="new-robot-form" onSubmit={handleSubmit}>
          <label htmlFor="robotName">Name: </label>
          <input name="name" value={name} onChange={handleChange} />
          <label htmlFor="fuelType">Choose a fuel type </label>
          <select name="fuelType" id="fuelTypeSelector" onChange={handleChange}>
            <option value="electric">Electric</option>
            <option value="diesel">Diesel</option>
            <option value="gas">Gas</option>
          </select>
          <label htmlFor="fuelLevel">Fuel Level </label>
          <input name="fuelLevel" value={fuelLevel} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    createNewRobot: (robot) => dispatch(createRobot(robot, history)),
  };
};

export default connect(null, mapDispatch)(NewRobotForm);
