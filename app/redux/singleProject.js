import Axios from "axios";

const SET_PROJECT = "SET_PROJECT";
// const UPDATE_PROJECT = "UPDATE_PROJECT";
const UNASSIGN_PROJECT = "UNASSIGN";
import { UPDATE_PROJECT } from "./projects";

export const setProject = (project) => {
  return {
    type: SET_PROJECT,
    project,
  };
};

export const _unassignProject = (project) => {
  return {
    type: UNASSIGN_PROJECT,
    project,
  };
};

// export const _updateProject = (project) => {
//   return {
//     type: UPDATE_PROJECT,
//     project,
//   };
// };

export const fetchSingleProject = (id) => {
  return async (dispatch) => {
    try {
      const { data: singleProject } = await Axios.get(`/api/projects/${id}`);
      dispatch(setProject(singleProject));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateProject = (project, history) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await Axios.put(
        `/api/projects/${project.id}`,
        project
      );
      dispatch(_unassignProject(updated));
      history.push(`/projects/${project.id}`);
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = {};

export default function singleProjectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      return action.project;
    case UPDATE_PROJECT:
      return action.project;
    case UNASSIGN_PROJECT:
      const newArr = state.robots.filter(
        (robot) => robot.id !== action.project.robotId
      );
      action.project.robots = newArr;
      return action.project;
    default:
      return state;
  }
}
