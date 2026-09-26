# 02 — Rapport de conception

## Analyse du besoin

Le site doit convaincre un visiteur professionnel en quelques secondes : qui
est Visibility, ce qu'elle propose, pourquoi lui faire confiance, et comment
la contacter. Le ton doit rester crédible et sobre plutôt que vendeur.

## Choix UI/UX

- **Palette** : fond encre profonde (#12151C), texte clair (#F4F2ED), accent
  or (#E8A94A) pour les actions principales, turquoise (#2FA88E) comme
  accent secondaire (liens, coche des listes). Palette volontairement
  différente des codes "SaaS cream + terracotta" ou "dark + néon" trop
  fréquents, pour donner une identité propre à Visibility.
- **Typographies** : Space Grotesk pour les titres (caractère technologique,
  géométrique), Inter pour le texte courant (lisibilité).
- **Mise en page** : beaucoup d'espace blanc (sombre), bordures fines plutôt
  que des ombres portées systématiques, un seul moment d'animation
  orchestré (l'apparition du Hero), et des transitions discrètes au survol.
- **Motif visuel** : une grille géométrique animée dans le Hero, clin d'œil
  discret aux motifs textiles africains sans reproduire de cliché visuel.

## Choix techniques

- **Next.js App Router** pour une structure de pages claire et le support
  natif du SEO (metadata, sitemap, robots).
- **Tailwind CSS** pour un système de design cohérent et une maintenance
  rapide, avec les tokens de couleur/typo définis une seule fois dans
  `tailwind.config.js`.
- **Framer Motion** utilisé uniquement pour l'animation d'entrée du Hero —
  pas d'animation systématique sur chaque section, pour rester sobre.
- **EmailJS** pour éviter un backend : le formulaire envoie directement un
  email depuis le frontend, adapté à un site vitrine sans besoin de stocker
  les messages en base de données.

## Architecture

Voir `03-architecture-du-projet.md`.

## Sécurité

- Aucune clé API sensible dans le code source : les identifiants EmailJS
  sont chargés via variables d'environnement (`NEXT_PUBLIC_EMAILJS_*`).
- `.env.local` exclu du dépôt Git via `.gitignore`.
- La clé publique EmailJS (`PUBLIC_KEY`) est conçue pour être exposée côté
  client ; EmailJS limite les abus via son propre système de quotas par
  service — voir `05-configuration-emailjs.md`.

## Performance

- Polices chargées via `next/font/google` (auto-hébergées, sans requête
  externe au runtime).
- Images gérées via `next/image` pour l'optimisation automatique.
- Peu de dépendances : Framer Motion et EmailJS uniquement.

## SEO

Metadata par page, Open Graph, Twitter Card, sitemap.xml et robots.txt
générés dynamiquement, structure sémantique (un seul H1 par page, hiérarchie
H2/H3 cohérente), mots-clés définis dans `lib/data.js` (`seoKeywords`).
