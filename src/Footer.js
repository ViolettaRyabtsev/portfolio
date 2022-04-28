import React from "react";
import { useState } from "react-dom";
import "./App.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";

function Footer() {
  const style = { color: "white", fontSize: "1.5em" };
  return (
    <div className="footer">
      <h5> Violetta Ryabtsev</h5>
      <div className="footer-links">
        <AiFillLinkedin style={style} opacity="0.6" />
        <AiFillGithub style={style} opacity="0.6" />
        <AiTwotoneMail style={style} opacity="0.6" />
      </div>
    </div>
  );
}

export default Footer;
