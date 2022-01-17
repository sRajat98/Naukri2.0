import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("SquareBoatsToken");

  return !isAuthenticated ? children : <Navigate to="/home" />;
};

export default ProtectedRoute;
