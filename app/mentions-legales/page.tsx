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
    <main className="u-section">
      <div className="u-container">
        {/* Lien de retour : rang sur-titre, soulignement bleu. Aucune flèche : elle est réservée au bouton d'action. */}
        <Link href="/" className="u-surtitre u-link">
          {site.name}
        </Link>

        {/* Rang titre, pas rang display : le display ne sert qu'au h1 du héros et à la signature. */}
        <h1 className="u-h2 u-mt-32">Mentions légales.</h1>
        <span className="u-underline is-in" aria-hidden="true" />

        <div className="u-mt-32 border-t border-line">
          {blocs.map((bloc) => (
            <section key={bloc.titre} className="border-b border-line py-6">
              <h2 className="u-surtitre">{bloc.titre}</h2>
              <div className="u-mt-16">
                {bloc.lignes.map((ligne) => (
                  <p key={ligne} className="u-note">
                    {ligne}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
