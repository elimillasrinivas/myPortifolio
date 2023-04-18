import React from 'react'
import '../Header/header.css'
import logo from '../../assets/developer.png'
import resume from '../../assets/resume.pdf'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
        <div className="logo">
        <img src={logo} alt="" /> 
        <p><span>SRI</span>nivas</p>
        </div>

        <div className="links">
            <ul>
<<<<<<< HEAD
              
=======
>>>>>>> 5181d8ce99e92ea440ad2861031023e7ccadb866
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
        <div className="resume">
        <a href={resume} download>Resume</a>
        </div>
    </div>
  )
}

export default Header
