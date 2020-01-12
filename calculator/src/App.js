import React from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import { CalculatorProvider } from "./contexts/CalculatorContext";

function App() {
  return (
    <div className="App">
      <CalculatorProvider>
        <Display />
        <ButtonPanel />
      </CalculatorProvider>
    </div>
  );
}

export default App;
