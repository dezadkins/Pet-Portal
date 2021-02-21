import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VaccineFormModal from "../VaccineModal";

import NavBar from "../NavBar/NavBar";
import "./PetHealth.css";

import axios from "axios";
import MedFormModal from "../MedFormModal";

const PetHealth = () => {
  const [pet, setPet] = useState([]);
  const [vacs, setVacs] = useState("");
  const [meds, setMeds] = useState("");
  const { petId, vacId, medId } = useParams();

  useEffect(() => {
    fetchPets();
  }, [petId]);

  const fetchPets = async () => {
    const data = await fetch(`/api/pets/${petId}`);
    const pets = await data.json();
    setPet(pets);
  };

  useEffect(() => {
    fetchVacs();
  }, [vacId]);

  const fetchVacs = async () => {
    const data = await fetch(`/api/pets/${petId}/vacs`);
    const vacs = await data.json();
    console.log("Vaccines", vacs);
    setVacs(vacs);
  };

  const newPetVac = () => {
    if (!vacs) {
      return;
      <p>No Vaccines Added</p>;
    } else {
      return (
        <ol>
          {vacs.map((vac, i) => (
            <li key={vac.name}>{`${vac.name} given on ${vac.dateGiven}`} </li>
          ))}
        </ol>
      );
    }
  };

  useEffect(() => {
    fetchMeds();
  }, [medId]);

  const fetchMeds = async () => {
    const data = await fetch(`/api/pets/${petId}/meds`);
    const meds = await data.json();
    console.log("MEDSSSS", meds);
    setMeds(meds);
  };

  const newPetMed = () => {
    if (!meds) {
      return;
      <p>No Medications Added</p>;
    } else {
      return (
        <ol>
          {meds.map((med, i) => (
            <li key={med.name}>{`${med.name} `} </li>
          ))}
        </ol>
      );
    }
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
            {newPetVac()}

            <VaccineFormModal />
          </div>
          <div className="box10">
            <p className="med-list">Medications</p>
            {newPetMed()}

            <MedFormModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default PetHealth;
