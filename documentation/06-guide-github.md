# 06 — Guide GitHub

## Créer le dépôt

1. Sur https://github.com, cliquez sur **New repository**.
2. Nommez-le par exemple `visibility`.
3. Laissez-le vide (pas de README généré automatiquement, le projet en
   contient déjà un).
4. Créez le dépôt.

## Pousser le projet

Depuis le dossier `visibility/`, dans un terminal :

```bash
git init
git add .
git commit -m "Initial commit — site Visibility"
git branch -M main
git remote add origin https://github.com/VOTRE-UTILISATEUR/visibility.git
git push -u origin main
```

`.env.local` ne sera **pas** poussé (il est listé dans `.gitignore`) : vos
identifiants EmailJS restent privés.

## Gérer les modifications suivantes

```bash
git add .
git commit -m "Description du changement"
git push
```

## Bonnes pratiques

- Faire des commits courts et descriptifs.
- Ne jamais commiter `.env.local` ni de vraies clés API.
- Utiliser des branches (`git checkout -b nom-de-la-fonctionnalite`) pour
  tester des changements avant de les fusionner sur `main`.
