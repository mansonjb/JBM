import { trustLine } from "@/lib/site";

/** Une ligne de crédibilité sous le héros, plutôt qu'une grille de chiffres qui coupe le récit. */
export default function TrustLine() {
  return (
    <section className="border-b border-line bg-sand px-[6vw] py-5">
      <div className="flex flex-col gap-2 text-[12px] tracking-[0.1em] text-muted uppercase sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
        {trustLine.map((item, i) => (
          <span key={item} className={i === 1 ? "text-ink" : undefined}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
