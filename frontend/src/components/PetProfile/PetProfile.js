import React from "react";
import NavBar from "../NavBar/NavBar";
import "./PetProfile.css";
import axios from "axios";

export default function PetProfile() {
  return (
    <>
      <div className="grid">
        <div className="profilepage-wrapper">
          <div className="box1">
            <h2>Pet Image</h2>
          </div>
          <div className="box2">
            <h2>Overview</h2>
          </div>
          <div className="box3">
            <h2>Upcoming Appointments</h2>
          </div>
          <div className="box4">
            <h2>Graph</h2>
          </div>
          <div className="box5">
            <h2>Upcoming Visits</h2>
          </div>
        </div>
        <div className="box6">
          <h2>Summary</h2>
        </div>
      </div>
    </>
  );
}
