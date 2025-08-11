// app/nav-rail.jsx
"use client";
import { useEffect, useState } from "react";

export default function NavRail({
  items = [
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "about",    label: "About",    href: "#about" },
    { id: "contact",  label: "Contact",  href: "#contact" },
  ],
  variant = "purple",
  embedded = false,
}) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const ids = items.map(i => i.id);
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries.filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target?.id) setActive(top.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0,0.25,0.5,0.75,1] }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [items]);

  const color = variant === "purple"
    ? { 
        rail: "border-purple-800 bg-purple-50/80", 
        item: "hover:bg-purple-200 text-purple-800 text-bold", 
        active: "bg-purple-800 text-white" 
    }
    : { 
        rail: "border-blue-600 bg-blue-50/80", 
        item: "hover:bg-blue-100 text-blue-700", 
        active: "bg-blue-600 text-white" 
    };

  // Embedded look = no border, softer background
  const railClass = embedded
    ? "bg-purple-50 p-3 rounded-2xl"
    : `rounded-2xl border-2 ${color.rail} p-2 shadow-sm`;

  return (
    <nav aria-label="Section navigation">
      <div className={`flex flex-col gap-2 ${railClass}`}>
        {items.map((it) => {
          const isActive = active === it.id;
          const base = "w-full rounded-xl px-3 py-2 text-left text-sm transition select-none";
          return (
            <a key={it.label} href={it.href}
               className={base + (isActive ? ` ${color.active} font-medium font-bold` : ` ${color.item} font-bold`)}>
              {it.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
