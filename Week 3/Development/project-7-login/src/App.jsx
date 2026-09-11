import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 1200);
  };

  if (loggedIn) {
    return (
      <div className="card success">
        <div className="tick">✓</div>
        <h1>Welcome!</h1>
        <p>You are logged in as {email}.</p>
      </div>
    );
  }

  return (
    <form className={`card ${error ? "shake" : ""}`} onSubmit={handleSubmit} key={error}>
      <h1>Welcome back</h1>
      <p className="sub">Sign in to your account</p>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Signing in…" : "Sign In"}
      </button>
      <p className="sub">email: anything · password: anything</p>
    </form>
  );
};

const App = () => {
  return (
    <div className="bg">
      <div className="orb orba" />
      <div className="orb orbb" />
      <div className="orb orbc" />
      <LoginForm />
    </div>
  );
};

export default App;