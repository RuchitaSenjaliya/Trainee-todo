import React from "react";
import "./Modal.css";
import { useContext } from "react";
import ModeContext from "../../context/mode-content";

export default function Modal({ closeModal, children }) {
  const { mode } = useContext(ModeContext);
  return (
    <div>
      <div className="backdrop" onClick={closeModal}></div>
      <div className={`${mode === "dark" ? "overlay-dark" : "overlay"}`}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
