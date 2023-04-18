import React from 'react'
import '../Header/header.css'
import logo from '../../assets/developer.png'
import resume from '../../assets/resume.pdf'

const Header = () => {
  return (
    <div className='container'>
        <div className="logo">
        <img src={logo} alt="" /> 
        <p><span>SRI</span>nivas</p>
        </div>

        <div className="links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className="resume">
        <a href={resume} download>Resume</a>
        </div>
    </div>
  )
}

export default Header