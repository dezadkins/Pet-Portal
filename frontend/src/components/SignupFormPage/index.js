import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form className="sign-up__form-contain" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="social-signin">
        <NavLink className="social-fb tag" to="/login">
          <i class="fab fa-facebook-f"> Sign in with Facebook</i>
        </NavLink>
      </div>
      <div>
        <NavLink className="social-goog tag" to="/login">
          <i class="fab fa-google-plus-g"> Sign in with Google</i>
        </NavLink>
      </div>
      <span>OR</span>
      <label>
        <input
          type="text"
          value={email}
          className="email-input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          value={username}
          className="up-username-input"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          className="up-password-input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="password"
          value={confirmPassword}
          className="confirm-pass-input"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button className="sign-in-button shadow" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupFormPage;
