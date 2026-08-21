import { site } from "@/lib/site";

/** Jauge de lecture en haut de page et bouton d'appel flottant, repris de la maquette. */
export default function Progress() {
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <a className="tel-float" href={`tel:${site.phoneHref}`}>
        <span className="dot" />
        {site.phone}
      </a>
    </>
  );
}
