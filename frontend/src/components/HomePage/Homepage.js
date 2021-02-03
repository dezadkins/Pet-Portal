import React from "react";
import NavBar2 from "../NavBar2/NavBar2";
import "./Homepage.css";

export default function HomePage() {
  return (
    <>
      <NavBar2 />
      <div className="homepage-container">
        <div className="pet-photo"> Pet Image</div>
        <div className="pet-photo"> Pet Image</div>
      </div>
    </>
  );
}
