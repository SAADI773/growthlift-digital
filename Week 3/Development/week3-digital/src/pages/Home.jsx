import { Link } from "react-router-dom";

const sections = [
  { to: "hooks", title: "Hooks", desc: "useState counter + toggle" },
  { to: "props-state", title: "Props & State", desc: "state up, props down users app" },
  { to: "router", title: "Router", desc: "React Router navigation demo" },
];

const Home = () => {
  return (
    <section>
      <h2>Welcome</h2>
      <p>
        This project combines every React topic from the React folder of Week 3.
      </p>
      <ul className="feature-links">
        {sections.map((section) => (
          <li key={section.to}>
            <Link to={section.to}>
              <strong>{section.title}</strong> — {section.desc}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;