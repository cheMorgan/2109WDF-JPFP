import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link id="home" className="links-in-nav" to="/">
        Home
      </Link>
      <Link id="robots" className="links-in-nav" to="/robots">
        Robots
      </Link>
      <Link id="projects" className="links-in-nav" to="/projects">
        Projects
      </Link>
    </nav>
  );
};

export default Nav;
