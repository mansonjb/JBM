import Image from "next/image";

type Props = {
  /** Sujet attendu de la photo — sert de brief tant que l'image n'est pas fournie */
  brief: string;
  /** Chemin dans /public une fois la vraie photo posée */
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Emplacement photo. Tant que `src` est vide, on affiche le brief de prise de vue
 * plutôt qu'une image bidon : le jour où la photo arrive, on ajoute `src` et rien d'autre.
 */
export default function ImageSlot({
  brief,
  src,
  alt,
  priority,
  className = "",
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt ?? brief}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-sand ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-3 border border-dashed border-blue/40" />
      <span className="relative max-w-[26ch] px-6 text-center text-[11px] leading-relaxed tracking-[0.12em] text-blue uppercase">
        {brief}
      </span>
    </div>
  );
}
