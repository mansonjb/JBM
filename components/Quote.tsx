import { site } from "@/lib/site";

/** Citation de la maquette : serif, attribution en bleu. */
export default function Quote({
  children,
  attribution = site.author,
  invert,
}: {
  children: string;
  attribution?: string | false;
  invert?: boolean;
}) {
  return (
    <figure className="m-0">
      <blockquote className="quote">«&nbsp;{children}&nbsp;»</blockquote>
      {attribution ? (
        <figcaption
          className="attrib mt-6"
          style={invert ? { color: "#F4EFE6" } : undefined}
        >
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
