import React from "react";
import "./Navagation.css";

const Navagation = () => {
  return (
    <nav className="navBar">
      <div className="contenedorList">
        <ul className="listBar">
          <li>
            <a className="navBar-btn" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="navBar-btn" href="#section_about">
              Resume
            </a>
          </li>
          <li>
            <a className="navBar-btn" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="navBar-btn" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navagation;
