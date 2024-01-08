import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <h1>LOGIN</h1>
        <p>Welcome back !!</p>
        <form action="">
          <label htmlFor="email">Email Address: </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@doe.com"
          />
          <label htmlFor="password">Password: </label>
          <br />
          <input type="password" name="password" id="password" />
          <div className="text-center">
            <button type="submit" className="btn-red">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
