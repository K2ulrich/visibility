# 08 — Guide de maintenance

Tout le contenu modifiable se trouve dans **`lib/data.js`**. Modifiez ce
fichier puis relancez `npm run dev` pour voir les changements (ou repoussez
sur GitHub pour un redéploiement automatique sur Vercel).

## Informations personnelles / coordonnées

Objet `siteConfig` : nom, email, WhatsApp, LinkedIn, localisation, URL du
site.

## Tarifs

Tableau `pricing` : modifiez `title`, `priceFrom`, `priceEur` et `features`
de chaque offre. Le texte légal sous les tarifs se modifie dans
`pricingNote`.

## Portfolio

Tableau `portfolio` : chaque objet correspond à un projet (`title`,
`description`, `features`, `tech`, `image`). Pour ajouter un projet, copiez
un objet existant et modifiez ses valeurs.

## Services

Tableau `services` (page d'accueil) et objet `maintenanceOffer` (page
Services & Tarifs).

## Textes du Hero et sections

Objets `heroContent`, `whyWebsite`, `process`, `about`.

## Images du portfolio

Déposez vos fichiers dans `public/images/portfolio/` avec les noms indiqués
dans `public/images/portfolio/README.md`. Tant qu'un fichier est absent, un
placeholder visuel s'affiche automatiquement à la place.

## Textes des pages

Les titres et paragraphes propres à chaque page (pas dans `lib/data.js`)
se trouvent directement dans les fichiers `app/*/page.js` correspondants.
