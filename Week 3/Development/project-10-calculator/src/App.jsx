import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");

  const inputDigit = (digit) => {
    setDisplay((prev) => (prev === "0" ? digit : prev + digit));
  };

  const inputOperator = (op) => {
    setExpression(display + " " + op);
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const full = expression + " " + display;
      const result = Function(`"use strict"; return (${full.replace(/x/g, "*")})`)();
      setDisplay(String(parseFloat(result.toFixed(8))));
      setExpression("");
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
    setExpression("");
  };

  return (
    <div className="wrap">
      <h1>Project 10 — Calculator</h1>
      <div className="calc">
        <div className="screen">
          <div className="expr">{expression}</div>
          <div className="display">{display}</div>
        </div>
        <div className="pad">
          {["C", "←", "%", "/"].map((k) => (
            <button key={k} className="op" onClick={() => {
              if (k === "C") clear();
              else if (k === "←") setDisplay((p) => (p.length > 1 ? p.slice(0, -1) : "0"));
              else if (k === "%") setDisplay((p) => String(parseFloat(p) / 100));
              else inputOperator(k);
            }}>{k}</button>
          ))}
          {["7", "8", "9"].map((k) => <button key={k} onClick={() => inputDigit(k)}>{k}</button>)}
          <button className="op" onClick={() => inputOperator("x")}>x</button>
          {["4", "5", "6"].map((k) => <button key={k} onClick={() => inputDigit(k)}>{k}</button>)}
          <button className="op" onClick={() => inputOperator("-")}>−</button>
          {["1", "2", "3"].map((k) => <button key={k} onClick={() => inputDigit(k)}>{k}</button>)}
          <button className="op" onClick={() => inputOperator("+")}>+</button>
          <button onClick={() => inputDigit("0")}>0</button>
          <button onClick={() => inputDigit(".")}>.</button>
          <button className="equals" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;