import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaCheckSquare } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ConfirmationAlert from "../UI/ConfirmationAlert";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsCloudSunFill } from "react-icons/bs";
import ModeContext from "../../context/mode-content";

export default function Navbar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { mode, toggleMode } = useContext(ModeContext);

  const openModal = () => {
    setShowModal(true);
    // navigate("/login");
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const logoutHanlder = () => {
    navigate("/login");
    localStorage.removeItem("user");
  };

  return (
    <div className="navbar">
      {showModal && (
        <ConfirmationAlert
          closeModal={closeModal}
          logoutHanlder={logoutHanlder}
        />
      )}
      <div className="logo">
        <Link to="/">
          TODO
          <span className="">
            <FaCheckSquare color="gold" />
          </span>
        </Link>
      </div>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link-active" : "link")}>
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "link-active" : "link")}>
          All Todos
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "link-active" : "link")}>
          Contact
        </NavLink> */}
      </ul>
      <div className="logout">
        <span className="dark-mode-icon" onClick={toggleMode}>
          {mode === "light" ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsCloudSunFill size={20} />
          )}
        </span>
        <button type="button" className="btn-red" onClick={openModal}>
          Logout
        </button>
      </div>
    </div>
  );
}
