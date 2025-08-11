import NavRail from "./components/nav-rail";
import BackToTop from "./components/back-to-top"; 

import Link from "next/link";
import Image from "next/image";

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

function Container({ children }) {
  return <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">{children}</div>;
}


function Tag({ children }) {
  return <span className="rounded-full border px-2 py-0.5 text-xs text-gray-600">{children}</span>;
}

function ProjectCard({ p, classes = {} }) {
  const {
    title = "text-lg md:text-lg font-semibold",
    subtitle = "text-sm text-gray-600",
    desc = "text-[15px] md:text-base leading-6 text-gray-700",
    tag = "text-xs",
    tagChip = "px-2 py-0.5",
  } = classes;

  return (
    <article className="group relative rounded-2xl border bg-white p-5 hover:border-purple-800">
      {/* Pin the View link */}
      {p.link && (
        <a
          href={p.link}
          className="absolute right-5 top-5 text-sm whitespace-nowrap opacity-80 hover:opacity-100"
        >
          View <span aria-hidden>↗</span>
        </a>
      )}

      <div className="pr-16"> {/* space for the pinned View link */}
        <h3 className={title}>{p.title}</h3>
        {p.subtitle && <p className={`mt-1 ${subtitle}`}>{p.subtitle}</p>}
        {p.description && <p className={`mt-3 ${desc}`}>{p.description}</p>}

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className={`rounded-full border ${tagChip} ${tag} text-gray-600`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return ( 
  <main className="relative w-full px-4 py-10 text-gray-900 overflow-x-hidden">
     
    <section id="home" className="relative w-screen left-1/2 -ml-[50vw] -mr-[50vw]
    overflow-hidden -mt-10 sm:-mt-10
    min-h-[500px] md:min-h-[500px]">

    {/* floral background layer */}
    <Image
      src="/images/header1.jpg"
      alt=""
      fill
      priority
      className="object-cover object-center select-none pointer-events-none"
    />

    {/* content */}
      <Container>
        {/* create vertical space so the band is visible above/below the card */}
        <div className="relative z-10 pt-10 md:pt-20 pb-20 md:pb-20">
          <div className="rounded-2xl border bg-white p-5 sm:p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
              {/* LEFT */}
              <div className="md:col-span-8 min-w-0">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <Image
                    src="/images/profile.png"
                    alt="Katelyn Lee"
                    width={80}
                    height={80}
                    className="rounded-full object-cover shrink-0"
                    sizes="80px"
                    priority
                  />
                  <div className="grow min-w-0">
                    <h1 className="font-serif typewriter text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                      Hi, I&apos;m Katelyn!
                    </h1>
                    <p className="mt-3 text-base sm:text-lg text-gray-600">
                      bioengineering undergrad / neuro / human-centered projects
                    </p>
                    <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-gray-700 break-words">
                      I am interested in models around memory and motor skills.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {LINKS.map(l => (
                        <a key={l.label} href={l.href}
                          className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm hover:border-purple-800 hover:bg-gray-50">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="md:col-span-4 md:pl-4 order-last md:order-none">
                <NavRail
                  items={[
                    { id: "about", label: "About", href: "#about" },
                    { id: "projects", label: "Projects", href: "#projects" },
                    { id: "contact", label: "Contact", href: "#contact" },
                  ]}
                  variant="purple"
                  embedded
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] 
      bg-[url('/images/header2.jpg')] bg-fixed bg-cover bg-center pt-0 -mt-10"
    >
    
      {/* top/bottom fades so the band blends into page bg */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 md:h-14 bg-gradient-to-b from-[#F6F2FF] to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 md:h-14 bg-gradient-to-t from-[#F6F2FF] to-transparent"></div>
      
      <div className="relative z-10 py-12 md:py-16">
    
        {/* ABOUT */}
        <section id="about" className="mt-16 scroll-mt-32 w-full">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <div className="mt-6 rounded-2xl border p-6 text-sm leading-7 bg-white ">
              <p className ="text-base md:text-md">I’m a sophomore working on fall risk, memory, and motor skills</p>
              <p className="mt-3 text-base md:text-md">Outside the lab interests: music and photography</p>
              <div className="mt-5">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium hover:border-purple-800 hover:bg-gray-50"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16 scroll-mt-40 w-full ">
          <Container>
            <div className="flex items-center gap-4 mb-1 ml-1">
              <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium bg-white hover:border-purple-800 hover:bg-gray-50"
              >
                See all projects
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 hover:border-purple-800">
              {PROJECTS.map((proj) => (
                <ProjectCard key={proj.title} p={proj} />
              ))}
            </div>
          </Container>
        </section>


        {/* CONTACT */}
        <section id="contact" className="mt-16 scroll-mt-32 w-full">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight">Contact Me</h2>
            <div className="mt-6 rounded-2xl border p-6 text-sm leading-7 bg-white ">
              <p className="text-base md:text-md">I am open to research, internships, and mentorship chats!</p>
              <div className="mt-4 flex flex-wrap gap-2 text-base md:text-lg">
                {LINKS.map(l => (
                  <a key={l.label} href={l.href}
                    className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:border-purple-800 hover:bg-gray-50">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <footer className="mt-12 py-6 text-xs text-black-500">
            © {new Date().getFullYear()} Katelyn Lee • Built with Next.js & Tailwind
          </footer>
        </Container>

      </div>
    </section>

    <BackToTop />
  </main>
  );
}
