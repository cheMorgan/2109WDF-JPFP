/* eslint-disable quotes */
import Axios from "axios";

const SET_PROJECT = "SET_PROJECT";
const UPDATE_PROJECT = "UPDATE_PROJECT";
const UNASSIGN_PROJECT = "UNASSIGN_PROJECT";
const ASSIGN_PROJECT = "ASSIGN_PROJECT";

export const setProject = (project) => {
  return {
    type: SET_PROJECT,
    project,
  };
};

export const _updateProject = (project) => {
  return {
    type: UPDATE_PROJECT,
    project,
  };
};

export const _unassignProject = (project, prevProject) => {
  return {
    type: UNASSIGN_PROJECT,
    project,
    prevProject,
  };
};

const _assignProject = (something) => {
  return {
    type: ASSIGN_PROJECT,
    something,
  };
};

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

export const unassignProject = (project, history) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await Axios.put(
        `/api/projects/${project.id}/unassign`,
        project
      );
      dispatch(_unassignProject(updated, project));
      history.push(`/projects/${project.id}`);
    } catch (error) {
      console.error(error);
    }
  };
};

export const assignProject = (projectId, robotId) => {
  return async (dispatch) => {};
};

export const updateProject = (project, history) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await Axios.put(
        `/api/projects/${project.id}`,
        project
      );
      dispatch(_updateProject(updated));
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
      action.project.robots = action.project.robots.filter(
        (robot) => robot.id !== action.prevProject.robotId
      );
      return action.project;
    default:
      return state;
  }
}
