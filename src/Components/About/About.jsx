import React from "react";
import "./About.css";
import imgAbout from "../../img/wallpaperCode.jpg";
// import downloadResume from '../../../src/img/img_btn_icon.png'
// import resume from '../../img/Resume of MD. Rafiul Alam.pdf'
const About = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="imgAbout">
          <img src={imgAbout} alt="" />
        </div>
        <div className="containerAbout">
          <h2 id="hello_header">Hi_</h2>
          <div className="section__description">
            <p className="section__description">
              I am Santiago Gonzalez, a junior developer able to build a Web
              presence from the ground up - from concept, navigation and layout.
              Skilled in Front End technologies such as Html5 , Css3 ,
              JavaScript , React ,Angular, Sass, and Back End
              technologies such as Node.JS, Express JS and MongoDb. Learning a
              variety of scripting languages and multimedia tools is one of my
              strengths. I am also a hard worker and team player. I am looking
              for a challenging opportunity that will enable me to use my skills
              and abilities to achieve a challenging goal.
            </p>
          </div>
        </div>
        {/* <a href={resume} target="_blank" className="section_btn site-btn" data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"><img src={downloadResume} alt="" />Download Resume</a> */}
      </div>
    </section>
  );
};

export default About;
