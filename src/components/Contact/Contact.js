import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section id='contactPage'>
      <div className="contact">
        <div id="contactContent">
          <h1 className='contactheader'>Contact Me</h1>
          <span className='contactDesc'>
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form className='contactForm'>
            <input type='text' className='name' placeholder='Your name' />
            <input type='email' className='email' placeholder='Your email' />
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' className='submitBtn'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
