import React, { useContext } from "react";
import "./Register.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ModeContext from "../../context/mode-content";
import Input from "../UI/Input";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const navigate = useNavigate();
  const { mode } = useContext(ModeContext);
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const signupSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be atleast 3 character long."),
    email: Yup.string()
      .matches(emailRegEx, "Please enter valid email address")
      .required("Email Address is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be 6 character long"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      localStorage.setItem("registeredUser", JSON.stringify(values));
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/");
      console.log(errors);
      action.resetForm();
    },
  });

  return (
    <div className={`${mode === "dark" ? "register-bg-dark" : "register-bg"}`}>
      <div className={`${mode === "dark" ? "register-dark" : "register"}`}>
        {console.log(errors)}
        <h1>Register</h1>
        <p className="para">Let's create new account</p>
        <form action="" onSubmit={handleSubmit}>
          <Input
            label="Username: "
            type="text"
            name="username"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.username}
            errorMsg={errors.username}
            isTouched={touched.username}
          />
          <Input
            label="Email Address: "
            type="text"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            errorMsg={errors.email}
            isTouched={touched.email}
          />
          <Input
            label="Password: "
            type="password"
            name="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.password}
            errorMsg={errors.password}
            isTouched={touched.password}
          />
          <Input
            label="Confirm Password: "
            type="password"
            name="confirmPassword"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.confirmPassword}
            errorMsg={errors.confirmPassword}
            isTouched={touched.confirmPassword}
          />
          {/* <div className="">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && (
              <p className="error">{errors.username}</p>
            )}
          </div> */}
          {/* <div className="">
            <label htmlFor="email">Email Address:</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
          </div> */}

          <div className="text-center">
            <button
              type="submit"
              className={` ${!(isValid && dirty) ? "btn-disable" : "btn-red"}`}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
