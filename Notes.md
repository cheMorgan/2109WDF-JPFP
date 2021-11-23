# Database Associations

Many-to-Many association between Robots and Projects
Through table: "RobotProject"

== Magic Methods on Robot:
\_isAttribute,
getProjects,
countProjects,
hasProject,
hasProjects,
setProjects,
addProject,
addProjects,
removeProject,
removeProjects,
createProject
== Magic Methods on Project
\_isAttribute,
getRobots,
countRobots,
hasRobot,
hasRobots,
setRobots,
addRobot,
addRobots,
removeRobot,
removeRobots,
createRobot

## Robot Object

{
"id": 1,
"name": "Rodney Copperbottom",
"fuelType": "electric",
"fuelLevel": 100,
"imageUrl": "",
"createdAt": "2021-11-16T16:54:06.897Z",
"updatedAt": "2021-11-16T16:54:06.897Z"
},

## Project Object

{
"id": 1,
"title": "wonderbot",
"deadline": "2021-11-21T05:00:00.000Z",
"priority": 10,
"completed": false,
"description": "It has four kitchen spoons atop its head, which it uses like the blades on a helicopter to fly. Its head is protected by a large cup, with its two eyes peeking out from underneath. It has a small, fragile neck, with a tiny body protected by a small bowl. It also possess three long, wiry limbs which can be used as hands or to create pictures for visual communication.",
"createdAt": "2021-11-16T16:54:06.916Z",
"updatedAt": "2021-11-16T16:54:06.916Z"
},

11/17/21 3:06pm. After chipping away at the same thing for 3 hours, I have experienced the bane of every programmer's existence: I was calling the wrong function.
3:17 pm how can I go from staring at something for 3 hours to finally saying "You know what? It does this. I don't want it to do this. So instead I'll do this" and it actually freaking works gaosjiajdioajsdk

- Aka moved setSingleRobot to the single robot component so that the allrobots ONLY takes care of all robots. Makes sense on paper, doesn't it?
  What have I learned from this? Unless you're mapping, probably don't need to do nested renders. Probably

// this.props.updateRobot({ ...this.state, id: +this.props.match.params.id }); // without the braces, won't work; need to explicitly send an obj

Making a request to api/robots/:id does things
making a request to api/robots/:id/project/:id

put robots/:id/projects only projects for robot 1

PROJECT FORM but the version in which I acutally do an assign selector.

import React from "react";
import { connect } from "react-redux";
import { createProject, updateProject } from "../redux/projects";
import { fetchRobots } from "../redux/robots";
import { assignProject, fetchSingleProject } from "../redux/singleProject";

class ProjectForm extends React.Component {
constructor(props) {
super(props);
this.state = {
project: {
title: "",
deadline: "",
priority: 1,
description: "",
completed: false,
},
robotToAssign: "",
};
this.handleSubmit = this.handleSubmit.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleAssign = this.handleAssign.bind(this);
}
componentDidMount() {
if (this.props.match.params.id) {
this.props.setProject(+this.props.match.params.id);
this.setState({
...this.props.location.state.project,
});
}
this.props.setRobots();
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
completed: !this.state.project.completed,
});
} else {
this.setState({
[evt.target.name]: evt.target.value,
});
}
}
handleAssign(evt) {
this.setState({
...this.state,
robotToAssign: evt.target.value,
});
}
handleSubmit(evt) {
evt.preventDefault();
if (this.props.match.params.id) {
this.props.updateProject({
...this.state.project,
id: +this.props.match.params.id,
});
} else {
this.props.createProject({ ...this.state.project }); // dispatch for creating project
}
this.props.assign(this.state.project, this.state);
}
render() {
console.log(this.state);
const { title, deadline, priority, description, completed } =
this.state.project;
const robots = this.props.location.state.project.robots || [];

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
          <select name="all-robots" onChange={this.handleAssign}>
            {this.props.allRobots.map((robot) =>
              robots.filter((obj) => obj.name === robot.name).length >
              0 ? null : (
                <option key={robot.id} value={robot.name}>
                  {robot.name}
                </option>
              )
            )}
          </select>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>Robots assigned to {title}</h2>
          <div className="single-project-robots">
            {robots.length === 0 ? (
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
error: state.error,
allRobots: state.robots,
};
};

const mapDispatch = (dispatch, { history }) => {
//may want to leave history to the individual components
return {
createProject: (project) => dispatch(createProject(project, history)),
setProject: (id) => dispatch(fetchSingleProject(id)),
updateProject: (project) => dispatch(updateProject(project, history)),
assign: (project, robot) => dispatch(assignProject(project, robot)),
setRobots: () => dispatch(fetchRobots()),
};
};

export default connect(mapState, mapDispatch)(ProjectForm);

// PUT /api/projects/:projectId/assign/:robotId
router.put("/:projectId/assign/:robotId", async (req, res, next) => {
try {
const project = await Project.findByPk(req.params.projectId, {
include: Robot,
});
await project.addRobot(req.params.robotId);
res.send(project);
} catch (error) {
next(error);
}
});
case ASSIGN_PROJECT:
return { ...state, robots: [...state.robots, action.robot] };

export const assignProject = (project, robot) => {
return async (dispatch) => {
try {
const { data: assigned } = await Axios.put(
`/api/project/${project.id}/assign/${robot.id}`
);
dispatch(\_assignProject(assigned));
} catch (error) {
console.error(error);
}
};
};
const \_assignProject = (robot) => {
return {
type: ASSIGN_PROJECT,
robot,
};
};

const ASSIGN_PROJECT = "ASSIGN_PROJECT";
