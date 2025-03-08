import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm({ isLogin, toggleForm }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin 
      ? 'http://localhost:8000/api/auth/login' 
      : 'http://localhost:8000/api/auth/register';

    try {
      const response = await axios.post(endpoint, { username, password });
      const { token } = response.data;

      localStorage.setItem('token', token);
      
      navigate('/dashboard');
    } catch (err) {
      console.error('Authentication error:', err.response.data);
      setError(err.response.data.error || 'An error occurred');
    }
  };

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
        >
          {isLogin ? 'Log In' : 'Register'}
        </button>
      </form>
      <p className="mt-4 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button onClick={toggleForm} className="text-blue-600 underline">
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
