import React, { useContext } from "react";
import Modal from "./Modal";
import "./Modal.css";
import ModeContext from "../../context/mode-content";

function ConfirmationAlert({ closeModal, logoutHanlder }) {
  const { mode } = useContext(ModeContext);
  return (
    <Modal closeModal={closeModal}>
      <div className="alert">
        <div className={`${mode === "dark" ? "alert-msg-dark" : "alert-msg"}`}>
          Are you sure you want to logout?
        </div>
        <div className="btn-grp">
          <button type="button" className="btn-red" onClick={closeModal}>
            Cancle
          </button>
          <button type="button" className="btn-blue" onClick={logoutHanlder}>
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmationAlert;
