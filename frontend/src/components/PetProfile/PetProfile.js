import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <>
      <NavBar />
      <div className="grid">
        <div className="profilepage-wrapper">
          <div className="box1">
            <img className="profile-petpic" src={pet.photoURL} />
          </div>
          <div className="box2">
            <h2>Overview</h2>
          </div>
          {/* <h3>Upcoming Appt</h3> */}
          <div className="box3">
            <div>{appt.event}</div>
            <div>{appt.datetime}</div>
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
