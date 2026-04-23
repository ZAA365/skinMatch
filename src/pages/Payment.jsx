import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import { DB } from '../utils/database';
import './Payment.css';

function Payment({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: ''
  });
  const [error, setError] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    setError('');

    // Simulate payment validation
    if (cardData.number.length < 16) {
      setError('Invalid card number');
      return;
    }

    // Process payment
    const updatedUser = { ...currentUser, subscribed: true };
    const userIndex = DB.users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
      DB.users[userIndex].subscribed = true;
    }
    
    DB.subscriptions.push({
      email: currentUser.email,
      date: new Date().toISOString(),
      type: location.state?.plan || 'one_time'
    });

    setCurrentUser(updatedUser);
    localStorage.setItem('skinmatch_user', JSON.stringify(updatedUser));
    
    alert('Payment successful! Welcome to premium ✨');
    navigate('/plan');
  };

  return (
    <div className="payment-page">
      <h2>💳 Payment Details</h2>
      
      <form onSubmit={handlePayment} className="payment-form">
        <div className="card-preview">
          <div className="card-brand">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
          </div>
        </div>
        
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardData.number}
            onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
          />
        </div>
        
        <div className="card-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              value={cardData.expiry}
              onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>
          <div className="form-group">
            <label>CVC</label>
            <input
              type="text"
              value={cardData.cvc}
              onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
              placeholder="123"
              maxLength="4"
            />
          </div>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <GlowButton type="submit">
          <i className="fas fa-lock"></i> Pay Now
        </GlowButton>
      </form>
    </div>
  );
}

export default Payment;