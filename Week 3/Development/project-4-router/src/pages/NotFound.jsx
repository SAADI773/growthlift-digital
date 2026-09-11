import { Link } from "react-router-dom";

const NotFound = () => (
  <section>
    <h2>404 — Page not found</h2>
    <Link to="/">Go home</Link>
  </section>
);

export default NotFound;