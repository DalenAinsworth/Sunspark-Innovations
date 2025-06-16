// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import EnergyGraph from './EnergyGraph';
import './Dashboard.css';

const Dashboard = () => {
  const [energyData, setEnergyData] = useState({
    production: 0,
    consumption: 0,
    excess: 0,
    credits: 0,
    tips: [],
    alerts: []
  });
  
  const [activeGraph, setActiveGraph] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEnergyData({
        production: 5.2,
        consumption: 3.8,
        excess: 1.4,
        credits: 1.4,
        alerts: [
          'Panel #4 efficiency reduced by 12%',
          'Monthly maintenance due in 3 days'
        ],
        tips: [
          'Shift laundry to noon when solar production peaks',
          'Consider adding battery storage for evening usage',
          'Adjust panel angle for better winter sun exposure'
        ]
      });
    }, 500);
  }, []);

  const handleStatClick = (type) => {
    setActiveGraph(activeGraph === type ? null : type);
  };

  return (
    <div className="dashboard">
      <h2>Solar Energy Dashboard</h2>

      <div className="stats-grid">
        <div 
          className={`stat-card production ${activeGraph === 'production' ? 'active' : ''}`}
          onClick={() => handleStatClick('production')}
        >
          <h3>Production</h3>
          <p className="stat-value">{energyData.production} kWh</p>
          <p className="stat-label">Today's generation</p>
        </div>
        
        <div 
          className={`stat-card consumption ${activeGraph === 'consumption' ? 'active' : ''}`}
          onClick={() => handleStatClick('consumption')}
        >
          <h3>Consumption</h3>
          <p className="stat-value">{energyData.consumption} kWh</p>
          <p className="stat-label">Energy used</p>
        </div>
        
        <div 
          className={`stat-card excess ${activeGraph === 'excess' ? 'active' : ''}`}
          onClick={() => handleStatClick('excess')}
        >
          <h3>Excess Energy</h3>
          <p className="stat-value">{energyData.excess} kWh</p>
          <p className="stat-label">Sent to grid</p>
        </div>
        
        <div className="stat-card credits">
          <h3>Energy Credits</h3>
          <p className="stat-value">{energyData.credits} kWh</p>
          <p className="stat-label">Available</p>
        </div>
      </div>

      {/* Graph display area */}
      {activeGraph && (
        <EnergyGraph data={energyData} type={activeGraph} />
      )}

      <div className="dashboard-section">
        <h3>AI Maintenance Alerts</h3>
        <div className="alerts-container">
          {energyData.alerts.map((alert, i) => (
            <div key={i} className="alert-item">
              <span className="alert-icon">⚠️</span>
              <span className="alert-text">{alert}</span>
              <button className="action-button">Schedule</button>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h3>AI Energy Optimization Tips</h3>
          <span className="ai-badge">Powered by Sunspark AI</span>
        </div>
        <div className="tips-container">
          {energyData.tips.map((tip, i) => (
            <div key={i} className="tip-card">
              <span className="tip-icon">💡</span>
              <p>{tip}</p>
              <button className="info-button">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;