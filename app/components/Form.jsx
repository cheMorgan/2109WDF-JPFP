import React from "react";
import { connect } from "react-redux";
import { createProject } from "../redux/projects";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      deadline: "",
      priority: 0,
      description: "",
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
    this.props.sendToDb({ ...this.state }); // without the braces, won't work; need to explicitly send an obj
  }
  render() {
    const { title } = this.state;
    const { handleChange, handleSubmit } = this;
    console.log(this.state);
    return (
      <div className="form">
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="project-title">Project title:</label>
          <input name="title" value={title} onChange={handleChange} />
          <label hmtlFor="deadline">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={this.state.deadline}
            min="2021-11-19"
            onChange={handleChange}
          />
          <label htmlFor="priority">Priority (1-10):</label>
          <input
            type="number"
            name="priority"
            min="1"
            max="10"
            onChange={handleChange}
          />
          <label htmlFor="description">Project Description: </label>
          <textarea
            name="description"
            rows="5"
            cols="50"
            maxLength="255"
            onChange={handleChange}
          />
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
