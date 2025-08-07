import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const handlePostTask = () => {
    // Scroll to services section or handle navigation
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBecomeTasker = () => {
    // Handle become tasker navigation
    console.log('Navigate to become tasker page');
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Get help with everyday tasks</h1>
            <p className="hero-subtitle">
              Find trusted and skilled professionals for all your home and personal needs. 
              From furniture assembly to cleaning, we've got you covered.
            </p>
            <div className="hero-actions">
              <button className="cta-primary" onClick={handlePostTask}>
                Book a task
              </button>
              <button className="cta-secondary" onClick={handleBecomeTasker}>
                Become a Tasker
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">140k+</span>
                <span className="stat-label">Taskers</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Cities</span>
              </div>
              <div className="stat">
                <span className="stat-number">10M+</span>
                <span className="stat-label">Tasks completed</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-avatar"></div>
                <div className="card-info">
                  <div className="card-name">Sarah M.</div>
                  <div className="card-rating">★★★★★ 4.9</div>
                </div>
              </div>
              <div className="card-service">Furniture Assembly</div>
              <div className="card-price">$45/hr</div>
              <div className="card-badge">Available today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
