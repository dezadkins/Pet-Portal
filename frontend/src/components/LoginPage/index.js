import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";

import "./LoginPage.css";

export default function LoginPage() {
  const [toggle, setToggle] = useState(false);
  const [signing, setSigning] = useState(false);

  useEffect(() => {
    toggle
      ? document.body.classList.add("right-panel-active")
      : document.body.classList.remove("right-panel-active");
  }, [toggle]);

  useEffect(() => {
    signing
      ? document.body.classList.add("signIn")
      : document.body.classList.remove("signUp");
  }, [signing]);

  return (
    <div className="page-container">
      <h1 className="login-title">Pet Portal</h1>

      <div className="container">
        <div className="form-container sign-up-container">
          <SignupFormPage />
        </div>

        <div class="form-container sign-in-container">
          <LoginFormPage />
        </div>

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                class="ghost"
                id="signIn"
                onClick={() => setToggle(toggle)}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Greetings!</h1>
              <p>Sign up to start your Pet Portal</p>
              <button
                class="buddy ghost"
                id="signUp"
                onClick={() => setSigning(signing)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
