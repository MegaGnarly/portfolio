import React from 'react'
import './Header.css'
import Resume from '../../assets/DavidLiuResume2024.pdf'
import Pic from '../../assets/IMG-1379.jpg'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>David Liu</h1>
        <h5 className='text-light'>Fullstack Developer/Software Enginnering Graduate</h5>

        <div className='cta'>
          <a href={Resume} download className='btn'>Download Resume</a>
          <a href='#contact' className='btn btn2'>Contact Me</a>
        </div>

        <div className='socials'>
          <a href='https://linkedin.com/in/davidliu0115' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href='https://github.com/megagnarly' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
          <a href='https://facebook.com/davidliu0115' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
        </div>

        <div className='me'>
          <img className='pic' src={Pic} alt="pic"/>
        </div>
        


      </div>
    </header>
  )
}

export default Header