import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

const blocs = [
  {
    titre: "Éditeur du site",
    lignes: [
      "Jean-Baptiste Manson — entrepreneur individuel",
      "Conseil & solutions en Marketing & Communication",
      "19 rue Nicolas Gargot, 17440 Aytré, France",
      "SIRET : 877 931 584 00024",
      `E-mail : ${site.email}`,
    ],
  },
  {
    titre: "Directeur de la publication",
    lignes: ["Jean-Baptiste Manson"],
  },
  {
    titre: "Hébergement",
    lignes: [
      "Vercel Inc.",
      "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      "vercel.com",
    ],
  },
  {
    titre: "Propriété intellectuelle",
    lignes: [
      "L'ensemble des contenus de ce site (textes, images, identité visuelle) est la propriété de l'éditeur, sauf mention contraire. Toute reproduction sans autorisation est interdite.",
    ],
  },
  {
    titre: "Données personnelles",
    lignes: [
      "Les informations transmises via le formulaire de contact servent uniquement à répondre à votre demande. Elles ne sont ni cédées ni revendues.",
      "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données : écrivez à " +
        site.email +
        ".",
    ],
  },
];

export default function MentionsLegales() {
  return (
    <main className="mx-auto min-h-screen max-w-[68ch] px-[6vw] py-20 lg:py-28">
      <Link
        href="/"
        className="text-[12px] tracking-[0.1em] text-muted uppercase hover:text-blue"
      >
        ← {site.name}
      </Link>

      <h1 className="u-display mt-8 mb-12 text-[clamp(38px,6vw,84px)]">
        Mentions légales.
      </h1>

      <div className="border-t border-line">
        {blocs.map((bloc) => (
          <section key={bloc.titre} className="border-b border-line py-8">
            <h2 className="u-display mb-4 text-[22px]">{bloc.titre}</h2>
            {bloc.lignes.map((ligne) => (
              <p key={ligne} className="m-0 mb-2 text-[15px] leading-[1.65] text-muted">
                {ligne}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
