import React from "react";
import "./Navbar.css";
import { FaCheckSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="logout">
        <button type="button" className="btn-red" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
}
