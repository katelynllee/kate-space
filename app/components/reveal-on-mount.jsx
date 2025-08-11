// components/reveal-on-mount.jsx
"use client";
import { useEffect, useState } from "react";

export default function RevealOnMount({ children, delay = 0 }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      // one extra frame so layout is stable before animating
      requestAnimationFrame(() => setReady(true));
    }, delay);
    return () => clearTimeout(id);
  }, [delay]);

  return (
    <div
      className={`transform-gpu transition-all duration-600 ease-out
                  ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
    >
      {children}
    </div>
  );
}
