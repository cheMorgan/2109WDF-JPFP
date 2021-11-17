import Axios from "axios";

const SET_ROBOTS = "SET_ROBOTS";
export const setRobots = (robots) => {
  return {
    type: SET_ROBOTS,
    robots,
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
const initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return action.robots;
    default:
      return state;
  }
}
