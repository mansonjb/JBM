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
};

export const nav = [
  { href: "#methode", label: "Méthode" },
  { href: "#preuves", label: "Preuves" },
  { href: "#offre", label: "Offre" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
];

export const proofs = [
  {
    value: "0 → 13",
    label: "demandes de devis, en trois mois, là où il y en avait zéro depuis trois ans",
    accent: false,
  },
  {
    value: "× 3,6",
    label: "trafic organique par rapport au trafic publicitaire payé, chez le même client",
    accent: true,
  },
  {
    value: "500+",
    label: "projets créatifs livrés en agence, pour des marques comme Louis Vuitton, Netflix ou Ford",
    accent: false,
  },
  {
    value: "4",
    label: "vagues technologiques mises au travail chez des clients avant qu'elles deviennent la norme. Aujourd'hui, l'IA",
    accent: false,
  },
];

export const observations = [
  {
    date: "14 · 03",
    title: "La caisse d'un magasin bio",
    text: "Les seuls produits posés à côté de la caisse coûtaient plus de dix euros. Personne n'achète ça par impulsion. Un achat cher demande une délibération, donc il ne se prend pas au dernier moment.",
    slot: "OBSERVATION — caisse d'un magasin bio, prise au téléphone",
    note: "ici, 12 €",
  },
  {
    date: "27 · 02",
    title: "Une devanture fermée à midi",
    text: "L'horaire affiché ne correspondait ni au passage de la rue, ni à celui du marché voisin. Le commerce était ouvert quand personne ne marchait.",
    slot: "OBSERVATION — une devanture, photo téléphone",
    note: null,
  },
  {
    date: "09 · 02",
    title: "Un stand au bord de l'allée",
    text: "Le produit le plus rentable était rangé derrière le vendeur. Ce qu'on montre en premier décide de ce qui se vend, avant même le prix.",
    slot: "OBSERVATION — un étalage ou un stand, photo téléphone",
    note: null,
  },
];

export const origine = [
  "Enfant, je passais des heures à monter la tour la plus haute possible avec le même nombre de Kapla.",
  "Jamais à réclamer des planches en plus. Toujours à changer la disposition.",
  "À l'école, on appelait ça de la paresse. Je cherchais le maximum de résultat avec le minimum d'effort, et je n'ai jamais vu où était le problème : j'économisais l'effort là où il ne produisait rien, pour le dépenser là où il comptait vraiment.",
  "C'est resté. C'est devenu mon métier.",
  "Depuis, j'ai eu de la chance quatre fois. Ou alors ce n'était pas de la chance. Le live streaming en 2017, quand personne n'y croyait encore. L'influence, avant que ce soit un métier. Quatre ans en agence de réalité augmentée, sur des projets créatifs pour de grandes marques, avant que le mot devienne courant. Puis l'intelligence artificielle, avant qu'elle serve d'argument de vente.",
  "Quatre fois d'affilée, je suis arrivé un peu avant. À un moment, ça cesse d'être de la chance. C'est une façon de regarder.",
];

export const marches = [
  {
    n: "01",
    title: "Voir",
    text: "Comprendre l'activité entière, pas le symptôme. Les produits, l'offre, la façon de vendre, les processus, l'expérience client, la communication, le digital.",
    question: "Où se crée réellement la valeur ici ?",
  },
  {
    n: "02",
    title: "Trouver",
    text: "Répartition du chiffre d'affaires, provenance des clients, part de la recommandation, coût en temps de chaque chose.",
    question: "Qu'est-ce qui rapporte vraiment, et qu'est-ce qui donne l'illusion de rapporter ?",
  },
  {
    n: "03",
    title: "Choisir",
    text: "On descend marche par marche jusqu'au point de friction précis, et on chiffre ce que l'inaction coûte.",
    question: "Par quoi commence-t-on ?",
  },
  {
    n: "04",
    title: "Faire",
    text: "Je l'exécute moi-même, avec les méthodes et les outils d'aujourd'hui, pas ceux d'il y a cinq ans. C'est la marche que les consultants ne montent pas.",
    question: null,
  },
];

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

export const offres = [
  {
    title: "Le Diagnostic",
    text: "Les trois premières marches. Livrable : où se crée la valeur, où elle se perd, ce que l'inaction coûte en euros, et l'ordre des priorités.",
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
    text: "Mesure mensuelle, itération, arbitrages.",
    cta: "En discuter",
    note: "engagement de six mois",
    accent: false,
    delay: "6 mois minimum",
  },
];

export const objections = [
  {
    q: "Optimiser, ça veut dire couper des coûts ?",
    a: "Non. Ça veut dire mettre chaque chose au bon endroit. Dans mes quatre dernières missions, rien n'a été supprimé : ce qui existait a été mis à travailler.",
  },
  {
    q: "Vous ne connaissez pas mon métier.",
    a: "Exact, et c'est l'intérêt. Vous le connaissez mieux que quiconque, c'est pour ça que vous ne voyez plus ce qui est sous vos yeux. Je ne connaissais rien aux sols ni aux yachts.",
  },
  {
    q: "C'est cher.",
    a: "Chez CB Sols, la mission a coûté moins qu'un trimestre de publicité sans retour, et trois mois plus tard il y avait treize demandes de devis là où il n'y en avait aucune depuis trois ans. La vraie question n'est pas ce que ça coûte, c'est ce que trois ans à zéro ont déjà coûté.",
  },
  {
    q: "On n'a pas le temps.",
    a: "Huit jours de mon côté. Deux rendez-vous du vôtre.",
  },
  {
    q: "On le fera en interne.",
    a: "Vous pouvez. Vous ne le ferez pas, parce que ce n'est ni urgent, ni votre métier, et que c'est sur la liste depuis trois ans.",
  },
];

export const journal = [
  {
    date: "14 · 03",
    title: "Ce qu'on pose près de la caisse",
    slot: "OBSERVATION — une caisse de supermarché",
  },
  {
    date: "07 · 03",
    title: "Le devis qui arrive trop tard",
    slot: "OBSERVATION — un sol, un chantier",
  },
  {
    date: "28 · 02",
    title: "Ce que le vendeur cache derrière lui",
    slot: "OBSERVATION — un stand, un salon",
  },
];
