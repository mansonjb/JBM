import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Le dossier parent contient d'autres lockfiles : on fixe la racine explicitement.
  turbopack: { root: path.resolve(process.cwd()) },
};

export default nextConfig;
