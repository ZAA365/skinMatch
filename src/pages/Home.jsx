import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import logo from '../images/skinMatchLogo.jpeg';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero-section">
        {/* LOGO IN CENTER */}
        <div className="logo-container">
          <img 
            src={logo} 
            alt="SkinMatch Logo" 
            className="hero-logo"
          />
        </div>
        
        <h1 className="brand-title">SkinMatch</h1>
        <p className="glow-text">where you glow again</p>
        <h2 className="subtitle">find your matched skin care products</h2>
        <GlowButton onClick={() => navigate('/routine')}>
          <i className="fas fa-sparkles"></i> start
        </GlowButton>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <i className="fas fa-diagnoses"></i>
          <h3>Skin Analysis</h3>
          <p>Tell us about your skin type and concerns</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-flask"></i>
          <h3>Custom Routine</h3>
          <p>Get personalized morning and night routines</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-star"></i>
          <h3>Expert Products</h3>
          <p>Curated from top skincare brands</p>
        </div>
      </div>
    </div>
  );
}

export default Home;