/**
 * Contenu éditorial du site, repris mot pour mot de la maquette Claude Design
 * « un-degre.dc.html ». On ne réécrit pas ce texte.
 */

export const site = {
  name: "Un Degré",
  domain: "https://undegre.fr",
  role: "Consultant en optimisation",
  email: "contact@undegre.fr",
  phone: "06 62 93 89 14",
  phoneHref: "+33662938914",
  author: "Jean-Baptiste Manson · consultant en optimisation",
};

export const nav = [
  { href: "#methode", label: "La méthode" },
  { href: "#exemple", label: "Un exemple" },
  { href: "#questions", label: "Questions" },
];

/* Héros */
export const hero = {
  kicker: "Consultant en optimisation",
  titre1: "Votre entreprise fonctionne.",
  titre2: "Regardons jusqu'où elle peut aller.",
  lede: "Une entreprise qui fonctionne n'a pas forcément besoin d'être transformée. Elle a parfois simplement besoin d'être regardée autrement.",
  cta: "Prendre un premier rendez-vous",
  micro: "Un premier échange, sans engagement.",
};

/* 01 · La méthode */
export const methode = {
  n: "01",
  kicker: "Comment ça se passe",
  titre: "D'abord comprendre. Ensuite décider.",
  citation: "« Tout commence par une conversation. »",
  cta: "Parlez-moi de votre entreprise",
  etapes: [
    {
      n: "01",
      titre: "Nous échangeons",
      texte: "Nous parlons de votre entreprise, de son histoire, de son fonctionnement et de vos ambitions. Vous pouvez avoir un problème très précis à résoudre. Ou simplement cette intuition assez difficile à formuler : « nous pourrions probablement faire mieux. » Ce premier échange permet de comprendre où vous en êtes et ce qu'il serait intéressant d'aller regarder.",
    },
    {
      n: "02",
      titre: "Je viens voir",
      texte: "Je passe du temps dans l'entreprise. Je regarde les produits, les services, les prix, la manière de vendre, les outils, le marketing, le digital, l'expérience client, les processus et l'organisation. Je discute aux personnes concernées. Je me penche également sur les chiffres lorsqu'ils permettent de comprendre ce qu'il se passe réellement. Parce qu'entre la manière dont une entreprise pense fonctionner et la manière dont elle fonctionne réellement, il existe souvent quelques écarts. Et ces écarts sont intéressants & significatifs.",
    },
    {
      n: "03",
      titre: "Je prends du recul",
      texte: "Je rassemble ce que j'ai vu au sein de votre structure. Je croise les observations, les chiffres, les usages, les retours des équipes et ceux des clients. Certaines pistes disparaissent et d'autres deviennent évidentes pour optimiser la stratégie. Je les évalue selon leur impact, leur coût, leur difficulté et le temps nécessaire pour les mettre en œuvre.",
    },
    {
      n: "04",
      titre: "Je vous restitue ce que j'ai trouvé",
      texte: "Pas un rapport de 80 pages destiné à finir dans un dossier. Une lecture claire de votre entreprise et des possibilités que j'y vois. Ce qui fonctionne et mérite d'être développé. Ce qui pourrait être amélioré. Ce qui pourrait être simplifié. Ce qui pourrait être mieux vendu ou mieux valorisé. Ce qu'il serait intéressant d'essayer. Et surtout : dans quel ordre. Vous repartez avec une feuille de route concrète et priorisée.",
    },
    {
      n: "05",
      titre: "Nous pouvons ensuite le faire",
      texte: "L'audit peut s'arrêter là. Vous avez les recommandations et vous pouvez les mettre en œuvre avec vos équipes ou vos partenaires. Mais je peux aussi rester. Lorsque le sujet entre dans mes compétences, je peux le prendre en charge directement. Lorsqu'il nécessite une expertise particulière, je cherche les bonnes personnes, construis le projet avec elles et peux en piloter la réalisation. Vous ne repartez donc pas simplement avec une liste de bonnes idées. Vous savez comment les transformer en un plan d'actions.",
    },
  ],
};

