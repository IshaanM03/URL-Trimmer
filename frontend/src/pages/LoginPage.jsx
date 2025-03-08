import React, { useState } from 'react';
import LoginForm from '../components/LoginForm.jsx';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="h-screen flex">
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100 p-8">
        <LoginForm isLogin={isLogin} toggleForm={toggleForm} />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">Welcome to my URL-trimmer</h2>
          <p className="text-gray-700">
            This is a URL-trimmer which I have created where I used React + Vite + TailwindCSS for the frontend and Express.js + Node.js for the backend. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
