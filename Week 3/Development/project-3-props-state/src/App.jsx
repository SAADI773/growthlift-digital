import { useState } from "react";
import UserCard from "./components/UserCard.jsx";
import AddUserForm from "./components/AddUserForm.jsx";

const initialUsers = [
  { id: 1, name: "Saadi", role: "Team Lead" },
  { id: 2, name: "Growth", role: "Developer" },
  { id: 3, name: "Digital", role: "Designer" },
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (name, role) => setUsers((prev) => [...prev, { id: Date.now(), name, role }]);
  const removeUser = (id) => setUsers((prev) => prev.filter((u) => u.id !== id));

  return (
    <div className="app">
      <header>
        <h1>Project 3 — Props &amp; State</h1>
        <p>State lives in App, flows down as props, events come up via callbacks</p>
      </header>
      <p className="count">Total users: <strong>{users.length}</strong></p>
      <AddUserForm onAdd={addUser} />
      <div className="grid">
        {users.map((user) => <UserCard key={user.id} user={user} onRemove={removeUser} />)}
      </div>
    </div>
  );
};

export default App;