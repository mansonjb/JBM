import ImageSlot from "./ImageSlot";

/** Bande photo pleine largeur : une image, rien d'autre. */
export default function Photo({
  src,
  alt,
  brief,
  hauteur = "h-[52vh] min-h-[320px]",
}: {
  src: string;
  alt: string;
  brief: string;
  hauteur?: string;
}) {
  return (
    <div className={`relative w-full ${hauteur}`}>
      <ImageSlot src={src} alt={alt} brief={brief} sizes="100vw" />
    </div>
  );
}
