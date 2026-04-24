import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import { DB } from '../utils/database';
import './Plan.css';

function Plan({ currentUser, userSelections }) {
  const navigate = useNavigate();
  
  // FIX: Normalize the key to lowercase for matching
  const routineKey = `${userSelections.skinType.toLowerCase()}_${userSelections.skinConcern.toLowerCase()}`;
  
  console.log('Looking for routine:', routineKey); // Debug - check console
  console.log('Available routines:', Object.keys(DB.routines)); // Debug
  
  const routine = DB.routines[routineKey]|| DB.routines['default'];

  if (!routine) {
    return (
      <div className="plan-page">
        <div className="no-routine">
          <h2>😔 No Routine Found</h2>
          <p>We couldn't find a routine for <strong>{userSelections.skinType}</strong> skin with <strong>{userSelections.skinConcern}</strong> concerns.</p>
          <p>Debug: Looking for key: <code>{routineKey}</code></p>
          <p>Available keys: <code>{Object.keys(DB.routines).join(', ')}</code></p>
          <GlowButton onClick={() => navigate('/routine')}>
            <i className="fas fa-arrow-left"></i> Go Back
          </GlowButton>
        </div>
      </div>
    );
  }

  return (
    <div className="plan-page">
      <h2>🌅 Your Morning Routine</h2>
      <p className="routine-subtitle">
        {userSelections.steps} steps • {userSelections.skinType} skin • {userSelections.skinConcern}
      </p>
      <div className="routine-section morning">
        {routine.morning.map((item, idx) => (
          <div key={idx} className="routine-item">
            <span className="step-number">{idx + 1}</span>
            <img 
              src={item.image} 
              alt={item.product} 
              className="product-image"
              onError={(e) => { 
                e.target.src = 'https://placehold.co/150x150/f6bdbc/white?text=Product'; 
              }}
            />
            <div className="product-info">
              <p className="product-name">{item.product}</p>
              {item.link && item.link !== '#' && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="product-link"
                >
                  <i className="fas fa-shopping-cart"></i> Buy Product <i className="fas fa-external-link-alt"></i>
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
                <img 
                  src={item.image} 
                  alt={item.product} 
                  className="product-image"
                  onError={(e) => { 
                    e.target.src = 'https://placehold.co/150x150/94cce0/white?text=Product'; 
                  }}
                />
                <div className="product-info">
                  <p className="product-name">{item.product}</p>
                  {item.link && item.link !== '#' && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="product-link"
                    >
                      <i className="fas fa-shopping-cart"></i> Buy Product <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="locked-content">
            <div className="lock-icon">🔒</div>
            <p>Night routine requires subscription</p>
            <p className="lock-subtitle">Unlock your complete day & night routine</p>
            <GlowButton onClick={() => navigate('/subscription')}>
              <i className="fas fa-crown"></i> Subscribe Now
            </GlowButton>
          </div>
        )}
      </div>
      
      {routine.total && (
        <div className="total-section">
          <p>Total Estimated Cost: <strong>{routine.total}</strong></p>
          <p className="total-note">*Prices may vary by retailer</p>
        </div>
      )}

      <div className="tips-section">
        <h3>💡 Skincare Tips for {userSelections.skinConcern}</h3>
        <ul>
          <li>Always patch test new products</li>
          <li>Apply products from thinnest to thickest consistency</li>
          <li>Wait 30 seconds between layers</li>
          <li>Never skip sunscreen in the morning</li>
        </ul>
      </div>
    </div>
  );
}

export default Plan;