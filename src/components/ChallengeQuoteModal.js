// src/components/ChallengeQuoteModal.js
import React from 'react';
import './ChallengeQuoteModal.css';

const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Energy and persistence conquer all things. - Benjamin Franklin",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It always seems impossible until it's done. - Nelson Mandela",
  "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on. - Charles Dickens",
  "Every accomplishment starts with the decision to try. - John F. Kennedy"
];

const ChallengeQuoteModal = ({ challenge, onClose }) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <div className="modal-overlay">
      <div className="quote-modal">
        <div className="modal-header">
          <h3>Welcome to the {challenge.name} Challenge!</h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <div className="quote-container">
            <div className="quote-icon">❝</div>
            <p className="quote-text">{randomQuote}</p>
            <div className="quote-icon">❞</div>
          </div>
          <p className="challenge-description">
            You've joined <strong>{challenge.name}</strong>: {challenge.description}
          </p>
          <div className="progress-container">
            <div 
              className="progress-bar"
              style={{ width: `${(challenge.current / challenge.goal) * 100}%` }}
            >
              {Math.round((challenge.current / challenge.goal) * 100)}%
            </div>
          </div>
          <p className="progress-text">
            {challenge.current}/{challenge.goal} participants
          </p>
        </div>
        <div className="modal-actions">
          <button className="action-button" onClick={onClose}>
            Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeQuoteModal;