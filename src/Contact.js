import React from "react";
import { useState } from "react-dom";
import "./App.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";

function Contacts() {
  const style = { color: "gray", fontSize: "2.0em" };
  return (
    <div className="contacts">
      <a href="https://www.linkedin.com/in/violetta-ryabtsev/">
        {" "}
        <AiFillLinkedin style={style} />
      </a>
      <a href="https://github.com/ViolettaRyabtsev">
        {" "}
        <AiFillGithub style={style} />
      </a>
      <a href="mailto: wondervioletta@gmail.com">
        {" "}
        <AiTwotoneMail style={style} />
      </a>
    </div>
  );
}

export default Contacts;
