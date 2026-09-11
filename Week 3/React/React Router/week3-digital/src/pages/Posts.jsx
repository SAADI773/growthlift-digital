import { Link, useSearchParams } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router basics", body: "Routes, links, and navigation." },
  { id: 2, title: "URL params", body: "Dynamic segments with :postId." },
  { id: 3, title: "Search params", body: "Try clicking the buttons below." },
];

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const visible = filter === "all" ? posts : posts.filter((p) => p.id === Number(filter));

  return (
    <section>
      <h1>Posts</h1>
      <div className="filters">
        <button onClick={() => setSearchParams({})}>All</button>
        <button onClick={() => setSearchParams({ filter: "1" })}>Filter 1</button>
        <button onClick={() => setSearchParams({ filter: "2" })}>Filter 2</button>
      </div>
      <p>
        Current filter: <code>{filter}</code>
      </p>
      <ul className="posts">
        {visible.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Posts;