import React from "react";
import Modal from "./Modal";
import "./Modal.css";

function ConfirmationAlert({ closeModal, logoutHanlder }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="alert">
        <div className="alert-msg">Are you sure you want to logout ?</div>
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
