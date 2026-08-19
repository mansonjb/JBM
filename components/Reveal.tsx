"use client";

import { useEffect } from "react";

/** Ajoute `is-in` aux éléments `.u-reveal` quand ils entrent dans le viewport. */
export default function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".u-reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
