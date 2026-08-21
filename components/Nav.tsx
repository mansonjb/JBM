import { site } from "@/lib/site";

/** Barre de navigation, reprise de la maquette : marque annelée, liens, téléphone, action. */
export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-40 flex items-center justify-between gap-6 border-b-2 border-line px-[5vw] py-4 backdrop-blur-[8px]"
      style={{ background: "rgba(244,239,230,0.94)" }}
    >
      <div className="flex min-w-0 items-baseline gap-5">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-[19px] tracking-[0.02em] text-ink uppercase"
        >
          <span className="ringmark">{site.name}</span>
        </a>
      </div>

      <div className="flex items-center gap-[22px] text-[12px] tracking-[0.1em] uppercase">
        <a className="navlink hidden sm:inline-block" href="#methode">
          La méthode
        </a>
        <a className="navlink hidden sm:inline-block" href="#exemple">
          Un exemple
        </a>
        <a className="navlink hidden md:inline-block" href="#questions">
          Questions
        </a>
        <a className="tel-nav" href={`tel:${site.phoneHref}`}>
          <span className="dot" />
          {site.phone}
        </a>
        <a className="btn" href="#contact" style={{ padding: "13px 20px" }}>
          Prendre rendez-vous <span>→</span>
        </a>
      </div>
    </nav>
  );
}
