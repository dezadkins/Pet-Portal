import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./PetProfile.css";
import axios from "axios";
import WeightChart from "../WeightChart/WeightChart";

export default function PetProfile() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    const data = await fetch("/api/pets/:petId");
    const pets = await data.json();
    setPets(pets);
  };

  return (
    <>
      <NavBar />
      <div className="grid">
        <div className="profilepage-wrapper">
          <div className="box1"></div>
          <div className="box2">
            <h2>Overview</h2>
          </div>
          <div className="box3">
            <h2>Upcoming Appointments</h2>
          </div>
          <div className="box4">
            <WeightChart />
          </div>
        </div>
        <div className="box6">
          <h2>Summary</h2>
        </div>
      </div>
    </>
  );
}
