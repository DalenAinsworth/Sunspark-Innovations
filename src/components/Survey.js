// Survey.js
import React, { useState } from 'react';
import './Survey.css';

const Survey = () => {
  const [answers, setAnswers] = useState({
    importance: '',
    participation: '',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Survey submitted:', answers);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setAnswers({ importance: '', participation: '', feedback: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="survey-container">
      <h3>Community Solar Survey</h3>
      {submitted ? (
        <div className="success-message">
          <p>✅ Thank you for your feedback!</p>
          <p>Your input helps improve our community solar program.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>How important is community solar energy to you?</label>
            <div className="radio-group">
              <label>
                <input 
                  type="radio" 
                  name="importance" 
                  value="very" 
                  checked={answers.importance === 'very'} 
                  onChange={handleChange} 
                />
                Very important
              </label>
              <label>
                <input 
                  type="radio" 
                  name="importance" 
                  value="somewhat" 
                  checked={answers.importance === 'somewhat'} 
                  onChange={handleChange} 
                />
                Somewhat important
              </label>
              <label>
                <input 
                  type="radio" 
                  name="importance" 
                  value="not" 
                  checked={answers.importance === 'not'} 
                  onChange={handleChange} 
                />
                Not important
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>How likely are you to participate in neighborhood energy challenges?</label>
            <select 
              name="participation" 
              value={answers.participation} 
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="very">Very likely</option>
              <option value="somewhat">Somewhat likely</option>
              <option value="unlikely">Unlikely</option>
            </select>
          </div>

          <div className="form-group">
            <label>What features would you like to see in our community program?</label>
            <textarea 
              name="feedback" 
              value={answers.feedback} 
              onChange={handleChange}
              placeholder="Your suggestions..."
            />
          </div>

          <button type="submit" className="submit-button">Submit Survey</button>
        </form>
      )}
    </div>
  );
};

export default Survey;