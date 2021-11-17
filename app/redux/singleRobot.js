import Axios from "axios";

const SET_ROBOT = "SET_ROBOT";
export const setRobot = (robot) => {
  return {
    type: SET_ROBOT,
    robot,
  };
};

export const fetchSingleRobot = (id) => {
  return async (dispatch) => {
    try {
      const { data: robot } = await Axios.get(`/api/robots/${id}`);
      dispatch(setRobot(robot));
    } catch (err) {
      console.error(err);
    }
  };
};
const initialState = {};
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function robotReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOT:
      return action.robot;
    default:
      return state;
  }
}
