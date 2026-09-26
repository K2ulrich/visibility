# 05 — Configuration EmailJS

Le formulaire de contact (`components/ContactForm.js`) envoie les messages
directement vers **ktech482@gmail.com** via EmailJS, sans backend ni base de
données.

## 1. Créer un compte EmailJS

Rendez-vous sur https://www.emailjs.com et créez un compte gratuit (le plan
gratuit permet un volume d'envois mensuel suffisant pour démarrer).

## 2. Créer un service d'envoi

Dans le tableau de bord EmailJS : **Email Services → Add New Service**.
Connectez le service à l'adresse `ktech482@gmail.com` (Gmail ou SMTP selon
votre préférence). Notez l'identifiant généré : c'est votre
`SERVICE_ID`.

## 3. Créer un template d'email

Dans **Email Templates → Create New Template**, construisez le modèle
d'email reçu à chaque soumission. Utilisez des variables correspondant aux
champs envoyés par le formulaire :

```
{{name}}
{{email}}
{{phone}}
{{projectType}}
{{budget}}
{{message}}
```

Notez l'identifiant du template : c'est votre `TEMPLATE_ID`.

## 4. Récupérer la clé publique

Dans **Account → General**, copiez votre **Public Key** : c'est votre
`PUBLIC_KEY`. Cette clé est conçue pour être utilisée côté client ; EmailJS
limite les abus via les quotas et restrictions de domaine de votre compte.

## 5. Configurer le projet

Dans `.env.local` (copié depuis `.env.example`) :

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

Redémarrez `npm run dev` après toute modification de `.env.local`.

## 6. Tester le formulaire

1. Remplissez le formulaire sur `/contact` en local.
2. Vérifiez la réception de l'email sur `ktech482@gmail.com`.
3. Testez également un cas d'erreur (coupez votre connexion internet avant
   l'envoi) pour vérifier que le message d'erreur s'affiche correctement.

## 7. Configurer les mêmes variables sur Vercel

Une fois le site déployé, ajoutez les 3 mêmes variables dans les paramètres
du projet Vercel — voir `07-guide-vercel.md`, section "Variables
d'environnement".
