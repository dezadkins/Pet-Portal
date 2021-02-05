import React from "react";
import NavBar from "../NavBar/NavBar";
import "./PetProfile.css";

export default function PetProfile() {
  return (
    <>
      <NavBar />
      <div className="overview-wrapper">
        <div className="profile-wrapper ">
          <div className="profilePic-container ">
            <h1>Pet Profile</h1>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="graph-wrapper">
            <div className="graph-container ">
              <h1>Graph Div</h1>
            </div>
          </div>
        </div>
        <div className="appointment-container">
          <div className="appt-wrapper">
            <div className="appt-container ">
              <h1>Appt Div</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
