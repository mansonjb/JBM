import { site } from "@/lib/site";

/** Le seul traitement autorisé pour une phrase de posture. */
export default function Citation({
  children,
  large,
  attribution = site.author,
}: {
  children: string;
  large?: boolean;
  attribution?: string | false;
}) {
  return (
    <figure className="u-reveal m-0">
      <blockquote className={`u-citation ${large ? "u-citation-large" : ""}`}>
        «&nbsp;{children}&nbsp;»
      </blockquote>
      {attribution ? (
        <figcaption className="u-attribution">{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
