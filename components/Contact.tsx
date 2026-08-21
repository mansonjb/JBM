"use client";

import { useState } from "react";
import { cloture, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-0 border-b border-paper/45 bg-transparent px-0 py-3 text-base text-paper outline-none placeholder:text-paper/60 focus:border-paper";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.fallback) {
        // Pas d'envoi configuré côté serveur : on bascule sur le client mail.
        const body = `Nom : ${data.nom}\nEntreprise : ${data.entreprise}\nE-mail : ${data.email}\n\n${data.message}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          "Diagnostic — " + (data.entreprise || data.nom)
        )}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
        setMessage("Votre logiciel de messagerie s'ouvre avec le message prêt.");
        return;
      }

      if (!response.ok) throw new Error(result.error ?? "Envoi impossible");

      form.reset();
      setStatus("sent");
      setMessage("Message reçu. Réponse sous 24 heures ouvrées.");
    } catch {
      setStatus("error");
      setMessage(`Envoi impossible. Écrivez directement à ${site.email}.`);
    }
  }

  return (
    <section id="contact" className="u-section u-section-blue">
      <div className="u-container">
        <div className="u-grid items-start">
          <div className="md:col-span-6">
            <h2 className="u-h2">{cloture.title}</h2>
            <div className="u-pile-32 u-mt-32">
              {cloture.paragraphes.map((paragraphe, i) => (
                <p key={i} className="u-courant">
                  {paragraphe}
                </p>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="grid gap-6 md:col-span-6 md:col-start-7"
          >
            <input name="nom" type="text" required placeholder="Nom" className={field} />
            <input name="entreprise" type="text" placeholder="Entreprise" className={field} />
            <input name="email" type="email" required placeholder="E-mail" className={field} />
            <textarea
              name="message"
              rows={3}
              placeholder="Message"
              className={`${field} resize-none`}
            />
            <div className="justify-self-start">
              <button
                type="submit"
                disabled={status === "sending"}
                className="u-cta u-cta-invert transition-opacity disabled:opacity-60"
              >
                {status === "sending" ? "Envoi…" : site.ctaFinal}
                <span className="u-cta-arrow" aria-hidden="true">
                  →
                </span>
              </button>
              <p className="u-note u-cta-micro text-paper/75">{site.ctaMicro}</p>
            </div>
            {message && (
              <p role="status" className="u-note text-paper/75">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
