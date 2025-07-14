import React from 'react';
import './navbar.css'
import Alphs from '../asserts/AlphS.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src = {Alphs} alt="Alphs" className= 'Alphs'/>
    <div className='desktopMenu'>
      <Link className='desktopMenuListItem'>Home</Link>
      <Link className='desktopMenuListItem'>Clients</Link>
      <Link className='desktopMenuListItem'>About</Link>
      <Link className='desktopMenuListItem'>Portfollio</Link>

    </div>
    <button className='desktopMenuBtn'>
      <img src="" alt ="" className='desktopMenuImg'/>Contact Me</button>    
      
      </nav>
    )
}

export default Navbar