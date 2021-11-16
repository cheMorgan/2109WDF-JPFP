import Axios from "axios";

const SET_PROJECTS = "SET_PROJECTS";
export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
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
const initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
