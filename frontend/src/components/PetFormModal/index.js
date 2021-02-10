import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddPetForm from "./AddPetForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddPetForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
