import React, { useState, useRef } from "react";
import { fetch } from "../../store/csrf";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import "./MedForm.css";

function AddMedForm({ onClose, setMeds }) {
  const [name, setName] = useState("");
  // const [medType, setMedType] = useState([]);
  const [dosage, setDosage] = useState([]);
  const [unit, setUnit] = useState("");
  const [frequency, setFrequency] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const uploadInput = useRef(null);
  const { petId } = useParams();
  const user = useSelector((state) => {
    return state.session.user;
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    setLoading(true);

    // const formData = new FormData();

    // formData.append("userId", user.id);
    // formData.append("name", name);
    // formData.append("dosage", dosage);
    // formData.append("unit", unit);
    // formData.append("frequency", frequency);
    try {
      let result = await fetch("/api/pets/meds", {
        method: "POST",
        body: JSON.stringify({ petId, name, dosage, unit, frequency }),
        headers: { "Content-Type": "application/json" },
      });

      const med = result.data;
      setMeds((currentMeds) => {
        return [...currentMeds, med];
      });
      onClose();
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <form className="addPet__form" onSubmit={handleSubmit}>
      <h1 className="form-title">Add Medication</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <div className="add-pet__form-container">
        {/* {uploadImage()} */}
        <div className="add-pet__form-fields">
          <div className="med-input">
            <input
              className="name-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>
              <input
                type="text"
                className="dosage-input"
                placeholder="Dosage"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                required
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                Unit
              >
                <option value="Unit">Unit</option>
                <option value="ml">ml</option>
                <option value="mg">mg</option>
                <option value="drops">drops</option>
                <option value="tabs">tabs</option>
                <option value="application">application</option>
              </select>
            </label>

            <div>
              <input
                type="text"
                placeholder="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <button className="submit-button" type="submit" value="Post">
        Submit
      </button>
    </form>
  );
}

export default AddMedForm;
