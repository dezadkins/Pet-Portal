import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./PetProfile.css";
import axios from "axios";
import WeightChart from "../WeightChart/WeightChart";

export default function PetProfile() {
  const [pet, setPet] = useState([]);
  const [appt, setAppt] = useState([]);
  const { petId, apptId } = useParams();

  useEffect(() => {
    fetchPets();
  }, [petId]);

  const fetchPets = async () => {
    const data = await fetch(`/api/pets/${petId}`);
    console.log(petId);
    const pets = await data.json();
    setPet(pets);
  };

  useEffect(() => {
    fetchAppts();
  }, [apptId]);

  const fetchAppts = async () => {
    console.log(petId);
    const data = await fetch(`/api/pets/${petId}/appts`);
    const appt = await data.json();
    setAppt(appt[0]);
  };
  const newPetAppt = () => {
    if (!appt) {
      return (
        <div className="box3">
          <h3 className="appt-title1">Upcoming Appointments</h3>
          <div className="appts1">
            <h2 className="appt-place">No Upcoming Apppointments!</h2>
          </div>
        </div>
      );
    } else {
      return (
        // THIS NEEDS TO BE MAPPED **********************
        <div className="box3">
          <h3 className="appt-title1">Upcoming Appointments</h3>
          <div className="appts1">
            <p className="appt-time">
              {new Date(appt.datetime).toLocaleString()}
            </p>
            <div className="appt-place">
              <p>{appt.place}</p>
              <p>{appt.location}</p>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <NavBar />
      <div className="profilepage-wrapper">
        <div className="grid">
          <div className="box1">
            <Link to="/">
              <img className="profile-petpic" src={pet.photoURL} />
            </Link>
          </div>
          <div className="box2">
            <h2>Overview</h2>
          </div>
          <div className="box6">
            <h2 className="title1">{`Welcome to ${pet.name}'s Page!`}</h2>

            <p className="info1">
              {`${pet.name} is a ${pet.species} and their birthday is on ${pet.birthDate}`}{" "}
            </p>
          </div>

          <Link to={`/pets/${petId}/growth`}>
            <div className="box4">
              <WeightChart />
            </div>
          </Link>
          <Link to={`/pets/${petId}/appts`} style={{ textDecoration: "none" }}>
            {newPetAppt()}
          </Link>
        </div>
      </div>
    </>
  );
}
