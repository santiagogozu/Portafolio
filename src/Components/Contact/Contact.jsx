import React, {useRef} from "react";
import "./Contact.css";
import {Typewriter} from "react-simple-typewriter";
import emailjs from "emailjs-com";
// import ScrollToTop from "react-scroll-to-top";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zwf25k2",
        "template_c75ssrd",
        form.current,
        "TKRw6R4ZAQ92fmzbG"
      )
      .then(
        () => {
          window.alert("Correo enviado correctamente");
        },
        (error) => {
          window.alert(error.text);
        }
      );
  };

  return (
    <div className="background">
      {/* <ScrollToTop smooth color="#6f00ff" /> */}
      <div id="contact" className="container section">
        <div className="row">
          <div className="contacts_header">
            <Typewriter
              words={[
                "Say Hi 👋",
                "Get in touch now 🤗",
                "Let's have a cup of coffe ☕️",
              ]}
              loop={true}
              cursor
              cursorStyle="</>"
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </div>
        </div>
        <div className="containerEmail">
          <div className="container">
            <p>Just write me a letter here_</p>
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="FormInput"
                type="text"
                placeholder="Your name"
                required
                name="name"
                id="validationCustom01"
              />
              <span></span>
              <input
                className="FormInput"
                type="email"
                placeholder="Your e-mail"
                required
                name="email"
                id="validationCustom02"
              />
              <span></span>
              <div>
                <textarea
                  className="FormTextArea"
                  placeholder="Type the message here"
                  required
                  name="message"
                  id="validationCustom03"
                ></textarea>
                <span></span>
              </div>
              <button
                className="site-btn site-btn--form"
                type="submit"
                value="Send"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>@copy; 2023 Santiago Gonzalez. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Contact;
