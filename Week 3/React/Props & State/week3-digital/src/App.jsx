import { useState } from "react";
import AppHeader from "./components/AppHeader.jsx";
import UserCard from "./components/UserCard.jsx";
import AddUserForm from "./components/AddUserForm.jsx";

const initialUsers = [
  { id: 1, name: "Saadi", role: "Team Lead" },
  { id: 2, name: "Growth", role: "Developer" },
  { id: 3, name: "Digital", role: "Designer" },
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [appName, setAppName] = useState("Week 3 Digital");

  const addUser = (name, role) => {
    const newUser = { id: Date.now(), name, role };
    setUsers((prev) => [...prev, newUser]);
  };

  const removeUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <AppHeader
        title={appName}
        subtitle="State lives in App, data flows down as props, events flow up via callbacks"
        userCount={users.length}
      />
      <AddUserForm onAdd={addUser} />
      <section className="cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onRemove={removeUser} />
        ))}
      </section>
    </div>
  );
};

export default App;