import Card from './ui/Card'
import type { Space } from '../types/index'

interface SpaceCardProps {
  space: Space
}

/**
 * Card for a coworking space.
 * Shows a gradient placeholder photo, name, description,
 * capacity badge, and amenities list.
 */
export default function SpaceCard({ space }: SpaceCardProps) {
  const firstPhoto = space.photos[0] || ''
  const isGradient = firstPhoto.startsWith('linear-gradient')

  return (
    <Card hoverable={false} className="overflow-hidden">
      {/* Photo / gradient placeholder */}
      <div className="aspect-[16/10] w-full overflow-hidden">
        {isGradient ? (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: firstPhoto }}
            role="img"
            aria-label={`Foto de ${space.name}`}
          >
            <span className="text-5xl text-cream/60" aria-hidden="true">
              {space.type === 'bullpen' ? '💻' : space.type === 'booth' ? '🎧' : '🤝'}
            </span>
          </div>
        ) : (
          <img
            src={firstPhoto}
            alt={`Foto de ${space.name}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-xl text-charcoal">{space.name}</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-beige-300 px-3 py-1 font-body text-xs font-medium text-charcoal">
            👥 {space.capacity} {space.capacity === 1 ? 'persona' : 'personas'}
          </span>
        </div>

        <p className="mt-2 font-body text-sm text-charcoal/70">{space.description}</p>

        {/* Amenities */}
        <div className="mt-4 flex flex-wrap gap-2">
          {space.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-beige-100 px-3 py-1 font-body text-xs text-charcoal/80"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Reservable indicator */}
        {space.isReservable && (
          <p className="mt-3 font-body text-xs text-terracotta font-medium">
            ✓ Reservable con Membresía Premium
          </p>
        )}
      </div>
    </Card>
  )
}
