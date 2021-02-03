import React, { useState, useEffect } from "react";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";

import "./LoginPage.css";

// return (
//   <CSSTransition
//     in={switch}
//     classNames="switch"
//     onClick={() => setSwitch(!switch)}
//     timeout={0}
//   ></CSSTransition>

export default function LoginPage() {
  const [switch, setSwitch] = useState(True);
  const [signing, setSigning] = useState(True);
  useEffect(() => {
    toggle
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [toggle]);

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
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Greetings</h1>
              <p>Sign up to start your Pet Portal</p>
              <button class="buddy ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
