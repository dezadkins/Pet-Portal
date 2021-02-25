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
  // useEffect(() => {
  //   fetchAppts();
  // }, [apptId]);

  // const fetchAppts = async () => {
  //   console.log(apptId);
  //   const data = await fetch(`/api/pets/appts/${apptId}`);
  //   const appt = await data.json();
  //   console.log("appt", appt);
  //   setAppt(appt);
  //   console.log("hit", appt);
  // };

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
        <div className="box18">
          <h3 className="appt-title1">Upcoming Appointments</h3>
          <div className="appts1">
            <h2 className="appt-place">No Upcoming Apppointments!</h2>
          </div>
        </div>
      );
    } else {
      return (
        // THIS NEEDS TO BE MAPPED **********************
        <div className="box18">
          <h3 className="appt-title2">Other Appointments</h3>
          {/* {appt.map((a) => ( */}
          {/* <div> */}
          <div className="appts2">
            <p className="appt-time2">
              {new Date(appt.datetime).toLocaleString()}
            </p>
            <div className="appt-place2">
              <p>{appt.place}</p>
              <p>{appt.location}</p>
            </div>
          </div>
          {/* </div> */}
          {/* ))} */}
        </div>
      );
    }
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
            <h2>{`${pet.name}`}'s Appointments</h2>
          </div>
          {/* <div className="box18"> */}
          {/* {pet.datetime} */}
          {newPetAppt()}
          {/* </div> */}
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
