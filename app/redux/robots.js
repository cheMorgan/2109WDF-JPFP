/* eslint-disable quotes */
import Axios from "axios";
import { setRobot } from "./singleRobot";

const SET_ROBOTS = "SET_ROBOTS";
const CREATE_ROBOT = "CREATE_ROBOT";
const DELETE_ROBOT = "DELETE_ROBOT";
const UPDATE_ROBOT = "UPDATE_ROBOT";

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

const _deleteRobot = (id) => {
  return {
    type: DELETE_ROBOT,
    id,
  };
};

const _updateRobot = (robot) => {
  return {
    type: UPDATE_ROBOT,
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

export const updateRobot = (robot, history) => {
  return async (dispatch) => {
    console.log("Inside reducer", robot.id);
    const { data: updated } = await Axios.put(`/api/robots/${robot.id}`, robot);
    dispatch(_updateRobot(updated));
    history.push(`/robots/${robot.id}`);
  };
};

export const deleteRobot = (id, history) => {
  return async (dispatch) => {
    try {
      await Axios.delete(`/api/robots/${id}`);
      dispatch(_deleteRobot(id));
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
    case DELETE_ROBOT:
      return state.filter((robot) => robot.id !== action.id);
    case UPDATE_ROBOT:
      return state.map((robot) =>
        robot.id === action.robot.id ? action.robot : robot
      );
    default:
      return state;
  }
}
