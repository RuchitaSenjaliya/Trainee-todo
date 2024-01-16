import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import ModeContext from "../../context/mode-content";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const { mode } = useContext(ModeContext);

  // const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  // const [enteredPwdIsValid, setEnteredPwdIsValid] = useState(false);

  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [pwdIsTouched, setPwdIsTouched] = useState(false);

  const navigate = useNavigate();

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPwdIsValid = enteredPassword.trim().length >= 6;
  console.log(enteredPassword);
  console.log(enteredPwdIsValid);

  const emailIsInvalid = !enteredEmailIsValid && emailIsTouched;
  const pwdIsInvalid = !enteredPwdIsValid && pwdIsTouched;

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // validate on every key stroke
    // if (event.target.value.trim() !== "") {
    //   setEnteredEmailIsValid(true);
    // }
  };

  const pwdChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // validate on every key stroke
    // if (event.target.value.trim() !== "") {
    //   setEnteredPwdIsValid(true);
    // }
  };

  // handle when input looses focus
  const emailBlurHandler = () => {
    setEmailIsTouched(true);
    // if (enteredEmail.trim() === "") {
    //   setEnteredEmailIsValid(false);
    // }
    if (!enteredEmailIsValid) {
      return;
    }
  };

  const pwdBlurHandler = () => {
    setPwdIsTouched(true);
    // if (enteredPassword.trim() === "") {
    //   setEnteredPwdIsValid(false);
    // }
    if (!enteredPwdIsValid) {
      return;
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    // if user is submitting form, then every input is touched
    setEmailIsTouched(true);
    setPwdIsTouched(true);

    // if email is empty
    // if (enteredEmail.trim() === "") {
    //   setEnteredEmailIsValid(false);
    //   return;
    // }

    if (!enteredEmailIsValid) {
      return;
    }

    // if password is empty
    // if (enteredPassword.trim() === "") {
    //   setEnteredPwdIsValid(false);
    //   return;
    // }
    if (!enteredPwdIsValid) {
      return;
    }

    // if all these conditions are false then inputs are valid
    // setEnteredEmailIsValid(true);
    // setEnteredPwdIsValid(true);

    const data = { email: enteredEmail, pwd: enteredPassword };
    console.log(data);

    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");

    setEnteredEmail("");
    setEmailIsTouched(false);
    setEnteredPassword("");
    setPwdIsTouched(false);
  };

  // if inputs are invalid

  return (
    <>
      <div className={`${mode === "dark" ? "login-bg-dark" : "login-bg"}`}>
        <div className={`${mode === "dark" ? "login-dark" : "login"}`}>
          <h1>LOGIN</h1>
          <p className="para">Welcome back !!</p>
          <form action="" onSubmit={loginHandler}>
            <label htmlFor="email">Email Address: </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@doe.com"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              className={` ${
                !emailIsInvalid ? "mBottom input" : "invalid-input"
              }`}
            />
            {emailIsInvalid && (
              <p className="error">Email must not be empty.</p>
            )}
            <label htmlFor="password">Password: </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              onChange={pwdChangeHandler}
              onBlur={pwdBlurHandler}
              className={`${!pwdIsInvalid ? "mBottom input" : "invalid-input"}`}
            />
            {pwdIsInvalid && (
              <p className="error">Password must be 6 character long.</p>
            )}
            <div className="text-center">
              <button type="submit" className="btn-red">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
