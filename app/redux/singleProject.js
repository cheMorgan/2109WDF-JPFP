import Axios from "axios";

const SET_PROJECT = "SET_PROJECT";

export const setProject = (project) => {
  return {
    type: SET_PROJECT,
    project,
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

const initialState = {};

export default function singleProjectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      return action.project;
    default:
      return state;
  }
}
