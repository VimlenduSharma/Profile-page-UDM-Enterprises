import React from 'react'; 
import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to the Profile page
  return <Navigate to="/profile" replace />;
};

export default Index;