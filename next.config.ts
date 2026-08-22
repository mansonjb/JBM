import path from "node:path";
import type { NextConfig } from "next";

/**
 * Deux cibles de déploiement.
 *
 * · Par défaut : serveur Next complet (Vercel, ou `npm start`). La route
 *   d'envoi du formulaire fonctionne, les images sont optimisées.
 * · Avec EXPORT=1 : export statique pour GitHub Pages. Pages ne sert que des
 *   fichiers, donc aucune route serveur ne tourne et les images ne sont plus
 *   optimisées. Le formulaire bascule sur le client mail.
 */
const statique = process.env.EXPORT === "1";

// Page de projet GitHub : le site vit sous /JBM. Vide si domaine dédié.
const base = process.env.BASE_PATH ?? (statique ? "/JBM" : "");

const nextConfig: NextConfig = {
  turbopack: { root: path.resolve(process.cwd()) },
  ...(statique
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        basePath: base || undefined,
        assetPrefix: base || undefined,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
