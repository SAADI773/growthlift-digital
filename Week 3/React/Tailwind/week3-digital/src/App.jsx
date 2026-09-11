import { useState } from "react";

const team = [
  { id: 1, name: "Saadi", role: "Team Lead", color: "from-sky-500 to-blue-600" },
  { id: 2, name: "Growth", role: "Developer", color: "from-emerald-500 to-green-600" },
  { id: 3, name: "Digital", role: "Designer", color: "from-fuchsia-500 to-purple-600" },
];

const App = () => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10 text-center">
          <p className="mb-2 inline-block rounded-full bg-sky-500/10 px-3 py-1 text-sm font-semibold text-sky-400">
            Vite + React + Tailwind
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            Week 3 <span className="text-sky-400">Digital</span>
          </h1>
          <p className="mt-2 text-slate-400">
            Project 1 — styled entirely with Tailwind utility classes
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-3">
          {team.map((member) => {
            const isLiked = liked[member.id];
            return (
              <article
                key={member.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center shadow-lg transition hover:-translate-y-1"
              >
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-2xl font-bold text-white ${member.color}`}
                >
                  {member.name[0]}
                </div>
                <h2 className="text-lg font-semibold">{member.name}</h2>
                <p className="text-sm text-slate-400">{member.role}</p>
                <button
                  onClick={() => toggleLike(member.id)}
                  className={`mt-4 w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    isLiked
                      ? "bg-rose-500 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {isLiked ? "Liked ❤" : "Like"}
                </button>
              </article>
            );
          })}
        </div>

        <footer className="mt-12 text-center text-sm text-slate-500">
          Built with Tailwind CSS v4
        </footer>
      </div>
    </div>
  );
};

export default App;