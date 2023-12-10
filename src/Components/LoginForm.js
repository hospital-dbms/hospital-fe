import React, { useState } from 'react';
import '../css/login.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform your validation here
    if (email === '' || password === '') {
      alert('Email and password are required!');
      return;
    }

    // Password validation
    if (password.length < 8 || !/[A-Z]/.test(password.charAt(0))) {
      alert('Password must be at least 8 characters long and start with an uppercase letter.');
      return;
    }
  };

  return (
    <>
      <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
          <form onSubmit={{handleLogin}}>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-2'>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                placeholder="Enter Email" 
                className='form-control'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                placeholder="Enter Password" 
                className='form-control'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className='mb-2'>
              <input 
                type="checkbox" 
                className='custom-control custom-checkbox' 
                id='check'
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="check" className='custom-input-label ms-2'>Remember me</label>
            </div>
            <div className='d-grid'>
              <button type="submit" className='btn btn-primary'>Sign in</button>
            </div>
            <p className='text-end mt-2'>
              Forgot <a href=''>Password</a><Link to='/signup' className='ms-2'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
