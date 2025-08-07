import React from 'react';
import '../styles/HowItWorks.css';

const steps = [
  {
    number: '1',
    title: 'Describe your task',
    description: 'Tell us what you need done, when and where it works for you.',
    details: 'Be specific about your requirements and timeline'
  },
  {
    number: '2',
    title: 'Choose your Tasker',
    description: 'Browse trusted Taskers by skills, reviews, and price.',
    details: 'Compare profiles and select the best fit for your needs'
  },
  {
    number: '3',
    title: 'Get it done!',
    description: 'Your Tasker arrives and gets the job done right.',
    details: 'Relax while your task is completed professionally'
  }
];

const HowItWorks = () => {
  const handleGetStarted = () => {
    // Scroll to services section or handle navigation
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How TaskRabbit works</h2>
          <p className="section-subtitle">
            Getting help has never been easier. Follow these simple steps to get your tasks done.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">
                <span>{step.number}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <p className="step-details">{step.details}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="cta-container">
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get started
          </button>
          <p className="cta-subtitle">
            Join millions of people who trust TaskRabbit for getting things done.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <div className="feature-content">
              <h4>Vetted Taskers</h4>
              <p>All Taskers pass a comprehensive background check</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">★</div>
            <div className="feature-content">
              <h4>Highly rated</h4>
              <p>Choose from thousands of 5-star reviewed Taskers</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">$</div>
            <div className="feature-content">
              <h4>Transparent pricing</h4>
              <p>See upfront, transparent pricing for every task</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <div className="feature-content">
              <h4>TaskRabbit Happiness Pledge</h4>
              <p>Your satisfaction is guaranteed on every task</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
