import ImageSlot from "./ImageSlot";
import { hero, site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[620px] items-end"
      style={{ height: "92vh" }}
    >
      <div className="absolute inset-0">
        <ImageSlot
          brief="PHOTO 1 · plan large, lieu de travail réel, regard objectif, l'air interrompu"
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,23,28,0.28) 0%, rgba(21,23,28,0.66) 100%)",
        }}
      />
      <div className="pointer-events-none relative w-full px-[6vw] pb-[7vh]">
        <div className="mb-6 text-[12px] tracking-[0.14em] text-paper/75 uppercase">
          {hero.kicker}
        </div>
        <h1 className="u-display m-0 mb-6 max-w-[18ch] text-balance text-paper [font-size:clamp(46px,7.4vw,124px)]">
          {hero.title}
        </h1>
        <p className="m-0 mb-8 max-w-[54ch] leading-[1.5] text-paper [font-size:clamp(15px,1.25vw,19px)]">
          {hero.lead}
        </p>
        <a
          href="#contact"
          className="pointer-events-auto inline-block bg-blue px-7 py-4 text-[15px] font-semibold tracking-[0.04em] text-paper uppercase transition-colors hover:bg-paper hover:text-blue"
        >
          {site.ctaPrimary}
        </a>
        <p className="m-0 mt-4 text-[13px] text-paper/70">{site.ctaMicro}</p>
      </div>
    </section>
  );
}
