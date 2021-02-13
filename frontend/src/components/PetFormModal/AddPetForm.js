import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./AddPetForm.css";

function AddPetForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [petType, setPetType] = useState([]);
  const [Breed, setBreed] = useState("");
  const [DOB, setDOB] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId,
      dish_name,
      ingredients,
      instructions,
      photoUrl,
    };
    console.log("PAYLOAD", payload);
    const createdRecipe = dispatch(addRecipe(payload));

    if (createdRecipe) history.push("/");
  };

  return (
    <form className="addPet__form" onSubmit={handleSubmit}>
      <h1 className="form-title">New Addition</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <div className="add-pet__form-container">
        <div className="add-pet__form-fields">
          <div className="image-upload">Upload Image Here</div>
          <div className="upload-box">
            <button className="upload-button">Upload</button>
          </div>
          <div className="all-input">
            <input
              type="text"
              placeholder="Name"
              value={credential}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>
              Pet Type:
              <select
                value={credential}
                onChange={(e) => setPetType(e.target.value)}
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Ferret">Ferret</option>
                <option value="Horse">Horse</option>
                <option value="Pig">Pig</option>
              </select>
            </label>
            <div>
              <input
                type="text"
                placeholder="Breed"
                value={credential}
                onChange={(e) => setBreed(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="D.O.B"
                value={password}
                onChange={(e) => setDOB(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddPetForm;
