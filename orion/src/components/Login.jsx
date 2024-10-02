import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setEmailError('Please enter a valid email address');
      setIsEmailValid(false);
    } else {
      setEmailError('');
      setIsEmailValid(true);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setPasswordError('Your password is incorrect');
      setIsPasswordValid(false);
    } else {
      setPasswordError('');
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Please enter a valid email address');
      setIsEmailValid(false);
    }
    if (!password) {
      setPasswordError('Your password is incorrect');
      setIsPasswordValid(false);
    }
    // Add your form submission logic here
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <button className="login-tab1">Login</button>
          <button className="register-tab1" onClick={() => window.location.href='/Register'}>Register</button>
        </div>
        <h2>WELCOME BACK!!</h2>
        <p>We are Happy to See You Again.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">YOUR EMAIL</label>
          <div className="input-with-icon">
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={handleEmailChange} 
              required 
              className={isEmailValid === false ? 'input-error' : ''} 
            />
            {isEmailValid === false && <div className="error-icon">❌</div>}
          </div>
          {emailError && <p className="error-text">{emailError}</p>}

          <label htmlFor="password">YOUR PASSWORD</label>
          <div className="input-with-icon">
            <input 
              id="password" 
              type="password" 
              value={password} 
              onChange={handlePasswordChange} 
              required 
              className={isPasswordValid === false ? 'input-error' : ''} 
            />
            {isPasswordValid === false && <div className="error-icon">❌</div>}
          </div>
          {passwordError && <p className="error-text">{passwordError}</p>}

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              REMEMBER ME
            </label>
            <a href="#" className="forgot-password">FORGOT YOUR PASSWORD? Click here</a>
          </div>
          <button type="submit">LOGIN TO YOUR ACCOUNT</button>
        </form>
        <p className="register-link1">
          DON'T HAVE AN ACCOUNT? <a className="register-link1" onClick={() => window.location.href='/Register'}> Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
