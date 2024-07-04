import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));     
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput(input.slice(0, -1));
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  const handleKeyPress = (e) => {
    const key = e.key;
    if (/[0-9+\-*/.=]/.test(key)) {
      handleClick(key);
    } else if (key === "Enter") {
      handleClick("=");
    } else if (key === "Escape") {
      handleClick("AC");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input]);

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[
          "AC",
          "C",
          "=",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={
              btn === "C" || btn === "AC"
                ? "clear"
                : ["/", "*", "-", "+", "="].includes(btn)
                ? "operator"
                : ""
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
