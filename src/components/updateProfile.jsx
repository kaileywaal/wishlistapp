import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value != passwordConfirmRef.current.value) {
      return setError("Passwords do not match.");
    }

    const promises = [];
    setLoading(true);
    setError("");
    // if email changes, add to promise
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="updateProfile">
      <div className="container">
        <h2>Update Profile</h2>
        {error && <p className="danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep your current password"
            />
          </label>
          <label htmlFor="passwordConfirm">
            <p>Confirm Password</p>
            <input
              disabled={loading}
              type="password"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep your current password"
            />
          </label>
          <button
            disabled={loading}
            type="submit"
            className="button button-green"
          >
            Update
          </button>
        </form>
      </div>
      <p className="needOrHaveAccount">
        <Link to="/">Cancel</Link>
      </p>
    </div>
  );
}

export default UpdateProfile;

//TODO: implement password check to ensure passwords meet requirements
