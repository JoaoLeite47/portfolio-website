import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/foto1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I'm</h2>
          <h1>
            João <span className="name">Leite 🐱‍👤</span>
          </h1>
          <h3>
            Developer <span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <IoIosArrowDown className="img-down" size="4em" />
        </a>
      </div>
    </div>
  );
}
