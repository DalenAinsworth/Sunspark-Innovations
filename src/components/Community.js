// src/components/Community.js
import React, { useState } from 'react';
import './Community.css';

import Survey from './Survey';
import NeighborhoodMap from './NeighborhoodMap';
import ChallengeQuoteModal from './ChallengeQuoteModal'; // NEW

const Community = ({ addNotification }) => {
  const [userRole, setUserRole] = useState('homeowner');
  const [homeownerSubView, setHomeownerSubView] = useState('dashboard');

  // Modal state
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

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

  const challenges = [
    { id: 1, name: 'Energy Saver Week', goal: 100, current: 75, description: 'Reduce your energy consumption by 10% this week' },
    { id: 2, name: 'Solar Champion', goal: 50, current: 30, description: 'Produce 50 kWh of solar energy' },
  ];

  const handleJoinChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setShowQuoteModal(true);

    if (addNotification) {
      addNotification(`You joined the challenge: ${challenge.name}`);
    }
  };

  return (
    <div className="community-container">
      <div className="data-sharing-banner">
        <p>
          <strong>Join our network:</strong> By participating in our community program, 
          you agree to share anonymized utility data to improve energy resilience for all members.
        </p>
      </div>

      <div className="role-selector">
        <button 
          className={userRole === 'homeowner' ? 'active' : ''}
          onClick={() => setUserRole('homeowner')}
        >
          Homeowner View
        </button>
        <button 
          className={userRole === 'maintenance' ? 'active' : ''}
          onClick={() => setUserRole('maintenance')}
        >
          Maintenance View
        </button>
      </div>

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

      {userRole === 'homeowner' ? (
        <>
          <div className="subview-selector">
            <button 
              className={homeownerSubView === 'dashboard' ? 'active' : ''}
              onClick={() => setHomeownerSubView('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={homeownerSubView === 'challenges' ? 'active' : ''}
              onClick={() => setHomeownerSubView('challenges')}
            >
              Challenges
            </button>
            <button 
              className={homeownerSubView === 'survey' ? 'active' : ''}
              onClick={() => setHomeownerSubView('survey')}
            >
              Survey
            </button>
            <button 
              className={homeownerSubView === 'map' ? 'active' : ''}
              onClick={() => setHomeownerSubView('map')}
            >
              Neighborhood Map
            </button>
          </div>

          {homeownerSubView === 'dashboard' && (
            <>
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
                  {communityData.comparisons.map((item, index) => {
                    const maxValue = Math.max(item.you, item.avg) * 1.1;
                    return (
                      <div key={index} className="comparison-item">
                        <div className="metric-header">
                          <span className="metric-name">{item.metric}</span>
                          <span className="metric-diff">{item.diff}</span>
                        </div>
                        <div className="metric-values">
                          <div 
                            className="value-bar your-value" 
                            style={{ width: `${(item.you / maxValue) * 100}%` }}
                          >
                            <span>You: {item.you}</span>
                          </div>
                          <div 
                            className="value-bar avg-value" 
                            style={{ width: `${(item.avg / maxValue) * 100}%` }}
                          >
                            <span>Avg: {item.avg}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {homeownerSubView === 'challenges' && (
            <div className="community-section">
              <h3>Neighborhood Energy Challenges</h3>
              <div className="challenges-container">
                {challenges.map(challenge => (
                  <div key={challenge.id} className="challenge-card">
                    <h4>{challenge.name}</h4>
                    <p>{challenge.description}</p>
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        style={{ width: `${(challenge.current / challenge.goal) * 100}%` }}
                      >
                        {Math.round((challenge.current / challenge.goal) * 100)}%
                      </div>
                    </div>
                    <p>{challenge.current}/{challenge.goal} participants</p>
                    <button 
                      className="join-button"
                      onClick={() => handleJoinChallenge(challenge)}
                    >
                      Join Challenge
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {homeownerSubView === 'survey' && (
            <Survey />
          )}

          {homeownerSubView === 'map' && (
            <div className="community-section">
              <h3>Neighborhood Energy Map</h3>
              <NeighborhoodMap />
            </div>
          )}

          {showQuoteModal && selectedChallenge && (
            <ChallengeQuoteModal 
              challenge={selectedChallenge}
              onClose={() => setShowQuoteModal(false)}
            />
          )}
        </>
      ) : (
        <div className="maintenance-view">
          <h3>Maintenance Dashboard</h3>
          <div className="maintenance-list">
            <div className="maintenance-item">
              <span>Panel Cleaning - Green Home</span>
              <span className="status-badge pending">Scheduled: 6/20</span>
            </div>
            <div className="maintenance-item">
              <span>Inverter Check - Solar House</span>
              <span className="status-badge completed">Completed</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
