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
    default: `${site.name} · consultant en optimisation`,
    template: `%s · ${site.name}`,
  },
  description:
    "Consultant en optimisation. Votre entreprise fonctionne : regardons jusqu'où elle peut aller. J'observe votre activité, j'analyse ce qui existe, puis je vous montre ce que je garderais, ce que je changerais et ce que j'explorerais.",
  keywords: [
    "consultant en optimisation",
    "audit d'entreprise",
    "optimisation d'activité",
    "regard extérieur",
    "feuille de route",
    "acquisition client",
    "PME",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} · votre entreprise fonctionne, regardons jusqu'où elle peut aller`,
    description:
      "Une entreprise qui fonctionne n'a pas forcément besoin d'être transformée. Elle a parfois simplement besoin d'être regardée autrement.",
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
