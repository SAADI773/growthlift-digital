import { useState } from "react";

const Navbar = () => (
  <nav className="nav">
    <span className="logo">GrowthLift</span>
    <div className="links">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#" className="btn small">Sign Up</a>
    </div>
  </nav>
);

const Hero = () => (
  <header className="hero">
    <h1>Build your digital products <span className="gradient">faster</span></h1>
    <p>GrowthLift gives your team the tools to design, launch, and scale — all in one place.</p>
    <div className="cta">
      <a href="#pricing" className="btn primary">Get Started</a>
      <a href="#features" className="btn ghost">Learn More</a>
    </div>
  </header>
);

const Features = () => (
  <section id="features" className="features">
    <h2>Why GrowthLift</h2>
    <div className="grid">
      {[
        { icon: "⚡", title: "Fast", desc: "Instant builds and deploys." },
        { icon: "🔒", title: "Secure", desc: "Enterprise-grade security." },
        { icon: "📈", title: "Scalable", desc: "Grows with your traffic." },
      ].map((f) => (
        <article key={f.title} className="card">
          <div className="icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </article>
      ))}
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="pricing">
    <h2>Simple pricing</h2>
    <div className="grid">
      {[
        { name: "Starter", price: "$0", note: "For side projects" },
        { name: "Pro", price: "$29", note: "For growing teams" },
        { name: "Enterprise", price: "$99", note: "For scale" },
      ].map((plan) => (
        <article key={plan.name} className="card plan">
          <h3>{plan.name}</h3>
          <p className="price">{plan.price}<span>/mo</span></p>
          <p>{plan.note}</p>
          <a href="#" className="btn primary">Choose</a>
        </article>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2026 Week 3 Digital — Landing Page Project</p>
  </footer>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {menuOpen && <div className="demo-note">Menu state: open</div>}
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;