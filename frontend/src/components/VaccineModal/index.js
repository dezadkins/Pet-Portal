import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import VaccineForm from "./VaccineForm";

function VaccineFormModal({ setVaccine }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}></button> */}
      <i
        className="fal fa-folder-plus folder"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <VaccineForm
            setVaccine={setVaccine}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default VaccineFormModal;
