# 03 — Architecture du projet

```
visibility/
├── app/
│   ├── page.js              Page d'accueil
│   ├── layout.js             Layout racine : polices, metadata SEO globales,
│   │                         Navbar / Footer / WhatsAppButton communs
│   ├── globals.css           Styles globaux, focus clavier, reduced-motion
│   ├── sitemap.js            Génère /sitemap.xml
│   ├── robots.js             Génère /robots.txt
│   ├── portfolio/page.js     Page Réalisations
│   ├── services/page.js      Page Services & Tarifs
│   ├── a-propos/page.js      Page À propos
│   └── contact/page.js       Page Contact
│
├── components/
│   ├── Navbar.js              Navigation + menu mobile + sticky scroll
│   ├── Footer.js               Pied de page (liens, contact, copyright)
│   ├── Hero.js                  Section d'accueil animée
│   ├── Logo.js                  Monogramme SVG "VT"
│   ├── Button.js                Bouton réutilisable (primary/outline/ghost)
│   ├── PortfolioCard.js         Carte projet avec placeholder image
│   ├── ServiceCard.js           Carte service
│   ├── PricingCard.js           Carte tarif
│   ├── ProcessSection.js        Étapes 01–05
│   ├── ContactForm.js           Formulaire connecté à EmailJS
│   └── WhatsAppButton.js        Bouton flottant WhatsApp
│
├── lib/
│   ├── data.js                Toutes les données du site (source unique)
│   └── emailjs.js              Fonction d'envoi du formulaire
│
├── public/
│   ├── icons/favicon.svg
│   └── images/portfolio/       Emplacement des visuels du portfolio
│
├── documentation/               Ce dossier
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Principe central : `lib/data.js`

Toutes les informations modifiables (coordonnées, services, tarifs, projets,
textes du Hero...) sont centralisées dans `lib/data.js`. Les pages et
composants importent ces données plutôt que de contenir du texte en dur —
cela permet de mettre à jour le site entier depuis un seul fichier.

## Flux du formulaire de contact

`ContactForm.js` (client) → `lib/emailjs.js` (`sendContactMessage`) →
API EmailJS → email reçu sur `ktech482@gmail.com`. Aucune donnée n'est
stockée côté serveur ou en base de données.
