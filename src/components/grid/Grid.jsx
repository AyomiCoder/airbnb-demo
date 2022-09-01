import React from 'react'
import './style.css'
import photo from '../../img/photo.png'

const Grid = () => {
  return (
    <div className='hero'>
        <img src={photo} alt="grid" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Grid