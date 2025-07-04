// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ currentView, setCurrentView, toggleAssistant, notifications, markAsRead, markAllAsRead }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://sunsparkinnovation.com/wp-content/uploads/2025/03/newsunspark-02-1-e1739991433679-1024x311-1.png"
          alt="SunSpark Logo"
          className="logo"
        />
        <span className="app-name">Energy Intelligence</span>
      </div>
      <div className="navbar-links">
        <button 
          className={`nav-link ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentView('dashboard')}
        >
          <span>🏠</span> Dashboard
        </button>
        <button 
          className={`nav-link ${currentView === 'community' ? 'active' : ''}`}
          onClick={() => setCurrentView('community')}
        >
          <span>👥</span> Community
        </button>
        <button 
          className={`nav-link ${currentView === 'support' ? 'active' : ''}`}
          onClick={() => setCurrentView('support')}
        >
          <span>🛠️</span> Support
        </button>
        <button 
          className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentView('about')}
        >
          <span>ℹ️</span> About Us
        </button>
      </div>
      
      <div className="navbar-actions">
        <div className="notification-container">
          <button 
            className="notification-button"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <span>🔔</span>
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>
          
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <h4>Notifications</h4>
                <button onClick={markAllAsRead}>Mark all as read</button>
              </div>
              
              {notifications.length === 0 ? (
                <div className="notification-item empty">
                  No notifications
                </div>
              ) : (
                <div className="notification-list">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="notification-message">{notification.message}</div>
                      <div className="notification-time">{notification.timestamp}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="ai-assistant">
          <button className="ai-button" onClick={toggleAssistant}>
            <span>🤖</span> Ask AI Assistant
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;