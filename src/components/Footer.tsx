import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-beige-200 border-t border-beige-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="font-heading text-2xl text-charcoal hover:text-terracotta transition-colors"
            >
              Catwork
            </Link>
            <p className="mt-2 font-body text-sm text-charcoal/70">
              Coworking & Cat Café — Hermosillo, México
            </p>
          </div>

          {/* Pet policy notice */}
          <div className="text-center">
            <p className="font-body text-sm text-charcoal/80">
              🐱 Solo gatitos — no se admiten perros
            </p>
            <Link
              to="/politica-mascotas"
              className="font-body text-xs text-terracotta hover:underline"
            >
              Ver política completa
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/catwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-charcoal hover:text-terracotta transition-colors"
              aria-label="Visitar Instagram de Catwork"
            >
              <InstagramIcon />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://tiktok.com/@catwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-charcoal hover:text-terracotta transition-colors"
              aria-label="Visitar TikTok de Catwork"
            >
              <TikTokIcon />
              <span className="hidden sm:inline">TikTok</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-beige-300 pt-6 text-center">
          <p className="font-body text-xs text-charcoal/60">
            © {new Date().getFullYear()} Catwork. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.83 4.83 0 0 1-1-.15z" />
    </svg>
  )
}
