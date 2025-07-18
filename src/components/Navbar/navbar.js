import React from 'react';
import './navbar.css'
import Alphs from '../../asserts/AlphS.png';
import {Link} from 'react-scroll';
import contactImg from '../../asserts/contact.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src = {Alphs} alt="Alphs" className= 'Alphs'/>
    <div className='desktopMenu'>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
      <Link activeClass='active' to='about-section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
      <Link activeClass='active' to='projects-section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
      <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>

    </div>
    <button className='desktopMenuBtn' onClick={()=>{
      document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
    }}>
      <img src={contactImg} alt ="contact" className='desktopMenuImg'/>Contact Me</button>    
      
      </nav>
    
)}

export default Navbar