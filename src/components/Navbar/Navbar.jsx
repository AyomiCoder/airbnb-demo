import React from 'react'
import './style.css'
import logo from './img/airbnb.png'
import 'animate.css';

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="aribnb logo" className='nav--logo' />
    </nav>
  )
}

export default Navbar