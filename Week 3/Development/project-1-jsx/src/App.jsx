const name = "Week 3 Digital";
const isLoggedIn = true;
const skills = ["JSX Expressions", "Fragments", ".map() Lists", "Conditional Rendering", "Component Composition"];

const UserBadge = ({ user, loggedIn }) => {
  return (
    <div className="badge">
      <h2>{user}</h2>
      <p>{loggedIn ? "Status: Active" : "Status: Guest"}</p>
    </div>
  );
};

const SkillList = ({ items }) => (
  <div className="list">
    <h3>Skills covered:</h3>
    <ul>{items.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
  </div>
);

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Project 1 — JSX Basics</h1>
        <p>Expressions, fragments, lists, conditional rendering</p>
      </header>
      <UserBadge user={name} loggedIn={isLoggedIn} />
      <SkillList items={skills} />
      <footer>Project 1 of 5 · Development/week3-digital</footer>
    </div>
  );
};

export default App;