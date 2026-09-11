const Controls = ({ onIncrement, onDecrement, onReset }) => {
  return (
    <section className="controls">
      <button className="btn" onClick={onDecrement}>
        −
      </button>
      <button className="btn" onClick={onReset}>
        Reset
      </button>
      <button className="btn" onClick={onIncrement}>
        +
      </button>
    </section>
  );
};

export default Controls;