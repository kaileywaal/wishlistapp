import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Sign in failed. Please try again");
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <div className="container">
        <h2>Log In</h2>
        {error && <p className="danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" ref={emailRef} required />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input type="password" ref={passwordRef} required />
          </label>
          <button
            disabled={loading}
            type="submit"
            className="button button-green"
          >
            Log In
          </button>
        </form>
        <div>
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      </div>
      <p className="needOrHaveAccount">
        Need an account?
        <Link to="/signup">Sign Up.</Link>
      </p>
    </div>
  );
}

export default Login;
