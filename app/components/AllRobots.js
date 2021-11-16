import React from "react";
import { connect } from "react-redux";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

const robots = [
  {
    id: 1,
    name: "Rodney Copperbottom",
    fuelType: "electric",
    fuelLevel: 100,
    imageUrl:
      "https://images.hobbydatabase.com/processed_uploads/subject_photo/subject_photo/image/40953/1530553596-21011-5791/Rodney_Copperbottom_large.jpg",
    createdAt: "2021-11-16T16:54:06.897Z",
    updatedAt: "2021-11-16T16:54:06.897Z",
  },
  {
    id: 2,
    name: "Piper Pinwheeler",
    fuelType: "electric",
    fuelLevel: 100,
    imageUrl:
      "https://www.giantbomb.com/a/uploads/square_small/46/462814/3183153-8077979037-latest",
    createdAt: "2021-11-16T16:54:06.909Z",
    updatedAt: "2021-11-16T16:54:06.909Z",
  },
  {
    id: 3,
    name: "Bigweld",
    fuelType: "diesel",
    fuelLevel: 100,
    imageUrl: "https://pbs.twimg.com/media/ESXEfBtX0AA46c0.jpg",
    createdAt: "2021-11-16T16:54:06.913Z",
    updatedAt: "2021-11-16T16:54:06.913Z",
  },
];

export class AllRobots extends React.Component {
  render() {
    return (
      <div className="allBots">
        {robots.map((robot) => (
          <div className="oneBot">
            <h1>{robot.name}</h1>
            <p>number of projects</p>
            <p>{robot.fuelType}</p>
            <p>{robot.fuelLevel}</p>
            <img src={robot.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

const mapState = () => {
  return {};
};

const mapDispatch = () => {
  return {};
};

export default connect(mapState, mapDispatch)(AllRobots);
