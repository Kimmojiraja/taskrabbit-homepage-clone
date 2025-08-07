import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home">TaskRabbit</a>
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#signin" className="signin-link">Log in</a>
            <a href="#signup" className="signup-btn">Sign up</a>
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
