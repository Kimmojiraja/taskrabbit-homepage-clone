import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>TaskRabbit</h3>
              <p>Get help with everyday tasks from trusted professionals in your area.</p>
            </div>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">Facebook</a>
              <a href="#twitter" aria-label="Twitter">Twitter</a>
              <a href="#instagram" aria-label="Instagram">Instagram</a>
              <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Discover</h4>
            <ul>
              <li><a href="#become-tasker">Become a Tasker</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#enterprise">Enterprise</a></li>
              <li><a href="#gift-cards">Gift Cards</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#safety">Safety</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#community">Community Guidelines</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Download the app</h4>
            <div className="app-links">
              <a href="#ios" className="app-link">
                <div className="app-store">
                  <span className="app-store-text">Download on the</span>
                  <span className="app-store-name">App Store</span>
                </div>
              </a>
              <a href="#android" className="app-link">
                <div className="app-store">
                  <span className="app-store-text">Get it on</span>
                  <span className="app-store-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} TaskRabbit, Inc. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#accessibility">Accessibility</a>
              <a href="#cookies">Cookie Settings</a>
              <a href="#california-privacy">Your California Privacy Choices</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
