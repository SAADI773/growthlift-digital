const features = [
  { title: "Utility-first", desc: "Style with classes, not CSS files.", color: "bg-sky-500" },
  { title: "Responsive", desc: "Breakpoints like sm:, md:, lg:.", color: "bg-emerald-500" },
  { title: "Dark mode", desc: "Built-in variants for theme.", color: "bg-fuchsia-500" },
  { title: "Fast build", desc: "Only ships used styles.", color: "bg-amber-500" },
];

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="mx-auto max-w-3xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-500">
            Project 5 — Tailwind
          </h1>
          <p className="mt-2 text-slate-400">Styled 100% with utility classes</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <article key={f.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 transition">
              <div className={`h-2 w-12 rounded-full ${f.color} mb-4`} />
              <h2 className="text-lg font-semibold">{f.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;