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

Le CSS de `app/globals.css` est **repris tel quel de la maquette Claude Design
`un-degre.dc.html`** : mêmes classes, mêmes valeurs, mêmes transitions. On ne les
renomme pas et on ne les réinvente pas. Seules les polices sont adaptées, parce
qu'elles sont chargées par `next/font` et non par un lien Google Fonts.

Dispositifs de la maquette et emploi retenu :

| Classe | Rôle | Où |
| --- | --- | --- |
| `.sechead` | En-tête de section : numéro annelé, intitulé, filet | 01 à 08 |
| `.row` | Rangée numérotée, bascule en bleu au survol | ouverture, livrables |
| `.chip` | Constat court, pavé centré | 01, 04 |
| `.q` | Question posée, rangée simple | 01 |
| `.steps` / `.step` | Le tableau des cinq étapes | 02 |
| `.tcard` | Carte bleue à remplissage, pour un catalogue | 03 |
| `.diverge` | Le degré : chiffre géant, tracé animé, conclusion surlignée | 04 |
| `.stat` / `.stats4` | Les chiffres du cas | 05 |
| `.card` | Carte sable | 06, 07 |
| `details` / `.qsum` | Les questions en dépliants | 08 |
| `.btn`, `.btn-ghost`, `.btn-cream` | Les trois états d'appel à l'action | toute la page |
| `.tel-nav`, `.tel-float`, `.tel-big` | Le téléphone, en barre, en flottant, en pied | toute la page |
| `.progress` | Jauge de lecture en haut de page | toute la page |
| `.ringmark`, `.footring` | Le motif de l'anneau | marque et pied de page |

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
