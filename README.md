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

## Mise en ligne

Deux cibles, la même base de code.

**Serveur Next (recommandé).** `npm run build` puis `npm start`, ou un import du
dépôt sur Vercel. Le formulaire passe par `app/api/contact/route.ts` et les
images sont optimisées.

**GitHub Pages.** `npm run build:pages` produit un export statique dans `out/`.
Le workflow `.github/workflows/pages.yml` le construit et le publie à chaque
poussée sur `main`. Deux limites tenables : aucune route serveur ne tourne,
donc le formulaire ouvre le client mail du visiteur, et les images ne sont plus
optimisées par Next.

Le site est publié sous `/JBM` (page de projet). Pour un domaine dédié, mettre
`BASE_PATH=` et `NEXT_PUBLIC_BASE_PATH=` à vide dans le script `build:pages`, et
déposer le domaine dans les réglages Pages du dépôt.

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

Le site est le portage fidèle de la maquette Claude Design `un-degre.dc.html`
(archive « Brief design_ UN degré ? »). Le CSS de `app/globals.css` reprend le
sien classe par classe, le balisage de chaque section reprend le sien, et le
texte de `lib/site.ts` est le sien, mot pour mot.

Seules adaptations, rendues nécessaires par Next :

- les polices sont chargées par `next/font` : les familles littérales du CSS
  sont remplacées par les variables correspondantes,
- les images encodées en base64 dans la maquette sont extraites en fichiers
  dans `public/`, servies par `next/image`,
- la logique `DCLogic` de la bande défilante est réécrite en composant client
  (`components/Terrains.tsx`), avec la même rotation de 4,2 secondes et le même
  arrêt au survol,
- les formulaires sont branchés sur la route `app/api/contact/route.ts`,
- la typographie est plafonnée par `--u` : la maquette est calibrée pour 1440 px,
  au-delà les `vw` continuaient de grossir et tout sortait environ 30 % trop
  gros. `--u` croît jusqu'à 1440 px puis se fige, et vaut 80 % de la valeur d'origine,
  l'échelle ayant été réduite d'un cinquième. Toutes les tailles de texte sont
  exprimées avec cette unité : c'est le seul endroit à toucher pour régler
  l'échelle générale du site,
- les six cartes de la section 02 sont en trois colonnes fixes : le `auto-fit`
  de la maquette donnait quatre colonnes au-delà de 1400 px et laissait deux
  cases vides,
- le CSS de la maquette n'est pas dans un calque Tailwind, donc il l'emporte sur
  les classes utilitaires : partout où la maquette réglait une propriété en
  ligne (taille des citations, marges, approche des titres), on garde un style
  en ligne, sinon la règle de classe reprend la main.

Sections, dans l'ordre de la maquette : héros, 01 la méthode, 02 ce qu'on peut
trouver, bande d'appel e-mail, 03 les terrains, 04 un exemple, 05 qui suis-je,
contact, puis le pied de page qui contient 06 les questions.

## Photos

Trois photos, extraites de la maquette : `hero-bureau.jpg`,
`tableau-plan-action.jpg`, `portrait-jbm.jpg`.

## À compléter avant mise en ligne

- Numéro de téléphone réel dans `lib/site.ts` (placeholder `+33 6 00 00 00 00`)
- Domaine final dans `lib/site.ts` (`domain`) si différent de `undegre.fr`
- `RESEND_API_KEY` en variable d'environnement pour l'envoi réel du formulaire
- Un témoignage client réel (CB Sols) : c'est la pièce qui manque le plus au site
