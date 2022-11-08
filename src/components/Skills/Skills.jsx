import React from 'react'
import './Skills.css'
import C from '../../assets/C.png'
import css from '../../assets/css.png'
import express from '../../assets/express.png'
import git from '../../assets/git.png'
import haskell from '../../assets/haskell.png'
import html from '../../assets/html.png'
import java from '../../assets/java.png'
import js from '../../assets/javascript.png'
import matlab from '../../assets/matlab.png'
import mongodb from '../../assets/mongodb.png'
import mysql from '../../assets/mysql.png'
import nodejs from '../../assets/nodejs.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'

const App = (props) => {
  return (
    <>
      <div className='skill' >
        <img className='skill_img' src={props.app} alt={props.app}/>
        <p className='skill_name'>{props.name}</p> 
      </div>
    </>
  )
}

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What I Have Learnt</h5>
      <h2>Skills</h2>

      <div className='container skills_container'>
        <div className='languages_container'>
          <h2 className='skill_title'>Languages</h2>
          <div className='skill_type'>
            <App app={C} name={'C'}/>
            <App app={java} name={'Java'}/>
            <App app={python} name={'Python'}/>
            <App app={haskell} name={'Haskell'}/>
          </div>
        </div>
        <div className='container tools_container'>
          <h2 className='skill_title'>Tools</h2>
          <div className='skill_type'>
            <App app={git} name={'Git'}/>
            <App app={matlab} name={'MATLAB'}/>
          </div>
        </div>
        <div className='container frontend_container'>
          <h2 className='skill_title'>Font End</h2>
          <div className='skill_type'>
            <App app={html} name={'HTML'}/>
            <App app={css} name={'CSS'}/>
            <App app={js} name={'JavaScript'}/>
            <App app={react} name={'React'}/>
          </div>
        </div>
        <div className='container backend_container'>
          <h2 className='skill_title'>Back End</h2>
          <div className='skill_type'>
            <App app={express} name={'Express'}/>
            <App app={mongodb} name={'MongoDB'}/>
            <App app={mysql} name={'MySQL'}/>
            <App app={nodejs} name={'NodeJS'}/>
          </div>
        </div>

        
      </div>

    </section>
  )
}

export default Skills