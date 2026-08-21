export const site = {
  name: "Un Degré",
  domain: "https://undegre.fr",
  role: "Consultant en optimisation",
  email: "contact@undegre.fr",
  author: "Jean-Baptiste Manson · Consultant en optimisation",
  ctaPrimary: "Prendre un premier rendez-vous",
  ctaAudit: "Parler de votre entreprise",
  ctaFinal: "Prendre rendez-vous",
  ctaMicro: "Un premier échange, sans engagement.",
};

/**
 * Le plan : seule source des huit numéros de section, de leurs ancres et des
 * libellés de repérage (barre de navigation et rail). `nav` marque les quatre
 * étapes reprises dans la barre.
 */
export const plan = [
  { n: "01", id: "regard", label: "Le regard", nav: true },
  { n: "02", id: "methode", label: "La méthode", nav: true },
  { n: "03", id: "trouvailles", label: "Les trouvailles", nav: false },
  { n: "04", id: "manifeste", label: "Un degré", nav: false },
  { n: "05", id: "exemple", label: "Un exemple", nav: true },
  { n: "06", id: "qui", label: "Qui suis-je", nav: false },
  { n: "07", id: "audit", label: "L'audit", nav: true },
  { n: "08", id: "questions", label: "Questions", nav: false },
];/* Héros */
export const hero = {
  kicker: "Consultant en optimisation",
  title: "Votre entreprise fonctionne. Regardons jusqu'où elle peut aller.",
  lead: "Une entreprise qui fonctionne n'a pas forcément besoin d'être transformée. Elle a parfois simplement besoin d'être regardée autrement.",
};

/* Ouverture : les formes que prend une opportunité, puis ce que je fais. */
export const ouverture = {
  pistes: [
    "Une offre qui pourrait être mieux valorisée.",
    "Un parcours client qui pourrait être simplifié.",
    "Une dépense devenue inutile.",
    "Un savoir-faire insuffisamment visible.",
    "Une tâche qui pourrait disparaître.",
    "Un outil qui pourrait faire gagner plusieurs heures par semaine.",
    "Une opportunité commerciale jamais vraiment explorée.",
  ],
  paragraphes: [
    "Mon travail consiste à prendre suffisamment de recul pour les voir.",
    "Je viens comprendre votre activité, j'observe son fonctionnement, j'échange avec ceux qui la font vivre et j'analyse ce qui existe déjà.",
    "Puis je vous montre ce que je garderais, ce que je changerais et ce que j'explorerais.",
  ],
};

/* 01 · Pourquoi un regard extérieur */
export const regard = {
  kicker: "Pourquoi un regard extérieur",
  title:
    "Quand on travaille dans son entreprise tous les jours, on finit forcément par la regarder du même endroit.",
  intro: [
    "Ce n'est pas un défaut. C'est simplement ce qui arrive lorsqu'une organisation grandit.",
  ],
  derives: [
    "Des habitudes s'installent.",
    "Des outils s'accumulent.",
    "Une offre évolue.",
    "Des clients changent.",
    "Des opportunités apparaissent.",
  ],
  suite: [
    "Et certaines décisions prises il y a trois ou cinq ans continuent d'organiser l'entreprise alors que son environnement, lui, a changé.",
    "C'est précisément là que j'interviens.",
    "Je ne viens pas avec une solution déjà écrite. Je commence par comprendre.",
  ],
  questions: [
    "Comment l'entreprise gagne-t-elle de l'argent ?",
    "Comment trouve-t-elle ses clients ?",
    "Que vend-elle réellement ?",
    "Comment travaille-t-on en interne ?",
    "Où passe le temps ?",
    "Qu'est-ce qui fonctionne particulièrement bien ?",
    "Qu'est-ce qui pourrait être mieux exploité ?",
  ],
  chute:
    "L'objectif n'est pas de chercher ce qui va mal. L'objectif est de comprendre ce qui pourrait fonctionner encore mieux.",
};

