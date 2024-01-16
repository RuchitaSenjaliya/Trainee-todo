import React from "react";
import Navbar from "../components/navbar/Navbar";

export default function Error() {
  return (
    <div>
      <Navbar />
      <div className="error">
        <h1 className="text-center mt-5">Something Went wrong!!!</h1>
      </div>
    </div>
  );
}
