'use client'

import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  // Couleurs pour chaque technologie
  const techColors: Record<string, string> = {
    // Langages
    'JavaScript': '#F7DF1E',
    'TypeScript': '#3178C6',
    'Python': '#3776AB',
    'Java': '#007396',
    'C++': '#00599C',
    'C#': '#239120',
    'Go': '#00ADD8',
    'Rust': '#CE422B',
    'PHP': '#777BB4',
    'Ruby': '#CC342D',
    
    // Frontend
    'React': '#61DAFB',
    'Next.js': '#000000',
    'Vue': '#4FC08D',
    'Angular': '#DD0031',
    'Svelte': '#FF3E00',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'Tailwind': '#06B6D4',
    
    // Backend
    'Node.js': '#339933',
    'Express': '#000000',
    'Django': '#092E20',
    'Flask': '#000000',
    'Spring': '#6DB33F',
    'FastAPI': '#009688',
    
    // Bases de données
    'MongoDB': '#47A248',
    'PostgreSQL': '#4169E1',
    'MySQL': '#4479A1',
    'Redis': '#DC382D',
    'Firebase': '#FFCA28',
    'Supabase': '#3ECF8E',
    
    // Autres
    'Docker': '#2496ED',
    'Git': '#F05032',
    'AWS': '#FF9900',
    'GraphQL': '#E10098',
  }

  const projects = [
    {
      title: "Portfolio",
      subtitle: "Le portfolio lui-même!",
      emoji: "🚀",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind"],
      fullDescription: "Mon portfolio personnel est un site web moderne et interactif développé avec Next.js 14 et TypeScript. Il présente mes projets, mon parcours académique et mes compétences techniques de manière élégante et professionnelle. Le site utilise des animations fluides, des effets de glassmorphism et une palette de couleurs moderne avec des dégradés bleu-violet. J'ai intégré une police pixelisée \"Press Start 2P\" pour un style unique et mémorable. Le portfolio est entièrement responsive et optimisé pour les performances grâce aux fonctionnalités de Next.js comme le Server-Side Rendering et l'optimisation d'images. Chaque section (Accueil, À propos, Projets, Contact) a été soigneusement conçue avec des micro-interactions et des transitions pour offrir une expérience utilisateur exceptionnelle.",
      image: "/path/to/project1-screenshot.jpg",
      link: "https://projet1.com",
      githubLink: "https://github.com/username/projet1",
    },
    {
      title: "Robot",
      subtitle: "Robot autonome Pathfinding",
      emoji: "💻",
      technologies: ["C++", "Git", "ATmega324PA"],
      fullDescription: "Projet académique de robotique autonome développé dans le cadre du cours INF1900 à Polytechnique Montréal (Automne 2024). J'ai programmé un robot autonome sur microcontrôleur ATmega324PA en C++ bare-metal, sans framework ni bibliothèques externes. Le robot utilise un algorithme de pathfinding avec graphe pondéré pour calculer et suivre le chemin le plus court sur une carte prédéfinie. J'ai développé plusieurs modules intégrés : un système de suivi de ligne utilisant 5 capteurs infrarouges, un système de détection d'obstacles IR, un contrôle précis des moteurs via PWM, et une gestion de la mémoire EEPROM pour sauvegarder les données. Le robot est capable de navigation autonome intelligente avec détection automatique de sa position et orientation aux quatre coins du parcours. J'ai implémenté la gestion complète des interruptions, timers, et communication RS-232 pour le debugging. Le projet a été réalisé en équipe avec Git pour le contrôle de version, suivant un cycle complet de développement incluant conception, programmation, tests et débogage. J'ai également utilisé le simulateur SimulIDE pour valider le code avant le déploiement sur le robot physique, assurant ainsi la fiabilité du système embarqué.",
      image: "/path/to/project2-screenshot.jpg",
      githubLink: "https://github.com/username/projet2",
    },
    {
      title: "Promo-option",
      subtitle: "Site vitrine Promo-Option",
      emoji: "🎨",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      fullDescription: "Site web vitrine statique développé pour Promo-Option, une entreprise spécialisée dans la broderie, l'impression et les produits textiles personnalisés. Le site présente les services offerts par l'entreprise, met en valeur leur portfolio de réalisations et permet aux clients potentiels de découvrir leurs capacités. J'ai intégré un formulaire de contact fonctionnel qui envoie des messages lorsqu'un client est intéressé par un produit ou service, facilitant ainsi la communication directe avec l'entreprise. Le design est moderne, professionnel et entièrement responsive, offrant une expérience optimale sur tous les appareils. Le site met l'accent sur la présentation visuelle des produits et services avec une navigation intuitive et des sections bien organisées. Ce projet démontre mes compétences en développement frontend, création d'interfaces web professionnelles et intégration de systèmes de messagerie pour sites vitrines.",
      image: "/path/to/project3-screenshot.jpg",
      link: "https://promo-option.com/",
      githubLink: "https://github.com/Zolaski9113/Promo-Option",
    },
    {
      title: "PuckPredictAI",
      subtitle: "Application d'assistance pour joueurs de hockey fantasy",
      emoji: "🏒",
      technologies: ["Python", "Streamlit", "Gemini API", "MongoDB", "Pandas"],
      fullDescription: "Application d'assistance pour joueurs de hockey fantasy développée lors du hackathon ConUHacks 2026. PuckPredictAI transforme des données brutes complexes en recommandations simples et précises pour aider les joueurs à prendre les meilleures décisions possibles. L'application intègre un chatbot alimenté par l'API Gemini qui peut répondre à des questions sur les joueurs, analyser les statistiques et fournir des conseils stratégiques. Le système peut gérer automatiquement une équipe : placer des joueurs sur le banc, gérer les joueurs blessés et optimiser les alignements. J'ai utilisé Python avec Pandas pour le traitement, la normalisation et le nettoyage des données provenant de l'API Yahoo Fantasy. Un modèle de machine learning a été développé et entraîné pour générer des prédictions précises sur les performances des joueurs. L'interface a été construite avec Streamlit pour offrir une expérience utilisateur rapide et intuitive. Les défis majeurs incluaient la connexion de multiples APIs (Gemini et Yahoo Fantasy), le nettoyage de données désordonnées, et le développement d'un modèle ML performant en temps limité. Ce projet démontre mes compétences en machine learning, intégration d'APIs complexes, traitement de données à grande échelle et développement d'applications IA. Prochaines étapes : ajout d'un algorithme pour prédire les performances des gardiens de but et déploiement de l'application.",
      image: "/path/to/project3-screenshot.jpg",
      link: "https://promo-option.com/",
      githubLink: "https://github.com/Zolaski9113/hackathon",
    },
    {
      title: "Bot de Trading Algorithmique",
      subtitle: "Système de trading automatisé haute performance pour Forex et Or",
      emoji: "📈",
      technologies: ["Python", "C++", "MQL5"],
      fullDescription: "Projet personnel de développement d'un système de trading algorithmique automatisé sur la plateforme MetaTrader 5, spécialisé dans le trading de l'or (XAUUSD) et des paires de devises Forex. J'ai implémenté des stratégies quantitatives sophistiquées basées sur l'analyse technique avancée, incluant des indicateurs personnalisés et un système de détection de patterns de prix. Le bot a été rigoureusement testé avec un backtesting sur plus d'un an de données historiques de marché, atteignant un Profit Factor de 1.45, ce qui démontre une performance significativement supérieure à la moyenne du marché. J'ai développé des algorithmes d'optimisation pour la prise de décision automatisée et mis en place un système robuste de gestion du risque avec stop-loss dynamiques et sizing de positions adaptatif. Le projet combine Python pour l'analyse de données et le développement de stratégies, C++ pour les composants critiques nécessitant des performances optimales, et MQL5 pour l'intégration native avec MetaTrader 5. Ce projet démontre mes compétences en finance quantitative, algorithmes de trading, optimisation de performance, analyse de données financières et développement de systèmes critiques en temps réel. Le développement est continu avec des améliorations régulières des stratégies et l'ajout de nouveaux instruments financiers.",
      image: "/path/to/project3-screenshot.jpg",
    },
    {
      title: "Jeu multi-joueurs en ligne",
      subtitle: "Application de jeu en ligne temps réel avec stack MEAN (Projet en construction)",
      emoji: "🎮",
      technologies: ["Angular", "Node.js", "Express", "MongoDB", "TypeScript", "Socket.io"],
      fullDescription: "Projet personnel de développement d'une application de jeu en ligne temps réel utilisant le stack MEAN (MongoDB, Express.js, Angular, Node.js). Ce projet implémente un système de jeu collaboratif en temps réel avec gestion de sessions utilisateur, synchronisation des données en temps réel via Socket.io et une interface utilisateur moderne basée sur Angular. Le backend est construit avec Node.js et Express.js pour gérer les requêtes HTTP et les communications WebSocket. La base de données MongoDB stocke les données des utilisateurs et du jeu. Ce projet démontre mes compétences en développement full-stack, architecture logicielle, gestion de projets et intégration de technologies modernes pour créer des applications web interactives.",
      image: "/path/to/project3-screenshot.jpg",
            link: "https://promo-option.com/",
      githubLink: "https://github.com/Zolaski9113/hackathon",
    },
  ]

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, rgb(2, 6, 23), rgb(30, 58, 138), rgb(15, 23, 42))',
      color: 'white',
      padding: '80px 48px',
    }}>
      
      {/* Font pixelisée */}
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      
      {/* Effets de fond */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: '160px',
          left: '80px',
          width: '384px',
          height: '384px',
          background: 'rgba(168, 85, 247, 0.1)',
          borderRadius: '9999px',
          filter: 'blur(96px)',
          animation: 'pulse 3s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '160px',
          right: '80px',
          width: '384px',
          height: '384px',
          background: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '9999px',
          filter: 'blur(96px)',
          animation: 'pulse 3s ease-in-out infinite',
          animationDelay: '1.5s',
        }} />
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        {/* Titre */}
        <h1 style={{
          fontFamily: '"Press Start 2P", cursive',
          fontSize: '48px',
          fontWeight: 'normal',
          marginBottom: '32px',
          background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(192, 132, 252), rgb(96, 165, 250))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.5',
        }}>
          Mes Projets
        </h1>
        
        <p style={{
          fontFamily: '"Press Start 2P", cursive',
          fontSize: '14px',
          color: 'rgb(209, 213, 219)',
          marginBottom: '64px',
          maxWidth: '768px',
          lineHeight: '1.8',
        }}>
          J'adore créer des choses, et je travaille toujours sur quelque chose de nouveau!
        </p>

        {/* Grille de projets */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className="project-card"
              style={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                border: '3px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'all 0.3s ease',
                display: 'block',
                minHeight: '300px',
                cursor: 'pointer',
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
                gap: '20px',
              }}>
                <div className="project-emoji" style={{
                  fontSize: '72px',
                  transition: 'transform 0.3s ease',
                  marginBottom: '8px',
                }}>
                  {project.emoji}
                </div>

                <h3 className="project-title" style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: '18px',
                  fontWeight: 'normal',
                  color: 'white',
                  transition: 'color 0.3s ease',
                  lineHeight: '1.6',
                  marginBottom: '8px',
                }}>
                  {project.title}
                </h3>

                <p className="project-subtitle" style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: '12px',
                  color: 'rgb(156, 163, 175)',
                  transition: 'color 0.3s ease',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}>
                  {project.subtitle}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  justifyContent: 'center',
                  marginTop: '8px',
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag"
                      style={{
                        fontFamily: '"Press Start 2P", cursive',
                        fontSize: '10px',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        backgroundColor: techColors[tech] || '#6B7280',
                        color: ['JavaScript', 'Firebase', 'Tailwind', 'React', 'Vue', 'Supabase'].includes(tech) ? '#000' : '#fff',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        transition: 'transform 0.2s ease',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-shine" style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '16px',
                background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0), rgba(168, 85, 247, 0), rgba(59, 130, 246, 0))',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
              }} />
              
              <div className="project-arrow" style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}>
                <svg style={{ width: '24px', height: '24px', color: 'rgb(96, 165, 250)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%)',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              borderRadius: '24px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              animation: 'slideUp 0.3s ease',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(239, 68, 68, 0.2)',
                color: 'rgb(248, 113, 113)',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                zIndex: 10,
              }}
              className="close-button"
            >
              ×
            </button>

            {/* Image du projet */}
            <div style={{
              width: '100%',
              height: '400px',
              overflow: 'hidden',
              borderRadius: '24px 24px 0 0',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Remplace par <img src={projects[selectedProject].image} alt={projects[selectedProject].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
              <div style={{
                fontSize: '120px',
              }}>
                {projects[selectedProject].emoji}
              </div>
              
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100px',
                background: 'linear-gradient(to top, rgb(15, 23, 42), transparent)',
              }} />
            </div>

            {/* Contenu */}
            <div style={{
              padding: '40px',
            }}>
              {/* Titre */}
              <h2 style={{
                fontFamily: '"Press Start 2P", cursive',
                fontSize: '24px',
                fontWeight: 'normal',
                color: 'white',
                marginBottom: '16px',
                lineHeight: '1.6',
              }}>
                {projects[selectedProject].title}
              </h2>

              {/* Technologies */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px',
              }}>
                {projects[selectedProject].technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      fontFamily: '"Press Start 2P", cursive',
                      fontSize: '10px',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      backgroundColor: techColors[tech] || '#6B7280',
                      color: ['JavaScript', 'Firebase', 'Tailwind', 'React', 'Vue', 'Supabase'].includes(tech) ? '#000' : '#fff',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description complète */}
              <div style={{
                marginBottom: '32px',
              }}>
                <h3 style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: '14px',
                  color: 'rgb(147, 197, 253)',
                  marginBottom: '16px',
                  lineHeight: '1.6',
                }}>
                  Description
                </h3>
                <p style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: '12px',
                  color: 'rgb(203, 213, 225)',
                  lineHeight: '1.8',
                  marginBottom: '0',
                }}>
                  {projects[selectedProject].fullDescription}
                </p>
              </div>

              {/* Liens */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
              }}>
                {/* Lien vers le projet - n'affiche que si le lien existe */}
                {projects[selectedProject].link && (
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(147, 51, 234))',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      fontFamily: '"Press Start 2P", cursive',
                      fontSize: '10px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    className="project-link-button"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Voir le projet
                  </a>
                )}

                {/* Lien GitHub - n'affiche que si le lien existe */}
                {projects[selectedProject].githubLink && (
                  <a
                    href={projects[selectedProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      color: 'white',
                      fontFamily: '"Press Start 2P", cursive',
                      fontSize: '10px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    className="github-link-button"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-card:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(96, 165, 250, 0.6) !important;
          transform: scale(1.05);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.3);
        }
        
        .project-card:hover .project-emoji {
          transform: scale(1.15) rotate(8deg);
        }
        
        .project-card:hover .project-title {
          color: rgb(147, 197, 253) !important;
        }
        
        .project-card:hover .project-subtitle {
          color: rgb(209, 213, 219) !important;
        }
        
        .project-card:hover .project-shine {
          opacity: 0.2 !important;
        }
        
        .project-card:hover .project-arrow {
          opacity: 1 !important;
        }
        
        .tech-tag:hover {
          transform: scale(1.1);
        }
        
        .close-button:hover {
          background: rgba(239, 68, 68, 0.4) !important;
          transform: scale(1.1);
        }
        
        .project-link-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }
        
        .github-link-button:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  )
}