import React from 'react';
import profilepic from '../../asserts/ThisMe.jpg';
import './intro.css';
import {Link} from 'react-scroll';
import btnimage from '../../asserts/hireme.png';
import githubLogo from '../../asserts/github.svg';
import social from '../../asserts/social.png'

const links = [
  {name: 'Linkedin',image: social},
  { name: 'GitHub', image: githubLogo }
];


const Intro = () => {
  return (
    <section id ='intro'>
       <div className='introWrapper'>
        <div className=' introContent'>
            <span className='hello'> Hello,</span>
            <span className='introtext'> I'm<span className='introName'> Siyabonga</span><br/>Fullstack developer</span>
            <p className = "introPara"> I am a skilled fullstack dev with with experience in creating <br/> visually appealing websites</p>
            <Link><button className='btn'><img src={btnimage} alt ='Hire me' className='btnImg' />Hire me </button></Link>
            <div className="links-wrapper">
              {links.map((skill, index) => (
                <div className="link-card" key={index}>
                  <img src={skill.image} alt={skill.name} className="link-icon" />
                  <span className="link-name">{skill.name}</span>
            </div>
          ))}
        </div>
        </div>

        <div className="introImgContainer">
          <img src={profilepic} alt="Siyabonga" className="introImg" />
        </div>
        </div>
    </section> 
  )
}

export default Intro