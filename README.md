# API Jobs

## Table des Matières

- [Description](#description)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Endpoints](#endpoints)
- [Scripts NPM](#scripts-npm)
- [Dépendances](#dépendances)
- [Licence](#licence)

## Description

Ce projet est une API pour la gestion des offres d'emploi. Il utilise Node.js, Express, MongoDB et plusieurs autres bibliothèques pour fournir des fonctionnalités d'authentification, de gestion des utilisateurs et des offres d'emploi.

## Prérequis

- Node.js (version 14 ou supérieure)
- MongoDB

## Installation

1. Installez les dépendances :

```sh
npm install
```

2. Configurez les variables d'environnement :

- Copiez le fichier .env.sample en .env :

```sh
cp .env.sample .env
```

- Remplissez les valeurs des variables d'environnement dans le fichier [.env](./.env) :

```sh
MONGO_URI=<VOTRE_URI_MONGO>
JWT_SECRET=<VOTRE_SECRET_JWT>
JWT_LIFETIME=<DUREE_DE_VALIDITE_DU_JWT>
```

## Démarrage

Pour démarrer le serveur en mode développement :

```sh
npm run dev
```

Pour démarrer le serveur en mode production :

```sh
npm start
```

## Endpoints

Documentation Swagger : http://localhost:3000/api-docs

## Scripts NPM

- **npm run dev** : Démarre le serveur en mode développement avec nodemon.
- **npm start** : Démarre le serveur en mode production.

  ## Dépendances

- **express** : Framework web pour Node.js.
- **mongoose** : ODM pour MongoDB.
- **jsonwebtoken** : Gestion des tokens JWT.
- **bcryptjs** : Hachage des mots de passe.
- **zod** : Validation des schémas.
- **helmet** : Sécurisation des en-têtes HTTP.
- **cors** : Middleware pour activer CORS.
- **express-rate-limit** : Limitation du taux de requêtes.
- **express-mongo-sanitize** : Protection contre les injections MongoDB.
- **swagger-ui-express** : Documentation API avec Swagger.

## Licence

Ce projet est sous licence ISC.
