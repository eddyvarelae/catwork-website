import Card from './ui/Card'
import type { MenuItem } from '../types/index'

interface MenuItemCardProps {
  item: MenuItem
}

/**
 * Card for a single menu item (coffee or cookie).
 * Shows category emoji, name, description, price in MXN,
 * and an optional image (gradient placeholder if none).
 */
export default function MenuItemCard({ item }: MenuItemCardProps) {
  const categoryEmoji = item.category === 'coffee' ? '☕' : '🍪'
  const categoryGradient =
    item.category === 'coffee'
      ? 'linear-gradient(135deg, #5A4A3F 0%, #C17C5E 100%)'
      : 'linear-gradient(135deg, #E8956A 0%, #E8DDD3 100%)'

  const hasImage = item.imageUrl && item.imageUrl.trim().length > 0

  return (
    <Card hoverable={false} className="overflow-hidden">
      {/* Image / gradient placeholder */}
      <div className="aspect-[16/10] w-full overflow-hidden">
        {hasImage ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: categoryGradient }}
            role="img"
            aria-label={item.name}
          >
            <span className="text-5xl" aria-hidden="true">
              {categoryEmoji}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span aria-hidden="true">{categoryEmoji}</span>
          <h3 className="font-heading text-lg text-charcoal">{item.name}</h3>
        </div>
        <p className="mt-1 font-body text-sm text-charcoal/70">{item.description}</p>
        <p className="mt-2 font-heading text-xl text-terracotta">${item.price} MXN</p>
      </div>
    </Card>
  )
}
