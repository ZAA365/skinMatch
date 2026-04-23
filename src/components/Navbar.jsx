import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ currentUser, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <i className="fas fa-seedling"></i>
          <span>SkinMatch</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i> Home
          </Link>
          <a href="#contact" className="nav-link" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <i className="fas fa-envelope"></i> Contact us
          </a>
          
          {currentUser ? (
            <div className="nav-user-menu">
              <Link to="/account" className="nav-link">
                <i className="fas fa-user-circle"></i> Account
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