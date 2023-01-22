import React from 'react';
import './About.css'
// import downloadResume from '../../../src/img/img_btn_icon.png'
// import resume from '../../img/Resume of MD. Rafiul Alam.pdf'
const About = () => {
  return (
    <section id="about">
      <div >
        <h2 id="hello_header">Hi_</h2>
        <div className="section__description">
          <p className="section__description">
            I am Santiago, a Full Stack Web Developer with knowledge in HTML5, CSS, Javascript, React, Redux, NodeJs, SQL, Sequelize.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, similique atque non officia, magni perspiciatis explicabo minima reprehenderit id aperiam error in eveniet est consequuntur vitae voluptatem qui nesciunt autem.
          </p>
        </div>
        {/* <a href={resume} target="_blank" className="section_btn site-btn" data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"><img src={downloadResume} alt="" />Download Resume</a> */}
      </div>
    </section>
  );
};

export default About;