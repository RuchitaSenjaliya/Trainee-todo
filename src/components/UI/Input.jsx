import React from "react";

export default function Input({
  handleChange,
  handleBlur,
  value,
  errorMsg,
  isTouched,
  label,
  type,
  name,
}) {
  return (
    <div className="">
      <label htmlFor="username">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={`${
          errorMsg && isTouched ? "invalid-input" : "input mBottom"
        }`}
      />
      {errorMsg && isTouched ? <p className="error">{errorMsg}</p> : null}
    </div>
  );
}
