import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  // Check if token exists
  if (!token) {
    return <Navigate to="/" />; // Redirect to login if no token
  }


  return children; // Render the children (protected route) if token exists
};

export default ProtectedRoute;
