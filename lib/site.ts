export const site = {
  name: "Un Degré",
  domain: "https://undegre.fr",
  baseline: "Un degré suffit à changer la trajectoire.",
  email: "contact@undegre.fr",
  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
  author: "Jean-Baptiste · consultant indépendant",
  ctaPrimary: "Réservez votre diagnostic",
  ctaSecondary: "Réserver mon diagnostic",
  ctaMicro: "Une semaine. Deux rendez-vous. Déduit de la mission si elle a lieu.",
};

export const nav = [
  { href: "#probleme", label: "Le constat" },
  { href: "#methode", label: "Méthode" },
  { href: "#preuve", label: "Preuve" },
  { href: "#offre", label: "Offre" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  kicker: "Conseil et exécution · artisans, commerces et PME",
  title: "Ce qu'il vous manque est déjà chez vous.",
  lead: "Mal placé, mal montré, mal vendu. Je trouve où, exactement. Puis je le corrige moi-même, sans budget supplémentaire.",
};

/** Bande de confiance sous le héros : la crédibilité en une ligne, pas en quatre chiffres. */
export const trustLine = [
  "500+ projets créatifs livrés en agence",
  "Louis Vuitton · Netflix · Ford · Hugo Boss",
  "aujourd'hui au service des artisans et des PME",
];

/* 02 — Le constat : le lecteur se reconnaît avant qu'on lui parle de nous. */
export const symptomes = [
  {
    n: "01",
    text: "Vous payez de la publicité, et le téléphone ne sonne pas plus qu'avant.",
  },
  {
    n: "02",
    text: "Vos meilleurs clients arrivent par bouche-à-oreille, et personne ne sait ni pourquoi ni comment le provoquer.",
  },
  {
    n: "03",
    text: "Vous travaillez beaucoup, et vous ne sauriez pas dire quelle part de ce travail rapporte vraiment.",
  },
];

export const constat = {
  title: "Rien n'est cassé. C'est exactement ça, le problème.",
  chute:
    "Dans presque tous les cas, il ne manque ni budget, ni talent, ni clients. Il manque un degré de justesse dans la disposition.",
};

/* 03 — L'idée : la grande idée du site, démontrée en trois temps. */
export const idee = {
  kicker: "L'idée",
  title: "Rien ajouté. Tout déplacé.",
  paragraphes: [
    "Vous avez déjà vécu ça : une pièce où l'on déplace trois meubles, et elle paraît deux fois plus grande. Personne n'a rien acheté, rien jeté. On a changé la disposition.",
    "Une camionnette d'artisan, c'est la même chose. Le même matériel rangé autrement, et tout rentre, et on ne perd plus dix minutes par chantier à chercher un outil.",
    "Une entreprise ne fonctionne pas autrement. Les produits, les prix, les horaires, les pages du site, l'ordre dans lequel les choses sont montrées : tout est déjà là. C'est la disposition qui décide du résultat.",
    "Chercher le maximum de résultat avec le minimum d'effort, à l'école on appelait ça de la paresse. J'en ai fait un métier : économiser l'effort là où il ne produit rien, pour le dépenser là où il compte.",
  ],
  citation:
    "Un degré d'écart ne se voit pas au départ. Cent kilomètres plus loin, on n'arrive pas au même endroit.",
  note: "C'est pour ça que chaque section de ce site penche d'un degré. Vous l'avez senti sans le voir.",
};

/* 04 — La méthode : le plan, avec ce que vous recevez à chaque marche. */
export const marches = [
  {
    n: "01",
    title: "Voir",
    text: "Je regarde l'activité entière, jamais le symptôme seul. Les produits, l'offre, la façon de vendre, les processus, l'expérience client, la communication, le digital.",
    question: "Où se crée réellement la valeur ici ?",
    livrable: "Une carte de votre activité telle qu'elle fonctionne vraiment.",
  },
  {
    n: "02",
    title: "Trouver",
    text: "Répartition du chiffre d'affaires, provenance des clients, part de la recommandation, coût en temps de chaque chose.",
    question: "Qu'est-ce qui rapporte vraiment, et qu'est-ce qui en donne l'illusion ?",
    livrable: "Les chiffres que personne n'avait encore mis côte à côte.",
  },
  {
    n: "03",
    title: "Choisir",
    text: "On descend marche par marche jusqu'au point de friction précis, et on chiffre ce que l'inaction coûte chaque mois.",
    question: "Par quoi commence-t-on ?",
    livrable: "Un point de départ chiffré, et l'ordre des priorités.",
  },
  {
    n: "04",
    title: "Faire",
    text: "Je l'exécute moi-même, avec les méthodes et les outils d'aujourd'hui. C'est la marche que les consultants ne montent pas.",
    question: null,
    livrable: "Le système en place, mesurable, entre vos mains.",
  },
];

/* 05 — La preuve : une histoire en quatre temps, les chiffres dedans. */
export const cas = {
  kicker: "Un cas, en entier",
  client: "CB Sols",
  sousTitre: "Artisan poseur de sols, La Rochelle",
  temps: [
    {
      label: "Avant",
      text: "Trois ans de publicité payée, zéro demande de devis. Le site existait, le téléphone ne sonnait pas. Le budget partait, le carnet se remplissait au bouche-à-oreille et à rien d'autre.",
    },
    {
      label: "Ce que j'ai vu",
      text: "Il vendait un métier quand ses clients, eux, cherchaient une pièce : un sol de cuisine, une terrasse, une salle de bains, dans leur ville. Le travail était irréprochable, il n'apparaissait simplement nulle part où on le cherchait.",
    },
    {
      label: "Ce que j'ai fait",
      text: "Huit jours de travail. Une page par métier, par contexte et par ville. Les chantiers déjà réalisés remis en avant comme preuve. Une demande de devis possible depuis n'importe quelle page, et la mesure installée pour savoir ce qui marche.",
    },
    {
      label: "Après",
      text: "Trois mois plus tard : treize demandes de devis, un trafic organique 3,6 fois supérieur au trafic payant, et un budget publicitaire qui n'est plus la seule source de clients.",
    },
  ],
  chiffres: [
    { value: "0 → 13", label: "demandes de devis, en trois mois" },
    { value: "8", label: "jours de travail" },
    { value: "× 3,6", label: "organique sur payant" },
  ],
  chute: "Trois ans à zéro coûtaient plus cher que la mission.",
};

/* 06 — Pourquoi moi : autorité et posture, au même endroit. */
export const guide = {
  kicker: "Pourquoi moi",
  title: "Celui qui regarde est celui qui exécute.",
  lead: "Le consultant recommande. L'agence exécute. Je relie les deux. Pas de rapport transmis à quelqu'un qui n'était pas dans la conversation, pas de recommandation que personne n'appliquera, pas de sous-traitance.",
  agence:
    "Avant ça, quatre ans en agence de réalité augmentée : plus de 500 projets créatifs livrés pour de grandes marques. Ce ne sont pas mes clients d'aujourd'hui, c'est le niveau d'exigence auquel j'ai appris à produire.",
  vagues: [
    { annee: "2017", text: "Le live streaming, quand personne n'y croyait encore." },
    { annee: "2019", text: "L'influence, avant que ce soit un métier." },
    { annee: "2021", text: "La réalité augmentée, avant que le mot devienne courant." },
    { annee: "2024", text: "L'intelligence artificielle, avant qu'elle serve d'argument de vente." },
  ],
  vaguesChute:
    "Quatre fois d'affilée, je suis arrivé un peu avant. Ce que ça change pour vous : on n'installe pas chez vous les outils d'il y a cinq ans.",
};

export const clients = [
  "Louis Vuitton",
  "Yves Saint Laurent",
  "Netflix",
  "Ford",
  "Hugo Boss",
  "Castorama",
  "La Banque Postale",
  "Puma × Formule 1",
  "Ducati France",
  "Fountaine Pajot",
  "Dufour",
];

/* 07 — L'offre : ce qu'on peut faire ensemble, sans montant affiché. */
export const offreIntro =
  "Tout commence par le diagnostic. La suite dépend de ce qu'il montre, et rien n'est engagé avant.";

export const offres = [
  {
    title: "Le Diagnostic",
    text: "Les trois premières marches. Vous repartez avec la carte de votre activité, le point de friction chiffré et l'ordre des priorités.",
    cta: "Réserver le diagnostic",
    note: "déduit de la mission si elle a lieu",
    accent: true,
    delay: "1 semaine",
  },
  {
    title: "Le Système d'acquisition",
    text: "Arborescence par métiers, contextes et territoires. Contenus de longue traîne. Preuves clients filmées. Conversion sur chaque page. Mesure installée.",
    cta: "Demander une proposition",
    note: "périmètre défini au diagnostic",
    accent: false,
    delay: "8 jours sur 4 à 6 semaines",
  },
  {
    title: "La Production augmentée",
    text: "Montrer ce qui n'existe pas encore, ou ce qui ne peut pas être photographié. Les outils d'aujourd'hui au service de votre activité.",
    cta: "Parler du projet",
    note: "sur mesure",
    accent: false,
    delay: "selon périmètre",
  },
  {
    title: "Le Suivi",
    text: "Mesure mensuelle, itération, arbitrages. Le système ne se dégrade pas, il se règle.",
    cta: "En discuter",
    note: "engagement de six mois",
    accent: false,
    delay: "6 mois minimum",
  },
];

export const aidePublique =
  "Selon votre région, une aide publique peut financer 30 à 70 % de cette mission. La demande se dépose avant signature, jamais après. Je m'en occupe.";

/* 08 — Les objections, dans l'ordre où elles viennent vraiment. */
export const objections = [
  {
    q: "C'est cher.",
    a: "Chez CB Sols, la mission a coûté moins qu'un trimestre de publicité sans retour, et trois mois plus tard il y avait treize demandes de devis là où il n'y en avait aucune depuis trois ans. La vraie question n'est pas ce que ça coûte, c'est ce que trois ans à zéro ont déjà coûté.",
  },
  {
    q: "On n'a pas le temps.",
    a: "Huit jours de mon côté. Deux rendez-vous du vôtre. Le reste se passe sans vous, et vous validez.",
  },
  {
    q: "Vous ne connaissez pas mon métier.",
    a: "Exact, et c'est l'intérêt. Vous le connaissez mieux que quiconque, c'est pour ça que vous ne voyez plus ce qui est sous vos yeux. Je ne connaissais rien aux sols ni aux bateaux avant d'y travailler.",
  },
  {
    q: "Optimiser, ça veut dire couper des coûts ?",
    a: "Non. Ça veut dire mettre chaque chose au bon endroit. Dans mes quatre dernières missions, rien n'a été supprimé : ce qui existait a été mis à travailler.",
  },
  {
    q: "On le fera en interne.",
    a: "Vous pouvez. Vous ne le ferez pas, parce que ce n'est ni urgent, ni votre métier, et que c'est sur la liste depuis trois ans.",
  },
];

/* 09 — Le journal : la preuve du regard, une fois par semaine. */
export const journalIntro =
  "Une observation par semaine. Une photo prise sur le vif, ce que j'y vois, ce que je ferais. C'est le même regard que celui que j'applique à une activité entière.";

export const journal = [
  {
    date: "14 · 03",
    title: "La caisse d'un magasin bio",
    text: "Les seuls produits posés à côté de la caisse coûtaient plus de dix euros. Personne n'achète ça par impulsion : un achat cher demande une délibération, donc il ne se prend pas au dernier moment.",
    slot: "OBSERVATION · la caisse d'un magasin bio, prise au téléphone",
    note: "ici, 12 €",
  },
  {
    date: "27 · 02",
    title: "Une devanture fermée à midi",
    text: "L'horaire affiché ne correspondait ni au passage de la rue, ni à celui du marché voisin. Le commerce était ouvert quand personne ne marchait.",
    slot: "OBSERVATION · une devanture, photo téléphone",
    note: null,
  },
  {
    date: "09 · 02",
    title: "Un stand au bord de l'allée",
    text: "Le produit le plus rentable était rangé derrière le vendeur. Ce qu'on montre en premier décide de ce qui se vend, avant même le prix.",
    slot: "OBSERVATION · un stand ou un étalage, photo téléphone",
    note: null,
  },
];
