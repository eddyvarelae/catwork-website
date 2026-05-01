import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const prefersReduced = usePrefersReducedMotion()

  const variants = prefersReduced
    ? {
        initial: {},
        animate: {},
        exit: {},
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }

  const transition = prefersReduced
    ? { duration: 0 }
    : { duration: 0.3, ease: 'easeInOut' as const }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
