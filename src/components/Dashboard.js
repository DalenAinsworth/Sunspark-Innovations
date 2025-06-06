// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // optional

const Dashboard = () => {
  const [energyData, setEnergyData] = useState({
    production: 0,
    consumption: 0,
    credits: 0,
    tips: [],
    alerts: []
  });

  useEffect(() => {
    setTimeout(() => {
      setEnergyData({
        production: 5.2,
        consumption: 3.8,
        credits: 1.4,
        alerts: [
          'Panel #4 efficiency reduced by 12%',
          'Monthly maintenance due in 3 days'
        ],
        tips: [
          'Shift laundry to noon when solar production peaks',
          'Consider adding battery storage for evening usage'
        ]
      });
    }, 500);
  }, []);

  return (
    <div className="dashboard">
      <h2>Energy Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Production</h3>
          <p>{energyData.production} kWh</p>
        </div>
        <div className="card">
          <h3>Consumption</h3>
          <p>{energyData.consumption} kWh</p>
        </div>
        <div className="card">
          <h3>Credits</h3>
          <p>{energyData.credits} kWh</p>
        </div>
      </div>

      <div className="section">
        <h3>Maintenance Alerts</h3>
        <ul>
          {energyData.alerts.map((alert, i) => (
            <li key={i}>{alert}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>AI Energy Tips</h3>
        <ul>
          {energyData.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
