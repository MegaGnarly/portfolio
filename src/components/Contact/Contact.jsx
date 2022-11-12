import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0noqcgf', 'template_5uql1n5', form.current, 'ZSyZEUAR5omvYcgWq')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>davidliu0115@gmail.com</h5>
            <a href="mailto:davidliu0115@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>davidliu0115</h5>
            <a href="https://m.me/davidliu0115" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn_primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact