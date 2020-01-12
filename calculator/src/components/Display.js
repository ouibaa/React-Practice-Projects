import React, { useState, useContext } from "react";
import "./display.css";
import { CalculatorContext } from "../contexts/CalculatorContext";

const Display = () => {
  const [ans, setAns, scr, setScr] = useContext(CalculatorContext);
  return <div className="display">{scr}</div>;
};

export default Display;
