import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h2>404 - Page not found</h2>
      <p>That URL does not match any route.</p>
      <Link to="/">Go home</Link>
    </section>
  );
};

export default NotFound;