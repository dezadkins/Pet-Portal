import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory, Redirect } from "react-router-dom";
import NavBar2 from "../NavBar2/NavBar2";
import "./Homepage.css";

export default function HomePage() {
  const [pets, setPets] = useState([]);
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const history = useHistory();

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    const data = await fetch(`/api/pets/user/${sessionUser.id}`);
    const pets = await data.json();
    setPets(pets);
  };

  return (
    <>
      <NavBar2 setPets={setPets} />
      <h1 className="homepage-title">Your Pet Family</h1>
      <div className="homepage-wrapper">
        {pets.map((pet) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              history.push(`/pets/${pet.id}`);
            }}
            className="card"
          >
            <div className="img-container">
              {/* <div className="thumbtack-div">
                <i class="fas fa-thumbtack"></i>
              </div> */}
              <img className="photo-size" src={pet.photoURL} key={pet.name} />
            </div>
            <div className="pet-name">{pet.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
