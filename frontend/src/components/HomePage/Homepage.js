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
      <NavBar2 />
      <div className="homepage-container">
        <div className="image-container">
          <div className="display">
            {pets.map((pet) => (
              <div className="inner-display">
                <p>{pet.name}</p>
                <p>{pet.species}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="pet-photo"> Pet Image</div> */}
    </>
  );
}
