import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h1>404 - Page not found</h1>
      <p>That URL does not match any route.</p>
      <Link to="/">Go home</Link>
    </section>
  );
};

export default NotFound;