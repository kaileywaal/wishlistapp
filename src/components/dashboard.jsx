import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div>
      <strong>Email: </strong>
      {currentUser.email}
      <Link to="/update-profile">Update Profile</Link>
      <button onClick={handleLogout} className="button">
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
