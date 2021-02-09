import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Cards.css";
const Cards = () => {
  const [pets, setPets] = useState([]);
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    const data = await fetch(`/api/pets/${sessionUser.id}`);
    // console.log("hit1", data);
    const pets = await data.json();
    setPets(pets);
    console.log("hit2", pets);
  };

  return (
    <>
      <div id="large-card">
        <div className="picture">
          {pets.map((pet) => (
            <div key={pet.photoURL} className="inner-display">
              <img className="photo-size" src={pet.photoURL} />
            </div>
          ))}
        </div>
        <div className="picture">
          {pets.map((pet) => (
            <div key={pet.photoURL} className="inner-display">
              <img className="photo-size" src={pet.photoURL} />
            </div>
          ))}
        </div>

        <div className="text">
          {pets.map((pet) => (
            <div key={pet.name}>
              <p>{pet.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
