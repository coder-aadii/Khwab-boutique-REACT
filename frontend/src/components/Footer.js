import React from 'react';
import './css/Footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#collections">Collections</a></li>
            <li className="about-us-f"><a href="#about">About Us</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="thank-you">
          <p>Thank you for visiting! We hope to see you again soon.</p>
        </div>
        
        <div className="social-links">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/khwabofficial/?igsh=MXZoZmw4djF5OGRlbw%3D%3D#" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="Pinterest" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-credit">
        <p>Designed with ❤️ by <a href="https://www.linkedin.com/in/aditya-aerpule-a22062309/" target="_blank" rel="noopener noreferrer">Coder Aadi</a></p>
      </div>
    </footer>
  );
};

export default Footer;
