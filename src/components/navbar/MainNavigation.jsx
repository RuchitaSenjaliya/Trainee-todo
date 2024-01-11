import React from "react";
import Navbar from "./Navbar";

export default function MainNavigation(props) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
}
