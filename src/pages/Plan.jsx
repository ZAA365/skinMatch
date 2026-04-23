import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import { DB } from '../utils/database';
import './Plan.css';

function Plan({ currentUser, userSelections }) {
  const navigate = useNavigate();
  const routineKey = `${userSelections.skinType}_${userSelections.skinConcern}`;
  const routine = DB.routines[routineKey] || {
    morning: [{ product: 'Custom Cleanser', link: '#' }],
    night: [{ product: 'Night Cream', link: '#' }],
    total: 'N/A'
  };

  return (
    <div className="plan-page">
      <h2>🌅 Your Morning Routine</h2>
      <div className="routine-section morning">
        {routine.morning.map((item, idx) => (
          <div key={idx} className="routine-item">
            <span className="step-number">{idx + 1}</span>
            <div className="product-info">
              <p className="product-name">{item.product}</p>
              {item.link && item.link !== '#' && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="product-link">
                  View Product <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="night-section">
        <h3>🌙 Night Routine</h3>
        {currentUser.subscribed ? (
          <div className="routine-section night">
            {routine.night.map((item, idx) => (
              <div key={idx} className="routine-item">
                <span className="step-number">{idx + 1}</span>
                <div className="product-info">
                  <p className="product-name">{item.product}</p>
                  {item.link && item.link !== '#' && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="product-link">
                      View Product <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="locked-content">
            <p>🔒 Night routine requires subscription</p>
            <GlowButton onClick={() => navigate('/subscription')}>
              <i className="fas fa-crown"></i> Subscribe Now
            </GlowButton>
          </div>
        )}
      </div>
      
      {routine.total && (
        <div className="total-section">
          <p>Total: <strong>{routine.total}</strong></p>
        </div>
      )}
    </div>
  );
}

export default Plan;