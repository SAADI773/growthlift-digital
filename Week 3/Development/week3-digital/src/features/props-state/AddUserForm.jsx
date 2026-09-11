import { useState } from "react";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !role.trim()) return;
    onAdd(name.trim(), role.trim());
    setName("");
    setRole("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button className="btn" type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;