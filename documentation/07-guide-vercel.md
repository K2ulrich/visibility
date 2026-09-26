# 07 — Guide Vercel

## 1. Connexion à GitHub

Sur https://vercel.com, connectez-vous (ou créez un compte) avec votre
compte GitHub.

## 2. Importer le projet

1. Cliquez sur **Add New → Project**.
2. Sélectionnez le dépôt `visibility` poussé précédemment.
3. Vercel détecte automatiquement qu'il s'agit d'un projet Next.js —
   laissez les réglages de build par défaut (`next build`).

## 3. Variables d'environnement

Avant de déployer, ajoutez les 3 variables EmailJS dans
**Settings → Environment Variables** :

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

Utilisez les mêmes valeurs que dans votre `.env.local` (voir
`05-configuration-emailjs.md`). Appliquez-les aux environnements
Production, Preview et Development.

## 4. Déploiement

Cliquez sur **Deploy**. Vercel construit et publie le site automatiquement.
Chaque nouveau `git push` sur `main` déclenche un redéploiement.

## 5. Domaine personnalisé

Dans **Settings → Domains**, ajoutez votre nom de domaine (par exemple
`visibility.ci` ou équivalent) et suivez les instructions pour configurer
les enregistrements DNS chez votre registrar.

## 6. Après déploiement

Mettez à jour `siteConfig.url` dans `lib/data.js` avec l'URL finale du site
(nécessaire pour un sitemap et des balises Open Graph corrects), puis
recommitez et repoussez sur GitHub.
