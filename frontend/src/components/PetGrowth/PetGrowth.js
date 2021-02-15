import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WeightChart from "../WeightChart/WeightChart";
import LengthChart from "../LengthChart/LengthChart";

import NavBar from "../NavBar/NavBar";
import "./PetGrowth.css";

import axios from "axios";

const PetGrowth = () => {
  const [pet, setPet] = useState([]);
  const [appt, setAppt] = useState([]);
  const { petId } = useParams();

  useEffect(() => {
    fetchPets();
  }, [petId]);

  const fetchPets = async () => {
    const data = await fetch(`/api/pets/${petId}`);
    const pets = await data.json();
    setPet(pets);
  };

  return (
    <>
      <NavBar />
      <div className="pet-growth__grid">
        <div className="pet-growth-wrapper">
          <div className="box12">
            <img className="profile-petpic" src={pet.photoURL} />
          </div>
          <div className="box13">
            <h2>Pet's Growth</h2>
          </div>
          <div className="box14">
            <WeightChart />
          </div>
          <div className="box15">
            <LengthChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default PetGrowth;