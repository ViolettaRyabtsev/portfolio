import React from "react";
import { useState } from "react";
import Projects from "./projects/Projects";

import {
  NavLink,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";

function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <div className="navbar-top">
      <ul>
        <li>
          <NavLink onClick={() => setClick(true)} to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
