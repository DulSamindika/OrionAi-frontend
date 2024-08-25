import React from 'react'
import './writers_home.css';
import {Link} from 'react-router-dom';

export default function WritersHome() {
  return (
    <div>
      <div className="writers">
      <div className="background-image">
        <div className="glass-overlay">
          <h1>Welcome to</h1>
          <h2>A kingdom of <span className="highlight">Writers</span></h2>
          <p>
            In the ancient Kingdom of Writers, knowledge and creativity were held in great honor.
            The citizens, known as Promptians, are masters of words and ideas.
            As a budding Promptian in the kingdom of Writes, you begin your journey at Level 1, where you learn the
            basics of promptcraft. As you progress, you’ll tackle complex tasks at Level 2, sharpening your
            strategic thinking and problem-solving skills. Finally, at Level 3, you’ll conquer the most challenging
            feats, becoming a master promptsmith.
          </p>
          <div className="button-container">
          
            <Link to='/wri2' className="level-button">
            <button className="level-button">Level 1</button>
            </Link>
            <button className="level-button" to='/wri2'>Level 2</button>
            <button className="level-button">Level 3</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
