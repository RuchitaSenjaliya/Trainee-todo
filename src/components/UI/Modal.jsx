import React from "react";
import "./Modal.css";

export default function Modal({ closeModal, children }) {
  return (
    <div>
      <div className="backdrop" onClick={closeModal}></div>

      <div className="overlay">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
