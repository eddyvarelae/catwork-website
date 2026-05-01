import type { Cat } from '../types/index'

interface AdoptionBadgeProps {
  adoptionStatus: Cat['adoptionStatus']
}

/**
 * Shows a green/sage "Disponible para adopción" badge
 * only when the cat's adoption status is 'available'.
 * Returns null otherwise.
 */
export default function AdoptionBadge({ adoptionStatus }: AdoptionBadgeProps) {
  if (adoptionStatus !== 'available') {
    return null
  }

  return (
    <span className="inline-flex items-center rounded-full bg-sage/20 px-3 py-1 text-sm font-medium text-sage ring-1 ring-sage/30">
      Disponible para adopción
    </span>
  )
}
