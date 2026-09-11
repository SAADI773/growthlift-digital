import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Routes", body: "Define paths with <Route>." },
  { id: 2, title: "Params", body: "Dynamic segments with useParams." },
  { id: 3, title: "Navigation", body: "NavLink gives active styling." },
];

const Posts = () => (
  <section>
    <h2>Posts</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Posts;