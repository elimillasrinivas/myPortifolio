import React from "react";
import "../Contact/contact.css";
import phone from "../../assets/whatsapp.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import location from "../../assets/location.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact me</h1>
      <div className="icons">
        <p>
          <img src={phone} alt="phone" />
          7989288189
        </p>
        <p>
          <img src={location} alt="location" />
          Hyderabad
        </p>
        <p>
          <img src={email} alt="email" />
          elimillasrinivas@gmail.com
        </p>
        <p>
          <img src={linkedin} alt="linkedin" />
          <a
            href="https://www.linkedin.com/in/elimillasrinivas/"
            target="_blank"
          >
            https://www.linkedin.com/in/elimillasrinivas/
          </a>
        </p>
        <p>
          <img src={github} alt="github" />
          <a href="https://github.com/elimillasrinivas"  target="_blank">
            https://github.com/elimillasrinivas
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
