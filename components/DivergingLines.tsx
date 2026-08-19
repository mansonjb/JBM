"use client";

import { useEffect, useState } from "react";

/**
 * Les deux traits qui divergent d'un degré, révélés au fil du scroll.
 * C'est la métaphore du nom : au départ l'écart ne se voit pas.
 */
export default function DivergingLines() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const doc = document.documentElement;
        const p = Math.min(
          1,
          (window.scrollY + window.innerHeight * 0.45) / doc.scrollHeight
        );
        setProgress(p);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const clip = Math.max(0, Math.round((1 - progress) * 100));

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-[17%] z-0 h-full w-0"
      style={{ clipPath: `inset(0 -400px ${clip}% -400px)` }}
    >
      <div className="absolute top-0 left-0 h-full w-px bg-blue opacity-35" />
      <div
        className="absolute top-0 left-0 h-full w-px bg-blue opacity-35"
        style={{ transform: "rotate(1deg)", transformOrigin: "top center" }}
      />
    </div>
  );
}
