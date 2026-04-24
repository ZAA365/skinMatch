import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import './SkinRoutine.css';

function SkinRoutine({ userSelections, setUserSelections, currentUser }) {
  const navigate = useNavigate();
  
  // FIXED: Match these EXACTLY with database keys
  const skinTypes = ['oily', 'dry', 'sensitive'];  // Removed "combination"
  const concerns = ['Acne', 'Dark spots', 'Blackheads', 'Redness', 'Damaged skin barrier', 'Dryness', 'Anti aging'];
  const stepsOptions = [2, 3, 4, 5, 6];
  const budgetOptions = ['100 to 300', '300 to 500', '500 to 600', 'no limit'];

  const handleSelection = (step, value) => {
    setUserSelections(prev => ({ ...prev, [step]: value }));
  };

  // Check if user is subscribed - steps 5,6 and budgets 100-300, 300-500 require subscription
  const isSubscribed = currentUser?.subscribed || false;

  const isOptionDisabled = (type, value) => {
    // If subscribed, nothing is disabled
    if (isSubscribed) return false;
    
    // For non-subscribed: disable steps 5,6
    if (type === 'steps' && (value === 5 || value === 6)) return true;
    
    // For non-subscribed: disable lower budgets
    if (type === 'budget' && (value === '100 to 300' || value === '300 to 500')) return true;
    
    return false;
  };

  const handleGenerate = () => {
    if (userSelections.skinType && userSelections.skinConcern && userSelections.steps && userSelections.budget) {
      // Check if the routine exists in database
      const routineKey = `${userSelections.skinType.toLowerCase()}_${userSelections.skinConcern.toLowerCase()}`;
      navigate('/plan');
    } else {
      alert('Please complete all steps before generating your routine.');
    }
  };

  return (
    <div className="routine-page">
      <h2>✨ Build Your Perfect Routine</h2>
      
      {!isSubscribed && (
        <div className="upgrade-banner">
          <p>🔒 Some options are locked for free accounts. <a href="/subscription">Subscribe</a> to unlock all steps & budgets!</p>
        </div>
      )}
      
      <div className="steps-container">
        <div className="step-card">
          <h3>Step 1: Skin Type</h3>
          <div className="options-grid">
            {skinTypes.map(type => (
              <button
                key={type}
                className={`option-btn ${userSelections.skinType === type ? 'selected' : ''}`}
                onClick={() => handleSelection('skinType', type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="step-card">
          <h3>Step 2: Skin Concerns</h3>
          <div className="options-grid">
            {concerns.map(concern => (
              <button
                key={concern}
                className={`option-btn ${userSelections.skinConcern === concern ? 'selected' : ''}`}
                onClick={() => handleSelection('skinConcern', concern)}
              >
                {concern}
              </button>
            ))}
          </div>
        </div>

        <div className="step-card">
          <h3>Step 3: Steps (Morning & Night each)</h3>
          <div className="options-grid">
            {stepsOptions.map(num => (
              <button
                key={num}
                className={`option-btn ${isOptionDisabled('steps', num) ? 'disabled' : ''} ${userSelections.steps === num ? 'selected' : ''}`}
                onClick={() => !isOptionDisabled('steps', num) && handleSelection('steps', num)}
                title={isOptionDisabled('steps', num) ? 'Subscription required' : ''}
              >
                {num} steps {isOptionDisabled('steps', num) && '🔒'}
              </button>
            ))}
          </div>
        </div>

        <div className="step-card">
          <h3>Step 4: Budget (SAR)</h3>
          <div className="options-grid">
            {budgetOptions.map(budget => (
              <button
                key={budget}
                className={`option-btn ${isOptionDisabled('budget', budget) ? 'disabled' : ''} ${userSelections.budget === budget ? 'selected' : ''}`}
                onClick={() => !isOptionDisabled('budget', budget) && handleSelection('budget', budget)}
                title={isOptionDisabled('budget', budget) ? 'Subscription required' : ''}
              >
                {budget} {isOptionDisabled('budget', budget) && '🔒'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="generate-section">
        <GlowButton onClick={handleGenerate}>
          <i className="fas fa-magic"></i> Generate my matchy routine
        </GlowButton>
      </div>
    </div>
  );
}

export default SkinRoutine;