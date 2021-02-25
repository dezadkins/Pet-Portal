import React, { useState, useRef } from "react";
import { fetch } from "../../store/csrf";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import "./MedForm.css";

function ApptForm({ onClose, setMeds }) {
  //   const [name, setName] = useState("");
  // const [medType, setMedType] = useState([]);
  const [datetime, setDateTime] = useState([]);
  const [location, setLocation] = useState("");
  const [place, setPlace] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

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
      let result = await fetch("/api/pets/appt", {
        method: "POST",
        body: JSON.stringify({ petId, datetime, location, place }),
        headers: { "Content-Type": "application/json" },
      });

      const appt = result.data;
      setMeds((currentAppts) => {
        return [...currentAppts, appt];
      });
      onClose();
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <form className="addPet__form" onSubmit={handleSubmit}>
      <h1 className="form-title">Add Appointment</h1>
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
              placeholder="date"
              value={datetime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
            <label>
              <input
                type="text"
                className="dosage-input"
                placeholder="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </label>

            <div>
              <input
                type="text"
                placeholder="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
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

export default ApptForm;
