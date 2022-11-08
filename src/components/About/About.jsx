import React from 'react'
import './About.css'
import ME from '../../assets/IMG-1370.jpg'

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

        <div className='about_content'>
          <p>Hello, i am a yeeeet etkjhadlajkd k jwahlaw haw lawd ihawdl uia wdu
            akwj bawf lf wailu bfaw iuba lfwafwbilsf ijsaf bliubwaffwa wfa
            awf kjwflbwfiuwaufb law liuf bwali abfla fw bawfuibafwbafb
          </p>
        </div>

      </div>

    </section>
  )
}

export default About