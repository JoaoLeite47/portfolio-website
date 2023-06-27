import "./Menu.css";

import React from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Trabalhos</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Experiência</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contatos</a>
        </li>
      </ul>
    </div>
  );
}
