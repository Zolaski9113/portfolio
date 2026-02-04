'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    telephone: '',
    courriel: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi (remplace par ton API ou service d'email)
    setTimeout(() => {
      console.log('Formulaire soumis:', formData)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ prenom: '', nom: '', telephone: '', courriel: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, rgb(0, 0, 0), rgb(17, 24, 39), rgb(30, 58, 138))',
      color: 'white',
      padding: '64px 32px',
    }}>
      
      {/* Titre principal */}
      <div style={{
        textAlign: 'center',
        marginBottom: '80px',
      }}>
        <h1 style={{
          fontSize: '60px',
          fontWeight: 'bold',
          marginBottom: '16px',
          background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(192, 132, 252))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Contact
        </h1>
        <p style={{
          fontSize: '20px',
          color: 'rgb(156, 163, 175)',
        }}>
          Contactez-moi pour discuter de projets !
        </p>
      </div>

      {/* Container principal */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        
        {/* Section Infos - Gauche */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}>
          <div>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '24px',
              color: 'white',
            }}>
              Mes Informations
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'rgb(156, 163, 175)',
              lineHeight: '1.6',
              marginBottom: '32px',
            }}>
              N'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités et collaborations.
            </p>
          </div>

          {/* Liste des infos de contact */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            {/* Email */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
            }}
            className="info-card"
            >
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="24" height="24" fill="none" stroke="rgb(96, 165, 250)" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgb(156, 163, 175)', marginBottom: '4px' }}>
                  Email
                </div>
                <a href="mailto:wajdi.gherairi1@gmail.com" style={{
                  fontSize: '16px',
                  color: 'white',
                  textDecoration: 'none',
                }}>
                  wajdi.gherairi1@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
            }}
            className="info-card"
            >
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="24" height="24" fill="rgb(96, 165, 250)" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgb(156, 163, 175)', marginBottom: '4px' }}>
                  GitHub
                </div>
                <a href="https://github.com/Zolaski9113" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '16px',
                  color: 'white',
                  textDecoration: 'none',
                }}>
                  github.com/Zolaski9113
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
            }}
            className="info-card"
            >
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="24" height="24" fill="rgb(96, 165, 250)" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgb(156, 163, 175)', marginBottom: '4px' }}>
                  LinkedIn
                </div>
                <a href="https://www.linkedin.com/in/wajdi-gherairi/" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '16px',
                  color: 'white',
                  textDecoration: 'none',
                }}>
                  linkedin.com/in/wajdi-gherairi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire - Droite */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            color: 'white',
          }}>
            Envoyez-moi un message
          </h2>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            {/* Prénom et Nom sur la même ligne */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              {/* Prénom */}
              <div>
                <label htmlFor="prenom" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: 'rgb(203, 213, 225)',
                }}>
                  Prénom <span style={{ color: 'rgb(239, 68, 68)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  value={formData.prenom}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  className="form-input"
                />
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="nom" style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: 'rgb(203, 213, 225)',
                }}>
                  Nom <span style={{ color: 'rgb(239, 68, 68)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  className="form-input"
                />
              </div>
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="telephone" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px',
                color: 'rgb(203, 213, 225)',
              }}>
                Numéro de téléphone <span style={{ color: 'rgb(239, 68, 68)' }}>*</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                required
                value={formData.telephone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(15, 23, 42, 0.5)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="form-input"
              />
            </div>

            {/* Courriel */}
            <div>
              <label htmlFor="courriel" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px',
                color: 'rgb(203, 213, 225)',
              }}>
                Courriel <span style={{ color: 'rgb(239, 68, 68)' }}>*</span>
              </label>
              <input
                type="email"
                id="courriel"
                name="courriel"
                required
                value={formData.courriel}
                onChange={handleChange}
                placeholder="exemple@email.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(15, 23, 42, 0.5)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="form-input"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px',
                color: 'rgb(203, 213, 225)',
              }}>
                Message <span style={{ color: 'rgb(239, 68, 68)' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Votre message..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(15, 23, 42, 0.5)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                }}
                className="form-input"
              />
            </div>

            {/* Bouton Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '16px 32px',
                background: isSubmitting 
                  ? 'rgba(59, 130, 246, 0.5)' 
                  : 'linear-gradient(135deg, rgb(59, 130, 246), rgb(147, 51, 234))',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '8px',
              }}
              className="submit-button"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Ce service est en cours de maintenance !'}
            </button>

            {/* Message de succès */}
            {submitStatus === 'success' && (
              <div style={{
                padding: '16px',
                background: 'rgba(34, 197, 94, 0.2)',
                border: '1px solid rgba(34, 197, 94, 0.5)',
                borderRadius: '12px',
                color: 'rgb(134, 239, 172)',
                textAlign: 'center',
                fontSize: '14px',
              }}>
                Message envoyé avec succès! Je vous répondrai bientôt.
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .info-card:hover {
          background: rgba(30, 41, 59, 0.8) !important;
          border-color: rgba(96, 165, 250, 0.6) !important;
          transform: translateX(8px);
        }
        
        .form-input:focus {
          border-color: rgba(96, 165, 250, 0.6) !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .submit-button:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }
        
        @media (max-width: 768px) {
          main > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </main>
  )
}