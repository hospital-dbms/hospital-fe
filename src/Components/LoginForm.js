import React, { useState } from 'react';
import '../css/login.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handlephoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
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
    if (phoneNumber === '' || password === '') {
      alert('phoneNumber and password are required!');
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
      <div className='login template d-flex justify-content-center align-items-center vh-100 bg-white'>
        <div className='form_container p-5 rounded bg-white'>
          <form onSubmit={{handleLogin}}>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-2'>
              <label >Phone Number</label>
              <input 
                placeholder="Enter phoneNumber" 
                className='form-control'
                value={phoneNumber}
                onChange={handlephoneNumberChange}
              />
            </div>
            <div className='mb-2'>
              <label>Password</label>
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
