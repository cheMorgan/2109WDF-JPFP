const SET_ERROR = "SET_ERROR";
const CLEAR_ERROR = "CLEAR_ERROR";

export const _setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};

export const _clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export default function errorReducer(state = "", action) {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    case CLEAR_ERROR:
      return "";
    default:
      return state;
  }
}
