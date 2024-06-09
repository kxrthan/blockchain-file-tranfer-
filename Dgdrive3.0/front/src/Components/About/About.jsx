import React from 'react'
import './About.css'
import about_img from '../../assets/block.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT </h3>
        <h2>Protect the System using Blockchain</h2>
        <p>Decentralized file transfer systems are designed to enable the secure, efficient, and resilient exchange of files between users without the need for a central server. By leveraging peer-to-peer (P2P) networks, these systems distribute data across multiple nodes, reducing the risk of single points of failure and enhancing overall network robustness</p>
                
                 <p> Users benefit from improved privacy, as data transfers are encrypted and occur directly between peers, making it difficult for third parties to intercept or tamper with the files. Decentralized file transfer systems are particularly valuable in environments where reliability and security are paramount, such as in blockchain networks, collaborative platforms, and large-scale data sharing applications.</p>
             
            


        </div>
      
    </div>
  )
}

export default About
