import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar2.css";

export default function NavBar2() {
  return (
    <div>
      <div className="title">Navbar2</div>
      <nav className="navbar">
        <ul className="navbar__nav">
          <li className="logo">
            <NavLink class="nav-link" to="/navbar">
              <div className="logo-circle">
                <span className="link-text-two logo-text-two">Pet Portal</span>
              </div>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/navbar">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="plus"
                className="svg-inline--fa fa-plus fa-w-12"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
                ></path>
              </svg>
              <span className="link-text">Add New Pet</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
