import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to the Week 3 Digital React Router demo.</p>
      <p>
        <Link to="/posts">See the posts</Link>
      </p>
    </section>
  );
};

export default Home;