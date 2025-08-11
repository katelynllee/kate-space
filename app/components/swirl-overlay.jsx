// components/swirl-overlay.jsx
"use client";

export default function SwirlOverlay() {
  return (
    <div
      id="swirl-overlay"
      className="
        pointer-events-none fixed inset-0 z-[9999] opacity-0
        bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.35)_0%,rgba(147,51,234,0.55)_30%,rgba(59,130,246,0.6)_60%,rgba(15,15,25,0.9)_100%)]
      "
    />
  );
}