/* 02 · Comment ça se passe */
export const deroule = {
  kicker: "Comment ça se passe",
  title: "D'abord comprendre. Ensuite décider.",
  intro: "Tout commence par une conversation.",
  etapes: [
    {
      n: "01",
      titre: "Nous échangeons",
      paragraphes: [
        "Nous parlons de votre entreprise, de son histoire, de son fonctionnement et de vos ambitions.",
        "Vous pouvez avoir un problème très précis à résoudre. Ou simplement cette intuition assez difficile à formuler : « nous pourrions probablement faire mieux. »",
        "Ce premier échange permet de comprendre où vous en êtes et ce qu'il serait intéressant d'aller regarder.",
      ],
    },
    {
      n: "02",
      titre: "Je viens voir",
      paragraphes: [
        "Je passe du temps dans l'entreprise. Je regarde les produits, les services, les prix, la manière de vendre, les outils, le marketing, le digital, l'expérience client, les processus et l'organisation.",
        "Je parle aux personnes concernées. Je regarde également les chiffres lorsqu'ils permettent de comprendre ce qui se passe réellement.",
        "Parce qu'entre la manière dont une entreprise pense fonctionner et la manière dont elle fonctionne réellement, il existe souvent quelques écarts. Et ces écarts sont intéressants.",
      ],
    },
    {
      n: "03",
      titre: "Je prends du recul",
      paragraphes: [
        "Je rassemble ce que j'ai vu. Je croise les observations, les chiffres, les usages, les retours des équipes et ceux des clients.",
        "Certaines pistes disparaissent. D'autres deviennent évidentes. Et quelques-unes peuvent changer beaucoup de choses.",
        "Je les évalue selon leur impact, leur coût, leur difficulté et le temps nécessaire pour les mettre en œuvre.",
      ],
    },
    {
      n: "04",
      titre: "Je vous restitue ce que j'ai trouvé",
      paragraphes: [
        "Pas un rapport de 80 pages destiné à finir dans un dossier. Une lecture claire de votre entreprise et des possibilités que j'y vois.",
        "Ce qui fonctionne et mérite d'être développé. Ce qui pourrait être amélioré. Ce qui pourrait être simplifié. Ce qui pourrait être mieux vendu ou mieux valorisé. Ce qu'il serait intéressant d'essayer. Et surtout : dans quel ordre.",
        "Vous repartez avec une feuille de route concrète et priorisée.",
      ],
    },
    {
      n: "05",
      titre: "Nous pouvons ensuite le faire",
      paragraphes: [
        "L'audit peut s'arrêter là. Vous avez les recommandations et vous pouvez les mettre en œuvre avec vos équipes ou vos partenaires.",
        "Mais je peux aussi rester. Lorsque le sujet entre dans mes compétences, je peux le prendre en charge directement. Lorsqu'il nécessite une expertise particulière, je cherche les bonnes personnes, construis le projet avec elles et peux en piloter la réalisation.",
        "Vous ne repartez donc pas simplement avec une liste de bonnes idées. Vous savez comment les transformer en actions.",
      ],
    },
  ],
};

/* 03 · Ce qu'on peut trouver */
export const trouvailles = {
  kicker: "Ce qu'on peut trouver",
  title:
    "Je ne sais pas encore ce que je vais vous recommander. Et c'est plutôt bon signe.",
  intro: [
    "Parce que deux entreprises ne présentent jamais les mêmes opportunités.",
    "Chez l'une, le sujet sera commercial. Chez une autre, ce sera l'offre. Ailleurs, ce sera le site internet, l'expérience client, un processus interne, la communication, l'utilisation de l'intelligence artificielle, une dépense mal orientée ou simplement une excellente idée qui existe déjà mais qui n'a jamais été suffisamment développée.",
    "Une mission peut par exemple faire émerger :",
  ],
  cartes: [
    {
      titre: "Une offre à repositionner",
      text: "Un excellent produit peut être difficile à vendre simplement parce qu'il est présenté selon la logique de l'entreprise plutôt que selon celle du client.",
    },
    {
      titre: "Une expérience à simplifier",
      text: "Quelques étapes inutiles peuvent suffire à rendre un achat, une prise de contact ou un processus interne beaucoup plus compliqué qu'il ne devrait l'être.",
    },
    {
      titre: "Un savoir-faire à mieux valoriser",
      text: "Certaines entreprises possèdent déjà leur meilleur argument commercial. Elles ne l'utilisent simplement pas encore comme tel.",
    },
    {
      titre: "Du temps à récupérer",
      text: "Une automatisation, un nouvel outil ou une organisation différente peut parfois libérer plusieurs heures de travail chaque semaine.",
    },
    {
      titre: "Une dépense à questionner",
      text: "Pas nécessairement pour économiser. Parfois simplement pour déplacer les moyens vers quelque chose de plus utile.",
    },
    {
      titre: "Une opportunité à développer",
      text: "Un nouveau service, un segment de clientèle, un canal d'acquisition, une utilisation de l'IA, une manière différente de vendre ou de présenter l'offre.",
    },
  ],
  chute:
    "L'optimisation peut prendre beaucoup de formes. Le principe reste toujours le même : partir de ce qui existe pour créer davantage de valeur.",
};

/* 04 · Un degré */
export const manifeste = {
  kicker: "Un degré",
  title: "Il n'est pas toujours nécessaire de changer de direction.",
  paragraphes: [
    "Les transformations spectaculaires font de belles présentations.",
    "Dans la réalité, les progrès les plus intéressants viennent souvent d'une succession de décisions beaucoup plus précises.",
  ],
  decisions: [
    "Modifier une offre.",
    "Déplacer un budget.",
    "Simplifier une étape.",
    "Automatiser une tâche.",
    "Changer la manière de présenter un produit.",
    "Développer quelque chose qui fonctionnait déjà.",
  ],
  suite: [
    "Pris séparément, chacun de ces changements peut sembler relativement petit.",
  ],
  citation:
    "Mais un degré d'écart au départ suffit à modifier considérablement l'endroit où l'on arrive.",
  chute: [
    "C'est de là que vient Un Degré.",
    "Pas la transformation pour la transformation. Le bon changement, au bon endroit.",
  ],
};

