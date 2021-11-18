import React from "react";
import { connect } from "react-redux";
import { createRobot } from "../redux/robots";

class NewRobotForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    const { name } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="form">
        <form id="new-robot-form" onSubmit={handleSubmit}>
          <label htmlFor="robotName">Name: </label>
          <input name="name" value={name} onChange={handleChange} />
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
