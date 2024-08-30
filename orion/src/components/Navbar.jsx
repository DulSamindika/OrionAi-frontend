import React from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();

  // Hide Navbar on login page
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <div className='navBar'>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/leaderboard">LeaderBoard</a>
          </li>
          <li>
            <a href="/tutorials">Tutorials</a>
          </li>
          <li>
            <a href="/contacts">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
