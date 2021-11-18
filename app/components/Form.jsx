import React from "react";
import { connect } from "react-redux";
import { createProject } from "../redux/projects";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
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
    console.log(this.state);
    console.log(this.props);
    this.props.sendToDb({ ...this.state }); // without the braces, won't work; need to explicitly send an obj
  }
  render() {
    const { title } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="form">
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="project-title">Project title:</label>
          <input name="title" value={title} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {};

const mapDispatch = (dispatch, { history }) => {
  return {
    sendToDb: (project) => dispatch(createProject(project, history)),
  };
};

export default connect(null, mapDispatch)(Form);
