import { useState } from "react";
import UserCard from "../features/props-state/UserCard.jsx";
import AddUserForm from "../features/props-state/AddUserForm.jsx";

const initialUsers = [
  { id: 1, name: "Saadi", role: "Team Lead" },
  { id: 2, name: "Growth", role: "Developer" },
  { id: 3, name: "Digital", role: "Designer" },
];

const PropsStateDemo = () => {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (name, role) => {
    setUsers((prev) => [...prev, { id: Date.now(), name, role }]);
  };

  const removeUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <section>
      <h2>Props & State</h2>
      <p>Users live in state here; cards get data as props, and raise callbacks up.</p>
      <p className="status">
        Total users in state: <strong>{users.length}</strong>
      </p>
      <AddUserForm onAdd={addUser} />
      <div className="cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onRemove={removeUser} />
        ))}
      </div>
    </section>
  );
};

export default PropsStateDemo;