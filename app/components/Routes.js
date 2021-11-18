import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AllRobots from "./AllRobots";
import AllProjects from "./AllProjects";
import Nav from "./Nav.jsx";
import Main from "./Main";
import SingleRobot from "./SingleRobot";
import SingleProject from "./SingleProject";
import Form from "./Form";
import NewRobotForm from "./NewRobotForm";

const Routes = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/robots" component={AllRobots} />
          <Route exact path="/robots/add" component={NewRobotForm} />
          <Route path="/robots/:id" component={SingleRobot} />
          <Route exact path="/projects" component={AllProjects} />
          <Route path="/projects/add" component={Form} />
          <Route path="/projects/:id" component={SingleProject} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
