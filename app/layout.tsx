'use client';

import './globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ajuste si ta home est /portfolio au lieu de /
  const isHome = pathname === '/portfolio' || pathname === '/' || pathname === '/contact';

  return (
    <html lang="fr">
      <body className="h-screen flex flex-col bg-black text-white">
        
        {/* Navbar fixe en haut */}
        <nav className="bg-gray-900 min-h-[60px] flex items-center gap-8 justify-center border-b border-gray-800">
          <a href="/portfolio" className="hover:text-blue-500 transition">Accueil</a>
          <a href="/portfolio/about" className="hover:text-blue-500 transition">À propos</a>
          <a href="/portfolio/projects" className="hover:text-blue-500 transition">Projets</a>
          <a href="/portfolio/contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>

        {/* Contenu central */}
        <div
          className={`flex-1 ${
            isHome ? 'overflow-hidden' : 'overflow-auto'
          }`}
        >
          {children}
        </div>

        {/* Footer fixe en bas */}
        <footer className="bg-gray-900 p-4 text-center border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2026 Portfolio de Wajdi Gherairi
          </p>
        </footer>

      </body>
    </html>
  );
}
