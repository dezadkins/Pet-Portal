import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VaccineFormModal from "../VaccineModal";

import NavBar from "../NavBar/NavBar";
import "./PetHealth.css";

import axios from "axios";
import MedFormModal from "../MedFormModal";

const PetHealth = () => {
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
      <div className="pet-health__grid">
        <div className="pet-health-wrapper">
          <div className="box7">
            <img className="profile-petpic" src={pet.photoURL} />
          </div>
          <div className="box8">
            <h2>Pet's Health</h2>
          </div>
          <div className="box9">
            <p className="med-list">Vaccines</p>
            <VaccineFormModal />
          </div>
          <div className="box10">
            <p className="med-list">Medications</p>

            <MedFormModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default PetHealth;
