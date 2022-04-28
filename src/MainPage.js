import React from "react";
import { useState } from "react-dom";
import "./App.css";
import PhotoHeader from "./PhotoHeader";
import Contact from "./Contact";
import Skills from "./skills";
import Projects from ".//projects/Projects";
function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="photo-contacts">
          <PhotoHeader />
          <Contact />
        </div>
        <div className="text">
          <h2>About Me</h2>
          <p>
            Hello, my name is Violetta Ryabtsev. I’m a Full Stack Web Developer.{" "}
            <br /> I love programming, history, science, writing novels, and
            reading books. I like to combine my skills as an engineer with my
            background as a journalist and writer, in order to develop web
            applications. <br /> In my job, I'm looking for an organization
            where in addition to possessing an innate creative capacity as an
            engineer, I can also approach each project with the benefit of a
            distinctive set of experiences that comes from being a member of
            each of these groups.
          </p>
        </div>
      </div>
      <Skills />
      <Projects />
    </>
  );
}

export default MainPage;
