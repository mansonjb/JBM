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
| `lib/site.ts` | Tout le contenu éditorial, section par section |
| `app/page.tsx` | Assemblage des sections, dans l'ordre du récit |
| `components/Hero.tsx` | Votre entreprise fonctionne, regardons jusqu'où elle peut aller |
| `components/Ouverture.tsx` | Les formes que prend une opportunité |
| `components/Regard.tsx` | 01 · Pourquoi un regard extérieur |
| `components/Deroule.tsx` | 02 · Comment ça se passe, les cinq temps |
| `components/Trouvailles.tsx` | 03 · Ce qu'on peut trouver |
| `components/Manifeste.tsx` | 04 · Un degré |
| `components/Cas.tsx` | 05 · CB Sols |
| `components/Qui.tsx` | 06 · Qui suis-je |
| `components/Audit.tsx` | 07 · L'audit |
| `components/Questions.tsx` | 08 · Questions |
| `components/Contact.tsx` | Clôture et formulaire |
| `components/ImageSlot.tsx` | Emplacement photo : affiche le brief tant que `src` est vide |
| `app/api/contact/route.ts` | Réception du formulaire (Resend si clé, sinon `mailto`) |
| `app/mentions-legales/` | Mentions légales |

## Le motif

Le nom se raconte par le texte, plus par la mise en page : les éléments inclinés
d'un degré ont été retirés, ils nuisaient à la lecture.

## Le bleu

Le bleu ne sert jamais de décor, il signale toujours quelque chose de vivant :
`.u-row` (survol d'une ligne de liste, filet et flèche en bleu), `.u-card`
(survol d'une carte, titre en bleu), `.u-frame` (encadré qui s'allume),
`.u-link` (soulignement qui se déploie), `.u-quote` (énoncé en bloc bleu plein,
crème sur bleu, avec sa flèche) et `.u-bullet` (puce carrée sur les intertitres).

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
