import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddEventForm from "./AddEventForm";
import "../NavBar2/NavBar2.css";
function MilestoneFormModal({ setEvents }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}> */}

      <i class="fad fa-camera-retro" onClick={() => setShowModal(true)}></i>

      {/* </button> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddEventForm
            setEvents={setEvents}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default MilestoneFormModal;
