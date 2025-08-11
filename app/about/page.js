"use client";
import Image from "next/image";
import BackToTop from "../components/back-to-top";
import Footer from "../components/footer";

const BTN =
  "inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm bg-white hover:border-purple-800 hover:bg-gray-50 transition";

const LINKS = [
  { label: "Email",   href: "mailto:kl65@illinois.edu" },
  { label: "GitHub",  href: "https://github.com/katelynllee" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/katelyn-l-lee/" },
  { label: "Resume",  href: "/resume.pdf" },
];

export default function AboutPage() {
  const isExternal = (href) => href.startsWith("http") || href.startsWith("mailto:");

  return (
    <main className="relative w-full text-purple-950 bg-purple-50">
      {/* Header band with background image (matches other pages) */}
      <section className="relative w-screen left-1/2 -ml-[50vw] -mr-[50vw] bg-[url('/images/header2.jpg')] bg-cover bg-center md:bg-fixed">
        <div className="relative z-10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Hero card */}
            <div className="rounded-3xl bg-white/90 backdrop-blur shadow-2xl ring-1 ring-purple-200/60 p-6 md:p-8 grid md:grid-cols-[auto,1fr] gap-6 md:gap-8 items-center">
              {/* Profile */}
              <div className="relative w-24 h-24 md:w-28 md:h-28">
                <Image
                  src="/images/profile.png"
                  alt="Katelyn Lee"
                  fill
                  className="rounded-full object-cover ring-4 ring-purple-200 shadow-lg"
                  priority
                />
              </div>

              {/* Text block */} 
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Me</h1>
                <p className="mt-3 text-purple-800/90 leading-relaxed max-w-3xl">
                  Hi! I’m a bioengineering student passionate about motor skills, dry-lab work,
                  and brain-computer interfaces. I like turning ideas at the intersection of
                  neuroscience and human performance into clear, testable projects.
                </p>

                {/* Quick tags */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["Neuro", "Motor skills", "Memory", "Dry-lab", "Human-centered"].map((t) => (
                    <li key={t} className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-sm">
                      {t}
                    </li>
                  ))}
                </ul>

                {/* CTAs (no imports; plain <a> tags) */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {LINKS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className={BTN}
                      {...(isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* soft divider with tiny overlap to avoid hairline seam */}
        <div className="h-10 -mt-px bg-gradient-to-b from-purple-50 to-transparent" />
      </section>

      {/* Info sections */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-6 md:gap-8">
        {/* What I'm into */}
        <article className="rounded-3xl bg-white border border-purple-200/70 shadow-sm p-6">
          <h2 className="text-2xl font-bold">What I’m into</h2>
          <ul className="mt-4 space-y-2 text-purple-800/90">
            <li>• Modeling memory & motor behavior</li>
            <li>• Interpretable, lightweight ML over huge black boxes</li>
            <li>• Clean UX for research tools (clear visuals, fewer clicks)</li>
            <li>• Writing up results so others can reproduce quickly</li>
          </ul>
        </article>

        {/* Currently */}
        <article className="rounded-3xl bg-white border border-purple-200/70 shadow-sm p-6">
          <h2 className="text-2xl font-bold">Currently</h2>
          <ul className="mt-4 space-y-2 text-purple-800/90">
            <li>• Building an EMG → motion baseline (feature windows + simple RNN)</li>
            <li>• Drafting a small portfolio of “explain it simply” posts</li>
            <li>• Practicing drums & guitar; casual phone photography</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Python", "PyTorch", "Next.js", "Tailwind"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-sm">
                {t}
              </span>
            ))}
          </div>
        </article>
      </section>

      <BackToTop />
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
