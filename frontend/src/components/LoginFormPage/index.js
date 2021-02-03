import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink, Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <div className="container">
      <div className="form-container sign-in-container">
        <form className="form__sign-in" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="social-signin">
            <NavLink className="social-fb tag" to="/login">
              <i class="fab fa-facebook-f "> Sign in with Facebook</i>
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
              value={credential}
              className="username-input"
              placeholder="Username"
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              className="password-input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="shadow buddy" type="submit">
            Sign In
          </button>
          <button className="shadow buddy" type="submit">
            Demo
          </button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button class="buddy ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="buddy ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;
