import React from 'react';
import profilepic from '../../asserts/ThisMe.jpg';
import './intro.css';
import {Link} from 'react-scroll';
import btnimage from '../../asserts/hireme.png'

const Intro = () => {
  return (
    <section id ='intro'>
        <div className=' introContent'>
            <span className='hello'> Hello,</span>
            <span className='introtext'> I'm<span className='introName'> Siyabonga</span><br/>fullstack developer</span>
            <p className = "introPara"> I am a skilled fullstack dev with with experience in creating <br/> visually appealing websites</p>
            <Link><button className='btn'><img src={btnimage} alt ='Hire me' className='btnImg' />Hire me </button></Link>
        </div>

        <div className="introImgContainer">
          <img src={profilepic} alt="Siyabonga" className="introImg" />
        </div>
      

    

    </section> 
  )
}

export default Intro