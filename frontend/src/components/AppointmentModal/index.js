import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AppointmentModal from "./AppointmentModal";

function ApptFormModal({ setAppt }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}></button> */}
      <i class="fad fa-folder-plus" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AppointmentModal
            setAppt={setAppt}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default ApptFormModal;
