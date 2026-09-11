import { useState } from "react";
import Header from "./components/Header.jsx";
import Counter from "./components/Counter.jsx";
import StatusBar from "./components/StatusBar.jsx";
import Controls from "./components/Controls.jsx";
import Toggle from "./components/Toggle.jsx";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const toggle = () => setIsOn((prev) => !prev);

  return (
    <div className="container">
      <Header
        title="Week 3 Digital"
        subtitle="Counter and Toggle with useState"
      />
      <Counter value={count} />
      <StatusBar count={count} threshold={5} />
      <Controls onIncrement={increment} onDecrement={decrement} onReset={reset} />
      <Toggle label="Feature switch" isOn={isOn} onToggle={toggle} />
    </div>
  );
};

export default App;