import React from 'react'
import './About.css'
import ME from '../../assets/IMG-1370.jpg'
import {AiOutlineDesktop} from 'react-icons/ai'
import {BiTennisBall} from 'react-icons/bi'
import {BsHeadphones} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About'/>
          </div>
        </div>
        <div>
          <div className='about_content'>
            <p>Hello! I am a passionate Fullstack Developer and Software Enginnering Graduate.
              I graduated from the Univeristy of Melbourne in 2022 with a Bachelor of Science, majoring in 
              Computer and Software Systems. 
              <br/><br/>
              During my studies, I not only completed an internship for 3 months at World Vision Australia, but also competed in 
              multiple competitions. Creating multiple pieces of work and honing my skills as a Computer Scientist. I am a fast learner
              who is I am very motivated to develop and master my skills in the industry. 
            </p>
            
          </div>
          <div className='about_icons'>
            <AiOutlineDesktop className='about_icon'/>
            <BiTennisBall className='about_icon'/>
            <BsHeadphones className='about_icon'/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About