import { useState } from "react";
import Header from "./components/Header.jsx";
import Counter from "./components/Counter.jsx";
import StatusBar from "./components/StatusBar.jsx";
import Controls from "./components/Controls.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <Header
        title="Week 3 Digital"
        subtitle="State hoisted in parent, passed down as props"
      />
      <Counter value={count} />
      <StatusBar count={count} threshold={5} />
      <Controls onIncrement={increment} onDecrement={decrement} onReset={reset} />
    </div>
  );
};

export default App;