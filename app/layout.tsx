import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — le degré qui change la trajectoire`,
    template: `%s · ${site.name}`,
  },
  description:
    "Consultant indépendant : je trouve, dans ce que vous avez déjà, le degré qui change tout. Puis je le corrige moi-même, diagnostic et exécution compris.",
  keywords: [
    "consultant indépendant",
    "optimisation d'activité",
    "acquisition client",
    "diagnostic entreprise",
    "SEO longue traîne",
    "artisan",
    "PME",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — ${site.baseline}`,
    description:
      "Le consultant recommande. L'agence exécute. Je relie les deux. Le diagnostic est déduit de la mission.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${archivo.variable} ${instrument.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
