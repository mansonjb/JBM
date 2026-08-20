export const site = {
  name: "Un Degré",
  domain: "https://undegre.fr",
  baseline: "Un degré suffit à changer la trajectoire.",
  email: "contact@undegre.fr",
  phone: "+33 6 00 00 00 00",
  phoneHref: "+33600000000",
  author: "Jean-Baptiste Manson · consultant indépendant",
  ctaPrimary: "Réservez votre audit",
  ctaSecondary: "Réserver mon audit",
  ctaMicro: "Une semaine sur place. Deux rendez-vous de votre côté.",
};

export const nav = [
  { href: "#methode", label: "Méthode" },
  { href: "#resultats", label: "Résultats" },
  { href: "#offre", label: "Offre" },
  { href: "#questions", label: "Questions" },
  { href: "#contact", label: "Contact" },
];

/* 01 — Le héros doit dire le métier en une ligne : audit, puis optimisation. */
export const hero = {
  kicker: "Audit et optimisation d'entreprise · PME et entreprises de service",
  title: "J'audite votre entreprise. Puis je la règle.",
  lead: "Une semaine sur place, chiffres en main, à comprendre comment votre machine tourne. J'en ressors avec ce qui vous fait perdre du temps, de la marge et des clients, classé par ordre de priorité. Ensuite on corrige, avec le bon prestataire pour chaque sujet et un seul interlocuteur : moi.",
};

/* Bande de chiffres, tous vérifiables. */
export const stats = [
  {
    value: "1 semaine",
    label: "d'audit sur place avant la moindre recommandation",
    accent: false,
  },
  {
    value: "0 → 13",
    label: "demandes de devis en trois mois chez un client qui était à zéro depuis trois ans",
    accent: true,
  },
  {
    value: "8 jours",
    label: "de travail pour reconstruire toute son acquisition",
    accent: false,
  },
  {
    value: "500+",
    label: "projets livrés en quatre ans d'agence, pour Louis Vuitton, Netflix ou Ford",
    accent: false,
  },
];

/* 02 — Le problème, formulé comme ce que l'audit trouve à tous les coups. */
export const fuites = {
  kicker: "Le constat",
  title: "Ce que je trouve, à chaque fois.",
  intro:
    "Trois fuites reviennent dans presque toutes les entreprises que j'ouvre. Aucune ne se voit de l'intérieur : elles ressemblent trop à la façon dont on a toujours fait.",
  items: [
    {
      n: "01",
      titre: "De l'argent qui sort sans preuve qu'il rentre",
      text: "Une campagne, un abonnement, un prestataire reconduit chaque année. Personne dans l'entreprise ne sait dire ce que cette dépense a rapporté le mois dernier.",
    },
    {
      n: "02",
      titre: "Une offre rangée comme vous la pensez",
      text: "Vous vendez un métier. Vos clients, eux, cherchent la réponse à un problème précis, à un moment précis, dans une ville précise. Entre les deux, la demande passe à côté de vous.",
    },
    {
      n: "03",
      titre: "Du temps d'équipe avalé par l'habitude",
      text: "Des tâches que plus personne ne remet en question. Elles étaient utiles il y a cinq ans. Elles occupent aujourd'hui les gens dont vous avez le plus besoin ailleurs.",
    },
  ],
  chute:
    "Ces trois fuites ont un point commun : rien n'est cassé. Tout fonctionne, un peu à côté. C'est précisément ce qui les rend invisibles, et coûteuses.",
};

