export default function LeNom() {
  return (
    <section className="flex justify-center border-b border-line px-[6vw] py-[120px] lg:py-[150px]">
      <div className="u-tilt u-serif max-w-[42ch] text-center">
        <p className="m-0 mb-8 text-[clamp(24px,2.6vw,40px)] leading-[1.32]">
          Un degré d&apos;écart ne se voit pas au départ. Cent kilomètres plus
          loin, on n&apos;arrive pas au même endroit.
        </p>
        <p className="m-0 text-[clamp(18px,1.5vw,23px)] leading-[1.5] text-muted">
          C&apos;est pour ça que chaque section de ce site contient un élément
          incliné d&apos;un degré. Vous l&apos;avez senti sans le voir.
        </p>
      </div>
    </section>
  );
}