/* 02 · Ce qu'on peut trouver */
export const trouver = {
  n: "02",
  kicker: "Ce qu'on peut trouver",
  titre1: "Je ne sais pas encore ce que je vais vous recommander.",
  titre2: "Et c'est plutôt bon signe.",
  lede: "Parce que deux entreprises ne présentent jamais les mêmes opportunités. Chez l'une, le potentiel sera commercial. Chez une autre, il faudra repenser une offre, simplifier une organisation ou mieux exploiter un savoir-faire déjà là. Parfois, la meilleure opportunité existe déjà dans l'entreprise : personne ne l'a simplement poussée assez loin.",
  amorce: "Une mission peut par exemple faire émerger :",
  cartes: [
    {
      titre: "Une offre à repositionner",
      texte: "Un excellent produit peut être difficile à vendre simplement parce qu'il est présenté selon la logique de l'entreprise plutôt que selon celle du client.",
    },
    {
      titre: "Une expérience à simplifier",
      texte: "Quelques étapes inutiles peuvent suffire à rendre un achat, une prise de contact ou un processus interne beaucoup plus compliqué qu'il ne devrait l'être.",
    },
    {
      titre: "Un savoir-faire à mieux valoriser",
      texte: "Certaines entreprises possèdent déjà leur meilleur argument commercial. Elles ne l'utilisent simplement pas encore comme tel.",
    },
    {
      titre: "Du temps à récupérer",
      texte: "Une automatisation, un nouvel outil ou une organisation différente peut parfois libérer plusieurs heures de travail chaque semaine.",
    },
    {
      titre: "Une dépense à questionner",
      texte: "Pas nécessairement pour économiser. Parfois simplement pour déplacer les moyens vers quelque chose de plus utile.",
    },
    {
      titre: "Une opportunité à développer",
      texte: "Un nouveau service, un segment de clientèle, un canal d'acquisition, une utilisation de l'IA, une manière différente de vendre ou de présenter l'offre.",
    },
  ],
  citation1: "« L'optimisation peut prendre beaucoup de formes. Le principe reste toujours le même : ",
  citation2: "partir de ce qui existe pour créer davantage de valeur",
  citation3: ". »",
};

/* Bande d'appel à l'action */
export const ctaMail = {
  titre: "Une demi-heure suffit pour savoir s'il y a quelque chose à aller chercher.",
  texte: "Laissez votre e-mail : je vous réponds avec deux créneaux.",
  bouton: "Demander un créneau",
  rappel: "Ou appelez directement :",
};

/* 03 · Les terrains */
export const terrains = {
  n: "03",
  kicker: "Où j'interviens",
  titre: "De l'artisan seul au groupe de plusieurs centaines de personnes.",
  lede: "Je ne travaille pas sur un secteur, je travaille sur une manière de fonctionner. Que l'entreprise soit un artisan seul ou un groupe de plusieurs centaines de personnes, les questions ne changent pas vraiment : je cherche comment l'argent rentre, où le temps se perd, et ce qui existe déjà sans être exploité.",
  amorce: "Ce que ça donne, concrètement",
  cas: [
    ["L'artisan", "qui vit du bouche-à-oreille et veut des demandes entrantes."],
    ["La PME", "dont l'offre a grossi sans jamais être remise à plat."],
    ["Le commerce", "dont le parcours d'achat perd des clients en route."],
    ["Le cabinet", "qui passe ses semaines sur des tâches automatisables."],
    ["La marque", "qui vend bien un produit et n'a jamais développé le reste."],
    ["Le grand compte", "qui veut tester vite, sans mobiliser six services."],
  ] as [string, string][],
};

/* 04 · Un exemple */
export const exemple = {
  n: "04",
  kicker: "Un exemple",
  client: "CB Sols",
  sousTitre: "Revêtements de sols · La Rochelle",
  chiffres: [
    { valeur: "0", texte: "demande entrante les trois années précédentes" },
    { valeur: "13", texte: "demandes de devis entrantes en trois mois" },
    { valeur: "× 3,6", texte: "de trafic organique face au trafic payant, à trois mois" },
    { valeur: "8", texte: "jours de travail pour installer le système" },
  ],
  paragraphes: [
    "L'entreprise vendait bien, mais uniquement via bouche-à-oreille : le site web et la publicité ne produisaient aucune demande commerciale. Nous avons donc repris le site comme un canal d'acquisition et non comme une vitrine, avec une page par métier, par type de projet et par ville, pour vraiment correspondre aux intentions de recherche des clients.",
    "Les chantiers déjà réalisés sont devenus de véritables preuves, documentées par des photos avant/après et des budgets indicatifs. Chaque page du site a ensuite été pensée pour faciliter la prise de contact : formulaire de devis simplifié, numéro de téléphone accessible et disponibilité clairement affichée. Enfin, le suivi des appels et des formulaires renseignés permet désormais d'identifier précisément l'origine de chaque demande.",
    "Huit jours de travail. Le métier n'a pas changé, la qualité non plus. Ce qui a changé, c'est la façon dont le client les découvre, les comprend et contacte l'entreprise.",
  ],
  temoignage: "« On a beaucoup échangé sur notre activité, les chantiers qu'on voulait développer et les clients qu'on cherchait à toucher. Jean-Baptiste a identifié les profils les plus intéressants pour nous et les recherches qu'ils faisaient pour trouver une entreprise comme la nôtre. À partir de là, il a recentré notre contenu et créé un nouveau site pour renforcer notre présence en ligne et faire de CB SOLS l'une des premières entreprises que l'on trouve sur Google quand on cherche nos services. Aujourd'hui, le site est devenu un véritable canal d'acquisition : il nous apporte régulièrement de nouveaux prospects et de nouveaux chantiers. »",
  nom: "Valentin Prévoteau",
  role: "Dirigeant de CB Sols",
  ctaAmorce: "Ça donnerait quoi dans",
  ctaMots: [
    "votre atelier ?",
    "votre cabinet ?",
    "votre agence ?",
    "votre boutique ?",
  ],
  ctaLien: "Demandez-moi",
};

