import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-header">
          <button className="login-tab"onClick={() => window.location.href='/Login'}>Login</button>
          <button className="register-tab">Register</button>
        </div>
        <h2>REGISTER ACCOUNT</h2>
        <form>
          <label htmlFor="email">YOUR EMAIL</label>
          <input id="email" type="email" required />
          <label htmlFor="password">YOUR PASSWORD</label>
          <input id="password" type="password" required />
          <label htmlFor="repeat-password">REPEAT PASSWORD</label>
          <input id="repeat-password" type="password" required />
          <button type="submit">CREATE YOUR ACCOUNT</button>
        </form>
        <p className="info-text">
          You’ll Receive A Confirmation Email In Your Inbox With A Link So You Can Activate Your Account. If You Have Any Problems, <a href="#"className="contact">Contact Us!</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
