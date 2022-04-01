import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value != passwordConfirmRef.current.value) {
      return setError("Passwords do not match.");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account. Please try again");
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <div className="container">
        <h2>Sign Up</h2>
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
          <label htmlFor="passwordConfirm">
            <p>Confirm Password</p>
            <input
              disabled={loading}
              type="password"
              ref={passwordConfirmRef}
              required
            />
          </label>
          <button
            disabled={loading}
            type="submit"
            className="button button-green"
          >
            Sign Up
          </button>
        </form>
      </div>
      <p className="needOrHaveAccount">
        Already have an account?
        <Link to="/login">Log in.</Link>
      </p>
    </div>
  );
}

export default Signup;

//TODO: implement password check to ensure passwords meet requirements
