"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition hover:bg-purple-700"
    > 
      ↑
    </a> 
  );
}
