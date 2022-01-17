import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("SquareBoatsToken");

  return isAuthenticated !== null ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
