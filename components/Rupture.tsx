import ImageSlot from "./ImageSlot";

export default function Rupture() {
  return (
    <section className="bg-blue px-[6vw] py-[100px] text-paper lg:py-[120px]">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-[clamp(40px,6vw,100px)]">
        <div className="u-reveal">
          <h2 className="u-display m-0 mb-10 text-[clamp(38px,6vw,104px)]">
            Le consultant recommande. L&apos;agence exécute. Je fais les deux.
          </h2>
          <p className="m-0 max-w-[60ch] text-base leading-[1.65] text-paper/85">
            Pas de rapport transmis à quelqu&apos;un qui n&apos;était pas dans la
            conversation. Pas de recommandation que personne n&apos;appliquera.
            Pas de sous-traitance. Celui qui diagnostique est celui qui exécute,
            et c&apos;est la seule raison pour laquelle ça marche.
          </p>
        </div>
        <div className="u-tilt relative aspect-4/5">
          <ImageSlot brief="PHOTO 3 — noir et blanc, en action : il annote, il montre du doigt" />
        </div>
      </div>
    </section>
  );
}
