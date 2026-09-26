# 04 — Guide d'installation

## Prérequis

- Node.js 18.17 ou supérieur
- npm (fourni avec Node.js)
- Un éditeur de code (VS Code recommandé)

## Étapes

1. Extraire le fichier ZIP et ouvrir le dossier `visibility/` dans VS Code.

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Créer votre fichier de configuration local :
   ```bash
   cp .env.example .env.local
   ```
   Puis remplir les 3 variables EmailJS dans `.env.local`
   (voir `05-configuration-emailjs.md`).

4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
   Le site est accessible sur http://localhost:3000 et se recharge
   automatiquement à chaque modification.

## Autres commandes utiles

```bash
npm run build   # construit une version de production dans .next/
npm run start   # démarre le serveur en mode production (après npm run build)
npm run lint    # vérifie la qualité du code avec ESLint
```

## Problèmes fréquents

- **"Module not found"** → relancez `npm install`.
- **Le formulaire de contact échoue** → vérifiez que `.env.local` contient
  bien les 3 identifiants EmailJS et relancez `npm run dev` (les variables
  d'environnement ne sont lues qu'au démarrage du serveur).
- **Port 3000 déjà utilisé** → lancez `npm run dev -- -p 3001` pour changer
  de port.
