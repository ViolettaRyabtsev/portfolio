import React from "react";
import { useState } from "react-dom";
import "./App.css";
import photo from "./photo.JPG";
function PhotoHeader() {
  return (
    <div className="main-photo">
      <img width="250px" height="250px" src={photo} alt="avatar"></img>
      <h2>Violetta Ryabtsev</h2>
      <h3>Full-Stack Software Engineer</h3>
    </div>
  );
}

export default PhotoHeader;
