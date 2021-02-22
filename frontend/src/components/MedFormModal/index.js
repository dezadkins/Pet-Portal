import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import MedForm from "./MedForm";

function MedFormModal({ setMeds }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}></button> */}
      <i class="fad fa-folder-plus" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MedForm setMeds={setMeds} onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default MedFormModal;
