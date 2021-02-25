import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import WeightChart from "../WeightChart/WeightChart";
import LengthChart from "../LengthChart/LengthChart";
import NavBar from "../NavBar/NavBar";
import "./PetGrowth.css";
import axios from "axios";
import GrowthFormModal from "../GraphModal";

const PetGrowth = () => {
  const [pet, setPet] = useState([]);
  const [growth, setGrowth] = useState([]);
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
      <div className="pet-growth-wrapper">
        <div className="pet-growth__grid">
          <div className="box12">
            <Link to={`/pets/${petId}`}>
              <img className="profile-petpic" src={pet.photoURL} />
            </Link>
          </div>
          <div className="box13">
            <h2>{`${pet.name}`}'s Growth</h2>
          </div>
          <p className="pounds">Pounds</p>
          <div className="box14">
            <WeightChart setGrowth={setGrowth} />
          </div>
          <p className="inches">Inches</p>
          <div className="box15">
            <LengthChart setGrowth={setGrowth} />
          </div>
          <div className="addData">
            <GrowthFormModal setGrowth={setGrowth} />
            <h3 className="add-title">Add Data</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetGrowth;
