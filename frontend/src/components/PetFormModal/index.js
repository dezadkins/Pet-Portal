import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddPetForm from "./AddPetForm";
import "../NavBar2/NavBar2.css";
function PetFormModal({ setPets }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}> */}

      <svg
        onClick={() => setShowModal(true)}
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="plus"
        className="plus-sign"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          // fill="currentColor"
          d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
        ></path>
      </svg>
      {/* </button> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddPetForm setPets={setPets} onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default PetFormModal;
