import React, { useContext } from "react";
import "./button.css";
import { CalculatorContext } from "../contexts/CalculatorContext";

const Button = ({ value, wide, orange }) => {
  const [ans, setAns, scr, setScr] = useContext(CalculatorContext);
  const reset = () => {
    setScr("0");
    setAns(null);
  };

  var classN = "button";
  if (wide) {
    classN = classN + " wide";
  }
  if (orange) {
    classN += " orange";
  }

  const click = () => {
    switch (value) {
      case "AC":
        reset();
        break;
      case "+/-":
        if (parseInt(scr) < 0) {
          setScr(scr.replace("-", ""));
        } else {
          setScr("-" + scr);
        }
        setAns("-(" + ans + ")");
        break;
      case "%":
        setScr(scr / 100);
        setAns(ans / 100);
        break;
      case "÷":
        setAns(ans + "/100");
        break;
      case "x":
        setAns(ans + "*");
        break;
      case "+":
        setAns(ans + "+");
        break;
      case "=":
        var soln = eval(ans);
        setAns(soln);
        setScr(soln);
        break;
      case ".":
        if (scr.includes(".")) {
          break;
        }
        setAns(ans + ".");
        setScr(scr + ".");
        break;
      default:
        if (scr === "0") {
          setScr(value);
          setAns(ans + value);
          console.log("clicked eerfa");
          break;
        }
        var regexlastletter = /[.0-9]/;
        const lastLetterNotApplicable = ans
          .substring(ans.length - 1)
          .match(regexlastletter);
        console.log(lastLetterNotApplicable.index);
        if (!lastLetterNotApplicable) {
          setScr(value);
          setAns(ans + value);
          console.log("lastlet");
          break;
        } else {
          setScr(scr + value);
          setAns(ans + value);
          break;
        }
    }
    console.log("answer is " + ans);
  };

  return (
    <div className={classN} onClick={click}>
      {value}
    </div>
  );
};

export default Button;
