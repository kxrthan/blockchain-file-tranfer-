import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero contianer'>
        <div className="hero-text">
            <h1>We Ensure better Protection for File Transfer</h1>
            <p>A decentralized file transfer system enables the sharing of files directly between users without relying on a central server, enhancing security and reducing bottlenecks. It leverages peer-to-peer networks to distribute data efficiently and resiliently.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero


