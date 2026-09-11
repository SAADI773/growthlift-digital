import { Link, useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Routes", body: "Define paths with <Route>." },
  { id: 2, title: "Params", body: "Dynamic segments with useParams." },
  { id: 3, title: "Navigation", body: "NavLink gives active styling." },
];

const PostDetail = () => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) return (
    <section><h2>Post not found</h2><Link to="/posts">Back</Link></section>
  );

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><Link to="/posts">← All posts</Link></p>
    </section>
  );
};

export default PostDetail;