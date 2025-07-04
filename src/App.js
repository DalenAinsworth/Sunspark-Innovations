// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import Support from './components/Support';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIAssistant from './components/AIAssistant';
import About from './components/About';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      timestamp: new Date().toLocaleTimeString(),
      read: false
    };
    setNotifications([newNotification, ...notifications]);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <>
            <Hero />
            <Dashboard 
              addNotification={addNotification} 
              notifications={notifications}
            />
          </>
        );
      case 'community':
        return <Community addNotification={addNotification} />;
      case 'support':
        return (
          <Support 
            toggleAssistant={() => setIsAssistantOpen(true)}
            notifications={notifications}
          />
        );
      case 'about': 
        return <About />;
      default:
        console.warn(`Unknown view: ${currentView}`);
        return (
          <>
            <Hero />
            <Dashboard 
              addNotification={addNotification} 
              notifications={notifications}
            />
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        toggleAssistant={() => setIsAssistantOpen(!isAssistantOpen)}
        notifications={notifications}
        markAsRead={markAsRead}
        markAllAsRead={markAllAsRead}
      />
      
      <div className="content-container">
        {renderView()}
      </div>
      
      {isAssistantOpen && <AIAssistant onClose={() => setIsAssistantOpen(false)} />}
      
      <footer className="app-footer">
        <p>© 2025 Sunspark Innovation. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
