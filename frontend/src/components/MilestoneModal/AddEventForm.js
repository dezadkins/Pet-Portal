import React, { useState, useRef } from "react";
import { fetch } from "../../store/csrf";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import "./AddEventForm.css";

function AddEventForm({ onClose, setEvents }) {
  const [caption, setCaption] = useState("");
  const [picURL, setPicURL] = useState("");
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
    if (!picURL) {
      setErrors(<p id="errorMsg">Please upload an image!</p>);
      return;
    }
    const formData = new FormData();

    formData.append("userId", user.id);
    formData.append("caption", caption);

    formData.append("file", picURL);
    try {
      let result = await fetch("/api/pets/events", {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const milestone = result.data;
      setEvents((currentMilestone) => {
        return [...currentMilestone, milestone];
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
    return validity.valid && setPicURL(file);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    uploadInput.current.click();
  };

  const uploadImage = () => {
    if (!photoPreview) {
      return (
        <>
          <div className="event-image-upload" onClick={handleUploadClick}>
            {/* <h2>Upload an Image</h2> */}
            <i class="fal fa-camera"></i>
          </div>
          <div className="imgPlaceholder"></div>
        </>
      );
    } else {
      return (
        <>
          <div className="event-image-upload">
            <img
              className="image-preview"
              src={photoPreview}
              alt="Upload Preview"
            />
          </div>
          <div onClick={handleUploadClick}></div>
        </>
      );
    }
  };

  return (
    <form className="addEvent__form" onSubmit={handleSubmit}>
      <h1 className="form-title">Add Event</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <div className="add-pet__form-container">
        <div className="add-pet__form-fields">
          <div>
            {uploadImage()}
            <input
              ref={uploadInput}
              style={{ display: "none" }}
              type="file"
              name="file"
              onChange={updateFile}
            />
          </div>

          {/* <div className="upload-box">
            <button className="upload-button">Upload</button>
          </div> */}
          <div className="caption-input">
            <textarea
              cols="30"
              type="text-area"
              placeholder="Caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <button className="submit-button" type="submit" value="Post">
        Submit
      </button>
    </form>
  );
}

export default AddEventForm;
