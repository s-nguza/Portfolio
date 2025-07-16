import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className='contactPage'>
        <div id ="contact" ></div>
        <h1 className='contactheader'>Contactme</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your name'/>
            <input type = 'email' className='email' placeholder='Your email'/>
            <textarea className='msg' name='message'  rows = '5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>     
        </form>
    
    </section>
  )
}

export default Contact