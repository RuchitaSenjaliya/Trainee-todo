import React from "react";
import "./Navbar.css";
import { FaCheckSquare } from "react-icons/fa";

export default function Navbar() {
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
        <button type="button" className="btn-red">
          Logout
        </button>
      </div>
    </div>
  );
}
