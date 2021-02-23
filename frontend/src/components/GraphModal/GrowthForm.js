import React, { useState, useRef, useEffect } from "react";
import { fetch } from "../../store/csrf";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import "./GrowthForm.css";

function AddGrowthForm({ onClose, setGrowth }) {
  const [weight, setWeight] = useState();
  const [length, setLength] = useState();
  const [date, setDate] = useState("");

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

    // const formData = new FormData();

    // formData.append("userId", user.id);
    // // formData.append("petId", pet.id);
    // formData.append("weight", weight);
    // formData.append("length", length);

    // formData.append("date", date);

    try {
      let result = await fetch(`/api/pets/graph`, {
        method: "POST",
        body: JSON.stringify({ petId, weight, length }),
        headers: { "Content-Type": "application/json" },
      });

      const stats = result.data;
      setGrowth((currentStats) => {
        return [...currentStats, stats];
      });
      onClose();
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  // useEffect(() => {
  //   const defaultWeight = setWeight();
  // }, [weight]);

  return (
    <form className="addPet__form" onSubmit={handleSubmit}>
      <h1 className="growth-title">Add Growth</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <div className="growth__form-container">
        <div className="growth__form-fields">
          <div className="growth-input">
            <div className="weight-fields">
              <div className="weight-font">Weight (lbs)</div>
              <input
                className="growth-pad"
                type="number"
                placeholder="Measurement"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <div>
                <input
                  className="date-marg"
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div className="length-fields">
              <div>
                <div className="length-font">Length (inches)</div>
                <input
                  className="growth-pad"
                  type="number"
                  placeholder="Measurement"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="growth-submit" type="submit" value="Post">
        Submit
      </button>
    </form>
  );
}

export default AddGrowthForm;
