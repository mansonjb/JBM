import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  nom?: string;
  entreprise?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM ?? `Un Degré <${site.email}>`;

  // Sans clé d'envoi configurée, le client bascule sur le lien mailto.
  if (!apiKey) {
    return NextResponse.json({ fallback: true });
  }

  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  if (!data.nom || !data.email) {
    return NextResponse.json({ error: "Nom et e-mail requis" }, { status: 400 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Diagnostic — ${data.entreprise || data.nom}`,
      text: [
        `Nom : ${data.nom}`,
        `Entreprise : ${data.entreprise ?? "—"}`,
        `E-mail : ${data.email}`,
        "",
        data.message ?? "",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend error", response.status, detail);
    return NextResponse.json({ error: "Envoi impossible" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
