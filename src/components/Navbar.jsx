import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/skinMatchLogo.jpeg';
import './Navbar.css';

function Navbar({ currentUser, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="SkinMatch" className="logo-image" />
          <span>SkinMatch</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/routine" className="nav-link">
            <i className="fas fa-sparkles"></i> Routine
          </Link>
          <a href="#contact" className="nav-link" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <i className="fas fa-envelope"></i> Contact us
          </a>
          
          {currentUser ? (
            <div className="nav-user-menu">
              {/* ADMIN BUTTON - Only visible for admin users */}
              {currentUser.isAdmin && (
                <Link to="/admin" className="nav-link admin-nav-btn">
                  <i className="fas fa-shield-alt"></i> Admin
                </Link>
              )}
              <Link to="/account" className="nav-link">
                <i className="fas fa-user-circle"></i> Account
              </Link>
              <Link to="/plan" className="nav-link">
                <i className="fas fa-calendar-check"></i> My Plan
              </Link>
              <button onClick={onLogout} className="nav-link logout-btn">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="nav-link">
              <i className="fas fa-user"></i> Log in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;