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
    default: `${site.name} · il vous manque des clients, pas des moyens`,
    template: `%s · ${site.name}`,
  },
  description:
    "Optimisation d'activité et acquisition client pour PME et entreprises de service. Je viens comprendre comment votre entreprise tourne, puis on corrige ce qui vous coûte le plus cher : du temps gagné, de la marge gagnée, du confort au quotidien.",
  keywords: [
    "consultant indépendant",
    "optimisation d'activité",
    "acquisition client",
    "performance commerciale",
    "diagnostic entreprise",
    "coût d'acquisition",
    "SEO longue traîne",
    "PME",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} · ${site.baseline}`,
    description:
      "Il vous manque des clients, pas des moyens. Le consultant recommande, l'agence exécute, et entre les deux le projet s'arrête. Je reste jusqu'à ce que ça tourne.",
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
