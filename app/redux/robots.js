/* eslint-disable quotes */
import Axios from "axios";

const SET_ROBOTS = "SET_ROBOTS";
const CREATE_ROBOT = "CREATE_ROBOT";

export const setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots,
  };
};

const _createRobot = (robot) => {
  return {
    type: CREATE_ROBOT,
    robot,
  };
};

export const fetchRobots = () => {
  return async (dispatch) => {
    try {
      const { data: robots } = await Axios.get("/api/robots");
      dispatch(setRobots(robots));
    } catch (err) {
      console.error(err);
    }
  };
};
export const createRobot = (robot, history) => {
  return async (dispatch) => {
    try {
      const { data: created } = await Axios.post("/api/robots", robot);
      dispatch(_createRobot(created));
      history.push("/robots");
    } catch (err) {
      console.error(err);
    }
  };
};

const initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return action.robots;
    case CREATE_ROBOT:
      return [...state, action.robot];
    default:
      return state;
  }
}
