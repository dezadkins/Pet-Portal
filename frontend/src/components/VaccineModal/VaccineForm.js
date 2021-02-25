import React, { useState, useRef } from "react";
import { fetch } from "../../store/csrf";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

// import "./AddPetForm.css";

function AddVaccineForm({ onClose, setVaccines }) {
  const [name, setName] = useState("");
  // const [vacType, setVacType] = useState([]);
  const [dateGiven, setDateGiven] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  // const uploadInput = useRef(null);
  const { petId } = useParams();
  const user = useSelector((state) => {
    return state.session.user;
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    setLoading(true);

    try {
      let result = await fetch(`/api/pets/vacs`, {
        method: "POST",
        body: JSON.stringify({ petId, name, dateGiven }),
        headers: { "Content-Type": "application/json" },
      });

      const vacs = result.data;
      setVaccines((currentVacs) => {
        return [...currentVacs, vacs];
      });
      onClose();
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <form className="addPet__form" onSubmit={handleSubmit}>
      <h1 className="form-title">Add Vaccine</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <div className="add-pet__form-container">
        <div className="add-pet__form-fields">
          <div className="all-input">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div>
              <input
                type="date"
                placeholder="Date"
                value={dateGiven}
                onChange={(e) => setDateGiven(e.target.value)}
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

export default AddVaccineForm;
