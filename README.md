# Un Degré

Site vitrine de Jean-Baptiste Manson, consultant indépendant.
Landing page unique : consultant en optimisation, l'audit comme point de départ.
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
| `lib/site.ts` | Tout le contenu éditorial, plus le plan des huit temps |
| `app/globals.css` | Le système : jetons, bande, rangs, citation, items, action |
| `components/Bande.tsx` | La brique unique : une bande pleine largeur, un fond, une idée |
| `components/Citation.tsx` | Le seul traitement d'une phrase de posture : guillemets et attribution |
| `components/Items.tsx` | Une liste est une suite de rangées numérotées pleine largeur |
| `components/Action.tsx` | Le seul objet qui déclenche quelque chose, et le seul à porter une flèche |
| `components/Photo.tsx` | Bande photo pleine largeur |
| `components/Hero.tsx` | Première bande : photo, accroche, action |
| `components/Ouverture.tsx` | Ce que je cherche, la citation d'ouverture, l'action |
| `components/Regard.tsx` | 01 · Pourquoi un regard extérieur |
| `components/Deroule.tsx` | 02 · Comment ça se passe |
| `components/Trouvailles.tsx` | 03 · Ce qu'on peut trouver |
| `components/Manifeste.tsx` | 04 · Un degré |
| `components/Cas.tsx` | 05 · Un exemple |
| `components/Qui.tsx` | 06 · Qui suis-je |
| `components/Audit.tsx` | 07 · L'audit |
| `components/Questions.tsx` | 08 · Questions |
| `components/Contact.tsx` | Clôture et formulaire |
| `app/api/contact/route.ts` | Réception du formulaire (Resend si clé, sinon `mailto`) |

## Le système

La page est un **empilement de bandes pleine largeur**. Une bande porte un fond,
une idée, et rien d'autre. Les fonds alternent crème, sable, bleu et encre, et
c'est cette alternance qui structure la lecture, pas des colonnes.

Sept rangs typographiques, pas un de plus. Quatre pas verticaux. Trois
dispositifs seulement : la **citation** (guillemets français, serif, attribution)
pour une phrase de posture, les **items** (rangées numérotées pleine largeur)
pour une suite de faits de même rang, et l'**action** (seul objet cliquable
autorisé à porter une flèche).

Six appels à l'action jalonnent la page : barre de navigation, héros, après
l'ouverture, après la méthode, après l'exemple, après l'audit, plus le
formulaire.

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

Les emplacements du journal et du chantier ont disparu avec la refonte du texte :
les cinq photos couvrent aujourd'hui toutes les sections.

## À compléter avant mise en ligne

- Numéro de téléphone réel dans `lib/site.ts` (placeholder `+33 6 00 00 00 00`)
- Domaine final dans `lib/site.ts` (`domain`) si différent de `undegre.fr`
- `RESEND_API_KEY` en variable d'environnement pour l'envoi réel du formulaire
- Un témoignage client réel (CB Sols) : c'est la pièce qui manque le plus au site
