import NavRail from "./nav-rail";

const LINKS = [
  { label: "Email", href: "mailto:you@illinois.edu" },
  { label: "GitHub", href: "https://github.com/youruser" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/youruser/" },
  { label: "Resume", href: "/resume.pdf" },
];

const PROJECTS = [
  {
    title: "Fall Risk Classifier",
    subtitle: "Dry-lab research — EEG & gait",
    description:
      "Built a feature pipeline from inertial and EEG signals to classify fall risk; AUC + SHAP for interpretability.",
    tags: ["Python", "scikit-learn", "EEG", "Signal Processing"],
    link: "/projects/fall-risk",
  },
  {
    title: "Motor Skill Prediction",
    subtitle: "Neuroengineering project",
    description:
      "Predicted motor scores with low-cost sensors and a compact transformer; explored transfer learning.",
    tags: ["PyTorch", "Transformers", "Time Series"],
    link: "/projects/motor-skill",
  },
];

function Tag({ children }) {
  return <span className="rounded-full border px-2 py-0.5 text-xs text-gray-600">{children}</span>;
}

function ProjectCard({ p }) {
  return (
    <article className="group rounded-2xl border p-5 transition-colors hover:border-gray-400">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
          {p.subtitle && <p className="mt-0.5 text-sm text-gray-500">{p.subtitle}</p>}
        </div>
        {p.link && (
          <a href={p.link} className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100">
            <span>View</span><span aria-hidden>↗</span>
          </a>
        )}
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-700">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="home" className="relative mx-auto max-w-6xl px-6 py-10 text-gray-900">
      {/* vertical nav */}
      <NavRail />

      {/* HERO */}
      <section className="mx-auto max-w-4xl rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-200" />
          <div className="grow">
            <h1 className="text-4xl font-bold tracking-tight">{ "Hi, I'm Katelyn!" }</h1>
            <p className="mt-2 text-lg text-gray-600">bioengineering undergrad / neuro / human-centered projects</p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-700">
              I am interested in models around memory and motor skills.
            </p>
          </div>
          <div className="flex w-full max-w-xs flex-col gap-2 md:w-auto">
            {LINKS.map(l => (
              <a key={l.label} href={l.href}
                 className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:border-gray-400">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-16 scroll-mt-40">
        <h2 className="text-2xl font-semibold tracking-tight">Current Works</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-16 scroll-mt-40">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <div className="mt-3 rounded-2xl border p-6 text-sm leading-7">
          <p>I’m a sophomore working on fall risk, memory, and motor skills</p>
          <p className="mt-3">Outside the lab interests: music and photography</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-16 scroll-mt-40">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-3 rounded-2xl border p-6 text-sm leading-7">
          <p>I am open to research, internships, and mentorship chats!</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {LINKS.map(l => (
              <a key={l.label} href={l.href}
                 className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:border-gray-400">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-12 py-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Katelyn Lee • Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
