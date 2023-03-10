import React from 'react';
import './Project.css'
import imgHappyCoding from "../../img/happyCoding.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import imageBrowser from "../../img/imageBrowser.jpg";
const Project = () => {
  return (
    <section id="projects">
      <div className="project">
        <h2>My projects_</h2>
        <div className="project1">
          {/* <div class="content"> */}
            <a className="projectImg" href="https://santiagogozu.github.io/Happy-Coding-React/">
              <img src={imgHappyCoding} alt="" />
            </a>
          {/* </div> */}
          <div className="project-details">
            <ul className="my-item">
              <h3 className="projectName">Happy-Coding</h3>
              <li>➣ E-Comerce responsive website focused on UI using React, Javascript and CSS</li>
              <li>➣ All products are saved by means of JSON elements</li>
              <li>➣ Responsive website</li>
            </ul>
            <ul className="tags">
              <li>#React</li>
              <li>#HTML5</li>
              <li>#CSS</li>
              <li>#JavaScript</li>
            </ul>
            <div className="project-link">
              <a href="https://santiagogozu.github.io/Happy-Coding-React/"><FontAwesomeIcon icon={faGlobe} /><i className="fs fa-globe"></i> Live Site</a>
              <a href="https://github.com/santiagogozu/Happy-Coding-React/"><FontAwesomeIcon icon={faGithub} /><i className="fs fa-globe"></i> Repository</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project1">
          {/* <div class="content"> */}
            <a className="projectImg" href="https://santiagogozu.github.io/Image-Browser/">
              <img src={imageBrowser} alt="" />
            </a>
          {/* </div> */}
          <div className="project-details">
            <ul className="my-item">
              <h3 className="projectName">IMAGE BROWSER</h3>
              <li>➣ Website where you can find a variety of photographs for personal use</li>
              <li>➣ All photographs are consumed through public API which is constantly changing and updating</li>
              <li>➣ Responsive website</li>
            </ul>
            <ul className="tags">
              <li>#React</li>
              <li>#HTML5</li>
              <li>#CSS</li>
              <li>#JavaScript</li>
            </ul>
            <div className="project-link">
              <a href="https://santiagogozu.github.io/Image-Browser/"><FontAwesomeIcon icon={faGlobe} /><i className="fs fa-globe"></i> Live Site</a>
              <a href="https://github.com/santiagogozu/Image-Browser"><FontAwesomeIcon icon={faGithub} /><i className="fs fa-globe"></i> Repository</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;