"use client";
import { useEffect, useState } from "react";

const ITEMS = [
  { id: "home",     label: "Home",     href: "#home" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "about",    label: "About",    href: "#about" },
  { id: "contact",  label: "Contact",  href: "#contact" },
  { id: "resume",   label: "Resume",   href: "/resume.pdf", external: true }, // different page/file
];

export default function NavRail() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home","projects","about","contact"];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target?.id) setActive(top.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0,0.25,0.5,0.75,1] }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav aria-label="Section navigation"
         className="fixed right-4 top-1/2 z-40 -translate-y-1/2 md:right-6 lg:right-10">
      <div className="flex flex-col gap-2 rounded-2xl border-2 border-blue-600 bg-blue-50/80 p-2 shadow-sm">
        {ITEMS.map(it => {
          const isActive = active === it.id;
          const base = "w-36 rounded-xl px-3 py-2 text-left text-sm transition hover:bg-blue-100";
          return (
            <a key={it.label}
               href={it.href}
               target={it.external ? "_blank" : undefined}
               rel={it.external ? "noreferrer" : undefined}
               className={base + (isActive ? " bg-blue-600 font-medium text-white" : " text-blue-700")}>
              {it.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
