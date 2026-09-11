import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [todos, setTodos] = useState(["Learn useState", "Build apps"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos((prev) => [...prev, newTodo.trim()]);
    setNewTodo("");
  };

  const removeTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <header>
        <h1>Project 2 — Hooks (useState)</h1>
        <p>Counter, toggle, and dynamic list</p>
      </header>

      <section className="card">
        <h2>Counter</h2>
        <p className="big">{count}</p>
        <div className="row">
          <button onClick={() => setCount((c) => c - 1)}>−</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </section>

      <section className="card">
        <h2>Toggle</h2>
        <button
          className={isOn ? "on" : "off"}
          onClick={() => setIsOn((prev) => !prev)}
        >
          {isOn ? "ON" : "OFF"}
        </button>
      </section>

      <section className="card">
        <h2>Todo List</h2>
        <form className="row" onSubmit={addTodo}>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a todo..."
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              <span>{todo}</span>
              <button className="danger" onClick={() => removeTodo(i)}>✕</button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && <p className="empty">No todos yet.</p>}
      </section>
    </div>
  );
};

export default App;