// // when navigating to /projects/:id
// import React from "react";
// import { connect } from "react-redux";
// import { fetchSingleProject } from "../redux/singleProject";
// import { fetchSingleRobot } from "../redux/singleRobot";
// import ProjectForm from "./ProjectForm";
// import ProjectUpdateForm from "./ProjectUpdateForm";
// import RobotsAssignedTo from "./RobotsAssignedTo";

// const SingleProject = (props) => {
//   const { title, priority, description, completed } = props.project;
//   const date = props.project.deadline || "";

//   const robots = props.project.robots || [];
//   console.log("props inside singleProject", props);
//   return (
//     <div>
//       {props.project ? (
//         <div>
//           <div>
//             <div className="single-project">
//               <h1>{title}</h1>
//               <p>Deadline : {date.slice(0, 10)}</p>
//               <p>Priority: {priority}</p>
//               <p>{description}</p>
//               <p>Completion Status: {completed ? "Complete" : "In progress"}</p>
//             </div>
//             <div className="single-project-robots">
//               {robots.length === 0 ? (
//                 <p>There's no one on this! Fix it!</p>
//               ) : (
//                 robots.map((robot) => (
//                   <RobotsAssignedTo
//                     robot={robot}
//                     key={robot.id}
//                     project={this.props.project}
//                     history={this.props.history}
//                   />
//                 ))
//               )}
//               <button type="button">Edit</button>
//             </div>
//             {/* <ProjectUpdateForm
//           ownProps={this.props}
//           projectId={this.props.match.params.id}
//           history={this.props.history}
//         /> */}
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// // const mapState = (state) => {
// //   return {
// //     project: state.singleProject,
// //   };
// // };
// // const mapDispatch = (dispatch) => {
// //   return {
// //     setProject: (id) => dispatch(fetchSingleProject(id)),
// //   };
// // };

// export default SingleProject;

// // when navigating to /projects/:id
import React from "react";
import { connect } from "react-redux";
import { fetchSingleProject } from "../redux/singleProject";
import { fetchSingleRobot } from "../redux/singleRobot";
import ProjectForm from "./ProjectForm";
import ProjectUpdateForm from "./ProjectUpdateForm";
import RobotsAssignedTo from "./RobotsAssignedTo";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.setProject(+this.props.match.params.id);
  }
  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    const { title, priority, description, completed } = this.props.project;
    const date = this.props.project.deadline || "";

    const robots = this.props.project.robots || [];
    console.log("props inside singleProject", this.props);
    return (
      <div>
        {this.state.clicked ? (
          <ProjectForm {...this.props} />
        ) : (
          <div>
            <div className="single-project">
              <h1>{title}</h1>
              <p>Deadline : {date.slice(0, 10)}</p>
              <p>Priority: {priority}</p>
              <p>{description}</p>
              <p>Completion Status: {completed ? "Complete" : "In progress"}</p>
            </div>
            <div className="single-project-robots">
              {robots.length === 0 ? (
                <p>There's no one on this! Fix it!</p>
              ) : (
                robots.map((robot) => (
                  <RobotsAssignedTo
                    robot={robot}
                    key={robot.id}
                    project={this.props.project}
                    history={this.props.history}
                  />
                ))
              )}
              <button type="button" onClick={this.handleClick}>
                Edit
              </button>
            </div>
            {/* <ProjectUpdateForm
          ownProps={this.props}
          projectId={this.props.match.params.id}
          history={this.props.history}
        /> */}
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    project: state.singleProject,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setProject: (id) => dispatch(fetchSingleProject(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleProject);
