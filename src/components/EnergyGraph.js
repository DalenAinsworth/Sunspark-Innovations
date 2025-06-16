// src/components/EnergyGraph.js
import React from 'react';
import './EnergyGraph.css';

const EnergyGraph = ({ data, type }) => {
  // Sample data for different metrics
  const chartData = {
    production: [0, 0.2, 0.8, 2.1, 3.5, 4.8, 5.2, 4.9, 4.1, 3.2, 2.0, 1.0],
    consumption: [1.2, 1.0, 0.9, 1.1, 1.5, 2.2, 2.8, 3.2, 3.5, 3.8, 3.5, 2.8],
    excess: [0, 0, 0, 0.5, 1.2, 2.0, 2.4, 2.1, 1.5, 0.8, 0.2, 0],
    credits: [0, 0, 0, 0, 0.2, 0.5, 0.8, 1.0, 1.2, 1.3, 1.4, 1.4]
  };

  const colors = {
    production: '#4CAF50',
    consumption: '#2196F3',
    excess: '#9C27B0',
    credits: '#2E7D32'
  };

  const maxValue = Math.max(...chartData[type]);
  
  return (
    <div className="graph-container">
      <h3>{type.charAt(0).toUpperCase() + type.slice(1)} Trend</h3>
      <div className="graph">
        {chartData[type].map((value, index) => (
          <div key={index} className="bar-container">
            <div 
              className="bar" 
              style={{
                height: `${(value / maxValue) * 100}%`,
                backgroundColor: colors[type]
              }}
            />
            <span className="time-label">{index * 2}:00</span>
          </div>
        ))}
      </div>
      <div className="graph-footer">
        <span>Midnight</span>
        <span>Noon</span>
        <span>Midnight</span>
      </div>
    </div>
  );
};

export default EnergyGraph;