import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";

import "./LoginPage.css";

export default function LoginPage() {
  // const [signIn, setSignIn] = useState(false);
  // // const [signing, setSigning] = useState(false);

  // const showSignIn = () => {
  //   if (signIn) return;
  //   setSignIn(true);
  // };

  // useEffect(() => {
  //   if (!signIn) return;

  //   const signUp = () => {
  //     setSignIn(false);
  //   };
  //   document.addEventListener("click", signUp);

  //   return () => document.removeEventListener("click", signUp);
  // }, [signIn]);

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

        {/* <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn" onClick={signIn}>
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Greetings!</h1>
              <p>Sign up to start your Pet Portal</p>
              <button class="buddy ghost" id="signUp" onClick={signIn}>
                Sign Up
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
