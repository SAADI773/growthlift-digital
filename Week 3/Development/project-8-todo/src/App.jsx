import { useState } from "react";
import TodoItem from "./components/TodoItem.jsx";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Finish 10 React projects", done: false },
    { id: 2, text: "Push to GitHub", done: true },
    { id: 3, text: "Review Week 3", done: false },
  ]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: text.trim(), done: false }]);
    setText("");
  };

  const toggleTodo = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  const visible = todos.filter((t) =>
    filter === "all" ? true : filter === "done" ? t.done : !t.done
  );
  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className="app">
      <header>
        <h1>Project 8 — To-Do App</h1>
        <p>{remaining} remaining of {todos.length}</p>
      </header>

      <form className="input-row" onSubmit={addTodo}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="What needs to be done?" />
        <button type="submit">Add</button>
      </form>

      <div className="filters">
        {["all", "active", "done"].map((f) => (
          <button key={f} className={filter === f ? "on" : ""} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <ul>
        {visible.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
      {visible.length === 0 && <p className="empty">No {filter} tasks.</p>}
    </div>
  );
};

export default App;