import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import { validations } from '../utils/validation';
import { DB } from '../utils/database';
import './ChangePassword.css';

function ChangePassword({ currentUser }) {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({ newPass: '', confirmPass: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validations.isStrongPassword(passwords.newPass)) {
      setError('Password must be 8+ chars with uppercase, lowercase, number, and special character');
      return;
    }

    if (passwords.newPass !== passwords.confirmPass) {
      setError('Passwords do not match');
      return;
    }

    const userIndex = DB.users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
      DB.users[userIndex].password = passwords.newPass;
      alert('Password changed successfully!');
      navigate('/account');
    }
  };

  return (
    <div className="auth-page">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={passwords.newPass}
            onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
            placeholder="Enter new password"
          />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            value={passwords.confirmPass}
            onChange={(e) => setPasswords({ ...passwords, confirmPass: e.target.value })}
            placeholder="Confirm new password"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <GlowButton type="submit">Change Password</GlowButton>
      </form>
    </div>
  );
}

export default ChangePassword;