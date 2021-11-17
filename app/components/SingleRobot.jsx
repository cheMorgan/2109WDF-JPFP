import React from "react";

const SingleRobot = (props) => {
  return (
    <div className="single-robot">
      <p> Hello</p>
    </div>
  );
};

export default SingleRobot;
// import { fetchSingleRobot } from "../redux/singleRobot";
// import { connect } from "react-redux";

// class SingleRobot extends React.Component {
//   componentDidMount() {
//     console.log("Mounted");
//     this.props.setRobot(this.props.match.params.id);
//   }
//   render() {
//     console.log(this.props);
//     const { robot } = this.props;
//     return (
//       <div>
//         <h1 className="title">All Robots</h1>
//         <div className="thing-container">
//           <div className="oneBot">
//             <h2>{robot.name}</h2>
//             <p>number of projects</p>
//             <p>{robot.fuelType}</p>
//             <p>{robot.fuelLevel}</p>
//             <img src={robot.imageUrl} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapState = (state) => {
//   return {
//     robot: state.SingleRobot,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     setRobot: (id) => dispatch(fetchSingleRobot(id)),
//   };
// };

// export default connect(mapState, mapDispatch)(SingleRobot);
