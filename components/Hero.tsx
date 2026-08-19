import ImageSlot from "./ImageSlot";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[620px] items-end"
      style={{ height: "92vh" }}
    >
      <div className="absolute inset-0">
        <ImageSlot
          brief="PHOTO 1 — plan large, lieu de travail réel, regard objectif, l'air interrompu"
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,23,28,0.30) 0%, rgba(21,23,28,0.62) 100%)",
        }}
      />
      <div className="pointer-events-none relative w-full px-[6vw] pb-[7vh]">
        <h1 className="u-display m-0 mb-6 max-w-[20ch] text-paper text-balance [font-size:clamp(46px,7.4vw,124px)]">
          {site.baseline}
        </h1>
        <p className="m-0 mb-8 max-w-[56ch] leading-[1.5] text-paper [font-size:clamp(15px,1.25vw,19px)]">
          Je trouve, dans ce que vous avez déjà, le degré qui change tout. Puis
          je le corrige moi-même.
        </p>
        <a
          href="#contact"
          className="pointer-events-auto inline-block bg-blue px-7 py-4 text-[15px] font-semibold tracking-[0.04em] text-paper uppercase transition-colors hover:bg-paper hover:text-blue"
        >
          Le diagnostic, {site.diagnosticPrice}
        </a>
      </div>
    </section>
  );
}
