import Shot from "./Shot";
import { hero, site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative grid grid-cols-1 items-start gap-[clamp(32px,4vw,72px)] pt-[clamp(50px,8vh,100px)] pb-20 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)]"
    >
      <div className="relative z-1">
        <div className="eyebrow mb-[34px] inline-flex items-center gap-[10px]">
          <span className="inline-block h-[2px] w-[30px] bg-blue" />
          {hero.kicker}
        </div>

        <h1 className="m-0 mb-9 font-[family-name:var(--font-display)] text-[clamp(40px,calc(6.6*var(--u)),122px)] leading-[0.94] tracking-[-0.02em] uppercase">
          {hero.titre1} <span className="blue">{hero.titre2}</span>
        </h1>

        <p className="lede m-0 mb-[42px] max-w-none">{hero.lede}</p>

        <div className="flex flex-wrap items-center gap-6">
          <a className="btn" href="#contact">
            {hero.cta} <span>→</span>
          </a>
          <a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>
            {site.phone}
          </a>
          <span className="text-[14px] text-muted">{hero.micro}</span>
        </div>
      </div>

      <figure className="relative z-1 m-0 flex h-[clamp(360px,64vh,660px)] flex-col">
        <Shot
          src="/hero-bureau.jpg"
          alt="Jean-Baptiste Manson"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
          style={{ flex: 1, minHeight: 0, objectPosition: "50% 20%" }}
        />
      </figure>
    </section>
  );
}
