import React, { useState, useRef, useEffect } from 'react';
import './AIAssistant.css';

const AIAssistant = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your Sunspark AI Assistant. How can I help you with your solar system today?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI response after delay
    setTimeout(() => {
      const aiResponse = getAIResponse(inputValue);
      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    }, 1000);
  };

  const getAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Define response scenarios
    if (lowerQuery.includes('credit') || lowerQuery.includes('reward')) {
      return "Energy credits are earned when you send excess power to the grid. Each kWh earns 1 credit that you can use during low-production periods. Your current credit balance is 1.4 kWh.";
    } else if (lowerQuery.includes('maintain') || lowerQuery.includes('clean')) {
      return "For optimal panel performance:\n1. Clean panels every 3 months\n2. Check inverter connections monthly\n3. Trim nearby trees quarterly\nWould you like to schedule maintenance?";
    } else if (lowerQuery.includes('efficien') || lowerQuery.includes('optimiz')) {
      return "Based on your usage patterns:\n1. Shift appliance use to 11AM-2PM\n2. Enable battery storage mode\n3. Update panel angles seasonally\nI can implement these changes if you'd like!";
    } else if (lowerQuery.includes('bill') || lowerQuery.includes('cost')) {
      return "Your current savings:\n▸ Production: 5.2 kWh ($1.25)\n▸ Credits: 1.4 kWh ($0.35)\n▸ Total savings today: $1.60\nEstimated monthly savings: $48";
    } else if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      return "Hello there! How can I assist with your solar system today?";
    } else {
      return "I can help with:\n▸ Energy credit questions\n▸ Maintenance scheduling\n▸ Performance optimization\n▸ Cost savings analysis\n▸ Community features\nWhat would you like to know?";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="ai-assistant-container">
      <div className="ai-header">
        <div className="ai-title">
          <span className="ai-icon">🤖</span>
          <h3>Sunspark AI Assistant</h3>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about your solar system..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AIAssistant;