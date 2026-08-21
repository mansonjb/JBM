"use client";

import { useEffect, useState } from "react";

const reperes = [
  { id: "regard", label: "01" },
  { id: "methode", label: "02" },
  { id: "exemple", label: "05" },
  { id: "audit", label: "07" },
  { id: "contact", label: "→" },
];

/** Rail de progression : où on en est dans la lecture, et un accès direct aux jalons. */
export default function ScrollRail() {
  const [progress, setProgress] = useState(0);
  const [actif, setActif] = useState("");

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const doc = document.documentElement;
        const hauteur = doc.scrollHeight - window.innerHeight;
        setProgress(hauteur > 0 ? Math.min(1, window.scrollY / hauteur) : 0);

        const courant = reperes
          .map((repere) => {
            const cible = document.getElementById(repere.id);
            return cible
              ? { id: repere.id, top: cible.getBoundingClientRect().top }
              : null;
          })
          .filter(Boolean)
          .filter((r) => r!.top <= window.innerHeight * 0.4)
          .pop();
        setActif(courant?.id ?? "");
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

  return (
    <div className="pointer-events-none fixed top-1/2 right-[2vw] z-30 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
      <div className="relative h-[220px] w-px bg-line">
        <div
          className="absolute top-0 left-0 w-px bg-blue transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        {reperes.map((repere) => (
          <a
            key={repere.id}
            href={`#${repere.id}`}
            className={`u-num pointer-events-auto text-[11px] tracking-[0.1em] transition-colors ${
              actif === repere.id ? "text-blue" : "text-muted hover:text-blue"
            }`}
          >
            {repere.label}
          </a>
        ))}
      </div>
    </div>
  );
}
