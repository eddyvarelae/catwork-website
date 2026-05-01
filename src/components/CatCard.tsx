import Card from './ui/Card'
import AdoptionBadge from './AdoptionBadge'
import type { CatCardProps } from '../types/components'

/**
 * Cat card for the gallery grid.
 * Shows a gradient placeholder photo, the cat's name, and an adoption badge.
 * Hover: scales up slightly with increased shadow.
 * Clicking navigates to the cat's profile page.
 */
export default function CatCard({ cat, onClick }: CatCardProps) {
  const firstPhoto = cat.photos[0] || ''
  const isGradient = firstPhoto.startsWith('linear-gradient')

  return (
    <Card
      className="cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
      onClick={() => onClick(cat.slug)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(cat.slug)
        }
      }}
      aria-label={`Ver perfil de ${cat.name}`}
    >
      {/* Photo / gradient placeholder */}
      <div className="aspect-[4/5] w-full overflow-hidden">
        {isGradient ? (
          <div
            className="h-full w-full"
            style={{ background: firstPhoto }}
            role="img"
            aria-label={`Foto de ${cat.name}`}
          />
        ) : (
          <img
            src={firstPhoto}
            alt={`Foto de ${cat.name}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading text-xl text-charcoal">{cat.name}</h3>
        <div className="mt-2">
          <AdoptionBadge adoptionStatus={cat.adoptionStatus} />
        </div>
      </div>
    </Card>
  )
}
