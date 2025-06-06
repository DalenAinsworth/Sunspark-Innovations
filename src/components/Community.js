// src/components/Community.js
import React from 'react';
import './Community.css'; // Optional

const Community = () => {
  const communityData = {
    totalEnergy: 2450,
    leaderboard: [
      { name: 'Green Home', energy: 620, rank: 1 },
      { name: 'Eco Villa', energy: 580, rank: 2 },
      { name: 'Solar House', energy: 540, rank: 3 },
      { name: 'Your Home', energy: 520, rank: 4 }
    ],
    comparisons: [
      { metric: 'Production', you: 5.2, avg: 4.8, diff: '+8.3%' },
      { metric: 'Efficiency', you: 85, avg: 82, diff: '+3.7%' },
      { metric: 'Credits', you: 1.4, avg: 1.2, diff: '+16.7%' }
    ]
  };

  return (
    <div className="community-container">
      <h2>Community Dashboard</h2>

      <div className="community-card">
        <h3>Community Production</h3>
        <p className="highlight-number">{communityData.totalEnergy} kWh</p>
        <p>Total solar energy generated today</p>
      </div>

      <div className="community-card">
        <h3>Top Producers</h3>
        <ul>
          {communityData.leaderboard.map((home, index) => (
            <li key={index}>
              <strong>#{home.rank} {home.name}:</strong> {home.energy} kWh
            </li>
          ))}
        </ul>
      </div>

      <div className="community-card">
        <h3>Your Performance vs Community Average</h3>
        <div className="comparisons">
          {communityData.comparisons.map((item, index) => (
            <div key={index} className="comparison-item">
              <p><strong>{item.metric}</strong></p>
              <p>You: {item.you} | Avg: {item.avg}</p>
              <p>Difference: {item.diff}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
