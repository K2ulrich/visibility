// ---------------------------------------------------------------------------
// DONNÉES DU SITE — modifiez ce fichier pour mettre à jour le contenu partout.
// Aucune information personnelle, tarif, service ou projet n'est codé en dur
// ailleurs dans le site : tout part d'ici.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Visibility",
  tagline: "Des solutions web pour donner plus de visibilité aux entreprises.",
  founder: "Ulrich Konan",
  email: "ktech482@gmail.com",
  whatsapp: "+225 07 99 14 70 21",
  whatsappLink: "https://wa.me/2250799147021",
  linkedin: "https://www.linkedin.com/in/ulrich-konan-a93090299/",
  location: "Côte d'Ivoire",
  url: "https://visibility.vercel.app", // à remplacer par le domaine final
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/services", label: "Services & Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const heroContent = {
  title: "Donnez de la visibilité à votre entreprise.",
  subtitle:
    "Nous créons des sites web modernes et professionnels pour aider les PME, entreprises et entrepreneurs africains à développer leur présence en ligne.",
  ctaPrimary: { label: "Démarrer votre projet", href: "/contact" },
  ctaSecondary: { label: "Voir nos réalisations", href: "/portfolio" },
};

export const whyWebsite = [
  {
    title: "Crédibilité",
    text: "Un site professionnel rassure vos clients avant même le premier échange.",
  },
  {
    title: "Visibilité",
    text: "Être trouvé sur Internet, au moment où un client cherche vos services.",
  },
  {
    title: "Accessibilité",
    text: "Votre activité présentée clairement, sur mobile comme sur ordinateur.",
  },
  {
    title: "Nouveaux clients",
    text: "Un formulaire de contact et un bouton WhatsApp qui transforment les visites en échanges.",
  },
  {
    title: "Disponibilité 24h/24",
    text: "Votre vitrine travaille pour vous, même en dehors des heures d'ouverture.",
  },
  {
    title: "Présentation claire",
    text: "Services, produits et coordonnées réunis au même endroit.",
  },
];

export const services = [
  {
    title: "Sites vitrines",
    text: "Une présence en ligne claire pour présenter votre entreprise, vos services et vos coordonnées.",
  },
  {
    title: "Sites e-commerce",
    text: "Un catalogue en ligne avec fiches produits et parcours de commande adapté à votre activité.",
  },
  {
    title: "Refonte de site existant",
    text: "Moderniser un site vieillissant : design, performance et expérience utilisateur.",
  },
  {
    title: "Maintenance & accompagnement",
    text: "Mises à jour, ajout de contenu et assistance technique après la mise en ligne.",
  },
];

export const process = [
  { number: "01", title: "Échange", text: "Comprendre le besoin de votre entreprise et vos objectifs." },
  { number: "02", title: "Conception", text: "Définir la structure du site et l'expérience utilisateur." },
  { number: "03", title: "Développement", text: "Créer le site avec des technologies modernes." },
  { number: "04", title: "Mise en ligne", text: "Déployer le projet sur un hébergement fiable." },
  { number: "05", title: "Accompagnement", text: "Maintenance et évolutions après la livraison." },
];

