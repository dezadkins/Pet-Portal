import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import VaccineFormModal from "../VaccineModal";

import NavBar from "../NavBar/NavBar";
import "./PetHealth.css";

import axios from "axios";
import MedFormModal from "../MedFormModal";

const PetHealth = () => {
  const [pet, setPet] = useState([]);
  const [vacs, setVaccines] = useState([]);
  // const [vacs, setVacs] = useState("");
  const [meds, setMeds] = useState([]);
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
    setVaccines(vacs);
  };

  const newPetVac = () => {
    console.log("hi", vacs);
    if (vacs.length === 0) {
      return <p className="vac-list1">No Vaccines Added</p>;
    } else {
      return (
        <ul className="vac-list1" setVaccines={setVaccines}>
          {vacs.map((vac, i) => (
            <li key={vac.name}>
              {`${vac.name} given on ${new Date(vac.dateGiven).toDateString(
                "%B %d %Y"
              )}`}{" "}
            </li>
          ))}
        </ul>
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
    if (meds.length === 0) {
      return <p className="med-list1">No Medications Added</p>;
    } else {
      return (
        <ul className="med-list1">
          {meds.map((med, i) => (
            <li key={med.name}>
              {`${med.dosage} ${med.unit} of ${med.name}  ${med.frequency}`}{" "}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <>
      <NavBar />
      <div className="pet-health-wrapper">
        <div className="pet-health__grid">
          <div className="box7">
            <Link to="/">
              <img className="profile-petpic" src={pet.photoURL} />
            </Link>
          </div>
          <div className="box8">
            <h2>Pet's Health</h2>
          </div>
          <div className="box9">
            <p className="vac-title">Vaccines</p>
            <div className="vac-modal">
              <VaccineFormModal setVaccines={setVaccines} />
            </div>
            {newPetVac()}
          </div>
          <div className="box10">
            <p className="med-title">Medications</p>
            <div className="med-modal">
              <MedFormModal setMeds={setMeds} />
            </div>
            {newPetMed()}
          </div>
        </div>
      </div>
    </>
  );
};

export default PetHealth;
