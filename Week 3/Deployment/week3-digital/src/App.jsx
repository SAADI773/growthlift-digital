const platforms = [
  {
    name: "Vercel",
    color: "from-black to-slate-800",
    steps: [
      "Push code to GitHub",
      "Go to vercel.com → New Project",
      "Import your GitHub repo",
      "Vercel auto-detects Vite → Deploy",
      "Done — your URL is live",
    ],
    config: {
      filename: "vercel.json (optional)",
      content: '{\n  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]\n}',
    },
    url: "https://vercel.com",
  },
  {
    name: "Netlify",
    color: "from-teal-600 to-emerald-700",
    steps: [
      "Push code to GitHub",
      "Go to netlify.com → New site from Git",
      "Pick your repo",
      "Build command: npm run build",
      "Publish directory: dist",
    ],
    config: {
      filename: "netlify.toml",
      content: "[build]\ncommand = \"npm run build\"\npublish = \"dist\"",
    },
    url: "https://netlify.com",
  },
  {
    name: "GitHub Pages",
    color: "from-indigo-500 to-purple-600",
    steps: [
      "Push code to GitHub",
      "npm install gh-pages --save-dev",
      'Add "predeploy": "npm run build" to package.json',
      'Add "deploy": "gh-pages -d dist" to package.json',
      "Run npm run deploy",
    ],
    config: {
      filename: "package.json scripts",
      content: '"predeploy": "npm run build",\n"deploy": "gh-pages -d dist"',
    },
    url: "https://pages.github.com",
  },
];

const PlatformCard = ({ platform }) => (
  <article className="card">
    <h3>{platform.name}</h3>
    <ol className="steps">
      {platform.steps.map((step, i) => (
        <li key={i}><span className="num">{i + 1}</span>{step}</li>
      ))}
    </ol>
    <div className="config">
      <p className="config-title">{platform.config.filename}</p>
      <pre>{platform.config.content}</pre>
    </div>
    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="link">
      Open {platform.name} ↗
    </a>
  </article>
);

const Tips = () => (
  <section className="tips">
    <h2>Common Issues &amp; Tips</h2>
    <ul>
      <li><strong>Blank page after deploy?</strong> Set <code>base: "./"</code> in vite.config.js for relative asset paths.</li>
      <li><strong>React Router 404s?</strong> Add rewrite/redirect config (see Vercel/Netlify above).</li>
      <li><strong>Environment variables?</strong> Use <code>VITE_</code> prefix in <code>.env</code>; expose them in Vercel/Netlify dashboard.</li>
      <li><strong>Custom domain?</strong> Both Vercel and Netlify support custom domains in project settings.</li>
      <li><strong>HTTPS?</strong> Both Vercel and Netlify provide free HTTPS by default.</li>
    </ul>
  </section>
);

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Week 3 Digital — Deployment</h1>
        <p>How to deploy your React app to the web</p>
      </header>
      <div className="grid">
        {platforms.map((p) => <PlatformCard key={p.name} platform={p} />)}
      </div>
      <Tips />
      <footer>Deployment guide · GrowthLift Digital</footer>
    </div>
  );
};

export default App;