import React from 'react'; 
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  useEffect(() => {
    // In a real application, this would handle logout logic
    // Such as clearing tokens, cookies, or calling a logout API
    console.log('User logged out');
  }, []);

  // Redirect to home page after "logout"
  return <Navigate to="/" replace />;
};

export default Logout;