import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate replace to="/login" />;
}

export default PrivateRoute;
