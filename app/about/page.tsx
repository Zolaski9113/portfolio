'use client'

import { useState, useEffect } from 'react'

export default function About() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  
  const steps = [
    {
      year: "2017",
      title: "Début du secondaire",
      subtitle: "Collège Jean-de-Brébeuf",
    },
    {
      year: "2022",
      title: "Diplôme d'études secondaires (DES)",
      subtitle: "Collège Jean-de-Brébeuf",
    },
    {
      year: "2022",
      title: "Début du cégep en science pures et appliquées",
      subtitle: "Collège Jean-de-Brébeuf",
    },
    {
      year: "2023",
      title: "Début emploi associé aux ventes - Linen Chest",
      subtitle: "Collège Jean-de-Brébeuf",
    },
    {
      year: "2023",
      title: "Stage de 2 jours en AI chez MILA",
      subtitle: "MILA - Institut québécois d'intelligence artificielle",
    },        
    {
      year: "2024",
      title: "Diplôme d'études collégiales (DEC)",
      subtitle: "Collège Jean-de-Brébeuf",
    },
    {
      year: "2024",
      title: "Début du bac en génie informatique",
      subtitle: "Polytechnique Montréal",
    },
    {
      year: "2025",
      title: "Fin emploi associé aux ventes - Linen Chest",
      subtitle: "Linen Chest - Boisbriand",
    },
    {
      year: "2025",
      title: "Début emploi associé aux ventes - Point Zero",
      subtitle: "Point Zero - Mirabel",
    },
  ]

  // Animation d'apparition progressive
  useEffect(() => {
    steps.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, index])
      }, index * 200)
    })
  }, [])

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)',
      color: 'white',
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Effets de fond améliorés avec animation de flottement */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite reverse',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '20%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '2s',
        }} />
      </div>

      {/* Contenu */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Titre principal avec animation de gradient */}
        <h1 style={{
          fontSize: '56px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, rgb(96, 165, 250) 0%, rgb(167, 139, 250) 50%, rgb(96, 165, 250) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 4s ease infinite',
          textShadow: '0 0 40px rgba(96, 165, 250, 0.3)',
        }}>
          À propos de moi
        </h1>
        
        <p style={{
          textAlign: 'center',
          color: 'rgb(148, 163, 184)',
          marginBottom: '128px',
          fontSize: '16px',
          letterSpacing: '0.5px',
        }}>
          Mon parcours académique et professionnel jusqu'à présent
        </p>

        {/* Timeline */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <section style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
          }}>
            
            {/* Ligne centrale avec gradient et effet de glow */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(59, 130, 246, 0.2) 100%)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 0%, rgba(96, 165, 250, 0.6) 50%, transparent 100%)',
                animation: 'shimmer 3s ease-in-out infinite',
              }} />
            </div>

            {/* Steps */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '128px',
              padding: '48px 0',
              marginTop: '32px',
            }}>
              {steps.map((step, index) => {
                const isVisible = visibleSteps.includes(index)
                const isLeft = index % 2 === 0
                
                return (
                  <div
                    key={index}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: isLeft ? 'flex-start' : 'flex-end',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${index * 0.15}s`,
                    }}
                  >
                    {/* Point central avec effet de pulse amélioré */}
                    <div style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 20,
                    }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(147, 197, 253) 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 0 0 4px rgba(15, 23, 42, 1), 0 0 20px rgba(59, 130, 246, 0.8)',
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transitionDelay: `${index * 0.15 + 0.3}s`,
                      }}>
                        <div style={{
                          position: 'absolute',
                          inset: '-8px',
                          background: 'rgba(59, 130, 246, 0.4)',
                          borderRadius: '50%',
                          animation: 'pulseRing 2s ease-out infinite',
                          animationDelay: `${index * 0.5}s`,
                        }} />
                      </div>
                      
                      {/* Ligne horizontale vers la carte */}
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        [isLeft ? 'left' : 'right']: '20px',
                        width: '60px',
                        height: '2px',
                        background: `linear-gradient(to ${isLeft ? 'right' : 'left'}, rgba(59, 130, 246, 0.6), transparent)`,
                        transform: 'translateY(-50%)',
                      }} />
                    </div>

                    {/* Carte avec design glassmorphism */}
                    <div style={{
                      width: 'calc(50% - 80px)',
                      [isLeft ? 'marginRight' : 'marginLeft']: '16px',
                    }}>
                      <div 
                        className="timeline-card"
                        style={{
                          position: 'relative',
                          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(59, 130, 246, 0.3)',
                          borderRadius: '20px',
                          padding: '32px',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'default',
                        }}
                      >
                        {/* Effet de brillance au survol */}
                        <div 
                          className="card-shine"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(168, 85, 247, 0) 100%)',
                            borderRadius: '20px',
                            opacity: 0,
                            transition: 'opacity 0.4s ease',
                            pointerEvents: 'none',
                          }}
                        />
                        
                        <div style={{ position: 'relative', zIndex: 10 }}>
                          {/* Badge année avec effet néon */}
                          <div style={{
                            display: 'inline-block',
                            marginBottom: '16px',
                          }}>
                            <span style={{
                              padding: '8px 20px',
                              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
                              border: '1px solid rgba(96, 165, 250, 0.4)',
                              borderRadius: '50px',
                              color: 'rgb(147, 197, 253)',
                              fontSize: '14px',
                              fontWeight: 'bold',
                              backdropFilter: 'blur(10px)',
                              letterSpacing: '1px',
                            }}>
                              {step.year}
                            </span>
                          </div>
                          
                          {/* Titre */}
                          <h3 
                            className="card-title"
                            style={{
                              fontSize: '22px',
                              fontWeight: 'bold',
                              marginBottom: '12px',
                              color: 'rgb(226, 232, 240)',
                              transition: 'color 0.3s ease',
                              lineHeight: '1.4',
                            }}
                          >
                            {step.title}
                          </h3>
                          
                          {/* Sous-titre avec icône */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'rgb(148, 163, 184)',
                          }}>
                            <svg style={{ width: '18px', height: '18px', color: 'rgb(96, 165, 250)', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <p style={{
                              fontSize: '15px',
                              margin: 0,
                              lineHeight: '1.5',
                            }}>
                              {step.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Effet de coin décoratif */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100px',
                          height: '100px',
                          background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                          borderRadius: '0 20px 0 0',
                          pointerEvents: 'none',
                        }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </section>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
        
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        .timeline-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(96, 165, 250, 0.6);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }
        
        .timeline-card:hover .card-shine {
          opacity: 1 !important;
        }
        
        .timeline-card:hover .card-title {
          color: rgb(147, 197, 253) !important;
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 36px !important; }
          .timeline-card { width: 100% !important; }
        }
      `}</style>
    </main>
  )
}