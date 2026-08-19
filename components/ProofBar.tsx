import { proofs } from "@/lib/site";

/** Bordures : empilé + trait dessous en mobile, 4 colonnes séparées par un filet en desktop. */
function cellBorders(index: number) {
  const isLast = index === proofs.length - 1;
  const mobile = isLast ? "" : "border-b border-line";
  const desktop = isLast
    ? "lg:border-b-0"
    : "lg:border-b-0 lg:border-r lg:border-line";
  const tablet = index === 1 ? "sm:border-b sm:border-line" : "";
  return `${mobile} ${tablet} ${desktop}`;
}

export default function ProofBar() {
  return (
    <section className="border-b border-line px-[6vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {proofs.map((proof, i) => (
          <div
            key={proof.value}
            className={`u-reveal py-10 sm:py-14 ${
              i % 2 === 1 ? "sm:pl-8" : "sm:pr-8"
            } lg:px-8 lg:first:pl-0 lg:last:pr-0 ${cellBorders(i)}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="relative inline-block">
              <div
                className={`u-display u-num text-[clamp(40px,4.4vw,74px)] leading-none tracking-[-0.01em] ${
                  proof.accent ? "text-blue" : "text-ink"
                }`}
              >
                {proof.value}
              </div>
              {proof.accent && (
                <svg
                  viewBox="0 0 220 120"
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-[22%] -left-[16%] h-[150%] w-[132%] overflow-visible"
                >
                  <ellipse
                    cx="110"
                    cy="60"
                    rx="102"
                    ry="48"
                    fill="none"
                    stroke="#1F3BD8"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    transform="rotate(-3 110 60)"
                  />
                </svg>
              )}
            </div>
            <p className="mt-4 max-w-[26ch] text-[13px] leading-[1.5] text-muted">
              {proof.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
