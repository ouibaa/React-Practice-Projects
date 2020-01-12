import React, { useState, createContext } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = props => {
  const [ans, setAns] = useState();
  const [scr, setScr] = useState("0");
  return (
    <CalculatorContext.Provider value={[ans, setAns, scr, setScr]}>
      {props.children}
    </CalculatorContext.Provider>
  );
};
