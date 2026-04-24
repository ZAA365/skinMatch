import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SkinRoutine from './pages/SkinRoutine';
import Login from './pages/Login';
import Register from './pages/Register';
import Plan from './pages/Plan';
import Account from './pages/Account';
import ChangePassword from './pages/ChangePassword';
import Subscription from './pages/Subscription';
import Payment from './pages/Payment';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import { DB } from './utils/database';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userSelections, setUserSelections] = useState({
    skinType: '',
    skinConcern: '',
    steps: null,
    budget: ''
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('skinmatch_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      const foundUser = DB.users.find(u => u.email === user.email);
      if (foundUser) {
        setCurrentUser(foundUser);
      }
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('skinmatch_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('skinmatch_user');
  };

  return (
    <div className="App">
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/routine"
            element={<SkinRoutine userSelections={userSelections} setUserSelections={setUserSelections} currentUser={currentUser} />} 
            />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleLogin} />} />
          <Route 
            path="/plan" 
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Plan currentUser={currentUser} userSelections={userSelections} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/account" 
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Account currentUser={currentUser} setCurrentUser={setCurrentUser} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/change-password" 
            element={
              <ProtectedRoute currentUser={currentUser}>
                <ChangePassword currentUser={currentUser} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/subscription" 
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Subscription currentUser={currentUser} setCurrentUser={setCurrentUser} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payment" 
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Payment currentUser={currentUser} setCurrentUser={setCurrentUser} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Admin />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;