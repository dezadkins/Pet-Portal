import React from "react";
import NavBar from "../NavBar/NavBar";
import "./PetProfile.css";

export default function PetProfile() {
  return (
    <>
      <div className="page-wrapper">
        <NavBar />
        <div className="wrapper">
          <div className="profile-wrapper ">
            <div className="profilePic-container ">
              <h1>Pet Profile</h1>
            </div>
          </div>
        </div>
        <div className="wrapper-two">
          <div className="profile-wrapper-two ">
            <div className="profilePic-container ">
              <h1>appointment</h1>
            </div>
          </div>
          <div className="appt-container">Appointment Box</div>
          <div className="graph-contain">Graph Box</div>
        </div>
      </div>
      {/* <div className="overview-wrapper"> */}

      {/* <div className="appointment-container">
          <div className="appt-wrapper">
            <div className="appt-container ">
              <h1>Appt Div</h1>
            </div>
          </div>
        </div> */}
      {/* <div className="page-wrapper">
          <div className="graph-wrapper">
            <div className="graph-container ">
              <h1>Graph Div</h1>
            </div>
          </div>
        </div> */}
    </>
  );
}
