import React from 'react'
import './home.css';

const  home = () => {
  return (
    <div>
        <div class="head-section">
        <div className="dark-overlay">
        <img src="./Images/hero.png" alt="Hero" class="head-image"/>
        </div>
        <div class="head-overlay">
            <h1 class="head-title">Orion AI</h1>
            <p class="head-text">A Magical Window to the Future</p>
            <a href="/Reg" class="head-button">Join Us</a>
        </div>
       </div>
    </div>
  )
}

export default home