"use client";

import { useState } from "react";
import { cloture, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const champ =
  "w-full border-0 border-b border-paper/45 bg-transparent px-0 py-4 text-[length:var(--fs-corps)] text-paper outline-none placeholder:text-paper/60 focus:border-paper";

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
    <section
      id="contact"
      className="relative overflow-hidden py-[clamp(64px,9vh,120px)]"
      style={{ background: "#1F3BD8", color: "#F4EFE6" }}
    >
      <h2 className="m-0 mb-8 text-[clamp(32px,5vw,88px)] leading-[1.02]">
        {cloture.title}
      </h2>

      <div className="grid grid-cols-1 gap-[clamp(32px,4vw,80px)] lg:grid-cols-2">
        <div>
          {cloture.paragraphes.map((paragraphe, i) => (
            <p key={paragraphe} className={i === 0 ? "lede m-0 mb-5" : "body mt-0 mb-5"}>
              {paragraphe}
            </p>
          ))}
          <a
            className="tel-big mt-6"
            href={`tel:${site.phoneHref}`}
            style={{ color: "#F4EFE6" }}
          >
            {site.phone}
          </a>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input name="nom" type="text" required placeholder="Nom" className="field field-inv" />
          <input name="entreprise" type="text" placeholder="Entreprise" className="field field-inv" />
          <input name="email" type="email" required placeholder="E-mail" className="field field-inv sm:col-span-2" />
          <textarea name="message" rows={2} placeholder="Message" className="field field-inv resize-none sm:col-span-2" />
          <div className="sm:col-span-2">
            <button type="submit" disabled={status === "sending"} className="btn btn-cream">
              {status === "sending" ? "Envoi…" : site.ctaFinal} <span>→</span>
            </button>
            {message && (
              <p className="body mt-5" role="status" style={{ color: "#F4EFE6" }}>
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
