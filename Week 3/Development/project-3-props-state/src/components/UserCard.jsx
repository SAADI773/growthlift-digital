const UserCard = ({ user, onRemove }) => {
  return (
    <article className="card">
      <h3>{user.name}</h3>
      <p>{user.role}</p>
      <button className="danger" onClick={() => onRemove(user.id)}>Remove</button>
    </article>
  );
};

export default UserCard;