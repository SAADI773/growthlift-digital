import { Link, useParams, useNavigate } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router basics", body: "Routes, links, and navigation." },
  { id: 2, title: "URL params", body: "Dynamic segments with :postId." },
  { id: 3, title: "Search params", body: "Try clicking the buttons below." },
];

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <Link to="/posts">Back to posts</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>
        <button onClick={() => navigate(-1)}>Go back</button>
        <Link to="/posts">All posts</Link>
      </p>
    </section>
  );
};

export default PostDetail;