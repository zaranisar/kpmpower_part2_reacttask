import React, { useState } from 'react';
import './Login.css'; 

function Login() {
//initialize variables to an empty string
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const hardcodedUsername = 'zara.nisar317@gmail.com';
    const hardcodedPassword = 'kpmpower7890!';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      window.location.href = `/welcome?username=${username}`;
    } 
    
    else {
      setError('Username or Password is incorrect.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Sign In With</h2>
        <div className="social-buttons">
          <button type="button" className="facebook-button" onClick={() => window.location.href = 'https://facebook.com'}>  
          <img src="/facebook-logo.png" alt="Facebook logo" className="social-logo" />Facebook</button>
          <button type="button" className="google-button" onClick={() => window.location.href = 'https://google.com'}>
          <img src="/google-logo.png" alt="Google logo" className="social-logo" />Google</button>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input 
            type="email" 
            id="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">
            Password <a href="#" className="forgot-link">Forgot?</a>
          </label>
          <input 
            type="password" 
            id="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" class="signin-button">Sign In</button>     
        <div className="extra-links">
        <a href="#">Not a member? Sign up now</a>
      </div>  
      </form>
    </div>
  );
}

export default Login;
