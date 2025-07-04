// src/components/Support.js
import React, { useState } from 'react';
import './Support.css';

const Support = ({ toggleAssistant, notifications }) => {
  const faqs = [
    {
      question: 'How are energy credits calculated?',
      answer: 'Credits are based on excess energy sent to the grid. Each kWh earns 1 credit redeemable during low-production hours.'
    },
    {
      question: 'What do maintenance alerts mean?',
      answer: 'Our AI detects potential issues before they become problems. Green alerts are informational, yellow suggest attention soon, red indicates immediate action needed.'
    },
    {
      question: 'How accurate are the production forecasts?',
      answer: 'Our AI forecasts are 92% accurate based on weather data, historical performance, and satellite imaging analysis.'
    },
    {
      question: 'Can I trade energy with neighbors?',
      answer: 'Community energy sharing is coming in Q3 2024! You\'ll be able to trade credits with nearby homes.'
    }
  ];

  const resources = [
    { name: 'System Installation Guide', icon: '📖' },
    { name: 'Maintenance Checklist', icon: '✅' },
    { name: 'Energy Optimization Tips', icon: '💡' },
    { name: 'Billing & Credit Policy', icon: '💰' },
    { name: 'Community Guidelines', icon: '👥' }
  ];

  const trainingModules = [
    { title: 'Panel Cleaning', duration: '5 min', level: 'Beginner' },
    { title: 'Inverter Maintenance', duration: '8 min', level: 'Intermediate' },
    { title: 'Battery Optimization', duration: '12 min', level: 'Advanced' },
    { title: 'AI Settings', duration: '7 min', level: 'Intermediate' }
  ];

  const [expanded, setExpanded] = useState(null);
  const [activeTab, setActiveTab] = useState('faq');

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const downloadResource = (name) => {
    const content = `This is a placeholder for the ${name} document.`;
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);

    const notificationMessage = `Downloaded resource: ${name}`;
    const alreadyExists = notifications?.some(n => n.message === notificationMessage);
    if (!alreadyExists) {
      toggleAssistant?.(); // Optional: trigger AI Assistant after download
    }
  };

  return (
    <div className="support-container">
      <h2>Support Center</h2>

      <div className="support-tabs">
        <button 
          className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
        <button 
          className={`tab ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </button>
        <button 
          className={`tab ${activeTab === 'training' ? 'active' : ''}`}
          onClick={() => setActiveTab('training')}
        >
          VR Training
        </button>
        <button 
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </div>

      {activeTab === 'faq' && (
        <div className="support-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <span>{expanded === index ? '−' : '+'}</span>
                </div>
                {expanded === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="support-section">
          <h3>Learning Resources</h3>
          <div className="resources-grid">
            {resources.map((res, i) => (
              <div key={i} className="resource-card">
                <div className="resource-icon">{res.icon}</div>
                <div className="resource-name">{res.name}</div>
                <button 
                  className="download-button"
                  onClick={() => downloadResource(res.name)}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'training' && (
        <div className="support-section">
          <h3>Virtual Reality Training Modules</h3>
          <p className="subtitle">Interactive guides for installers and homeowners</p>
          <div className="training-grid">
            {trainingModules.map((module, i) => (
              <div key={i} className="training-card">
                <div className="training-header">
                  <div className="vr-badge">VR</div>
                  <div className="duration">{module.duration}</div>
                </div>
                <h4>{module.title}</h4>
                <div className="level-badge">{module.level}</div>
                <button className="start-button">Start Training</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="support-section">
          <h3>Contact Support</h3>
          <div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h4>Phone Support</h4>
              <p>(800) SUN-SPARK</p>
              <p>24/7 Emergency Line</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h4>Email</h4>
              <p>support@sunspark.com</p>
              <p>Response within 2 hours</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h4>AI Assistant</h4>
              <p>Instant answers to common questions</p>
              <button 
                className="chat-button"
                onClick={toggleAssistant}
              >
                Start Chat
              </button>
            </div>
          </div>
          <div className="hours-info">
            <p><strong>Business Hours:</strong> Mon–Fri 8AM–6PM, Sat 9AM–2PM (PST)</p>
            <p><strong>After Hours:</strong> AI Assistant available 24/7</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
