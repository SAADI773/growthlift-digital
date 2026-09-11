import { useState } from "react";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;
    onAdd(name.trim(), role.trim());
    setName("");
    setRole("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUserForm;