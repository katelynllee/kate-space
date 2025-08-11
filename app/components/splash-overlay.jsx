// components/splash-overlay.jsx
"use client";
import { useEffect, useState } from "react";

export default function SplashOverlay() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const waitFonts = typeof document !== "undefined" && document.fonts
      ? document.fonts.ready
      : Promise.resolve();
    const waitLoad = new Promise((res) => {
      if (document.readyState === "complete") res();
      else window.addEventListener("load", () => res(), { once: true });
    });

    // Cap the wait so it never hangs (e.g., 900ms)
    Promise.race([
      Promise.all([waitFonts, waitLoad]),
      new Promise((r) => setTimeout(r, 900)),
    ]).then(() => setTimeout(() => setHide(true), 120));
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-white
                  transition-opacity duration-500
                  ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-hidden={hide}
    >
      <div className="flex items-center gap-3 text-purple-700">
        <div className="h-5 w-5 rounded-full border-2 border-purple-600 border-t-transparent animate-spin" />
        <span className="font-semibold">Katespace Loading…</span>
      </div>
    </div>
  );
}
