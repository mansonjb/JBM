import { gains } from "@/lib/site";

/** Ce que le client y gagne, entre la méthode et la preuve. */
export default function Gains() {
  return (
    <section className="border-b border-line bg-sand px-[6vw] py-[80px] lg:py-[100px]">
      <div className="mb-12 text-[12px] tracking-[0.1em] text-muted uppercase">
        Ce que vous y gagnez
      </div>
      <div className="grid grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-12">
        {gains.map((gain, i) => (
          <div
            key={gain.titre}
            className={`u-reveal ${i === 1 ? "u-tilt" : ""}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <h3 className="u-display m-0 mb-4 text-[clamp(28px,3vw,44px)] leading-none">
              {gain.titre}
            </h3>
            <p className="m-0 max-w-[38ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-muted">
              {gain.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
