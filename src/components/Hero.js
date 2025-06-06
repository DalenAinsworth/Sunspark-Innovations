// Hero js
import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Energy Management Dashboard</h1>
        <p>Monitor, analyze and optimize your energy consumption in real-time</p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">24.7%</span>
            <span className="stat-label">Energy Saved</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">$4,820</span>
            <span className="stat-label">Cost Reduced</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">98%</span>
            <span className="stat-label">System Efficiency</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;