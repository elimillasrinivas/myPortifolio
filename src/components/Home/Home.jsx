import React from "react";
import "../Home/home.css";
import wave from "../../assets/wave.gif";
import connection from "../../assets/connection.gif";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
        <h1>
          Welcome ! <img src={wave} alt="wave" />
        </h1>
        <h1>I am Srinivas, a Web Developer</h1>
        <p>
          Highly motivated software developer with 1 year of experience in
          developing scalable and maintainable web applications. Proficient in
          HTML, CSS, JavaScript, ReactJs, NodeJs, MongoDB. Skilled in analyzing
          and solving complex problems, collaborating with cross-functional
          teams, and delivering high-quality software products.
        </p>
      </div>
      <div className="right">
        <img src={connection} alt="" />
      </div>
    </div>
  );
};

export default Home;
