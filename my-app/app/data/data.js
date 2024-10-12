const MyData = [
  {
    id: 1,
    lessons: [
      {
        item: "Vérifier la maîtrise des bases du HTML/CSS et du Javascript (via le test de positionnement)",
      },
      { item: "Installer les outils préparés pour la formation" },
      { item: "Démarrer le projet avec Git" },
      { item: "Maîtriser l’ariane-cli" },
    ],
  },
  {
    id: 2,
    lessons: [{ item: "Maîtrise des bases du Javascript" }],
  },
  {
    id: 3,
    lessons: [
      { item: "Comprendre les expressions régulières" },
      { item: "Connaitre l’importance des bonnes pratiques de debug" },
    ],
  },
  {
    id: 4,
    lessons: [
      { item: "Maîtriser les bases du HTML" },
      { item: "Maîtriser les bases du CSS" },
    ],
  },
  {
    id: 5,
    lessons: [
      { item: "Maîtriser les bases du HTML/CSS" },
      { item: "Mettre en page avec Flexbox" },
    ],
  },
  {
    id: 6,
    lessons: [{ item: "Manipuler le DOM en Javascript" }],
  },
  {
    id: 7,
    lessons: [
      { item: "Maîtriser les évènements en Javascript" },
      { item: "Gestion des formulaires en Javascript" },
      { item: "Manipulation avancée du DOM en JavaScript" },
    ],
  },
  {
    id: 8,
    lessons: [
      { item: "Manipuler les API et les web services" },
      {
        item: "Exécuter à partir du frontend des requêtes HTTP en GET ou POST via la commande fetch",
      },
    ],
  },
  {
    id: 9,
    lessons: [
      { item: "Initialiser un backend avec NodeJS" },
      { item: "Initialiser une base de données MongoDB" },
      { item: "Comprendre la notion de document" },
      { item: "Comprendre la notion de schéma et de modèle" },
      {
        item: "Mettre en place des opérations CRUD (Create - Read - Update - Delete)",
      },
      { item: "Utiliser une librairie tierce : Mongoose" },
    ],
  },
  {
    id: 10,
    lessons: [
      { item: "Comprendre la notion de schéma et de modèle" },
      { item: "Utiliser une librairie tierce : MongooseB" },
      { item: "Mettre en place une connexion à la base de données" },
    ],
  },
  {
    id: 11,
    lessons: [
      { item: "Modélisation de la base de données" },
      { item: "La notion de clés étrangères" },
      { item: "La notion de sous documents" },
    ],
  },
  {
    id: 12,
    lessons: [
      {
        item: "Utiliser le framework Express pour rendre nos pages dynamiques",
      },
    ],
  },
  {
    id: 13,
    lessons: [
      { item: "Lire la documentation technique d’un webservice" },
      { item: "Comprendre la notion d’API" },
      { item: "Tester une API sans coder via thunder client" },
      { item: "Mettre en place une API" },
    ],
  },
  {
    id: 14,
    lessons: [
      { item: "Mise en place de l’architecture MVC" },
      { item: "Organisation de son code" },
    ],
  },
  {
    id: 15,
    lessons: [
      { item: "Mise en place de l’architecture MVC" },
      { item: "Organisation de son code" },
    ],
  },
  { id: 16, lessons: [{ item: "TDD" }] },
  {
    id: 17,
    lessons: [
      {
        item: "Révision de toutes les notions apprises les 4 premières semaines",
      },
    ],
  },
  { id: 18, lessons: [{ item: "hackathon" }] },
  {
    id: 19,
    lessons: [
      { item: "Prendre en main et comprendre la philosophie de React" },
      {
        item: "Comprendre la logique des composants et la manière de faire circuler l’information d’un composant parent vers un composant enfant",
      },
      {
        item: "Gestion de l’affichage des composants (JSX, styles) et intégration des modules (Reactstrap)",
      },
    ],
  },
  {
    id: 20,
    lessons: [
      { item: "Communication entre les composants" },
      { item: "Gestion des propriétés de Réact" },
    ],
  },
  {
    id: 21,
    lessons: [
      { item: "Manipuler des événements en React" },
      {
        item: "Utiliser les états - ou “states” - pour mettre à jour un composant",
      },
    ],
  },
  {
    id: 22,
    lessons: [
      { item: "Le reverse data flow" },
      { item: "Manipuler des structures complexes pour les variables d’état" },
    ],
  },
  {
    id: 23,
    lessons: [
      {
        item: "Faire communiquer le JavaScript avec le Backend en utilisant le fetch",
      },
      { item: "Utiliser les opérations CRUD avec le fetch" },
      { item: "Fusionner un projet Create React App avec un projet Express" },
      { item: "La notion de cycle de vie du composant via les hooks d’effet" },
    ],
  },

  { id: 24, lessons: [{ item: "Maîtriser la navigation avec React" }] },

  {
    id: 25,
    lessons: [
      {
        item: "Mettre en place Redux et comprendre la manière d’enregistrer des informations dans le store et de les utiliser dans d’autres composants",
      },
    ],
  },
  {
    id: 26,
    lessons: [
      {
        item: "Comprendre la mécanique des champs de saisie de formulaire en React",
      },
    ],
  },
  {
    id: 27,
    lessons: [
      { item: "Maîtriser le process SignIn/SignUp avec React" },
      {
        item: "Sécuriser son application (chiffrement de mot de passe,  token, …)",
      },
    ],
  },
  {
    id: 28,
    lessons: [
      {
        item: "Utiliser le Local Storage pour stocker durablement des informations sur le mobile",
      },
    ],
  },
  { id: 29, lessons: [{ item: "stackoverflow" }] },
  { id: 30, lessons: [{ item: "Hackatweet" }] },
  { id: 31, lessons: [{ item: "Apprendre à débuter son projet" }] },
  {
    id: 32,
    lessons: [
      { item: "Mise en place d’ Expo" },
      { item: "Mettre en place la navigation avec React Navigation" },
      { item: "Intégrer les écrans avec la librairie  React Native Elements" },
    ],
  },
  { id: 33, lessons: [{ item: "Les inputs avec React Native" }] },
  {
    id: 34,
    lessons: [
      { item: "Utiliser les composants proposés par Expo : MapView" },
      { item: "Comprendre la mécanique des permissions" },
    ],
  },
  { id: 35, lessons: [{ item: "Déploiement avec Expo" }] },
  {
    id: 36,
    lessons: [
      {
        item: "Réaliser l’UI kit, les wireframes (version digitalisée de tous les écrans) et les mockups",
      },
      {
        item: "Rédiger les user stories sur Trello (cahier des charges centré utilisateur)",
      },
    ],
  },
  { id: 37, lessons: [{ item: "TypeScript" }] },
  {
    id: 38,
    lessons: [
      { item: " Utiliser le module Camera d’Expo" },
      {
        item: " Comprendre le cycle de vie d’un composant et plus particulièrement sa destruction.",
      },
      { item: " Exploiter la notion de référence à un composant en React" },
    ],
  },
  {
    id: 39,
    lessons: [
      { item: " Utiliser un autre type d’envoi en POST : form-data" },
      {
        item: "Maîtriser l’ensemble du traitement d’une photo, du Frontend vers le Backend puis jusqu’à un service de gestion d’images",
      },
    ],
  },
  {
    id: 40,
    lessons: [
      { item: " Préparation du premier sprint de développement" },
      {
        item: " Liste des routes avec : La description du rôle de chaque route et Ce qu’elles sont censées recevoir en entrée et Ce qu’elles retournent",
      },
      { item: " Introduction à la notion de TDD" },
    ],
  },
  { id: 41, lessons: [{ item: " Projet" }] },
  { id: 42, lessons: [{ item: " Projet" }] },
  { id: 43, lessons: [{ item: " Projet" }] },
  { id: 44, lessons: [{ item: " Projet" }] },
  { id: 45, lessons: [{ item: " Projet" }] },
  { id: 46, lessons: [{ item: " Projet" }] },
  { id: 47, lessons: [{ item: " Projet" }] },
];

export default MyData;
