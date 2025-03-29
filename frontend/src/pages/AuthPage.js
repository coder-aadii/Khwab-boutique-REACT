import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Get form data
      const formData = new FormData(e.target);
      const credentials = Object.fromEntries(formData);
      
      if (isLogin) {
        // Handle login
        console.log('Logging in with:', credentials);
        // After successful login
        navigate('/'); // Redirect to home page
      } else {
        // Handle registration
        console.log('Registering with:', credentials);
        // After successful registration
        navigate('/'); // Redirect to home page
      }
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle error (show error message to user)
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // After successful social login
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Sign in to continue shopping' : 'Join us for a better shopping experience'}</p>
        </div>

        <div className="auth-tabs">
          <button 
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <input 
                type="text" 
                name="fullName"
                placeholder="Full Name"
                required 
              />
            </div>
          )}
          
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Email Address"
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              name="password"
              placeholder="Password"
              required 
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="Confirm Password"
                required 
              />
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <div className="social-auth">
            <p>Or continue with</p>
            <div className="social-buttons">
              <button 
                type="button" 
                className="social-btn google"
                onClick={() => handleSocialLogin('Google')}
              >
                <i className="fab fa-google"></i>
                Google
              </button>
              <button 
                type="button" 
                className="social-btn facebook"
                onClick={() => handleSocialLogin('Facebook')}
              >
                <i className="fab fa-facebook"></i>
                Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
