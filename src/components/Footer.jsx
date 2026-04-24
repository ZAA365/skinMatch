import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact-section">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fas fa-envelope"></i> skinmatch@gmail.com</p>
          <p><i className="fas fa-phone"></i> +966 123 456 789</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://instagram.com/skinmatch" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> @skinmatch.glow
            </a>
            <a href="https://tiktok.com/@skinmatch" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i> @skinmatch
            </a>
            <a href="https://facebook.com/skinmatch" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> SkinMatch
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/routine">Find Routine</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 SkinMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;