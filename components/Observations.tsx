import ImageSlot from "./ImageSlot";
import { observations } from "@/lib/site";

export default function Observations() {
  return (
    <section className="border-b border-line py-[110px] lg:py-[130px]">
      <div className="flex flex-col items-start justify-between gap-6 px-[6vw] md:flex-row md:items-end md:gap-10">
        <h2 className="u-display m-0 max-w-[22ch] text-[clamp(38px,6.6vw,112px)]">
          Ce que je vois quand je regarde.
        </h2>
        <span className="text-[12px] tracking-[0.1em] whitespace-nowrap text-muted uppercase">
          Journal · observations
        </span>
      </div>

      <div className="u-scroller mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[6vw] pb-4 lg:mt-16">
        {observations.map((obs, i) => (
          <article
            key={obs.title}
            className={`u-reveal shrink-0 basis-[clamp(300px,32vw,460px)] snap-start border border-line bg-sand ${
              i === 0 ? "u-tilt" : ""
            }`}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="relative h-[300px]">
              <ImageSlot brief={obs.slot} />
              {obs.note && (
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
                    {obs.note}
                  </span>
                </>
              )}
            </div>
            <div className="px-6 pt-6 pb-7">
              <div className="text-[12px] tracking-[0.1em] text-muted uppercase">
                {obs.date}
              </div>
              <h3 className="u-display mt-3 mb-3 text-[26px] leading-[1.05] tracking-[-0.01em]">
                {obs.title}
              </h3>
              <p className="m-0 text-sm leading-[1.6] text-muted">{obs.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
