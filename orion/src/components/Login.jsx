import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <button className="login-tab1">Login</button>
          <button className="register-tab1"onClick={() => window.location.href='/Register'}>Register</button>
        </div>
        <h2>WELCOME BACK!!</h2>
        <p>We are Happy to See You Again.</p>
        <form>
          <label htmlFor="email">YOUR EMAIL</label>
          <input id="email" type="email" required />
          <label htmlFor="password">YOUR PASSWORD</label>
          <input id="password" type="password" required />
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
