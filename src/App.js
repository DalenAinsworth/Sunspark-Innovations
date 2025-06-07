// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import Support from './components/Support';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch(currentView) {
      case 'dashboard':
        return (
          <>
            <Hero />
            <Dashboard />
          </>
        );
      case 'community':
        return <Community />;
      case 'support':
        return <Support />;
      default:
        return (
          <>
            <Hero />
            <Dashboard />
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="content-container">
        {renderView()}
      </div>
      <footer className="app-footer">
        <p>© 2024 Sunspark Innovations. AI-Powered Solar Solutions.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">System Status</a>
        </div>
      </footer>
    </div>
  );
}

export default App;