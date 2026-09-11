import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <div className="app">
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/posts" className={({ isActive }) => (isActive ? "active" : "")}>Posts</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;