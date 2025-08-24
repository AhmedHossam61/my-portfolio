import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ahmed Hossam</h3>
            <p>AI/ML Engineer passionate about creating intelligent solutions that solve real-world problems through deep learning and computer vision.</p>
            <div className="footer-social">
              <a href="https://github.com/AhmedHossam61" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/ahmed-hossam61" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>ahmedhoss.2023@gmail.com</p>
            <p>+20 106 540 9960</p>
            <p>Nasr City, Cairo, Egypt</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Ahmed Hossam Abdelrahman. All rights reserved.</p>
          <p>Built with React ⚛️ and AI passion 🤖</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;