/* 03 — La méthode, cinq étapes, celles du tableau. */
export const marches = [
  {
    n: "01",
    title: "Analyse",
    text: "Je viens sur place et je regarde l'activité entière : l'offre, les prix, le parcours d'achat, les canaux, les processus, ce que vivent vos équipes et ce que vivent vos clients.",
    question: "Comment cette entreprise gagne-t-elle vraiment sa vie ?",
    livrable: "La carte de votre entreprise telle qu'elle tourne, pas telle qu'on la raconte.",
  },
  {
    n: "02",
    title: "Diagnostic",
    text: "On met les chiffres côte à côte : d'où viennent les clients, ce que coûte chaque canal, ce que rapporte chaque ligne, le temps passé pour chaque euro produit.",
    question: "Qu'est-ce qui rapporte, et qu'est-ce qui en donne l'illusion ?",
    livrable: "Les chiffres que personne n'avait encore rapprochés.",
  },
  {
    n: "03",
    title: "Priorisation",
    text: "On descend jusqu'au point de blocage, celui qui tient tous les autres. On calcule ce qu'il vous coûte chaque mois, et on décide par quoi commencer.",
    question: "Que fait-on lundi prochain ?",
    livrable: "Un point de départ chiffré et l'ordre des priorités.",
  },
  {
    n: "04",
    title: "Mise en œuvre",
    text: "Ce que je sais faire, je le fais. Pour le reste, je vais chercher le bon prestataire, je le choisis et je le dirige. Vous n'avez qu'un interlocuteur et personne à qui réexpliquer votre entreprise.",
    question: null,
    livrable: "Le système en place, mesurable, entre vos mains.",
  },
  {
    n: "05",
    title: "Optimisation",
    text: "On mesure tous les mois, on corrige, on arbitre. Un système qu'on ne règle plus finit toujours par se dérégler.",
    question: null,
    livrable: "Des décisions prises sur des chiffres plutôt que sur des impressions.",
  },
];

export const methodeIntro =
  "La même séquence à chaque fois, quel que soit le métier. Les trois premières étapes prennent le temps qu'il faut. Les deux suivantes vont vite, parce que la décision est déjà prise.";

/* 04 — Ce que le dirigeant constate dans sa semaine. */
export const gains = [
  {
    titre: "Du temps",
    text: "Les tâches qui ne produisaient rien sortent du planning. Vous récupérez des journées, pas des minutes.",
  },
  {
    titre: "De la marge",
    text: "La même activité, mieux disposée, rapporte davantage. Sans un euro de publicité en plus.",
  },
  {
    titre: "Du confort",
    text: "Le lundi matin, vous savez d'où viennent vos clients, ce qui marche, et par quoi commencer.",
  },
];

/* 05 — Le nom, expliqué là où il devient une méthode de travail. */
export const manifeste = {
  kicker: "Le nom",
  title: "Un degré, pas un virage.",
  paragraphes: [
    "Je ne propose jamais de tout refaire. Refondre coûte cher, prend un an, et fait perdre en route ce qui marchait déjà.",
    "Un audit sérieux aboutit presque toujours à une poignée de corrections précises : une offre redécoupée, une page remise à sa place, une dépense arrêtée, une tâche supprimée. Prises une par une, elles paraissent minces. Mises ensemble, elles changent la direction de l'entreprise.",
    "C'est de là que vient le nom.",
  ],
  citation:
    "Un degré d'écart ne se voit pas au départ. Cent kilomètres plus loin, on n'arrive pas au même endroit.",
  note: "Chaque section de ce site penche d'un degré. Vous l'avez senti sans le voir.",
};

