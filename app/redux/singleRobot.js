/* eslint-disable no-case-declarations */
import Axios from "axios";

const SET_ROBOT = "SET_ROBOT";
const UNASSIGN = "UNASSIGN";
export const setRobot = (robot) => {
  return {
    type: SET_ROBOT,
    robot,
  };
};

export const _unassign = (robot, prevBot) => {
  return {
    type: UNASSIGN,
    robot,
    prevBot,
  };
};

export const unassign = (robot, history) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await Axios.put(
        `/api/robots/${robot.id}`,
        robot
      );
      dispatch(_unassign(updated, robot));
      history.push(`/robots/${robot.id}`);
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchSingleRobot = (id) => {
  return async (dispatch) => {
    try {
      const { data: singleRobot } = await Axios.get(`/api/robots/${id}`);
      dispatch(setRobot(singleRobot));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = {};

export default function singleRobotReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOT:
      return action.robot;
    case UNASSIGN:
      action.robot.projects = action.robot.projects.filter(
        (project) => project.id !== action.prevBot.projectId
      );
      return action.robot;
    default:
      return state;
  }
}
