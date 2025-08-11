import NavRail from "./nav-rail";
import BackToTop from "./back-to-top"; 
import Link from "next/link";

const LINKS = [
  { label: "Email", href: "mailto:kl65@illinois.edu" },
  { label: "GitHub", href: "https://github.com/katelynllee" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/katelyn-l-lee/" },
  { label: "Resume", href: "/resume.pdf" },
];

const PROJECTS = [
  {
    title: "Fall Risk Classifier",
    subtitle: "EEG & gait",
    description:
      "TBD",
    tags: ["Python", "scikit-learn", "EEG", "Signal Processing"],
    link: "/projects/fall-risk",
  },
  {
    title: "Motor Skill Prediction",
    subtitle: "Neuroengineering project",
    description:
      "Predicted motor scores with low-cost sensors and a compact transformer; explored transfer learning.",
    tags: ["TBD"],
    link: "/projects/motor-skill",
  },
];

const SIDE_ITEMS = [
  { id: "about",    label: "About",    href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact",  label: "Contact",  href: "#contact" },
];

function Tag({ children }) {
  return <span className="rounded-full border px-2 py-0.5 text-xs text-gray-600">{children}</span>;
}

function ProjectCard({ p }) {
  return (
    <article className="group rounded-2xl border p-5 transition-colors bg-white hover:border-purple-800">
      <div className="flex items-start justify-between gap-4 bg-white ">
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
    <main id="home" className="relative w-full px-4 md:px-8 py-10 text-gray-900">
     
      {/* HERO */}
      <section id="home" className="w-full">
        <div className="rounded-[2rem] border bg-white p-10 shadow-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Left: avatar + text */}
            <div className="md:col-span-8">
              <div className="flex items-start gap-6">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gray-200" />
                <div className="grow">
                  <h1
                    className="typewriter text-5xl font-extrabold leading-tight tracking-tight"
                    style={{ ["--tw-type-steps"]: 16, ["--tw-ch"]: "16ch" }}
                  >
                    Hi, I&apos;m Katelyn!
                  </h1>
                  <p className="mt-3 text-xl text-gray-600">
                    bioengineering undergrad / neuro / human-centered projects
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700">
                    I am interested in models around memory and motor skills.
                  </p>

                  {/* contact buttons can stay here under the text */}
                  <div className="mt-6 flex max-w-xs flex-col gap-3 md:max-w-none md:flex-row md:flex-wrap">
                    {LINKS.map((l) => (
                      <a key={l.label} href={l.href}
                        className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm hover:border-purple-800 hover:bg-gray-50">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: embedded table-of-contents nav */}
            <div className="md:col-span-4 md:pl-4 bg:purple-200 border:purple-800 flex flex-col justify-center" >
              <NavRail
                items={[
                  { id: "about",    label: "About",    href: "#about" },
                  { id: "projects", label: "Projects", href: "#projects" },
                  { id: "contact",  label: "Contact",  href: "#contact" },
                ]}
                variant="purple"
                embedded
              />
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="mt-16 scroll-mt-32 w-full">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <div className="mt-3 rounded-2xl border p-6 text-sm leading-7 bg-white ">
          <p>I’m a sophomore working on fall risk, memory, and motor skills</p>
          <p className="mt-3">Outside the lab interests: music and photography</p>
          <div className="mt-5">
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium hover:border-purple-800 hover:bg-gray-50"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-16 scroll-mt-40 w-full ">
        <div className="flex items-center gap-4 mb-1 ml-1">
          <h2 className="text-2xl font-semibold tracking-tight">Current Works</h2>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium bg-white hover:border-purple-800 hover:bg-gray-50"
          >
            See all projects
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 hover:border-purple-800">
          {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="mt-16 scroll-mt-32 w-full">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-3 rounded-2xl border p-6 text-sm leading-7 bg-white ">
          <p>I am open to research, internships, and mentorship chats!</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {LINKS.map(l => (
              <a key={l.label} href={l.href}
                 className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:border-purple-800 hover:bg-gray-50">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-12 py-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Katelyn Lee • Built with Next.js & Tailwind
      </footer>

      <BackToTop />
    </main>
  );
}
