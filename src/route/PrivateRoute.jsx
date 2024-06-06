// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function PrivateRoute({ children }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return user ? children : <Navigate to="/login" />;
// }

import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const login = JSON.parse(localStorage.getItem("user")) || false;
  const register = JSON.parse(localStorage.getItem("registeredUser")) || false;

  return (
    <>
      {!register ? (
        <Navigate to="/register" />
      ) : register && !login ? (
        <Navigate to="/login" />
      ) : (
        login && register && children
      )}
    </>
  );
}
