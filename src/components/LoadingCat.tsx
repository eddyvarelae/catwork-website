import { motion } from 'framer-motion'

/**
 * Cat-themed loading animation.
 * Displays an animated cat silhouette (SVG) with a pulsing body
 * and wagging tail, plus "Cargando..." text below.
 * Uses the warm beige brand colors.
 */
export default function LoadingCat() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cream"
      role="status"
      aria-label="Cargando contenido"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-terracotta"
      >
        {/* Left ear */}
        <polygon points="25,35 35,10 45,35" fill="currentColor" />
        {/* Right ear */}
        <polygon points="55,35 65,10 75,35" fill="currentColor" />
        {/* Head */}
        <motion.circle
          cx="50"
          cy="45"
          r="22"
          fill="currentColor"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Left eye */}
        <circle cx="42" cy="42" r="3" fill="#FDFBF7" />
        {/* Right eye */}
        <circle cx="58" cy="42" r="3" fill="#FDFBF7" />
        {/* Nose */}
        <polygon points="48,49 52,49 50,52" fill="#FDFBF7" />
        {/* Body */}
        <motion.ellipse
          cx="50"
          cy="75"
          rx="18"
          ry="14"
          fill="currentColor"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
        />
        {/* Tail — wagging animation */}
        <motion.path
          d="M68,75 Q85,65 80,50"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          animate={{ d: ['M68,75 Q85,65 80,50', 'M68,75 Q90,75 85,55', 'M68,75 Q85,65 80,50'] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      <p className="mt-4 font-body text-lg text-terracotta animate-pulse">
        Cargando...
      </p>
    </div>
  )
}
