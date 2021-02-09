import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

import NavBar2 from "../NavBar2/NavBar2";
import "./Homepage.css";

export default function HomePage() {
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
      <div className="homepage-wrapper">
        <NavBar2 />
        <div className="row">
          <h1 className="title"> Your Pet Family</h1>
          <div className="display">
            {pets.map((pet) => (
              <div key={pet.photoURL} className="inner-display">
                <img className="photo-size" src={pet.photoURL} />
              </div>
            ))}
          </div>
        </div>
        <div className="row2">
          <div className="display2">
            <div>
              {pets.map((pet) => (
                <div key={pet.name}>
                  <p>{pet.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
