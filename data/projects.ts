import type { Project } from '../lib/types/project'

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Le portfolio lui-même!',
    emoji: '🚀',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind'],
    fullDescription:
      'Mon portfolio personnel est un site web moderne et interactif développé avec Next.js 14 et TypeScript. Il présente mes projets, mon parcours académique et mes compétences techniques de manière élégante et professionnelle. Le site utilise des animations fluides, des effets de glassmorphism et une palette de couleurs moderne avec des dégradés bleu-violet. J\'ai intégré une police pixelisée "Press Start 2P" pour un style unique et mémorable. Le portfolio est entièrement responsive et optimisé pour les performances grâce aux fonctionnalités de Next.js comme le Server-Side Rendering et l\'optimisation d\'images. Chaque section (Accueil, À propos, Projets, Contact) a été soigneusement conçue avec des micro-interactions et des transitions pour offrir une expérience utilisateur exceptionnelle.',
    image: '/path/to/project1-screenshot.jpg',
    link: 'https://zolaski9113.github.io/portfolio/',
    githubLink: 'https://github.com/Zolaski9113/portfolio',
  },
  {
    id: 'robot-inf1900',
    title: 'Robot',
    subtitle: 'Robot autonome Pathfinding',
    emoji: '💻',
    technologies: ['C++', 'Git', 'ATmega324PA'],
    fullDescription:
      "Projet académique de robotique autonome développé dans le cadre du cours INF1900 à Polytechnique Montréal (Automne 2024). J'ai programmé un robot autonome sur microcontrôleur ATmega324PA en C++ bare-metal, sans framework ni bibliothèques externes. Le robot utilise un algorithme de pathfinding avec graphe pondéré pour calculer et suivre le chemin le plus court sur une carte prédéfinie. J'ai développé plusieurs modules intégrés : un système de suivi de ligne utilisant 5 capteurs infrarouges, un système de détection d'obstacles IR, un contrôle précis des moteurs via PWM, et une gestion de la mémoire EEPROM pour sauvegarder les données. Le robot est capable de navigation autonome intelligente avec détection automatique de sa position et orientation aux quatre coins du parcours. J'ai implémenté la gestion complète des interruptions, timers, et communication RS-232 pour le debugging. Le projet a été réalisé en équipe avec Git pour le contrôle de version, suivant un cycle complet de développement incluant conception, programmation, tests et débogage. J'ai également utilisé le simulateur SimulIDE pour valider le code avant le déploiement sur le robot physique, assurant ainsi la fiabilité du système embarqué.",
    image: '/path/to/project2-screenshot.jpg',
  },
  {
    id: 'hil-simulator',
    title: 'HIL Simulator',
    subtitle: 'Simulateur hardware-in-the-loop en Python',
    emoji: '🔌',
    technologies: ['Python', 'Git'],
    fullDescription:
      "Projet Python de simulateur hardware-in-the-loop (HIL) pour tester et valider du logiciel contre un modèle du matériel sans dépendre du dispositif physique à chaque itération. Le simulateur reproduit le comportement des interfaces attendues par le code sous test (capteurs, actionneurs, bus ou protocoles) afin d'automatiser les scénarios, accélérer le débogage et sécuriser les régressions avant intégration sur cible. Le développement suit une structure modulaire pour étendre facilement de nouveaux périphériques ou cas de test, avec contrôle de version Git pour la collaboration et l'historique des changements.",
    image: '/path/to/hil-simulator-screenshot.jpg',
  },
  {
    id: 'promo-option',
    title: 'Promo-option',
    subtitle: 'Site vitrine Promo-Option',
    emoji: '🎨',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    fullDescription:
      "Site web vitrine statique développé pour Promo-Option, une entreprise spécialisée dans la broderie, l'impression et les produits textiles personnalisés. Le site présente les services offerts par l'entreprise, met en valeur leur portfolio de réalisations et permet aux clients potentiels de découvrir leurs capacités. J'ai intégré un formulaire de contact fonctionnel qui envoie des messages lorsqu'un client est intéressé par un produit ou service, facilitant ainsi la communication directe avec l'entreprise. Le design est moderne, professionnel et entièrement responsive, offrant une expérience optimale sur tous les appareils. Le site met l'accent sur la présentation visuelle des produits et services avec une navigation intuitive et des sections bien organisées. Ce projet démontre mes compétences en développement frontend, création d'interfaces web professionnelles et intégration de systèmes de messagerie pour sites vitrines.",
    image: '/path/to/project3-screenshot.jpg',
    link: 'https://promo-option.com/',
    githubLink: 'https://github.com/Zolaski9113/Promo-Option',
  },
  {
    id: 'puckpredict-ai',
    title: 'PuckPredictAI',
    subtitle: "Application d'assistance pour joueurs de hockey fantasy",
    emoji: '🏒',
    technologies: ['Python', 'Streamlit', 'Gemini API', 'MongoDB', 'Pandas'],
    fullDescription:
      "Application d'assistance pour joueurs de hockey fantasy développée lors du hackathon ConUHacks 2026. PuckPredictAI transforme des données brutes complexes en recommandations simples et précises pour aider les joueurs à prendre les meilleures décisions possibles. L'application intègre un chatbot alimenté par l'API Gemini qui peut répondre à des questions sur les joueurs, analyser les statistiques et fournir des conseils stratégiques. Le système peut gérer automatiquement une équipe : placer des joueurs sur le banc, gérer les joueurs blessés et optimiser les alignements. J'ai utilisé Python avec Pandas pour le traitement, la normalisation et le nettoyage des données provenant de l'API Yahoo Fantasy. Un modèle de machine learning a été développé et entraîné pour générer des prédictions précises sur les performances des joueurs. L'interface a été construite avec Streamlit pour offrir une expérience utilisateur rapide et intuitive. Les défis majeurs incluaient la connexion de multiples APIs (Gemini et Yahoo Fantasy), le nettoyage de données désordonnées, et le développement d'un modèle ML performant en temps limité. Ce projet démontre mes compétences en machine learning, intégration d'APIs complexes, traitement de données à grande échelle et développement d'applications IA. Prochaines étapes : ajout d'un algorithme pour prédire les performances des gardiens de but et déploiement de l'application.",
    image: '/path/to/project3-screenshot.jpg',
    githubLink: 'https://github.com/Zolaski9113/hackathon',
  },
  {
    id: 'trading-bot',
    title: 'Bot de Trading Algorithmique',
    subtitle: 'Système de trading automatisé haute performance pour Forex et Or',
    emoji: '📈',
    technologies: ['Python', 'C++', 'MQL5'],
    fullDescription:
      "Projet personnel de développement d'un système de trading algorithmique automatisé sur la plateforme MetaTrader 5, spécialisé dans le trading de l'or (XAUUSD) et des paires de devises Forex. J'ai implémenté des stratégies quantitatives sophistiquées basées sur l'analyse technique avancée, incluant des indicateurs personnalisés et un système de détection de patterns de prix. Le bot a été rigoureusement testé avec un backtesting sur plus d'un an de données historiques de marché, atteignant un Profit Factor de 1.45, ce qui démontre une performance significativement supérieure à la moyenne du marché. J'ai développé des algorithmes d'optimisation pour la prise de décision automatisée et mis en place un système robuste de gestion du risque avec stop-loss dynamiques et sizing de positions adaptatif. Le projet combine Python pour l'analyse de données et le développement de stratégies, C++ pour les composants critiques nécessitant des performances optimales, et MQL5 pour l'intégration native avec MetaTrader 5. Ce projet démontre mes compétences en finance quantitative, algorithmes de trading, optimisation de performance, analyse de données financières et développement de systèmes critiques en temps réel. Le développement est continu avec des améliorations régulières des stratégies et l'ajout de nouveaux instruments financiers.",
    image: '/path/to/project3-screenshot.jpg',
  },
  {
    id: 'mean-multiplayer-game',
    title: 'Jeu multi-joueurs en ligne',
    subtitle: 'Application de jeu en ligne temps réel avec stack MEAN (Projet en construction)',
    emoji: '🎮',
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Socket.io'],
    fullDescription:
      "Projet personnel de développement d'une application de jeu en ligne temps réel utilisant le stack MEAN (MongoDB, Express.js, Angular, Node.js). Ce projet implémente un système de jeu collaboratif en temps réel avec gestion de sessions utilisateur, synchronisation des données en temps réel via Socket.io et une interface utilisateur moderne basée sur Angular. Le backend est construit avec Node.js et Express.js pour gérer les requêtes HTTP et les communications WebSocket. La base de données MongoDB stocke les données des utilisateurs et du jeu. Ce projet démontre mes compétences en développement full-stack, architecture logicielle, gestion de projets et intégration de technologies modernes pour créer des applications web interactives. Le projet intègre un pipeline CI/CD sur GitLab pour automatiser les tests, le build et le déploiement de l'application.",
    image: '/path/to/project3-screenshot.jpg',
    githubLink:
      'https://gitlab.com/polytechnique-montr-al/log2995/20261/equipe-110/LOG2995-110',
  },
]
