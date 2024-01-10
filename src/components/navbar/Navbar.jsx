import React from "react";
import "./Navbar.css";
import { FaCheckSquare } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="logo">
        TODO
        <span className="">
          <FaCheckSquare color="crimson" />
        </span>
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
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "link-active" : "link")}>
          Contact
        </NavLink>
      </ul>
      <div className="logout">
        <button type="button" className="btn-red" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
}
