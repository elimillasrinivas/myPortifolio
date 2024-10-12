import React, { useEffect, useState } from "react";
import "../Header/header.css";
import logo from "../../assets/developer.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
          <p>
            <span>SRI</span>nivas
          </p>
        </div>
      </Link>

      <div className="menu">
        {toggle ? (
          <button onClick={() => setToggle(!toggle)}>&times;</button>
        ) : (
          <button onClick={() => setToggle(!toggle)}> &#9776;</button>
        )}
        <div className={`links ${toggle ? "links-block" : "links-none"}`}>
          <ul>
            <Link to="/" onClick={() => setToggle(!toggle)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setToggle(!toggle)}>
              About
            </Link>
            <Link to="/projects" onClick={() => setToggle(!toggle)}>
              Projects
            </Link>
            <Link to="/contact" onClick={() => setToggle(!toggle)}>
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
