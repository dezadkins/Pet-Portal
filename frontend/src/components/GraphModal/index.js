import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import GrowthForm from "./GrowthForm";

function GrowthFormModal({ setGrowth }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}></button> */}
      <i
        className="fal fa-balance-scale-right"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <GrowthForm
            setGrowth={setGrowth}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default GrowthFormModal;
