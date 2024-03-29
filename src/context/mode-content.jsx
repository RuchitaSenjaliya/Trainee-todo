import React, { useState } from "react";

const ModeContext = React.createContext({
  mode: "",
  toggleMode: () => {},
});

export const ModeContextProvider = (props) => {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
