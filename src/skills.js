import React from "react";
import "./App.css";
import { FaAws } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
function Skills() {
  const style = { color: "white", fontSize: "3.0em", opacity: "0.7" };

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-icon">
        <div className="icon">
          <FaAws style={style} />
          <h3>Cloud Engineering</h3>
        </div>
        <div className="icon">
          <SiJavascript style={style} />
          <h3>Java Script</h3>
        </div>
        <div className="icon">
          <FaDocker style={style} />
          <h3>DevOps</h3>
        </div>
        <div className="icon">
          <GoDatabase style={style} />
          <h3>Databases</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
