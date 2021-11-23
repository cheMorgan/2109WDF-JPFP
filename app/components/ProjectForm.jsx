import React from "react";
import { connect } from "react-redux";
import { createProject, updateProject } from "../redux/projects";
import { fetchRobots } from "../redux/robots";
import { fetchSingleProject } from "../redux/singleProject";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      deadline: "",
      priority: 1,
      description: "",
      completed: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.setProject(+this.props.match.params.id);
      this.setState({
        ...this.props.location.state.project,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.project.id !== this.props.project.id) {
      this.setState({
        ...this.props.location.state.project,
      });
    }
  }
  handleChange(evt) {
    if (evt.target.type === "checkbox") {
      this.setState({
        ...this.state,
        completed: !this.state.completed,
      });
    } else {
      this.setState({
        [evt.target.name]: evt.target.value,
      });
    }
  }
  handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.match.params.id) {
      this.props.updateProject({
        ...this.state,
        id: +this.props.match.params.id,
      });
    } else {
      this.props.createProject({ ...this.state });
    }
  }
  render() {
    const { title, deadline, priority, description, completed } = this.state;
    const { robots } = this.props.location.state || [];

    const { handleChange, handleSubmit } = this;
    return (
      <div className="form">
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="project-title">Project title:</label>
          <input name="title" value={title} onChange={handleChange} />
          <label hmtlFor="deadline">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={deadline}
            min="2021-11-19"
            onChange={handleChange}
          />
          <label htmlFor="priority">Priority (1-10):</label>
          <input
            type="number"
            name="priority"
            value={priority}
            min="1"
            max="10"
            onChange={handleChange}
          />
          <label htmlFor="description">Project Description: </label>
          <textarea
            name="description"
            value={description}
            rows="5"
            cols="50"
            maxLength="255"
            onChange={handleChange}
          />
          {this.props.match.params.id ? (
            <input
              type="checkbox"
              name="completed"
              value={completed}
              onChange={handleChange}
              checked={completed}
            />
          ) : null}
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>Robots assigned to {title}</h2>
          <div className="single-project-robots">
            {robots === undefined || robots.length === 0 ? (
              <p>There's no one working on this!</p>
            ) : (
              robots.map((robot) => (
                <div className="projects-assigned-to" key={robot.id}>
                  <div>
                    <h1>{robot.name}</h1>
                    <img src={robot.imageUrl} />
                    <p>{robot.fuelType}</p>
                    <p>{robot.fuelLevel}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    project: state.singleProject,
    allRobots: state.robots,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    createProject: (project) => dispatch(createProject(project, history)),
    setProject: (id) => dispatch(fetchSingleProject(id)),
    updateProject: (project) => dispatch(updateProject(project, history)),
    setRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapState, mapDispatch)(ProjectForm);
