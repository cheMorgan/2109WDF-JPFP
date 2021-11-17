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
    default:
      return state;
  }
}
