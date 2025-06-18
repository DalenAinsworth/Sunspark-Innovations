/* Dashboard.js */
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
  const [activeTip, setActiveTip] = useState(null);
  const [schedulingAlert, setSchedulingAlert] = useState(null);
  const [scheduleDateTime, setScheduleDateTime] = useState('');

  // New state for coaching tip
  const [coachingTip, setCoachingTip] = useState(null);

  useEffect(() => {
    // Initial energy data load simulation
    setTimeout(() => {
      setEnergyData({
        production: 5.2,
        consumption: 3.8,
        excess: 1.4,
        credits: 1.4,
        alerts: [
          { id: 1, text: 'Panel #4 efficiency reduced by 12%' },
          { id: 2, text: 'Monthly maintenance due in 3 days' }
        ],
        tips: [
          {
            id: 1,
            title: 'Shift laundry to noon when solar production peaks',
            details: 'Running high-energy appliances during peak solar hours (10am-2pm) reduces grid dependence. This uses your free solar energy and may increase energy credits.',
            link: '/tips/load-shifting'
          },
          {
            id: 2,
            title: 'Consider adding battery storage for evening usage',
            details: 'Battery storage systems store excess solar energy produced during the day for use in the evening. This can reduce your evening grid consumption and provide backup power during outages.',
            link: '/tips/battery-storage'
          },
          {
            id: 3,
            title: 'Adjust panel angle for better winter sun exposure',
            details: 'In winter, the sun is lower in the sky. Adjusting your panel tilt angle to be steeper (around your latitude +15 degrees) can capture more sunlight and increase winter production.',
            link: '/tips/panel-angle'
          },
          {
            id: 4,
            title: 'Shift usage to noon during peak production',
            details: 'Moving 1.5kWh of usage to noon (peak production hours) could save you $0.45 daily ($13.50 monthly)',
            link: '/tips/peak-shifting'
          }
        ]
      });
    }, 500);

    // Add personalized coaching tip after initial load
    setTimeout(() => {
      const personalizedTip = {
        id: 5,
        title: 'Personalized Coaching Tip',
        details: 'Based on your production patterns, shifting 1.5kWh of usage to noon could save you $0.45 daily ($13.50 monthly)',
        link: '/tips/peak-shifting'
      };

      setEnergyData(prev => ({
        ...prev,
        tips: [...prev.tips, personalizedTip]
      }));

      setCoachingTip(personalizedTip);
    }, 1500);
  }, []);

  const handleStatClick = (type) => {
    setActiveGraph(activeGraph === type ? null : type);
  };

  const handleLearnMore = (tip) => {
    setActiveTip(tip);
  };

  const handleSchedule = (alert) => {
    setSchedulingAlert(alert);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);
    setScheduleDateTime(tomorrow.toISOString().slice(0, 16));
  };

  const confirmSchedule = () => {
    if (schedulingAlert && scheduleDateTime) {
      alert(`Scheduled "${schedulingAlert.text}" for ${new Date(scheduleDateTime).toLocaleString()}`);
      setSchedulingAlert(null);
    }
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

        <div 
          className={`stat-card credits ${activeGraph === 'credits' ? 'active' : ''}`}
          onClick={() => handleStatClick('credits')}
        >
          <h3>Energy Credits</h3>
          <p className="stat-value">{energyData.credits} kWh</p>
          <p className="stat-label">Available</p>
        </div>
      </div>

      {activeGraph && (
        <EnergyGraph 
          data={energyData} 
          type={activeGraph}
          showPeakHours={true} // Show peak hour indicator
        />
      )}

      <div className="dashboard-section">
        <h3>AI Maintenance Alerts</h3>
        <div className="alerts-container">
          {energyData.alerts.map((alert) => (
            <div key={alert.id} className="alert-item">
              <span className="alert-icon">⚠️</span>
              <span className="alert-text">{alert.text}</span>
              <button 
                className="action-button"
                onClick={() => handleSchedule(alert)}
              >
                Schedule
              </button>
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
          {energyData.tips.map((tip) => (
            <div key={tip.id} className="tip-card">
              <span className="tip-icon">💡</span>
              <p>{tip.title}</p>
              <button 
                className="info-button"
                onClick={() => handleLearnMore(tip)}
              >
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: show personalized coaching tip separately */}
      {coachingTip && (
        <div className="personalized-tip dashboard-section">
          <h3>{coachingTip.title}</h3>
          <p>{coachingTip.details}</p>
          <a href={coachingTip.link} target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      )}

      {activeTip && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{activeTip.title}</h3>
              <button className="modal-close" onClick={() => setActiveTip(null)}>
                &times;
              </button>
            </div>
            <div className="modal-content">
              <p>{activeTip.details}</p>
              <div className="modal-actions">
                <a 
                  href={activeTip.link} 
                  className="action-button"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Full Details
                </a>
                <button 
                  className="info-button"
                  onClick={() => setActiveTip(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {schedulingAlert && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Schedule Maintenance</h3>
              <button className="modal-close" onClick={() => setSchedulingAlert(null)}>
                &times;
              </button>
            </div>
            <div className="modal-content">
              <p>Schedule service for: <strong>{schedulingAlert.text}</strong></p>

              <div className="form-group">
                <label>Select Date & Time:</label>
                <input 
                  type="datetime-local" 
                  value={scheduleDateTime}
                  onChange={(e) => setScheduleDateTime(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>

              <div className="modal-actions">
                <button 
                  className="action-button"
                  onClick={confirmSchedule}
                >
                  Confirm Schedule
                </button>
                <button 
                  className="info-button"
                  onClick={() => setSchedulingAlert(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
