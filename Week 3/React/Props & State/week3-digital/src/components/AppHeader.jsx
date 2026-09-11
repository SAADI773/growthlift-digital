const AppHeader = ({ title, subtitle, userCount }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p className="count">Total users in state: {userCount}</p>
    </header>
  );
};

export default AppHeader;