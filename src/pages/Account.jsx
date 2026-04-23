import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import './Account.css';

function Account({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  return (
    <div className="account-page">
      <h2>My Account</h2>
      
      <div className="account-info">
        <div className="info-item">
          <label>Name</label>
          <p>{currentUser.firstName} {currentUser.lastName}</p>
        </div>
        <div className="info-item">
          <label>Email</label>
          <p>{currentUser.email}</p>
        </div>
        <div className="info-item">
          <label>Subscription</label>
          <p>{currentUser.subscribed ? 'Active ✨' : 'Free Plan'}</p>
        </div>
      </div>
      
      <div className="account-actions">
        <GlowButton onClick={() => navigate('/change-password')}>
          <i className="fas fa-key"></i> Forgot Password
        </GlowButton>
        
        {!currentUser.subscribed && (
          <GlowButton onClick={() => navigate('/subscription')}>
            <i className="fas fa-crown"></i> Upgrade to Premium
          </GlowButton>
        )}
      </div>
    </div>
  );
}

export default Account;