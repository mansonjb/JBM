import ImageSlot from "./ImageSlot";
import { journal, journalIntro } from "@/lib/site";

export default function Journal() {
  return (
    <section
      id="journal"
      className="border-b border-line px-[6vw] py-[110px] lg:py-[130px]"
    >
      <div className="mb-14 text-[12px] tracking-[0.1em] text-muted uppercase">
        08 · Le journal
      </div>

      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-12">
        <h2 className="u-display m-0 text-[clamp(40px,7vw,124px)] leading-[0.88] tracking-[-0.03em]">
          L&apos;angle mort.
        </h2>
        <p className="m-0 max-w-[42ch] text-sm leading-[1.6] text-muted">
          {journalIntro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {journal.map((entry, i) => (
          <article
            key={entry.title}
            className={`u-reveal border border-line bg-sand ${
              i === 1 ? "u-tilt" : ""
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="relative aspect-4/3">
              <ImageSlot brief={entry.slot} />
              {entry.note && (
                <>
                  <svg
                    viewBox="0 0 300 200"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                  >
                    <path
                      d="M232 40 C196 58 168 78 150 104"
                      fill="none"
                      stroke="#1F3BD8"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M150 104 L163 96 M150 104 L156 116"
                      fill="none"
                      stroke="#1F3BD8"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="u-hand pointer-events-none absolute top-3 right-4 text-2xl text-blue">
                    {entry.note}
                  </span>
                </>
              )}
            </div>
            <div className="px-6 pt-6 pb-7">
              <div className="text-[12px] tracking-[0.1em] text-muted uppercase">
                {entry.date}
              </div>
              <h3 className="u-display mt-3 mb-3 text-[22px] leading-[1.1] tracking-[-0.01em]">
                {entry.title}
              </h3>
              <p className="m-0 text-sm leading-[1.6] text-muted">{entry.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
