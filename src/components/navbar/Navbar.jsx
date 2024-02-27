import React from "react";
import "./Navbar.css";
import { FaCheckSquare } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsCloudSunFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          TODO
          <span className="">
            <FaCheckSquare color="gold" />
          </span>
        </a>
      </div>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : " link")}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? "link-active" : "link";
          }}>
          About
        </NavLink>
        {/* <a href="/services" className="link">
          All Todos
        </a> */}
      </ul>
      <div className="logout">
        <span className="dark-mode-icon">
          <BsFillMoonStarsFill size={20} />

          {/* <BsCloudSunFill size={20} /> */}
        </span>
        <button type="button" className="btn-red">
          Logout
        </button>
      </div>
    </div>
  );
}
