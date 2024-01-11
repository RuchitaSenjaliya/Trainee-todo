import React, { useContext } from "react";
import About from "../components/about/About";
import ModeContext from "../context/mode-content";

export default function AboutPage() {
  const { mode } = useContext(ModeContext);
  return (
    <div className="about">
      <div className={`${mode === "dark" ? "home-dark" : "home"}`}>
        <About />
      </div>
    </div>
  );
}
