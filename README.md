# Un Degré

Site vitrine de Jean-Baptiste Manson, consultant indépendant.
Landing page unique construite à partir de la maquette Claude Design `Un Degré.dc.html`.

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
| `lib/site.ts` | Tout le contenu éditorial (chiffres, offres, objections, journal) |
| `app/page.tsx` | Assemblage des 13 sections |
| `components/` | Une section = un composant |
| `components/ImageSlot.tsx` | Emplacement photo : affiche le brief de prise de vue tant que `src` est vide |
| `components/DivergingLines.tsx` | Les deux traits qui divergent d'un degré au fil du scroll |
| `app/api/contact/route.ts` | Réception du formulaire (Resend si clé, sinon `mailto`) |
| `app/mentions-legales/` | Mentions légales |

## Le motif

Chaque section contient un élément incliné d'un degré (`.u-tilt`), et deux filets
divergents d'un degré se révèlent à mesure du scroll. C'est la démonstration du nom.

## Photos à fournir

Les emplacements affichent leur brief tant que la photo n'est pas posée. Pour en
remplir un : déposer le fichier dans `public/` et ajouter `src="/…"` sur le
`<ImageSlot>` concerné.

| # | Section | Format | Sujet |
| --- | --- | --- | --- |
| 1 | Héros | paysage très large, 2400 px mini | Plan large dans un lieu de travail réel, regard objectif, l'air interrompu |
| 2 | L'idée | vertical 4:5 | Un coffre d'outils ou un établi rangé au millimètre, vu du dessus, lumière rasante |
| 3 | Le cas CB Sols | paysage 4:3 | Un chantier terminé, un sol posé, lumière naturelle |
| 4 | Pourquoi moi (bloc bleu) | vertical 4:5 | Noir et blanc, en action : il annote, il montre du doigt |
| 5 | Pourquoi moi (suite) | vertical 3:4 | Portrait, cadrage serré, lumière douce, expression calme |
| 6 | Journal | paysage 4:3 | La caisse d'un magasin bio, photo téléphone |
| 7 | Journal | paysage 4:3 | Une devanture, photo téléphone |
| 8 | Journal | paysage 4:3 | Un stand ou un étalage, photo téléphone |
| 9 | Pied de page | vertical, petit | Médaillon, décontracté, instantané |

## À compléter avant mise en ligne

- Numéro de téléphone réel dans `lib/site.ts` (placeholder `+33 6 00 00 00 00`)
- Domaine final dans `lib/site.ts` (`domain`) si différent de `undegre.fr`
- `RESEND_API_KEY` en variable d'environnement pour l'envoi réel du formulaire
