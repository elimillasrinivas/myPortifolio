import React, { useEffect, useState } from 'react'
import '../Header/header.css'
import logo from '../../assets/developer.png'
import resume from '../../assets/resume.pdf'
import {Link} from 'react-router-dom'

const Header = () => {
  const [time,setTime]=useState("00:00:00")
  const [date,setDate]=useState(Date().slice(0,15))
  
  const newTime=()=>{
    setTime(Date().slice(15,25))
  }
  setTimeout(()=>{newTime()},1000)
  return (
    <div className='container'>
        <div className="logo">
        <img src={logo} alt="" /> 
        <p><span>SRI</span>nivas</p>
        </div>

        <div className="links">
            <ul>
              
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
        <div className="date-time">
          <p>{time}</p>
          <p>{date}</p>
        </div>
        <div className="resume">
        <a href={resume} download>Resume</a>
        </div>
    </div>
  )
}

export default Header