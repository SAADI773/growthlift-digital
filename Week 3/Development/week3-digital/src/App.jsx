import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HooksDemo from "./pages/HooksDemo.jsx";
import PropsStateDemo from "./pages/PropsStateDemo.jsx";
import RouterLesson from "./pages/RouterLesson.jsx";
import RouterLessonDetail from "./pages/RouterLessonDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/hooks", label: "Hooks" },
  { to: "/props-state", label: "Props & State" },
  { to: "/router", label: "Router" },
];

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <header className="brand">
        <h1>Week 3 Digital</h1>
        <p>All React concepts in one app</p>
      </header>

      <nav className="nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<HooksDemo />} />
          <Route path="/props-state" element={<PropsStateDemo />} />
          <Route path="/router" element={<RouterLesson />} />
          <Route path="/router/:lessonId" element={<RouterLessonDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        Current path: <code>{location.pathname}</code>
      </footer>
    </div>
  );
};

export default App;