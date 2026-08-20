# Un Degré

Site vitrine de Jean-Baptiste Manson, consultant indépendant.
Landing page unique : audit d'entreprise puis optimisation exécutée.
Design issu de la maquette Claude Design `Un Degré.dc.html`.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4 (tokens dans `app/globals.css`)
- TypeScript
- Polices Google via `next/font` : Anton, Archivo, Instrument Serif, Caveat

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3082
npm run build
npm start        # http://localhost:3083
```

## Structure

| Chemin | Rôle |
| --- | --- |
| `lib/site.ts` | Tout le contenu éditorial (chiffres, méthode, offre, questions, journal) |
| `app/page.tsx` | Assemblage des sections, dans l'ordre du récit |
| `components/Hero.tsx` | Accroche : audit puis optimisation |
| `components/Stats.tsx` | Bande de chiffres sous le héros |
| `components/Fuites.tsx` | 01 · Ce que l'audit trouve à chaque fois |
| `components/Methode.tsx` | 02 · Les cinq étapes, de l'analyse à l'optimisation |
| `components/Gains.tsx` | Temps, marge, confort |
| `components/Manifeste.tsx` | 03 · Un degré, pas un virage |
| `components/Guide.tsx` | 04 · Qui je suis, compétences, marques servies |
| `components/Cas.tsx` | 05 · CB Sols, l'audit en entier |
| `components/Offre.tsx` | 06 · Les quatre prestations, sans montant affiché |
| `components/Questions.tsx` | 07 · Les questions posées avant de signer |
| `components/Journal.tsx` | 08 · L'angle mort, une observation par semaine |
| `components/ImageSlot.tsx` | Emplacement photo : affiche le brief tant que `src` est vide |
| `components/DivergingLines.tsx` | Les deux traits qui divergent d'un degré au fil du scroll |
| `app/api/contact/route.ts` | Réception du formulaire (Resend si clé, sinon `mailto`) |
| `app/mentions-legales/` | Mentions légales |

## Le motif

Chaque section contient un élément incliné d'un degré (`.u-tilt`), et deux filets
divergents d'un degré se révèlent à mesure du scroll. C'est la démonstration du nom.

## Photos

Cinq photos sont en place dans `public/`. Les emplacements encore vides affichent
leur brief de prise de vue : pour en remplir un, déposer le fichier dans `public/`
et ajouter `src="/…"` sur le `<ImageSlot>` concerné.

| Section | Fichier | Format |
| --- | --- | --- |
| Héros | `hero-un-degre.jpg` | 2400 × 1601 |
| L'idée | `carnet-atelier.jpg` | 1600 × 1600 |
| Pourquoi moi (bloc bleu) | `plan-action.jpg` | 2000 × 1334, noir et blanc |
| Pourquoi moi (portrait) | `portrait.jpg` | 1344 × 1800 |
| Pied de page | `portrait-bureau.jpg` | 1120 × 1500 |

Manquent encore :

1. Le cas CB Sols : un chantier terminé, un sol posé (paysage 4:3). L'emplacement
   a été retiré en attendant, plutôt que d'afficher un cadre vide.
2. Les trois observations du journal (photos téléphone, paysage 4:3) : une caisse
   de magasin, une devanture, un stand ou un étalage.

## À compléter avant mise en ligne

- Numéro de téléphone réel dans `lib/site.ts` (placeholder `+33 6 00 00 00 00`)
- Domaine final dans `lib/site.ts` (`domain`) si différent de `undegre.fr`
- `RESEND_API_KEY` en variable d'environnement pour l'envoi réel du formulaire
- Un témoignage client réel (CB Sols) : c'est la pièce qui manque le plus au site
