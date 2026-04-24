import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import { DB } from '../utils/database';
import { validations } from '../utils/validation';
import './Login.css';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validations.isValidEmail(formData.email)) {
      setError('Invalid email format');
      return;
    }

    const user = DB.users.find(u => u.email === formData.email);
    
    if (!user) {
      setError('No account found. Please register first.');
      return;
    }

    if (user.password !== formData.password) {
      setError('Wrong password');
      return;
    }

    onLogin(user);
    
    // REDIRECT: Admin goes to dashboard, others go to plan
    if (user.isAdmin) {
      navigate('/admin');
    } else {
      navigate('/plan');
    }
  };

  return (
    <div className="auth-page">
      <h2>Login to SkinMatch</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter password"
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <GlowButton type="submit">Login</GlowButton>
      </form>
      
      {/* Quick test credentials */}
      <div className="test-credentials">
        <p><strong>Test Accounts:</strong></p>
        <p>Admin: admin@skinmatch.com / Admin@123</p>
        <p>Normal: normal@skinmatch.com / Normal@123</p>
        <p>Subscribed: user1@skinmatch.com / Subscribed@123</p>
      </div>
      
      <p className="auth-link">
        Don't have an account? <Link to="/register">Register now</Link>
      </p>
    </div>
  );
}

export default Login;