import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>DAVID LIU</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
        
      </ul>

      <div className='footer_socials'>
        <a href='https://linkedin.com/in/davidliu0115' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/megagnarly' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href='https://facebook.com/davidliu0115' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>

      </div>

      <div className='footer_copyright'>
        <small>&copy; David Liu. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer