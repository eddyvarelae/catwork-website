import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import type { HeroSectionProps } from '../types/components'

/**
 * Full-screen hero section with gradient overlay, large typography,
 * and a subtle parallax effect on scroll.
 *
 * Uses a warm beige-to-terracotta gradient as placeholder background
 * when no real image is available yet.
 */
export default function HeroSection({
  imageUrl,
  title,
  subtitle,
  overlayOpacity = 0.3,
  height = 'full',
}: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax: image moves at 70% of scroll speed (30% slower than content)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const heightClass = height === 'full' ? 'h-screen' : 'h-[50vh]'
  const hasImage = imageUrl && imageUrl.trim().length > 0

  return (
    <section
      ref={ref}
      className={`relative ${heightClass} w-full overflow-hidden`}
      aria-label={title}
    >
      {/* Background: image with parallax or gradient placeholder */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={prefersReduced ? undefined : { y }}
      >
        {hasImage ? (
          <img
            src={imageUrl}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="eager"
          />
        ) : (
          <div
            className="h-full w-full bg-gradient-to-br from-beige-200 via-beige-400 to-terracotta"
            aria-hidden="true"
          />
        )}
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(61,50,41,${overlayOpacity}), rgba(61,50,41,${overlayOpacity * 1.5}))`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-5xl text-cream md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl font-body text-lg text-cream/90 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
