import Questions from "./Questions";
import { site } from "@/lib/site";

/** Pied de page : il contient la section Questions, comme dans la maquette. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-0 pt-[clamp(60px,9vh,110px)] pb-[34px]">
      <Questions />

      <div
        className="grid items-end gap-11 px-[5vw] pt-[clamp(50px,8vh,90px)]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        <div>
          <a
            href={`mailto:${site.email}`}
            className="block font-[family-name:var(--font-display)] text-[clamp(30px,4.4vw,82px)] leading-[1.06] tracking-[-0.01em] uppercase"
            style={{ color: "#15171C" }}
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-[6px] block font-[family-name:var(--font-display)] text-[clamp(30px,4.4vw,82px)] leading-[1.06] tracking-[-0.01em] [font-variant-numeric:tabular-nums]"
            style={{ color: "#1F3BD8" }}
          >
            {site.phone}
          </a>
        </div>
      </div>

      <div className="mt-[70px] overflow-hidden pl-[5vw] whitespace-nowrap">
        <div
          className="font-[family-name:var(--font-display)] leading-[0.8] tracking-[-0.04em] uppercase"
          style={{ fontSize: "clamp(150px, 40vw, 700px)", color: "#15171C" }}
        >
          {site.name}
        </div>
      </div>

      <div className="mt-[34px] flex flex-col justify-between gap-[30px] border-t-2 border-line px-[5vw] pt-[22px] text-[12px] tracking-[0.1em] text-muted uppercase sm:flex-row">
        <span>{site.author}</span>
        <a href="/mentions-legales" style={{ color: "#5A5D66" }}>
          Mentions légales
        </a>
      </div>
    </footer>
  );
}
