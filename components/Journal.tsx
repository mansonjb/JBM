import ImageSlot from "./ImageSlot";
import { journal } from "@/lib/site";

export default function Journal() {
  return (
    <section
      id="journal"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-10 lg:mb-16">
        <h2 className="u-display m-0 text-[clamp(40px,7vw,124px)] leading-[0.88] tracking-[-0.03em]">
          L&apos;angle mort.
        </h2>
        <p className="m-0 max-w-[34ch] text-sm leading-[1.6] text-muted">
          Une observation par semaine. Une photo, ce que je vois, ce que je
          ferais.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {journal.map((entry, i) => (
          <article
            key={entry.title}
            className={`u-reveal ${i === 1 ? "u-tilt" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="relative aspect-4/3">
              <ImageSlot brief={entry.slot} />
            </div>
            <div className="mt-4 text-[12px] tracking-[0.1em] text-muted uppercase">
              {entry.date}
            </div>
            <h3 className="u-display mt-2.5 mb-0 text-[22px] leading-[1.1]">
              {entry.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
