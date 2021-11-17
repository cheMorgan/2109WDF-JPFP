import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AllRobots from "./AllRobots";
import AllProjects from "./AllProjects";
import Nav from "./Nav.jsx";
import Main from "./Main";
import SingleRobot from "./SingleRobot";
import SingleProject from "./SingleProject";

const Routes = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/robots" component={AllRobots} />
          <Route path="/robots/:id" component={SingleRobot} />
          <Route exact path="/projects" component={AllProjects} />
          <Route path="/projects/:id" component={SingleProject} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
