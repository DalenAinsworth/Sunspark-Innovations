// Hero js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Sunspark Energy Intelligence</h1>
        <p>AI powered solar management for optimal performance and savings</p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">24.7%</span>
            <span className="stat-label">Energy Saved</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">$4,820</span>
            <span className="stat-label">Annual Savings</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">8.2T</span>
            <span className="stat-label">CO₂ Reduced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;