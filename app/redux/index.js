import { combineReducers } from "redux";
import errorReducer from "./error";
import projectsReducer from "./projects";
import robotsReducer from "./robots";
import singleProjectReducer from "./singleProject";
import singleRobotReducer from "./singleRobot";

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
  singleProject: singleProjectReducer,
  singleRobot: singleRobotReducer,
  error: errorReducer,
});

export default appReducer;
