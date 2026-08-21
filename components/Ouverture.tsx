import { ouverture } from "@/lib/site";

/**
 * Bandeau hors plan : ni numéro, ni titre, ni ancre. Il se lit comme la suite du héros.
 * Le sand ne signifie qu'une chose sur la page : ce bloc n'appartient pas aux huit temps.
 */
export default function Ouverture() {
  const gauche = ouverture.pistes.slice(0, 4);
  const droite = ouverture.pistes.slice(4);

  return (
    <section className="u-section bg-sand">
      <div className="u-container">
        {/* Sept faits parallèles de rang égal, en 6+6. Aucun survol : rien n'est cliquable. */}
        <div className="u-grid">
          <ul className="u-liste u-liste-simple u-reveal col-span-6">
            {gauche.map((piste) => (
              <li key={piste}>{piste}</li>
            ))}
          </ul>
          <ul className="u-liste u-liste-simple u-reveal col-span-6">
            {droite.map((piste) => (
              <li key={piste}>{piste}</li>
            ))}
          </ul>
        </div>

        {/* « les » désigne les sept pistes : l'énoncé vient donc après la liste, jamais avant. */}
        <p className="u-enonce u-reveal u-mt-96">{ouverture.paragraphes[0]}</p>

        {/* Le seul résumé de la méthode ; la section 03 la développe. */}
        <div className="u-grid u-mt-64">
          <div className="u-reveal col-span-7">
            <p className="u-courant">{ouverture.paragraphes[1]}</p>
            <p className="u-courant">{ouverture.paragraphes[2]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
