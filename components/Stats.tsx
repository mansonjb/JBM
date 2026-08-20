import { stats } from "@/lib/site";

/** Bande de chiffres sous le héros : ce que l'audit produit, en une lecture. */
export default function Stats() {
  return (
    <section className="border-b border-line bg-sand px-[6vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const isLast = i === stats.length - 1;
          return (
            <div
              key={stat.value}
              className={`u-reveal py-9 sm:py-12 ${
                i % 2 === 1 ? "sm:pl-8" : "sm:pr-8"
              } lg:px-8 lg:first:pl-0 lg:last:pr-0 ${
                isLast ? "" : "border-b border-line lg:border-b-0 lg:border-r"
              } ${i === 1 ? "sm:border-b sm:border-line" : ""}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className={`u-display u-num text-[clamp(30px,3.4vw,58px)] ${
                  stat.accent ? "text-blue" : "text-ink"
                }`}
              >
                {stat.value}
              </div>
              <p className="mt-3 max-w-[30ch] text-[13px] leading-[1.55] text-muted">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
