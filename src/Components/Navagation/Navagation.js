import React from 'react';
import './Navagation.css'

const Navagation = () => {
  return (
    <nav className='navBar'>
      <div className='contenedorList'>
          <ul className='listBar'>
            <li>
              <a href="#about">Resume</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navagation;