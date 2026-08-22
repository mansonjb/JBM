import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Nécessaire pour l'export statique de GitHub Pages.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      lastModified: new Date("2026-08-19"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
