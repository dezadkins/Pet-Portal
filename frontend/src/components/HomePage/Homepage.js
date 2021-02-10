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
    const data = await fetch(`/api/pets/${sessionUser.id}`);
    // console.log("hit1", data);
    const pets = await data.json();
    setPets(pets);
    console.log("hit2", pets);
  };

  //  useEffect(() => {
  //    const fetchUsers = async () => {
  //      try {
  //        setLoading(true);
  //        const res = await fetch(`/api/users`);

  //        const users = res.data;

  //        if (users) setUsers(users);

  //        setLoading(false);
  //      } catch (err) {
  //        console.error(err);
  //      }
  //    };

  //    fetchUsers();
  //    return function cleanup() {
  //      setUsers([]);
  //    };
  //  }, []);

  return (
    <>
      <NavBar2 />
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
              <img className="photo-size" src={pet.photoURL} key={pet.name} />
            </div>
            <div className="pet-name">{pet.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
