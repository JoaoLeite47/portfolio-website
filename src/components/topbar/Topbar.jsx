import React from "react";
import "./Topbar.css";
import { MdHomeFilled, MdEmail } from "react-icons/md";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <MdHomeFilled className="icon" />
            <span>+55 71 98614-9734</span>
          </div>
          <div className="itemContainer">
            <MdEmail className="icon" />
            <span>HopeeSuporte@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