export const portfolio = [
  {
    slug: "bibliotheque-en-ligne",
    title: "Bibliothèque en ligne",
    description:
      "Application web permettant aux lecteurs d'ajouter des livres ou documents, de consulter une bibliothèque numérique et de partager leurs expériences et impressions autour des ouvrages.",
    features: [
      "Ajout de livres",
      "Consultation des ouvrages",
      "Partage d'expériences",
      "Gestion des documents",
      "Interface utilisateur soignée",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/portfolio/bibliotheque.png",
  },
  {
    slug: "mini-garage",
    title: "Mini Garage",
    description:
      "Application web destinée à accompagner la gestion numérique d'un garage automobile.",
    features: [
      "Consultation des véhicules disponibles",
      "Informations détaillées sur les véhicules",
      "Suivi des réparations",
      "Gestion des pannes",
      "Association des interventions aux techniciens",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/portfolio/mini-garage.png",
  },
  {
    slug: "cadellink",
    title: "Cadellink",
    description:
      "Application web conçue pour organiser des tirages au sort de manière équitable et sécurisée, notamment pour les cérémonies de binômage dans les universités et grandes écoles.",
    features: [
      "Création d'une liste de participants",
      "Tirage au sort",
      "Répartition équilibrée",
      "Génération du résultat",
      "Interface simple",
    ],
    tech: ["React", "JavaScript"],
    image: "/images/portfolio/cadetlink.png",
  },
  {
    slug: "k2-market",
    title: "K2 Market",
    description:
      "Projet e-commerce spécialisé dans la vente d'ordinateurs portables. Les utilisateurs peuvent consulter les produits disponibles, obtenir leurs informations et contacter le fournisseur ou effectuer une demande de commande.",
    features: [
      "Catalogue de produits",
      "Fiches produits détaillées",
      "Prix et caractéristiques",
      "Demande de commande",
      "Contact fournisseur",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/portfolio/k2-market.png",
  },
];

export const pricing = [
  {
    title: "Site vitrine",
    priceFrom: "150 000 FCFA",
    priceEur: "≈ 250 €",
    features: [
      "Design personnalisé",
      "Site responsive",
      "Plusieurs pages",
      "Présentation de l'entreprise et des services",
      "Page contact",
      "Bouton WhatsApp",
      "Intégration des réseaux sociaux",
      "Optimisation de base pour les moteurs de recherche",
    ],
  },
  {
    title: "Site professionnel avancé",
    priceFrom: "250 000 – 300 000 FCFA",
    priceEur: null,
    features: [
      "Tout le contenu du site vitrine",
      "Fonctionnalités additionnelles selon vos besoins",
      "Pages et sections supplémentaires",
      "Optimisation SEO renforcée",
    ],
  },
  {
    title: "E-commerce",
    priceFrom: "Jusqu'à ≈ 400 000 FCFA",
    priceEur: "≈ 645 €",
    features: [
      "Catalogue de produits",
      "Fiches produits",
      "Panier et commandes",
      "Page contact",
      "Intégration de solutions de paiement si nécessaire",
      "Administration adaptée au projet",
    ],
  },
];

export const pricingNote =
  "Les prix sont indicatifs. Le tarif final dépend de la complexité du projet, du nombre de pages, des fonctionnalités et des besoins spécifiques de l'entreprise.";

export const maintenanceOffer = {
  title: "Maintenance & accompagnement",
  price: "Sur devis, selon les besoins",
  features: [
    "Corrections",
    "Mises à jour",
    "Modifications de contenu",
    "Ajout de pages ou de produits",
    "Évolution du site",
    "Assistance technique",
    "Sauvegardes lorsque l'architecture le permet",
    "Accompagnement après livraison",
  ],
};

export const about = {
  intro:
    "Développeur web full stack, Ulrich Konan transforme des idées en solutions numeriques concrètes. Passionné par l'informatique et les nouvelles technologies, il allie rigueur, créativité et ambition pour consevoir des sites et applications qui font la difference.",
  background:
    "Fondateur de Visibility, il accompagne les PME et entrepreneurs dans la creations de projets web modernes, performants et taillés pour durer.",
  interests: [
    "Développement web",
    "Nouvelles technologies",
    "Solutions numériques",
    "Innovation",
    "Transformation digitale",
    "Projets utiles aux entreprises et aux communautés",
  ],
  why:
    "De nombreuses entreprises africaines disposent d'un savoir-faire réel, mais restent difficiles à trouver sur Internet. Visibility vise à contribuer à réduire cette fracture numérique en permettant aux PME et entrepreneurs de disposer d'une présence web professionnelle et accessible.",
};

export const contactOptions = {
  projectTypes: [
    "Site vitrine",
    "Site e-commerce",
    "Refonte de site",
    "Maintenance",
    "Autre",
  ],
  budgets: [
    "Moins de 150 000 FCFA",
    "150 000 – 250 000 FCFA",
    "250 000 – 400 000 FCFA",
    "Plus de 400 000 FCFA",
    "Je ne sais pas encore",
  ],
};

export const seoKeywords = [
  "développeur web Côte d'Ivoire",
  "création site web Côte d'Ivoire",
  "site web PME",
  "création site web Abidjan",
  "développement web",
  "site vitrine",
  "site e-commerce",
  "visibilité numérique",
  "transformation digitale",
];
