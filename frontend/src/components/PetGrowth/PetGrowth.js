import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./PetGrowth.css";

import axios from "axios";

const PetGrowth = () => {
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
      <div className="pet-growth__grid">
        <div className="pet-growth-wrapper">
          <div className="box12"> Pet Image</div>
          <div className="box13">
            <h2>Pet's Growth</h2>
          </div>
          <div className="box14">Weight Graph</div>
          <div className="box15">Length Graph</div>
        </div>
      </div>
    </>
  );
};

export default PetGrowth;