/* 05 · Qui suis-je */
export const qui = {
  n: "05",
  kicker: "Qui suis-je ?",
  titre1: "J'aime comprendre comment les choses fonctionnent.",
  titre2: "Et chercher comment elles pourraient mieux fonctionner.",
  nom: "Jean-Baptiste Manson",
  fonction: "Fondateur d'Un Degré",
  paragraphes: [
    "Avant Un Degré, j'ai cofondé et développé une agence spécialisée dans les expériences digitales et la réalité augmentée. J'y ai travaillé plusieurs années sur plus de 500 projets, pour des entreprises comme Louis Vuitton, Yves Saint Laurent, Netflix, Ford, Hugo Boss, Castorama ou Puma.",
    "Cette expérience m'a appris à regarder une entreprise dans son ensemble, à repérer le potentiel encore inexploité et à identifier les leviers capables de le transformer en résultats concrets.",
    "C'est de là que vient ma manière de travailler : écouter attentivement, questionner précisément et déceler, derrière les évidences du quotidien, les potentiels qui n'ont pas encore été formulés. Je les confronte ensuite à la réalité de l'entreprise, à leur impact et aux moyens qu'ils exigent, pour ne retenir que ceux qui méritent réellement d'être activés.",
  ],
  degre: "Un degré d'écart au départ suffit à modifier considérablement l'endroit où l'on arrive.",
};

/* Contact */
export const contact = {
  titre: "Et si on commençait simplement par parler de votre entreprise ?",
  lede: "Vous n'avez pas besoin de savoir précisément ce qu'il faut changer avant de me contacter. C'est même une partie du travail. Parlez-moi de votre activité, de ce que vous cherchez à développer, de ce qui vous interroge ou simplement de cette impression qu'il existe encore des choses à améliorer.",
  bouton: "Envoyer ma demande",
  champMessage: "Votre entreprise, en quelques lignes",
};

/* 06 · Questions */
export const questions = [
  {
    q: "Vous ne connaissez pas mon métier.",
    a: "C'est justement pour cela qu'un premier échange est important. Je n'ai pas vocation à remplacer votre expertise métier : vous connaissez votre activité mieux que moi. Mon rôle est différent, comprendre suffisamment votre fonctionnement pour poser les bonnes questions, rapprocher des éléments qui le sont rarement et apporter un regard extérieur.",
  },
  {
    q: "Est-ce forcément un audit complet ?",
    a: "Non. Le premier rendez-vous sert justement à déterminer ce qu'il est pertinent d'explorer. Certaines entreprises nécessitent une analyse assez large. D'autres ont déjà identifié un sujet précis sur lequel travailler.",
  },
  {
    q: "Qu'est-ce que je reçois concrètement ?",
    a: "Une restitution de mes observations, les opportunités identifiées, mes recommandations et leur ordre de priorité. L'objectif est que vous sachiez exactement quoi faire, pourquoi le faire et dans quel ordre.",
  },
  {
    q: "Êtes-vous ensuite obligé d'intervenir ?",
    a: "Non. La restitution doit être utile indépendamment de la suite. Vous pouvez avancer seul, avec vos équipes, avec vos prestataires actuels ou avec moi.",
  },
  {
    q: "Optimiser veut-il forcément dire réduire les coûts ?",
    a: "Non. Économiser 10 000 € inutilement dépensés est une optimisation. Trouver 100 000 € de chiffre d'affaires supplémentaire en est une autre. Simplifier le quotidien de cinq collaborateurs aussi. L'objectif est de créer davantage de valeur avec les ressources dont vous disposez.",
  },
];
