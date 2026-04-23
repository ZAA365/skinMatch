import React from 'react';
import './GlowButton.css';

function GlowButton({ children, onClick, disabled, className = '' }) {
  return (
    <button 
      className={`glow-button ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default GlowButton;