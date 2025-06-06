// src/App.js
import React from 'react';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import Support from './components/Support';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="content-container">
        <Dashboard />
        <div className="community-highlight">
  <Community />
</div>
        <Support />
      </div>
      <footer className="app-footer">
        <p>© 2023 Energy Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;