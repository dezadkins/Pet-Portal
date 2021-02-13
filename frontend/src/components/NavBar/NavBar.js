import React from "react";
import { NavLink, useParams } from "react-router-dom";

import "./NavBar.css";

export default function NavBar({}) {
  const { petId, apptId } = useParams();
  return (
    <div>
      {/* <div className="title">Navbar</div> */}
      <nav className="navbar">
        <ul className="navbar__nav">
          <li className="logo">
            <NavLink class="nav-link" to="/">
              <span className="link-text logo-text">Pet Portal</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/pets/${petId}/health`}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="heartbeat"
                class="svg-inline--fa fa-heartbeat fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M468.7 76.5C423.6 32.2 375 32 362.3 32c-12.7 0-61.5.2-106.3 44.4C211.3 32.3 162.5 32 149.7 32c-12.7 0-61.4.2-106.4 44.5C15.4 104 0 140.7 0 179.9 0 214.1 12.3 246 33.8 272h120.8l29.9-71.8 56.9 126.4c5.5 12.3 22.9 12.7 28.9.6l49.7-99.4 22.1 44.2h136c21.5-26 33.8-57.9 33.8-92.1.1-39.2-15.3-75.9-43.2-103.4zM462.5 240H361.9l-27.6-55.2c-5.9-11.8-22.7-11.8-28.6 0l-48.9 97.9-58.2-129.3c-5.8-12.8-24-12.5-29.4.4L133.3 240H49.5c-9.2-14.6-42.6-82.7 18.3-142.7C90.4 75.1 120 64 149.7 64c33.9 0 54.5 6.3 106.3 57.3C311 67.1 330.5 64 362.3 64c29.7 0 59.3 11.1 81.8 33.3 61 60.1 27.5 128.2 18.4 142.7zM268.7 443.4c-6.2 6.1-16.2 6.1-22.4 0L108.9 304H64l159.9 162.2c18.7 18.5 48.6 18.4 67.3 0L448 304h-44.5L268.7 443.4z"
                ></path>
              </svg>
              <span className="link-text">Health</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/pets/${petId}/growth`}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="weight"
                class="svg-inline--fa fa-weight fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M448 64h-64.81C353.95 25.38 308.07 0 256 0s-97.95 25.38-127.19 64H64C28.71 64 0 92.71 0 128v320c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64V128c0-35.29-28.71-64-64-64zM256 32c70.69 0 128 57.31 128 128s-57.31 128-128 128-128-57.31-128-128S185.31 32 256 32zm224 416c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h45.56C100.94 115.63 96 137.22 96 160c0 88.22 71.78 160 160 160s160-71.78 160-160c0-22.78-4.94-44.37-13.56-64H448c17.67 0 32 14.33 32 32v320zM256 256c26.47 0 48-21.53 48-48 0-13.92-6.05-26.36-15.54-35.13l30.24-70.57c3.48-8.11-.28-17.52-8.41-21-8.08-3.48-17.52.27-21 8.41l-30.26 70.6C223.57 158 208 188.65 208 208c0 26.47 21.53 48 48 48zm0-64c8.84 0 16 7.16 16 16s-7.16 16-16 16-16-7.16-16-16 7.16-16 16-16z"
                ></path>
              </svg>
              <span className="link-text">Growth</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/pets/${petId}/appts/${apptId}`}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="calendar-alt"
                className="svg-inline--fa fa-calendar-alt fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
                ></path>
              </svg>
              <span className="link-text">Appointments</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/pets/${petId}/events`}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="pennant"
                class="svg-inline--fa fa-pennant fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M552 191.3c-30 6.2-115.6 12.5-260.7-63.6-87-45.7-158.1-51.8-210-45.2 9-8.8 14.7-21 14.7-34.5C96 21.5 74.5 0 48 0S0 21.5 0 48c0 20.8 13.4 38.4 32 45.1V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-79.6c40.2-27.2 102-56.4 179.5-60.2 28.7-1.4 76-5.8 137.9-18.8 4.4-.9 109.4-23.8 190-121.7 11.8-14.3-.7-36.2-19.4-32.4zM48 32c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm326.9 282.1c-59.9 12.5-105.4 16.8-133 18.2-84.8 4.2-145.3 35.1-177.9 54.2V117.7c47.2-10.6 119.5-10.5 212.4 38.3 118.9 62.4 202.3 72.4 249.5 70.4-69.5 69.7-150.1 87.5-151 87.7z"
                ></path>
              </svg>
              <span className="link-text">Milestones</span>{" "}
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
