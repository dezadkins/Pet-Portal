import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import MedForm from "./MedForm";

function MedFormModal({ setPets }) {
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
          <MedForm setPets={setPets} onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default MedFormModal;
