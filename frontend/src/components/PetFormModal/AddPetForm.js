import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./AddPetForm.css";

function AddPetForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [petType, setPetType] = useState([]);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const petSubmit = (e) => {
    e.preventDefault();
    setPetType([]);
    return;
  };

  return (
    <div className="addPet__form">
      <h1 className="form-title">New Addition</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <input
          type="text"
          placeholder="Name"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />

        <label>
          Pet Type:
          <select
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Ferret">Ferret</option>
            <option value="Horse">Horse</option>
            <option value="Pig">Pig</option>
          </select>
        </label>

        <input
          type="text"
          placeholder="Breed"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="D.O.B"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPetForm;
