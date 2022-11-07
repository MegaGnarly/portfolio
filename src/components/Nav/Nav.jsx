import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {RiClipboardFill} from 'react-icons/ri'
import {AiTwotonePhone} from 'react-icons/ai'


const Nav = () => {
  return (
    <nav>
      <a href='#'><AiFillHome/></a>
      <a href='#about'><FaUserAlt/></a>
      <a href='#skills'><AiFillSetting/></a>
      <a href='#projects'><RiClipboardFill/></a>
      <a href='#contact'><AiTwotonePhone/></a>
    </nav>
  )
}

export default Nav