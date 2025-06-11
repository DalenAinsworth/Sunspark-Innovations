// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ currentView, setCurrentView, toggleAssistant }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://sunsparkinnovation.com/wp-content/uploads/2025/03/newsunspark-02-1-e1739991433679-1024x311-1.png"
          alt="SunSpark Logo"
          className="logo"
        />
        <span className="app-name">Energy Intelligence</span>
      </div>
      <div className="navbar-links">
        <button 
          className={`nav-link ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentView('dashboard')}
        >
          <span>🏠</span> Dashboard
        </button>
        <button 
          className={`nav-link ${currentView === 'community' ? 'active' : ''}`}
          onClick={() => setCurrentView('community')}
        >
          <span>👥</span> Community
        </button>
        <button 
          className={`nav-link ${currentView === 'support' ? 'active' : ''}`}
          onClick={() => setCurrentView('support')}
        >
          <span>🛠️</span> Support
        </button>
      </div>
      <div className="ai-assistant">
        <button className="ai-button" onClick={toggleAssistant}>
          <span>🤖</span> Ask AI Assistant
        </button>
      </div>
    </nav>
  );
};

export default Navbar;