import React, { useState, useRef } from "react";
import { fetch } from "../../store/csrf";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import "./AddPetForm.css";

function AddPetForm({ onClose, setPets }) {
  const [name, setName] = useState("");
  const [petType, setPetType] = useState([]);
  const [species, setSpecies] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [photoPreview, setPhotoPreview] = useState(null);
  // const [photoLoad, setPhotoLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const uploadInput = useRef(null);

  const user = useSelector((state) => {
    return state.session.user;
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    setLoading(true);
    if (!photoURL) {
      setErrors(<p id="errorMsg">Please upload an image!</p>);
      return;
    }
    const formData = new FormData();

    formData.append("userId", user.id);
    formData.append("name", name);
    formData.append("species", species);
    formData.append("birthDate", birthDate);
    formData.append("file", photoURL);
    try {
      let result = await fetch("/api/pets/", {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const pet = result.data;
      setPets((currentPets) => {
        return [...currentPets, pet];
      });
      onClose();
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const updateFile = (e) => {
    const {
      target: {
        validity,
        files: [file],
      },
    } = e;
    e.target.files[0]
      ? setPhotoPreview(URL.createObjectURL(e.target.files[0]))
      : setPhotoPreview(null);
    return validity.valid && setPhotoURL(file);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    uploadInput.current.click();
  };
  // const uploadImage = () => {
  //   if (!photoPreview) {
  //     return (
  //       <>
  //         <h1>Upload an Image</h1>
  //         <div></div>
  //         <div onClick={handleUploadClick}>
  //           <button>Upload</button>
  //         </div>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <div>
  //           <img src={photoPreview} alt="Upload Preview" />
  //         </div>
  //         <div onClick={handleUploadClick}>
  //           <button style={{ width: "120px" }}>Change Image</button>
  //         </div>
  //       </>
  //     );
  //   }
  // };

  return (
    <form className="addPet__form" onSubmit={handleSubmit}>
      <h1 className="form-title">New Addition</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <div className="add-pet__form-container">
        {/* {uploadImage()} */}
        <div className="add-pet__form-fields">
          <div className="image-upload">
            <img className="image-preview" src={photoPreview} />
            <input
              ref={uploadInput}
              style={{ display: "none" }}
              type="file"
              name="file"
              onChange={updateFile}
            />
          </div>
          <div onClick={handleUploadClick} className="upload-box">
            <button className="upload-button">Upload</button>
          </div>
          <div className="all-input">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* <label>
              Pet Type:
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Ferret">Ferret</option>
                <option value="Horse">Horse</option>
                <option value="Pig">Pig</option>
              </select>
            </label> */}
            <div>
              <input
                type="text"
                placeholder="Species"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="D.O.B"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
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

export default AddPetForm;
