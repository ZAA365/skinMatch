import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import { DB } from '../utils/database';
import { validations } from '../utils/validation';
import './Register.css';

function Register({ onRegister }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!validations.isOnlyLetters(formData.firstName)) {
      newErrors.firstName = 'Only letters allowed';
    }
    if (!validations.isOnlyLetters(formData.lastName)) {
      newErrors.lastName = 'Only letters allowed';
    }
    if (!validations.isValidEmail(formData.email)) {
      newErrors.email = 'Must be at least 8 chars, include @ and .com';
    }
    if (!validations.isStrongPassword(formData.password)) {
      newErrors.password = 'Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (DB.users.find(u => u.email === formData.email)) {
      newErrors.email = 'Email already registered';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      subscribed: false
    };
    
    DB.users.push(newUser);
    onRegister(newUser);
    navigate('/plan');
  };

  return (
    <div className="auth-page">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="John"
          />
          {errors.firstName && <span className="field-error">{errors.firstName}</span>}
        </div>
        
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Doe"
          />
          {errors.lastName && <span className="field-error">{errors.lastName}</span>}
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="example@gmail.com"
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Strong password"
          />
          {errors.password && <span className="field-error">{errors.password}</span>}
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder="Re-enter password"
          />
          {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
        </div>
        
        <GlowButton type="submit">Register</GlowButton>
      </form>
      
      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;