/* 06 — Qui je suis, et à quoi je sers. */
export const guide = {
  kicker: "Qui je suis",
  title: "Je reste jusqu'à ce que ça tourne.",
  lead: "Jean-Baptiste Manson, consultant indépendant. Je fais les deux métiers que le marché sépare : celui qui regarde et celui qui exécute. Le consultant rend un rapport, l'agence attend des consignes, et entre les deux le projet s'arrête pendant six mois.",
  agence:
    "Quatre ans en agence de réalité augmentée, plus de 500 projets livrés pour Louis Vuitton, Yves Saint Laurent, Netflix, Ford, Hugo Boss ou La Banque Postale. Ce ne sont pas mes clients d'aujourd'hui. C'est le niveau d'exigence que j'apporte chez vous.",
  competences: [
    "Audit d'activité et lecture de chiffres",
    "Acquisition et demande de longue traîne",
    "Conversion et parcours d'achat",
    "Production augmentée par l'intelligence artificielle",
    "Mesure et arbitrage mensuel",
  ],
  vagues: [
    { annee: "2017", text: "Le live streaming, quand personne n'y croyait encore." },
    { annee: "2019", text: "L'influence, avant que ce soit un métier." },
    { annee: "2021", text: "La réalité augmentée, avant que le mot devienne courant." },
    { annee: "2024", text: "L'intelligence artificielle, avant qu'elle serve d'argument de vente." },
  ],
  vaguesChute:
    "Quatre fois de suite, je suis arrivé un peu avant. Ce que ça change pour vous : on n'installe pas chez vous les outils d'il y a cinq ans.",
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

/* 07 — Le cas, raconté comme une histoire. */
export const cas = {
  kicker: "Un audit, en entier",
  client: "CB Sols",
  sousTitre: "Artisan poseur de sols, La Rochelle",
  temps: [
    {
      label: "Avant",
      text: "Trois ans de publicité payée. Aucune demande entrante. Le site existait, le téléphone ne sonnait pas, et le carnet de commandes tenait sur le bouche-à-oreille.",
    },
    {
      label: "Ce que l'audit a montré",
      text: "L'offre était rangée par métier. Or personne ne cherche un poseur de sols : on cherche un sol de cuisine, une terrasse, une salle de bains, dans sa ville. Le travail était irréprochable, il n'apparaissait nulle part où la demande se forme.",
    },
    {
      label: "Ce qu'on a corrigé",
      text: "Huit jours de travail. L'offre redécoupée par besoin, par contexte et par territoire. Les chantiers déjà réalisés remis au travail comme preuve. Une demande de devis possible depuis chaque page, et la mesure installée pour arbitrer la suite.",
    },
    {
      label: "Après",
      text: "Trois mois plus tard : treize demandes entrantes, un trafic organique 3,6 fois supérieur au trafic payant. L'acquisition ne dépend plus du budget publicitaire.",
    },
  ],
  chiffres: [
    { value: "0 → 13", label: "demandes en trois mois" },
    { value: "8", label: "jours de travail" },
    { value: "× 3,6", label: "organique sur payant" },
  ],
  chute:
    "Attendre trois ans a coûté plus cher que les huit jours qu'il a fallu pour corriger.",
};

/* 08 — L'offre, sans montant affiché. */
export const offreIntro =
  "Tout commence par l'audit. La suite dépend de ce qu'il montre. Rien n'est engagé avant.";

export const offres = [
  {
    title: "L'Audit",
    text: "Une semaine sur place, les trois premières étapes. Vous repartez avec la carte de votre entreprise, le point de blocage chiffré et l'ordre des priorités. Que la suite se fasse avec moi ou sans moi.",
    cta: "Réserver l'audit",
    note: "déduit de la mission si elle a lieu",
    accent: true,
    delay: "1 semaine",
  },
  {
    title: "Le Système d'acquisition",
    text: "Votre offre redécoupée par besoin, par contexte et par territoire. Des contenus qui captent la demande là où elle se formule. Vos réalisations transformées en preuves. Un point de contact sur chaque page, et la mesure pour arbitrer.",
    cta: "Demander une proposition",
    note: "périmètre défini à l'audit",
    accent: false,
    delay: "8 jours sur 4 à 6 semaines",
  },
  {
    title: "La Production augmentée",
    text: "Montrer ce qui n'existe pas encore, ou ce qui ne peut pas être photographié. Les outils génératifs mis au service de votre argumentaire de vente, au niveau d'exigence des grandes marques.",
    cta: "Parler du projet",
    note: "sur mesure",
    accent: false,
    delay: "selon périmètre",
  },
  {
    title: "L'Optimisation continue",
    text: "Mesure tous les mois, corrections, arbitrages. On garde ce qui produit, on arrête ce qui dort, on déplace le reste.",
    cta: "En discuter",
    note: "engagement de six mois",
    accent: false,
    delay: "6 mois minimum",
  },
];

export const aidePublique =
  "Selon votre région, une aide publique peut financer 30 à 70 % de la mission. La demande se dépose avant la signature, jamais après. Je m'en occupe.";

/* 09 — Les questions qu'on me pose avant de signer. */
export const questions = [
  {
    q: "Combien de temps prend l'audit ?",
    a: "Une semaine. Deux rendez-vous de votre côté : un pour ouvrir les chiffres, un pour la restitution. Le reste se passe sans mobiliser vos équipes.",
  },
  {
    q: "Qu'est-ce que je reçois, concrètement ?",
    a: "La carte de votre activité telle qu'elle tourne, les chiffres rapprochés, le point de blocage principal avec ce qu'il vous coûte chaque mois, et l'ordre dans lequel traiter la suite. C'est à vous, que vous continuiez avec moi ou non.",
  },
  {
    q: "Combien coûte la mission ?",
    a: "Le montant dépend du périmètre, et il se fixe après l'audit, jamais avant. Il est toujours mis en face de ce que le blocage vous coûte chaque mois. Chez CB Sols, la mission a coûté moins qu'un trimestre de publicité sans retour, et une aide régionale peut en financer une bonne partie.",
  },
  {
    q: "Vous ne connaissez pas mon métier.",
    a: "Exact, et c'est précisément pour ça que je vois ce qui manque. Vous connaissez votre métier mieux que quiconque, donc vous ne voyez plus ce qui est sous vos yeux. Je ne connaissais rien aux sols ni aux bateaux avant d'y travailler.",
  },
  {
    q: "Optimiser, ça veut dire couper des coûts ?",
    a: "Non. Ça veut dire mettre chaque chose au bon endroit. Sur mes dernières missions, rien n'a été supprimé : ce qui existait a été remis à travailler.",
  },
  {
    q: "On peut le faire en interne ?",
    a: "Vous pouvez. Vous ne le ferez pas, parce que ce n'est ni urgent, ni votre métier, et que c'est sur la liste depuis trois ans. C'est exactement pour ça qu'on m'appelle.",
  },
];

/* 10 — Le journal : la preuve du regard, chaque semaine. */
export const journalIntro =
  "Une observation par semaine. Une situation prise sur le vif dans un commerce, ce que j'y vois, ce que je changerais. C'est le même regard, appliqué pendant une semaine entière à une entreprise.";

export const journal = [
  {
    date: "14 · 03",
    title: "La caisse d'un magasin bio",
    text: "En zone de caisse, uniquement des produits chers. L'achat d'impulsion suppose une décision prise sans réfléchir : au-delà d'un certain prix, elle n'arrive jamais. L'emplacement le plus vu du magasin ne vendait rien.",
    slot: "OBSERVATION · la caisse d'un magasin bio, prise au téléphone",
    note: "trop cher ici",
  },
  {
    date: "27 · 02",
    title: "Une devanture fermée à midi",
    text: "Les horaires ne recoupaient ni le flux de la rue, ni celui du marché voisin. Le commerce était ouvert quand personne ne passait. Des horaires, ça se décide sur le trafic, pas sur l'habitude.",
    slot: "OBSERVATION · une devanture, photo téléphone",
    note: null,
  },
  {
    date: "09 · 02",
    title: "Un stand au bord de l'allée",
    text: "Le produit à la plus forte marge était rangé derrière le vendeur. L'ordre d'exposition décide de ce qui se vend, avant même le prix. Ici, cet ordre s'était installé tout seul.",
    slot: "OBSERVATION · un stand ou un étalage, photo téléphone",
    note: null,
  },
];
