// src/components/Support.js
import React, { useState } from 'react';
import './Support.css'; // Optional, style it if you like

const Support = () => {
  const faqs = [
    {
      question: 'How are energy credits calculated?',
      answer: 'Credits are based on excess energy sent to the grid. Each kWh earns 1 credit redeemable during low-production hours.'
    },
    {
      question: 'What do maintenance alerts mean?',
      answer: 'Our AI detects potential issues before they become problems. Green alerts are informational, yellow suggest attention soon.'
    },
    {
      question: 'How accurate are the production forecasts?',
      answer: 'Our forecasts are 92% accurate based on weather data and historical performance.'
    }
  ];

  const resources = [
    'System Installation Guide',
    'Maintenance Checklist',
    'Energy Optimization Tips',
    'Billing & Credit Policy'
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="support-container">
      <h2>Support Center</h2>

      <div className="support-card">
        <h3>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
            {expanded === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="support-card">
        <h3>Resources</h3>
        <ul className="resource-list">
          {resources.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="support-card">
        <h3>Contact Support</h3>
        <p>Need personalized assistance? Our solar experts are available:</p>
        <p>📞 (800) SUN-SPARK</p>
        <p>✉️ support@sunspark.com</p>
        <p><strong>Hours:</strong> Mon–Fri 8AM–6PM, Sat 9AM–2PM</p>
      </div>
    </div>
  );
};

export default Support;
