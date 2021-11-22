// import React from "react";
// import { connect } from "react-redux";
// import { updateProject } from "../redux/projects";

// class ProjectUpdateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       completed: false,
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   componentDidMount() {
//     // this.setState({
//     //   title: this.props
//     // })
//   }
//   handleChange(evt) {
//     if (evt.target.type === "checkbox") {
//       this.setState({
//         ...this.state,
//         completed: !this.state.complete,
//       });
//     } else {
//       this.setState({
//         [evt.target.name]: evt.target.value,
//       });
//     }
//   }
//   handleSubmit(evt) {
//     evt.preventDefault();

//     this.props.update({ ...this.state, id: this.props.projectId });
//     // this.props.updateRobot({ ...this.state, id: +this.props.match.params.id }); // without the braces, won't work; need to explicitly send an obj
//   }
//   render() {
//     const { handleChange, handleSubmit } = this;
//     const { title, completed } = this.state;

//     return (
//       <div className="form">
//         <form id="project-update-form" onSubmit={handleSubmit}>
//           <label htmlFor="projectTitle">Title: </label>
//           <input name="title" value={title} onChange={handleChange} />
//           <input
//             type="checkbox"
//             name="completed"
//             value={completed}
//             onChange={handleChange}
//             checked={completed}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
// const mapState = (state) => {
//   return {
//     project: state.singleProject,
//   };
// };

// const mapDispatch = (dispatch, { history }) => {
//   return {
//     update: (obj) => dispatch(updateProject(obj, history)),
//   };
// };

// export default connect(mapState, mapDispatch)(ProjectUpdateForm);
