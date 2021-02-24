import React, { useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import { useParams, Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import "./Appointments.css";

// import axios from "axios";

const Appointments = () => {
  const [pet, setPet] = useState([]);
  const [appt, setAppt] = useState("");
  const { petId, apptId } = useParams();

  useEffect(() => {
    fetchPets();
  }, [petId]);

  const fetchPets = async () => {
    const data = await fetch(`/api/pets/${petId}`);
    const pets = await data.json();
    setPet(pets);
  };
  useEffect(() => {
    fetchAppts();
  }, [apptId]);

  const fetchAppts = async () => {
    console.log(apptId);
    const data = await fetch(`/api/pets/appts/${apptId}`);
    const appt = await data.json();
    console.log("appt", appt);
    setAppt(appt);
    console.log("hit", appt);
  };

  return (
    <>
      <NavBar />
      <div className="pet-appt-wrapper">
        <div className="pet-appt__grid">
          <div className="box16">
            <Link to={`/pets/${petId}`}>
              <img className="profile-petpic" src={pet.photoURL} />
            </Link>
          </div>
          <div className="box17">
            <h2>Pet's Appointments</h2>
          </div>
          <div className="box18">{pet.datetime}</div>
          <div className="box19">
            <Calendar />
          </div>
          {/* <div className="box20">Past Visits</div> */}
        </div>
      </div>
    </>
  );
};
export default Appointments;
