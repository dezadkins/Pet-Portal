import React from "react";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";

import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="page-container">
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
              <button class="shadow" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
