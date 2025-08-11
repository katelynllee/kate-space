"use client";
import Link from "next/link";
import Image from "next/image";
import BackToTop from "../components/back-to-top";
import Footer from "../components/footer";

const PROJECTS = [
  {
    title: "Motor Skill Prediction",
    timeframe: "2024",
    blurb:
      "EMG-based ML to forecast movement. Exploring feature engineering, windowing, and simple LSTM/TCN baselines.",
    tags: ["Python", "NumPy", "PyTorch", "EMG"],
    href: "#",
  },
  {
    title: "Music Visualizer (idea)",
    timeframe: "2024",
    blurb:
      "React-based visual patterns responding to live audio. Beat/onset detection → shader-ish particles.",
    tags: ["Next.js", "Web Audio", "Canvas/WebGL"],
    href: "#",
  },
  {
    title: "Memory Mapping",
    timeframe: "Concept",
    blurb:
      "Sketch tool for visualizing brain-signal changes with memory-related inputs; focus on UX and explorable views.",
    tags: ["Figma", "D3.js", "UX"],
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative w-full text-purple-950">
      {/* Header band (matches Home header style) */}
      <section className="relative w-screen left-1/2 -ml-[50vw] -mr-[50vw] bg-[url('/images/header2.jpg')] bg-cover bg-center bg-fixed">
        <div className="relative z-10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* hero “card” */}
            <div className="rounded-3xl bg-white/90 backdrop-blur shadow-2xl ring-1 ring-purple-200/60 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Projects</h1>
                <p className="mt-3 text-purple-800/80 max-w-2xl">
                  A few things I’m interested in building and exploring—focusing on neuro, memory,
                  and human-centered tools.
                </p>
              </div>
              {/* mini side panel, like Home */}
              <div className="rounded-2xl bg-purple-50 p-4 min-w-[220px]">
                <ul className="space-y-2 text-purple-700 font-medium">
                  <li><a href="#ml" className="hover:underline">ML & EMG</a></li>
                  <li><a href="#viz" className="hover:underline">Audio / Viz</a></li>
                  <li><a href="#concepts" className="hover:underline">Concepts</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* soft gradient divider like home */}
        <div className="h-10 bg-gradient-to-b from-purple-200/30 to-transparent" />
      </section>

      {/* Projects grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      <BackToTop />
      <div className="mt-24"><Footer /></div>
      
    </main>
  );
}

function ProjectCard({ title, blurb, tags, timeframe, href }) {
  return (
    <article
      className="
        group relative rounded-3xl bg-white border border-purple-200/70
        shadow-sm hover:shadow-xl transition
        overflow-hidden
      "
    >
      {/* subtle gradient top border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-600 via-violet-400 to-blue-500 opacity-70" />
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-extrabold">{title}</h3>
          <span className="text-xs text-purple-700/70">{timeframe}</span>
        </div>
        <p className="mt-3 text-purple-800/80">{blurb}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-medium"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-purple-700 font-semibold hover:underline"
          >
            View Details <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-purple-400/0 group-hover:ring-purple-400/40 transition" />
      <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-40 blur-2xl bg-gradient-to-br from-purple-300 via-fuchsia-200 to-blue-200 transition" />
    </article>
  );
}
