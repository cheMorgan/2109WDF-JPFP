/* eslint-disable quotes */
import Axios from "axios";

const SET_PROJECTS = "SET_PROJECTS";
const CREATE_PROJECT = "CREATE_PROJECT";
const DELETE_PROJECT = "DELETE_PROJECT";
const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};
const _createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project,
  };
};
const _deleteProject = (id) => {
  return {
    type: DELETE_PROJECT,
    id,
  };
};

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const { data: projects } = await Axios.get("/api/projects");
      dispatch(setProjects(projects));
    } catch (err) {
      console.error(err);
    }
  };
};

export const createProject = (project, history) => {
  return async (dispatch) => {
    try {
      console.log(project);
      const { data: created } = await Axios.post("/api/projects", project);
      dispatch(_createProject(created));
      history.push("/projects");
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
      await Axios.delete(`/api/projects/${id}`);
      dispatch(_deleteProject(id));
    } catch (err) {
      console.error(err);
    }
  };
};

const initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    case CREATE_PROJECT:
      return [...state, action.project];
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.id);
    default:
      return state;
  }
}
