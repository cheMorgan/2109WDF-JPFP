import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AllRobots } from "./AllRobots";
import { AllProjects } from "./AllProjects";
import Nav from "./Nav.jsx";
import Main from "./Main";

const Routes = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/robots" component={AllRobots} />
          <Route path="/projects" component={AllProjects} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
