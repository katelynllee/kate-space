"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";
 
/* ---------- Shared bits ---------- */
function Container({ children }) {
  return <div className="mx-auto max-w-screen-xl px-3 sm:px-4 md:px-6">{children}</div>;
}
function Tag({ children }) {
  return (
    <span className="rounded-full border px-2 py-0.5 text-xs text-gray-600 bg-gray-50">
      {children}
    </span>
  );
}

/* ---------- Data ---------- */
const ROLES = [
  {
    title: "TBD 1",
    org: "N/A 1",
    period: "N/A1 –N/A1",
    bullets: [
      "TBD",
      "TBD 2",
    ],
    tech: ["N/A", "Tailwind CSS"],
    href: "/projects/motor-skill",
  },
  {
    title: "TBD 2",
    org: "N/A 2",
    period: "N/A2 – N/A2",
    bullets: [
      "N/A 1",
      "N/A 2",
    ],
    tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS", "Google Maps API"],
    href: "/projects/motor-skill",
  },
  {
    title: "N/A",
    org: "N/A 3",
    period: "N/A 2024 – N/A 2024",
    bullets: [
      "N/A 3",
    ],
    tech: ["React", "MongoDB", "Node.js", "Tailwind CSS"],
    href: "/projects/motor-skill",
  },
];

/* ---------- Timeline card (no dot here) ---------- */
function TimelineItem({ item, index, cardRef }) {
  const isLeft = index % 2 === 0; // 0,2,... on the LEFT

  return (
    <div ref={cardRef} className="md:grid md:grid-cols-9 md:gap-6 items-start">
      {/* Spacer column */}
      <div
        className={`hidden md:block md:col-span-4 ${
          isLeft ? "md:order-3" : "md:order-1"
        }`}
      />

      {/* Rail spacer column (keeps the middle gap aligned with the absolute rail) */}
      <div className="md:col-span-1 md:order-2" />

      {/* Card column */}
      <div
        className={`md:col-span-4 ${
          isLeft ? "md:order-1" : "md:order-3"
        }`}
      >
        <article className="group rounded-2xl border bg-white p-5 md:p-6 hover:border-purple-800 transition">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm text-gray-500">{item.period}</p>
              <h3 className="mt-0.5 text-xl md:text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{item.org}</p>
            </div>
            {item.href && (
              <Link
                href={item.href}
                className="shrink-0 whitespace-nowrap text-sm opacity-80 hover:opacity-100"
              >
                View Details <span aria-hidden>↗</span>
              </Link>
            )}
          </div>

          <ul className="mt-3 space-y-2 text-[15px] leading-6 text-gray-800">
            {item.bullets?.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>

          {!!item.tech?.length && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2 py-0.5 text-xs text-gray-600 bg-gray-50"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

/* ---------- Timeline (glowing rail + dots) ---------- */
function ResumeTimeline() {
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const [dotPct, setDotPct] = useState([]);  // 0..1 position for each card
  const [progress, setProgress] = useState(0); // 0..1 fill height

  const computeDots = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
  
    const wrapRect = wrap.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const wrapTop = wrapRect.top + scrollY;
    const wrapHeight = wrap.scrollHeight || wrapRect.height || 1;
  
    const pcts = cardRefs.current.map((el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      const elTop = r.top + scrollY - wrapTop;
      const center = elTop + r.height / 2;
      return Math.max(0, Math.min(1, center / wrapHeight));
    });
  
    setDotPct(pcts);
  };

  const computeProgress = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
  
    const wrapRect = wrap.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const wrapTop = wrapRect.top + scrollY;
    const wrapHeight = wrap.scrollHeight || wrapRect.height || 1;
  
    // Fill up to the viewport center
    const viewportCenter = scrollY + window.innerHeight / 2;
  
    // distance from top of rail to viewport center, clamped to the rail height
    const y = Math.min(Math.max(viewportCenter - wrapTop, 0), wrapHeight);
  
    setProgress(y / wrapHeight);
  };

  useEffect(() => {
    computeDots();
    computeProgress();
    const onScroll = () => computeProgress();
    const onResize = () => { computeDots(); computeProgress(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const id = setTimeout(() => { computeDots(); computeProgress(); }, 200);
    return () => {
      clearTimeout(id);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="py-10 md:py-14">
      <Container>
        <div ref={wrapRef} className="relative md:mt-3 space-y-3 md:space-y-4">
          {/* center rail */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-purple-200/50" />
          {/* glowing fill */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-[3px] rounded-full shadow-[0_0_18px_4px_rgba(147,51,234,0.45)]"
            style={{
              height: `${Math.max(0, Math.min(100, progress * 100))}%`,
              background:
                "linear-gradient(180deg, rgba(147,51,234,1) 0%, rgba(192,132,252,1) 45%, rgba(59,130,246,1) 100%)",
              transition: "height 120ms linear",
            }}
          />
          {/* dots on the rail */}
          {dotPct.map((p, i) => (
            <div
              key={i}
              className="hidden md:block absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full"
              style={{
                top: `${p * 100}%`,
                transform: "translate(-50%, -50%)",
                background: progress >= p ? "rgb(147,51,234)" : "rgb(216,180,254)",
                boxShadow: progress >= p ? "0 0 0 6px rgba(147,51,234,0.25)" : "none",
                transition: "background-color 150ms linear, box-shadow 150ms linear",
              }}
            />
          ))}
          {/* mobile faint rail */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-purple-200/60" />

          {ROLES.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              cardRef={(el) => (cardRefs.current[i] = el)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- PAGE WITH HEADER + TIMELINE ---------- */
export default function ResumePage() {
  return (
    <main className="relative w-full text-purple-950">
      {/* Header band (keeps your theme) */}
      <section className="relative w-screen left-1/2 -ml-[50vw] -mr-[50vw] bg-[url('/images/header2.jpg')] bg-cover bg-center bg-fixed">
        <div className="relative z-10 py-12 md:py-16">
          <Container>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Experience</h1>
              <Link
                href="/resume.pdf"  // put resume.pdf in /public
                target="_blank"
                className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium bg-white hover:border-purple-800 hover:bg-gray-50"
              >
                Download Resume
              </Link>
            </div>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              My journey and roles. Click on a card to learn more about each position!
            </p>
          </Container>
        </div>
      </section>

      {/* Animated alternating timeline */}
      <div className="mb-50 md:mb-60">
        <ResumeTimeline />
      </div>
      <BackToTop />
      <div className="mt-50 md:mt-60"><Footer /></div>
      
    </main>
  );


}
