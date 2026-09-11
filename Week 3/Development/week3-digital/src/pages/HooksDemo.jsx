import { useState } from "react";
import Counter from "../features/hooks/Counter.jsx";
import StatusBar from "../features/hooks/StatusBar.jsx";
import Toggle from "../features/hooks/Toggle.jsx";

const HooksDemo = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <section>
      <h2>Hooks — useState</h2>
      <p>State lives in this page. Children receive values and callbacks as props.</p>

      <div className="demo-box">
        <Counter value={count} />
        <StatusBar count={count} threshold={5} />
        <div className="controls">
          <button className="btn" onClick={decrement}>−</button>
          <button className="btn" onClick={reset}>Reset</button>
          <button className="btn" onClick={increment}>+</button>
        </div>
      </div>

      <div className="demo-box">
        <Toggle label="Feature switch" isOn={isOn} onToggle={() => setIsOn((prev) => !prev)} />
      </div>
    </section>
  );
};

export default HooksDemo;