import Action from "./Action";
import Bande from "./Bande";
import Citation from "./Citation";
import Items from "./Items";
import Photo from "./Photo";
import { deroule, site } from "@/lib/site";

/** 02 · Comment ça se passe, en cinq temps. */
export default function Deroule() {
  return (
    <>
      <Bande fond="paper" id="methode">
        <div className="u-surtitre">02 · {deroule.kicker}</div>
        <h2 className="u-titre">{deroule.title}</h2>
      </Bande>

      <Bande fond="sand" serree>
        <Citation attribution={false}>{deroule.intro}</Citation>
      </Bande>

      <Bande fond="paper">
        <Items
          items={deroule.etapes.map((etape) => ({
            titre: etape.titre,
            texte: etape.paragraphes.join(" "),
          }))}
        />
        <div className="mt-[var(--pas-64)]">
          <Action href="#audit">{site.ctaAudit}</Action>
        </div>
      </Bande>

      <Photo
        src="/carnet-atelier.jpg"
        alt="Séance de travail : carnet, notes et schéma vision, clients, valeur, actions"
        brief="PHOTO 2 · une séance de travail : carnet, notes, schéma"
      />
    </>
  );
}
