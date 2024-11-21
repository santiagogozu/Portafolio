import React from "react";
import "./About.css";
import imgAbout from "../../img/perfil.jpg";
// import downloadResume from '../../../src/img/img_btn_icon.png'
// import resume from '../../img/Resume of MD. Rafiul Alam.pdf'
const About = () => {
  return (
    <section id="section_about">
      <h2>About me_</h2>
      <div className="about">
        <div className="imgAbout">
          <img src={imgAbout} alt="" />
        </div>
        <div className="section__description">
          <div className="section__description_text">
            Fullstack Web Developer with 3 years of experience in creating
            complete digital solutions, from conceptualization to final
            implementation. With strong knowledge in programming languages and
            multimedia tools, I specialize in building intuitive and functional
            web experiences.
          </div>
          <br />
          <div className="section__description_list">
            <div>
              <p>Front End technologies:</p>
              <ul>
                <li>Html5.</li>
                <li>Css3.</li>
                <li>JavaScript.</li>
                <li>React.</li>
                <li>Angular.</li>
                <li>Sass.</li>
              </ul>
            </div>
            <hr />
            <div>
              <p> Back End technologies:</p>
              <ul>
                <li>Node.JS.</li>
                <li>Express.</li>
                <li>JavaScript.</li>
                <li>MongoDb.</li>
                <li>MySQL.</li>
              </ul>
            </div>
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
