import React, { useState, useEffect } from 'react';

interface LoginProps {}

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (userName === '' && password === '')
      setMessage('Please enter UserName & Password');
    else if (userName === '') setMessage('Please enter UserName');
    else if (password === '') setMessage('Please enter Password');
  };

  return (
    <div>
      UserName:
      <input
        data-testid='input-username'
        placeholder='UserName'
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />{' '}
      <br />
      Password:
      <input
        data-testid='input-password'
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{' '}
      <br />
      <p data-testId='text-alert'>{message}</p>
      <button data-testid='button-login' type='button' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
