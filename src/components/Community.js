// src/components/Community.js
import React from 'react';
import './Community.css';

const Community = () => {
  const communityData = {
    totalEnergy: 2450,
    totalConsumption: 1820,
    totalCredits: 630,
    leaderboard: [
      { name: 'Green Home', production: 620, consumption: 420, credits: 200, rank: 1 },
      { name: 'Eco Villa', production: 580, consumption: 380, credits: 200, rank: 2 },
      { name: 'Solar House', production: 540, consumption: 350, credits: 190, rank: 3 },
      { name: 'Your Home', production: 520, consumption: 380, credits: 140, rank: 4 }
    ],
    comparisons: [
      { metric: 'Production', you: 5.2, avg: 4.8, diff: '+8.3%' },
      { metric: 'Efficiency', you: 85, avg: 82, diff: '+3.7%' },
      { metric: 'Credits', you: 1.4, avg: 1.2, diff: '+16.7%' }
    ]
  };

  return (
    <div className="community-container">
      <h2>Community Energy Dashboard</h2>

      <div className="community-stats">
        <div className="stat-card">
          <h3>Total Production</h3>
          <p className="highlight-number">{communityData.totalEnergy} kWh</p>
        </div>
        <div className="stat-card">
          <h3>Total Consumption</h3>
          <p className="highlight-number">{communityData.totalConsumption} kWh</p>
        </div>
        <div className="stat-card">
          <h3>Total Credits</h3>
          <p className="highlight-number">{communityData.totalCredits} kWh</p>
        </div>
      </div>

      <div className="community-section">
        <h3>Top Performing Homes</h3>
        <div className="leaderboard">
          {communityData.leaderboard.map((home, index) => (
            <div key={index} className="leaderboard-item">
              <span className="rank">#{home.rank}</span>
              <span className="name">{home.name}</span>
              <div className="metrics">
                <span>⚡ {home.production} kWh</span>
                <span>🔋 {home.consumption} kWh</span>
                <span>⭐ {home.credits} cr</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="community-section">
        <h3>Your Performance vs Community Average</h3>
        <div className="comparisons">
          {communityData.comparisons.map((item, index) => (
            <div key={index} className="comparison-item">
              <div className="metric-header">
                <span className="metric-name">{item.metric}</span>
                <span className="metric-diff">{item.diff}</span>
              </div>
              <div className="metric-values">
                <div className="value-bar your-value" style={{ width: `${(item.you / 6) * 100}%` }}>
                  <span>You: {item.you}</span>
                </div>
                <div className="value-bar avg-value" style={{ width: `${(item.avg / 6) * 100}%` }}>
                  <span>Avg: {item.avg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;