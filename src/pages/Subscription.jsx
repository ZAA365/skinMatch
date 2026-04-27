import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import './Subscription.css';

function Subscription({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const plans = [
    { id: 'one_time', name: '1 Plan', price: '19.95 SAR', value: 19.95 },
    { id: 'monthly', name: 'Monthly', price: '45.95 SAR', value: 45.95 },
    { id: 'yearly', name: 'Yearly', price: '270.95 SAR', value: 270.95 }
  ];

  const handleContinue = () => {
    if (!acceptedTerms) {
      alert('Please accept terms and conditions');
      return;
    }
    navigate('/payment', { state: { plan: selectedPlan } });
  };

  return (
    <div className="subscription-page">
      <h2>Choose Your Plan</h2>
      
      <div className="plans-grid">
        {plans.map(plan => (
          <div
            key={plan.id}
            className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h3>{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
          </div>
        ))}
      </div>
      
      <div className="terms-section">
        <label className="terms-checkbox">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          <span>I accept the <a href="/terms">terms and conditions</a></span>
        </label>
      </div>
      
      <GlowButton 
        onClick={handleContinue}
        disabled={!selectedPlan || !acceptedTerms}
      >
        Continue to Payment
      </GlowButton>
    </div>
  );
}

export default Subscription;
