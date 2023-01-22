import React, { useRef } from 'react';
import './Contact.css';
import { Typewriter } from 'react-simple-typewriter';
import emailjs from 'emailjs-com';
// import ScrollToTop from "react-scroll-to-top";
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_31gpkyr', 'template_dsza2aq', form.current, 'user_j2TQB6zm7xW0DuZuOVxRR')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert(error.message);
      });
    e.target.reset();
  };

  return (
    <div className="background">
      {/* <ScrollToTop smooth color="#6f00ff" /> */}
      <div id="contact" className="container section">
        <div className="row">
          <div className="contacts_header">
              <Typewriter
                words={['Say Hi 👋', 'Get in touch now 🤗', "Let's have a cup of tea ☕️"]}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1000}
              />
          </div>
        </div>
        <div className="containerEmail">
            <div className='container'>
                <p >Just write me a letter here_</p>
                <form  ref={form} onSubmit={sendEmail}>
                    <input className='FormInput' type="text" placeholder="Your name" required name="name" id="validationCustom01" />
                    <span></span>
                    <span><i className="mdi mdi-close" aria-hidden="true"></i></span>
                    <input className='FormInput' type="email" placeholder="Your e-mail" required name="email" id="validationCustom02" />
                    <span ></span>
                    <span ><i className="mdi mdi-close" aria-hidden="true"></i></span>
                    <div >
                    <textarea className='FormTextArea' placeholder="Type the message here" required name="message" id="validationCustom03"></textarea>
                    <span ></span>
                    <span ><i className="mdi mdi-close" aria-hidden="true"></i></span>
                    </div>
                    <button  type="submit" value="Send">Send</button>
                </form>
                </div>
            </div>
          </div>
    </div>
  );
};

export default Contact;