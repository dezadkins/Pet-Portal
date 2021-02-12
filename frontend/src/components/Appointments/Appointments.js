import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import "./Appointments.css";

import axios from "axios";

const Appointments = () => {
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
      <div className="pet-appt__grid">
        <div className="pet-appt-wrapper">
          <div className="box16">
            <img className="profile-petpic" src={pet.photoURL} />
          </div>
          <div className="box17">
            <h2>Pet's Appointments</h2>
          </div>
          <div className="box18">Upcoming Visits</div>
          <div className="box19">Add Appointments</div>
          <div className="box20">Past Visits</div>
        </div>
      </div>
    </>
  );
};
export default Appointments;
