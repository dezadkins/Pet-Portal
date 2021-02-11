import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./PetHealth.css";

import axios from "axios";

const PetHealth = () => {
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
      <div className="pet-health__grid">
        <div className="pet-health-wrapper">
          <div className="box7"> Pet Image</div>
          <div className="box8">
            <h2>Pet's Health</h2>
          </div>
          <div className="box9">Vaccines</div>
          <div className="box10">Medications</div>
        </div>
      </div>
    </>
  );
};

export default PetHealth;
