import { Link, useSearchParams } from "react-router-dom";

const lessons = [
  { id: 1, title: "Router basics", body: "BrowserRouter wraps the app." },
  { id: 2, title: "Routes", body: "Each Route matches a path to a page." },
  { id: 3, title: "NavLink", body: "Gets an active class automatically." },
  { id: 4, title: "404", body: "Catch-all '*' route." },
];

const RouterLesson = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";
  const visible = filter === "all" ? lessons : lessons.filter((l) => l.id === Number(filter));

  return (
    <section>
      <h2>React Router demo</h2>
      <p>This page itself is a routed section — links below have params and query strings.</p>
      <p>
        Current query filter: <code>{filter}</code>
      </p>
      <div className="controls">
        <Link className="btn" to="/router">All</Link>
        <Link className="btn" to="/router?filter=1">1</Link>
        <Link className="btn" to="/router?filter=3">3</Link>
      </div>
      <ul className="feature-links">
        {visible.map((lesson) => (
          <li key={lesson.id}>
            <Link to={`/router/${lesson.id}`}>
              <strong>{lesson.title}</strong> — {lesson.body}
            </Link>
          </li>
        ))}
      </ul>
      <p className="status">
        Try an unknown URL like <code>/nope</code> to see the 404 page.
      </p>
    </section>
  );
};

export default RouterLesson;