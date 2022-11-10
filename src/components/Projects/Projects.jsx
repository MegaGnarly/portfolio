import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/Project1-1.png'
import IMG2 from '../../assets/Project1-2.png'
import IMG3 from '../../assets/Project2-1.png'
import IMG4 from '../../assets/Project2-2.png'
import IMG5 from '../../assets/Project2-3.png'
import IMG6 from '../../assets/Project3-1.png'
import IMG7 from '../../assets/Project3-2.png'
import IMG8 from '../../assets/Project3-3.png'
import IMG9 from '../../assets/Project4-1.png'
import Popup from 'reactjs-popup';


const Projects = () => {
  return (
    <section id='projects'> 
      <h5>My Work</h5>
      <h2>Projects</h2>

      <div className='container projects_container'>
        <article className='project_item'>
          <div className='project_image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3>Group Portfolio</h3>
          <div className='buttons'>
            <Popup
              trigger={<button className="button btn btn3">Details</button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="modal_title"><h2>Portfolios by C2D2</h2></div>
                  <div className="modal_content">
                    This project was designed and implemented for a beginner web development hackathon in 2022(Hackiethon).
                    The hackathon lasted 3 days with 2 days of coding time. Our group consisted of 4 members
                    who all took on different roles during the competition.  
                    The website can be found here: <a href='https://portfolios-by-c2d2.herokuapp.com'
                    target="_blank" rel="noopener noreferrer">portfolios-by-c2d2.herokuapp.com</a>
                    <br />
                    The website is a collection of 4 porfolios which can be selected from the homepage. Each
                    portfolio consists of each group member's personal information and images. There is also a navigation 
                    bar that leads to different sections.
                    <br/>
                    The website was created using Node.js, Express, HTML, CSS, JavaScript and deployed using Heroku.
                    <div className='project_image_details'>
                      <img src={IMG2} alt=''/>
                      Portfolio Selection
                      <img src={IMG1} alt=''/>
                      Portfolio Page
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            <a href='https://github.com' className='btn btn4' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>


        <article className='project_item'>
          <div className='project_image'>
            <img src={IMG7} alt=''/>
          </div>
          <h3>Fish Crate</h3>
          <div className='buttons'>
            <Popup
              trigger={<button className="button btn btn3">Details</button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="modal_title"><h2>Fish Crate</h2></div>
                  <div className="modal_content">
                    This application was developed for our University Software Engieering capstone unit in 2022.
                    Our group of 4 worked closely with our client who provided us with the specifications and 
                    requirements for the project. We designed, implemented and tested this website within the span of 12 weeks.
                    For this project, we implemented the agile methodology alongside constant documentation using 
                    Confluence.
                    The website can be found here: <a href='https://fishcrate.herokuapp.com/'
                    target="_blank" rel="noopener noreferrer">fishcrate.herokuapp.com</a>
                    <br />
                    This website is designed for anglars. It allows users to not only view record breaking catches from the homepage,
                    but also record personal catches within their accounts. registered users are also able to search for recommendations on fishing locations based on species,
                    edit previous catches and share specific catches with others through a URL. We also provide a sorting and filtering function
                    to help users to find specific catches alongside a yearly personal report.
                    The website was created using Node.js, Express, HTML, CSS, JavaScript, MongoDB and deployed using Heroku.
                    <div className='project_image_details'>
                      <img src={IMG6} alt=''/>
                      Homepage
                      <img src={IMG7} alt=''/>
                      User Homepage
                      <img src={IMG8} alt=''/>
                      User Fish Collection
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            <a href='https://github.com' className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>


        <article className='project_item'>
          <div className='project_image'>
            <img src={IMG4} alt=''/>
          </div>
          <h3>Diabetes@Home</h3>
          <div className='buttons'>
            <Popup
              trigger={<button className="button btn btn3">Details</button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="modal_title"><h2>Diabetes@Home</h2></div>
                  <div className="modal_content">
                    This website was developed for the Web Information Technology subject at Univeristy.
                    This was the very first website I created. It took our group of five 12 weeks to create this website,
                    following given code examples to implement individual functions.
                    The website can be found here: <a href='https://info30005-project-group-30.herokuapp.com/'
                    target="_blank" rel="noopener noreferrer">info30005-project-group-30.herokuapp.com</a>
                    <br />
                    Demo Patient Username: Bob
                    Demo Patient Password: 123
                    Demo Clinician Username: Chris
                    Demo Clinician Password: Chris
                    This website is designed for both diabetes patients as well as their clinicians. All of 
                    the main functions are only accessible once logged in. For patients, they are able to record
                    data required by their clinician. They are also able to see notes left by their clinician and a
                    leaderboard based on their engagement to motivate them. Patients can access their past records 
                    and change their account settings. 
                    For clinicians, they are able to view all their patients from their dashboard, set required data 
                    the patient have to enter on a daily basis and register new patients. Clinicians dashboard also have
                    the function to automatically highlight specific patient data if they are not within the acceptable range.
                    The website was created using Node.js, Express, HTML, CSS, JavaScript, MongoDB and deployed using Heroku.
                    <div className='project_image_details'>
                      <img src={IMG3} alt=''/>
                      Homepage
                      <img src={IMG4} alt=''/>
                      Patient Homepage
                      <img src={IMG5} alt=''/>
                      Clinician Homepage
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            <a href='https://github.com' className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>


        <article className='project_item'>
          <div className='project_image'>
            <img src={IMG9} alt=''/>
          </div>
          <h3>Personal Portfolio</h3>
          <div className='buttons'>
            <Popup
              trigger={<button className="button btn btn3">Details</button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="modal_title"><h2>Personal Portfolio</h2></div>
                  <div className="modal_content">
                    This website was developed by myself. It is my first attempt at using React and Github Pages.
                    I took heavy inspiration from this video: <a href='https://www.youtube.com/watch?v=G-Cr00UYokU'>Youtube</a>
                    <br />
                    This website uses SwiperJS for the Slider and Reactjs-Popup for the modals. React for front end and deployed
                    on GitHub Pages.
                    <div className='project_image_details'>
                      <img src={IMG9} alt=''/>
                      Portfolio
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            <a href='https://github.com' className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Projects