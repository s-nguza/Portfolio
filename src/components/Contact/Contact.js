import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Access form fields
    const name = form.current['your_name'].value.trim();
    const email = form.current['your_email'].value.trim();
    const message = form.current['message'].value.trim();

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message before submitting.');
      return; // Stop submission
    }
    
    // Proceed with sending email
    emailjs.sendForm('service_gbirkyo', 'template_fjnokaa', form.current, '9Z_sE9UYSgt4A7fcF')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');  // Optional success feedback
        form.current.reset(); // Clear form on success
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again later.');
      });
  }

  return (
    <section id='contactPage'>
      <div className="contact">
        <div id="contactContent">
          <h1 className='contactheader'>Contact Me</h1>
          <span className='contactDesc'>
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form className='contactForm' ref={form} onSubmit={sendEmail} >
            <input type='text' className='name' placeholder='Your name' name='your_name' />
            <input type='email' className='email' placeholder='Your email' name='your_email' />
            <textarea className='msg' name='message' rows='5' placeholder='Your Message' ></textarea>
            <button type='submit' className='submitBtn'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact