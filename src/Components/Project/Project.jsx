import React from "react";
import "./Project.css";
import imgHappyCoding from "../../img/happyCoding.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import imageBrowser from "../../img/imageBrowser.jpg";
import satmed from "../../img/satmed.png";
import contraloria from "../../img/contraloria.png";
import atv from "../../img/atv.png";
import icfes from "../../img/icfes.png";
import siscarac from "../../img/siscarac.png";

const Project = () => {
  return (
    <section id="projects">
      <div className="project">
        <h2>My projects_</h2>

        <div className="project">
          <div className="project1">
            <a className="projectImg">
              <img src={atv} alt="" />
            </a>
            <div className="project-details">
              <ul className="my-item">
                <h3 className="projectName">Antivirus para la Deserción</h3>
                <li>
                  ➣ Development of a web platform that enables the management
                  and creation of tutoring sessions and study groups for
                  students from multiple universities in Medellín.
                </li>
                <li>
                  ➣ The platform facilitates access to resources and interaction
                  among students, aiming to reduce dropout rates and increase
                  graduation rates in critical areas of study.
                </li>
              </ul>
              <ul className="tags">
                <li>#React</li>
                <li>#HTML5</li>
                <li>#Boostrap</li>
                <li>#JavaScript</li>
                <li>#Node.js</li>
                <li>#PHP.js</li>
                <li>#MySQL.js</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project1">
            <a
              className="projectImg"
              href="https://www.appui.contraloria.gov.co/"
            >
              <img src={contraloria} alt="" />
            </a>
            <div className="project-details">
              <ul className="my-item">
                <h3 className="projectName">APPUI User Manual</h3>
                <li>
                  ➣ APPUI is an information system developed by the Office of
                  the Comptroller General of the Republic of Colombia, designed
                  to promote transparency and efficiency in public management.
                </li>
                <li>
                  ➣ This system facilitates access to vast amounts of
                  information, strengthening social oversight and ensuring that
                  public resources are used appropriately.
                </li>
              </ul>
              <ul className="tags">
                <li>#React</li>
                <li>#HTML5</li>
                <li>#Boostrap</li>
                <li>#JavaScript</li>
                <li>#Node.js</li>
              </ul>
              <div className="project-link">
                <a href="https://www.appui.contraloria.gov.co/manual">
                  <FontAwesomeIcon icon={faGlobe} />
                  <i className="fs fa-globe"></i> Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project1">
            <a
              className="projectImg"
              href="https://www.medellin.gov.co/satmed/nuevo-caso"
            >
              <img src={satmed} alt="" />
            </a>
            {/* </div> */}
            <div className="project-details">
              <ul className="my-item">
                <h3 className="projectName">
                  Sistema de Alertas Tempranas de Medellín
                </h3>
                <li>
                  ➣ Developed a web platform for Medellín's Early Warning System
                  (SATMED)
                </li>
                <li>
                  ➣ Designed to facilitate the timely reporting of all types of
                  violence and prevent their escalation, as well as other human
                  rights violations.
                </li>
              </ul>
              <ul className="tags">
                <li>#Angular</li>
                <li>#HTML5</li>
                <li>#CSS</li>
                <li>#TypeScript</li>
                <li>#Node.js</li>
                <li>#MySQL.js</li>
              </ul>
              <div className="project-link">
                <a href="https://www.medellin.gov.co/satmed/nuevo-caso">
                  <FontAwesomeIcon icon={faGlobe} />
                  <i className="fs fa-globe"></i> Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project1">
            <a className="projectImg">
              <img src={icfes} alt="" />
            </a>
            <div className="project-details">
              <ul className="my-item">
                <h3 className="projectName">Observatorio ICFES</h3>
                <li>
                  ➣ Developed a prototype for the new ICFES website, enabling
                  the visualization of student statistics through different
                  filters.
                </li>
                <li>
                  ➣ WordPress website was developed, enabling users to explore
                  evaluation results through filters, thus providing a more
                  detailed and accessible understanding of the data.
                </li>
              </ul>
              <ul className="tags">
                <li>#Python</li>
                <li>#AWS</li>
                <li>#WordPress</li>
                <li>#PowerBI</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project1">
            <a className="projectImg">
              <img src={siscarac} alt="" />
            </a>
            <div className="project-details">
              <ul className="my-item">
                <h3 className="projectName">SISCARAC</h3>
                <li>
                  ➣ Developed a web platform and mobile application that enable
                  the registration and characterization of foundations
                  registered in Antioquia, in collaboration with Prodepaz.
                </li>
                <li>
                  ➣ The solution facilitates access to updated and detailed
                  information on each foundation, supporting decision-making and
                  monitoring of their activities.
                </li>
              </ul>
              <ul className="tags">
                <li>#Angular</li>
                <li>#TypeScript</li>
                <li>#Node.js</li>
                <li>#Ionic</li>
                <li>#MySQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project1">
          <a
            className="projectImg"
            href="https://santiagogozu.github.io/Happy-Coding-React/"
          >
            <img src={imgHappyCoding} alt="" />
          </a>
          <div className="project-details">
            <ul className="my-item">
              <h3 className="projectName">Happy-Coding</h3>
              <li>
                ➣ E-Comerce responsive website focused on UI using React,
                Javascript and CSS
              </li>
              <li>➣ All products are saved by means of JSON elements</li>
            </ul>
            <ul className="tags">
              <li>#React</li>
              <li>#HTML5</li>
              <li>#CSS</li>
              <li>#JavaScript</li>
            </ul>
            <div className="project-link">
              <a href="https://santiagogozu.github.io/Happy-Coding-React/">
                <FontAwesomeIcon icon={faGlobe} />
                <i className="fs fa-globe"></i> Live Site
              </a>
              <a href="https://github.com/santiagogozu/Happy-Coding-React/">
                <FontAwesomeIcon icon={faGithub} />
                <i className="fs fa-globe"></i> Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project1">
          <a
            className="projectImg"
            href="https://santiagogozu.github.io/Image-Browser/"
          >
            <img src={imageBrowser} alt="" />
          </a>
          {/* </div> */}
          <div className="project-details">
            <ul className="my-item">
              <h3 className="projectName">IMAGE BROWSER</h3>
              <li>
                ➣ Website where you can find a variety of photographs for
                personal use
              </li>
              <li>
                ➣ All photographs are consumed through public API which is
                constantly changing and updating
              </li>
            </ul>
            <ul className="tags">
              <li>#React</li>
              <li>#HTML5</li>
              <li>#CSS</li>
              <li>#JavaScript</li>
            </ul>
            <div className="project-link">
              <a href="https://santiagogozu.github.io/Image-Browser/">
                <FontAwesomeIcon icon={faGlobe} />
                <i className="fs fa-globe"></i> Live Site
              </a>
              <a href="https://github.com/santiagogozu/Image-Browser">
                <FontAwesomeIcon icon={faGithub} />
                <i className="fs fa-globe"></i> Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
