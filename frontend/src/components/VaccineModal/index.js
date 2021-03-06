import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import VaccineForm from "./VaccineForm";

function VaccineFormModal({ setVaccines }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}></button> */}
      <i class="fad fa-folder-plus" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <VaccineForm
            setVaccines={setVaccines}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default VaccineFormModal;
