import React from "react";
import "../About/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-me">
        <h1>About me</h1>
        <p>
          Hello, my name is Srinivas and I'm a software developer with over 1
          year of experience in developing web applications. I have a Bachelor's
          degree in Textile Technology from Osmania University. Throughout my
          career, I have gained expertise in several programming languages such
          as <b>JavaScript</b>, as well as in popular framework such as <b>ReactJs</b>. My
          passion for creating elegant and efficient solutions to complex
          problems has led me to contribute to several open-source projects,
          including a popular React library for data visualization. Outside of
          work, I enjoy coding and creating web pages, and I'm always looking
          for ways to incorporate my interests into my work. I'm excited to
          continue growing as a developer and to use my skills to help
          organizations solve their most challenging problems. <br /> Please feel free
          to reach out if you have any questions or would like to discuss a
          potential collaboration. <a href="https://forms.gle/PxZF1m6ranNoMbCe7" target="_blank">Click here</a>
        </p>
      </div>
      <div className="line"></div>
      <div className="skills">
        <h1>Skills</h1>
        <ul>
            <li>Logical Thinking</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>Creative Thinking</li>
            <li>NodeJs</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
