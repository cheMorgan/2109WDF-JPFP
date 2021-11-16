import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="links" to="/">
        Home
      </Link>
      <Link className="links" to="/robots">
        Robots
      </Link>
      <Link className="links" to="/projects">
        Projects
      </Link>
    </nav>
  );
};

export default Nav;
