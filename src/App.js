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
      case 'about': 
        return <About />;
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
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        toggleAssistant={() => setIsAssistantOpen(!isAssistantOpen)}
      />
      
      <div className="content-container">
        {renderView()}
      </div>
      
      {isAssistantOpen && <AIAssistant onClose={() => setIsAssistantOpen(false)} />}
      
      <footer className="app-footer">
      </footer>
    </div>
  );
}

export default App;