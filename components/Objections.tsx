"use client";

import { useState } from "react";
import { objections } from "@/lib/site";

export default function Objections() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-[clamp(40px,6vw,100px)]">
        <h2 className="u-display m-0 text-[clamp(38px,5.4vw,92px)]">
          Les objections.
        </h2>

        <div className="border-t border-line">
          {objections.map((objection, i) => {
            const isOpen = open === i;
            return (
              <div
                key={objection.q}
                className={`border-b border-line ${i === 2 ? "u-tilt" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`objection-${i}`}
                  className="grid w-full cursor-pointer grid-cols-[44px_1fr_30px] items-baseline gap-4 bg-transparent py-6 text-left md:grid-cols-[60px_1fr_30px]"
                >
                  <span className="u-num text-[13px] font-bold text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="u-serif text-[clamp(20px,1.8vw,27px)] leading-[1.25] italic">
                    {objection.q}
                  </span>
                  <span
                    className="text-right text-lg text-muted transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={`objection-${i}`}
                    className="m-0 mb-7 max-w-[60ch] pl-[60px] text-[15px] leading-[1.65] text-muted md:pl-[76px]"
                  >
                    {objection.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
