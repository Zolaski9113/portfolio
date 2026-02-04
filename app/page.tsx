'use client'

export default function Hero() {
  return (
    <main style={{
      height: 'calc(100vh - 75px)', // Ajustez selon la hauteur de votre header et footer
      // Ou utilisez : height: 'calc(100vh - var(--header-height) - var(--footer-height))'
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      
      {/* Background divisé en 4 sections avec photos de projets */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
      }}>
        {/* Projet 1 - Top Left */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(30, 41, 59, 0.8))',
        }}>
          <img src="/portfolio/background-images/image1.jpg" alt="Projet 1" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        </div>

        {/* Projet 2 - Top Right */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(30, 41, 59, 0.8))',
        }}>
          <img src="/portfolio/background-images/image2.jpg" alt="Projet 2" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        </div>

        {/* Projet 3 - Bottom Left */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(30, 41, 59, 0.8))',
        }}>
          <img src="/portfolio/background-images/image3.jpg" alt="Projet 3" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        </div>

        {/* Projet 4 - Bottom Right */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(30, 41, 59, 0.8))',
        }}>
          <img src="/portfolio/background-images/image4.jpg" alt="Projet 4" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        </div>
      </div>

      {/* Overlay gradient central pour focus */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.95) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        textAlign: 'center',
        padding: '0 24px',
      }}>
        
        {/* Photo de profil dans une bulle */}
        <div style={{
          position: 'relative',
          width: '200px',
          height: '200px',
        }}>
          {/* Anneaux de pulse */}
          <div style={{
            position: 'absolute',
            inset: '-12px',
            borderRadius: '50%',
            border: '3px solid rgba(59, 130, 246, 0.4)',
            animation: 'pulse 2.5s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute',
            inset: '-24px',
            borderRadius: '50%',
            border: '2px solid rgba(168, 85, 247, 0.3)',
            animation: 'pulse 2.5s ease-in-out infinite',
            animationDelay: '0.3s',
          }} />
          <div style={{
            position: 'absolute',
            inset: '-36px',
            borderRadius: '50%',
            border: '2px solid rgba(59, 130, 246, 0.2)',
            animation: 'pulse 2.5s ease-in-out infinite',
            animationDelay: '0.6s',
          }} />
          
          {/* Bulle avec gradient border */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            padding: '6px',
            background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247), rgb(236, 72, 153))',
            boxShadow: '0 25px 70px rgba(59, 130, 246, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
            animation: 'float 6s ease-in-out infinite',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'rgb(30, 41, 59)',
              border: '4px solid rgb(15, 23, 42)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px',
            }}>
              <img src="/portfolio/profile-photo.jpg" alt="Photo de profil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Effet de glow derrière */}
          <div style={{
            position: 'absolute',
            inset: '-40px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            zIndex: -1,
            animation: 'glow 3s ease-in-out infinite',
          }} />
        </div>

        {/* Texte */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '800px',
        }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(148, 163, 184) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
            lineHeight: '1.2',
            textShadow: '0 0 60px rgba(96, 165, 250, 0.5)',
          }}>
            Bienvenue sur mon portfolio
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: 'rgb(148, 163, 184)',
            margin: 0,
            lineHeight: '1.6',
            fontWeight: '300',
          }}>
            Découvrez mes projets, compétences et plus encore!
          </p>
        </div>
      </div>

      {/* Styles pour animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.1);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
          }
          25% { 
            transform: translateY(-10px) rotate(2deg);
          }
          50% { 
            transform: translateY(-15px) rotate(0deg);
          }
          75% { 
            transform: translateY(-10px) rotate(-2deg);
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            opacity: 0.5;
          }
          50% { 
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-10px);
          }
        }
        
        @media (max-width: 768px) {
          h1 { 
            font-size: 36px !important; 
          }
          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </main>
  )
}