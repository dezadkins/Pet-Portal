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
    <form className="form__sign-in" onSubmit={handleSubmit}>
      <h1 className="signin-title">Sign In</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      {/* <div className="social-signin">
        <NavLink className="social-fb tag" to="/login">
          <i className="fab fa-facebook-f "> Sign in with Facebook</i>
        </NavLink>
      </div>
      <div>
        <NavLink className="social-goog tag" to="/login">
          <i className="fab fa-google-plus-g"> Sign in with Google</i>
        </NavLink>
      </div> */}
      <span className="or-this">OR</span>
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
  );
}

export default LoginFormPage;
