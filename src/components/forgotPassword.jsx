import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions.");
    } catch {
      setError("Failed to reset password. Please try again");
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <div className="container">
        <h2>Password Reset</h2>
        {error && <p className="danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" ref={emailRef} required />
          </label>

          {message ? (
            <p className="success">{message}</p>
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="button button-green"
            >
              Reset Password
            </button>
          )}
        </form>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <p className="needOrHaveAccount">
        Need an account?
        <Link to="/signup">Sign Up.</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
