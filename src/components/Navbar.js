// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="logo">
        <img
          src="https://sunsparkinnovation.com/wp-content/uploads/2025/03/newsunspark-02-1-e1739991433679-1024x311-1.png"
          className="navbar-title"
          alt="SunSpark Logo"
        />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/community">Community</a></li>
        <li><a href="/support">Support</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
