import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="h-screen flex flex-col overflow-hidden bg-black text-white">
        {/* Navbar fixe en haut */}
        <nav className="bg-gray-900 min-h-[60px] flex items-center gap-8 justify-center border-b border-gray-800">
          <a href="/" className="hover:text-blue-500 transition">Accueil</a>
          <a href="/about" className="hover:text-blue-500 transition">À propos</a>
          <a href="/projects" className="hover:text-blue-500 transition">Projets</a>
          <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>
        
        {/* Contenu qui prend l'espace restant */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
        
        {/* Footer fixe en bas */}
        <footer className="bg-gray-900 p-4 text-center border-t border-gray-800">
          <p className="text-gray-400 text-sm">© 2026 Portfolio de Wajdi Gherairi</p>
        </footer>
      </body>
    </html>
  )
}