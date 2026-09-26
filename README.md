# Visibility

Site vitrine de studio de développement web. Next.js, React, Tailwind CSS,
EmailJS.

Visibility aide les PME, entrepreneurs et commerces de Côte d'Ivoire et
d'Afrique francophone à développer leur présence en ligne.

## Démarrage rapide

```bash
npm install
cp .env.example .env.local   # puis remplir les identifiants EmailJS
npm run dev
```

Le site est disponible sur http://localhost:3000

Voir `documentation/04-guide-installation.md` pour le détail des commandes,
et `documentation/05-configuration-emailjs.md` pour le formulaire de contact.

## Stack technique

- Next.js 16.3.3 (App Router, Turbopack) — installation et build vérifiés
  sans vulnérabilité connue (`npm audit` : 0 vulnérabilité)
- React 19
- Tailwind CSS
- Framer Motion (animation d'entrée du Hero + apparitions au scroll sur
  toutes les pages)
- EmailJS (formulaire de contact, sans backend)
- Polices : Fraunces (titres) + Inter (texte courant), via next/font/google

## Ajouter vos images

- **Image de marque (page d'accueil)** : `public/images/brand/visibility.jpg`
- **Portfolio** : `public/images/portfolio/` — voir le README de ce dossier
  pour les noms de fichiers exacts attendus
- **Photo du fondateur** (affichée sur la page À propos et en bas de la page
  Réalisations) : `public/images/about/ulrich.jpg`

Tant qu'un fichier est absent, un placeholder élégant s'affiche à sa place.

## Structure

```
app/            pages (accueil, portfolio, services, a-propos, contact)
components/     composants réutilisables (Navbar, Footer, cartes, formulaire,
                Reveal pour les animations au scroll, SocialFloatingButtons...)
lib/            données centralisées (lib/data.js) et wrapper EmailJS (lib/emailjs.js)
public/         images, icônes, favicon
documentation/  cahier des charges, guides d'installation, EmailJS, GitHub, Vercel...
```

## Modifier le contenu du site

Toutes les informations (coordonnées, services, tarifs, portfolio, textes)
sont centralisées dans **`lib/data.js`**. Modifiez ce fichier plutôt que de
chercher le texte dans chaque page — voir `documentation/08-guide-maintenance.md`.

## Documentation complète

Le dossier `documentation/` contient neuf guides : cahier des charges, rapport
de conception, architecture, installation, configuration EmailJS, GitHub,
Vercel, maintenance et évolutions futures.

## Licence

Projet personnel — Ulrich Konan.
