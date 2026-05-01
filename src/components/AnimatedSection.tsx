import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import type { AnimatedSectionProps } from '../types/components'

/**
 * Animation variants keyed by animation type.
 * Each defines the hidden (initial) and visible (animate) states.
 * Transition durations are between 300ms and 800ms (default 500ms).
 */
const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  parallax: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
} as const

const DEFAULT_DURATION = 0.5 // 500ms — within the 300–800ms range

export default function AnimatedSection({
  children,
  animation = 'fadeIn',
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const prefersReduced = usePrefersReducedMotion()

  // When reduced motion is preferred, show content immediately
  if (prefersReduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  const variants = animationVariants[animation]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: DEFAULT_DURATION,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
