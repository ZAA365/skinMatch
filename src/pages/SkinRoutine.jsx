import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import './SkinRoutine.css';

function SkinRoutine({ userSelections, setUserSelections }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const skinTypes = ['oily', 'combination', 'dry'];
  const concerns = ['Acne', 'Dark spots', 'Blackheads', 'Redness', 'Damaged skin barrier', 'Dryness', 'Anti aging'];
  const stepsOptions = [2, 3, 4, 5, 6];
  const budgetOptions = ['100 to 300', '300 to 500', '500 to 600', 'no limit'];

  const handleSelection = (step, value) => {
    setUserSelections(prev => ({ ...prev, [step]: value }));
  };

  const isStepSelected = (step) => {
    switch(step) {
      case 'skinType': return userSelections.skinType !== '';
      case 'skinConcern': return userSelections.skinConcern !== '';
      case 'steps': return userSelections.steps !== null;
      case 'budget': return userSelections.budget !== '';
      default: return false;
    }
  };

  const isOptionDisabled = (type, value) => {
    if (type === 'steps' && (value === 5 || value === 6)) return true;
    if (type === 'budget' && (value === '100 to 300' || value === '300 to 500')) return true;
    return false;
  };

  const handleGenerate = () => {
    if (userSelections.skinType && userSelections.skinConcern && userSelections.steps && userSelections.budget) {
      navigate('/plan');
    } else {
      alert('Please complete all steps before generating your routine.');
    }
  };

  return (
    <div className="routine-page">
      <h2>✨ Build Your Perfect Routine</h2>
      
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
          <h3>Step 3: Steps (Morning & Night)</h3>
          <div className="options-grid">
            {stepsOptions.map(num => (
              <button
                key={num}
                className={`option-btn ${isOptionDisabled('steps', num) ? 'disabled' : ''} ${userSelections.steps === num ? 'selected' : ''}`}
                onClick={() => !isOptionDisabled('steps', num) && handleSelection('steps', num)}
              >
                {num} steps
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
              >
                {budget}
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