import React from "react";
import Button from "./Button";
import "./buttonPanel.css";

const ButtonPanel = () => {
  return (
    <div className="Button-panel">
      <Button value="AC" />
      <Button value="+/-" />
      <Button value="%" />
      <Button value="÷" orange />

      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="x" orange />

      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" orange />

      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" orange />

      <Button value="0" wide />
      <Button value="." />
      <Button value="=" orange />
    </div>
  );
};

export default ButtonPanel;
