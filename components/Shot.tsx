import Image from "next/image";

/** Préfixe du sous-dossier de publication, vide hors GitHub Pages. */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Photo au filet bleu de la maquette. */
export default function Shot({
  src,
  alt,
  className = "",
  style,
  sizes = "100vw",
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`${base}${src}`}
      alt={alt}
      width={1600}
      height={1200}
      sizes={sizes}
      priority={priority}
      className={`shot ${className}`}
      style={style}
    />
  );
}