/* 05 · Un exemple */
export const cas = {
  kicker: "Un exemple",
  client: "CB Sols",
  sousTitre: "Entreprise spécialisée dans les revêtements de sols · La Rochelle",
  paragraphes: [
    "CB Sols travaillait depuis plusieurs années essentiellement grâce au bouche-à-oreille.",
    "L'entreprise avait pourtant investi dans un site internet et dans de la publicité. Le travail était bon. Les réalisations étaient nombreuses. Mais presque aucune demande commerciale n'arrivait par le digital.",
    "Le problème n'était pas la qualité de l'entreprise. Il fallait simplement regarder différemment la manière dont son savoir-faire rencontrait la demande.",
    "Nous avons repris son offre à partir de ce que recherchaient réellement ses futurs clients : leurs projets, leurs besoins et leur localisation.",
    "Les réalisations existantes sont devenues des preuves. Le site est devenu un outil d'acquisition. Chaque contenu a commencé à répondre à une intention précise.",
    "Huit jours de travail plus tard, le système était en place.",
  ],
  chiffresIntro: "Trois mois après :",
  chiffres: [
    { value: "13", label: "nouvelles demandes de devis" },
    { value: "× 3,6", label: "de trafic organique par rapport au trafic payant" },
  ],
  chute: [
    "Le métier de CB Sols n'avait pas changé. La qualité de son travail non plus.",
    "Nous avions simplement changé la manière dont les clients pouvaient le trouver.",
  ],
};

/* 06 · Qui suis-je ? */
export const qui = {
  kicker: "Qui suis-je ?",
  title:
    "J'aime comprendre comment les choses fonctionnent. Et chercher comment elles pourraient mieux fonctionner.",
  paragraphes: [
    "Je m'appelle Jean-Baptiste Manson.",
    "Avant Un Degré, j'ai cofondé et développé une agence spécialisée dans les expériences digitales et la réalité augmentée.",
    "Pendant plusieurs années, j'y ai travaillé sur plus de 500 projets pour des entreprises comme Louis Vuitton, Yves Saint Laurent, Netflix, Ford, Hugo Boss, Castorama ou Puma.",
    "Mais surtout, entreprendre m'a obligé à toucher à beaucoup de choses.",
    "Vendre. Positionner une offre. Construire une marque. Trouver des clients. Produire. Recruter. Organiser. Tester de nouveaux outils. Gérer des prestataires. Comprendre pourquoi quelque chose fonctionne, ou pourquoi cela ne fonctionne pas.",
    "C'est probablement de là que vient ma manière de travailler aujourd'hui.",
    "Je ne regarde jamais un sujet complètement isolé du reste.",
  ],
  liens: [
    "Un problème de communication peut venir de l'offre.",
    "Un problème commercial peut venir du parcours client.",
    "Un problème de productivité peut venir d'un outil.",
    "Une opportunité marketing peut nécessiter de revoir la manière dont un service est vendu.",
  ],
  chute:
    "Je préfère donc commencer par comprendre l'ensemble avant de décider où intervenir.",
};

/* 07 · L'audit */
export const audit = {
  kicker: "L'audit",
  title: "Commençons par regarder.",
  paragraphes: [
    "L'audit est le point de départ.",
    "Nous commençons par un premier rendez-vous pour comprendre votre entreprise, vos enjeux et les questions que vous vous posez.",
    "Je viens ensuite observer et analyser votre activité.",
    "À l'issue de ce travail, je vous présente mes conclusions et les pistes que je considère comme les plus intéressantes.",
  ],
  livrablesIntro: "Vous repartez avec :",
  livrables: [
    "une lecture extérieure de votre activité,",
    "les opportunités identifiées,",
    "les améliorations possibles,",
    "leur niveau de priorité,",
    "et une feuille de route pour avancer.",
  ],
  suitesIntro: "Ensuite, trois possibilités.",
  suites: [
    "Vous mettez ces recommandations en œuvre en interne.",
    "Nous les réalisons ensemble.",
    "Ou je constitue et pilote les bonnes ressources pour le faire.",
  ],
  chute:
    "Dans tous les cas, vous savez pourquoi vous agissez, où vous allez et par quoi commencer.",
};

/* 08 · Questions */
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

/* Clôture */
export const cloture = {
  title: "Et si on commençait simplement par parler de votre entreprise ?",
  paragraphes: [
    "Vous n'avez pas besoin de savoir précisément ce qu'il faut changer avant de me contacter. C'est même une partie du travail.",
    "Parlez-moi de votre activité, de ce que vous cherchez à développer, de ce qui vous interroge ou simplement de cette impression qu'il existe encore des choses à améliorer.",
    "On commencera par regarder.",
  ],
};
