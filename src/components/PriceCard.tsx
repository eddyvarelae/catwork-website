import Card from './ui/Card'
import Button from './ui/Button'
import type { MembershipPlan } from '../types/index'

interface PriceCardProps {
  plan: MembershipPlan
  note?: string
  ctaLabel: string
  ctaHref: string
}

/**
 * Pricing card for membership plans.
 * Shows plan name, price, period, benefits list, and a CTA button.
 * The highlighted variant gets a ring border and "Recomendado" badge.
 */
export default function PriceCard({ plan, note, ctaLabel, ctaHref }: PriceCardProps) {
  const periodLabel = plan.period === 'monthly' ? '/mes' : ''

  return (
    <Card
      hoverable={false}
      className={`relative flex flex-col overflow-hidden ${
        plan.isHighlighted
          ? 'ring-2 ring-terracotta shadow-lg'
          : ''
      }`}
    >
      {/* Recommended badge */}
      {plan.isHighlighted && (
        <div className="bg-terracotta px-4 py-1.5 text-center">
          <span className="font-body text-sm font-semibold text-cream">⭐ Recomendado</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Plan name */}
        <h3 className="font-heading text-2xl text-charcoal">{plan.name}</h3>

        {/* Price */}
        <div className="mt-3">
          <span className="font-heading text-4xl text-terracotta">${plan.price}</span>
          <span className="ml-1 font-body text-sm text-charcoal/60">MXN{periodLabel}</span>
        </div>

        {/* Note */}
        {note && (
          <p className="mt-2 font-body text-xs text-charcoal/50 italic">{note}</p>
        )}

        {/* Benefits */}
        <ul className="mt-5 flex-1 space-y-2">
          {plan.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 font-body text-sm text-charcoal/80">
              <span className="mt-0.5 text-sage" aria-hidden="true">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={ctaHref} className="mt-6 block">
          <Button
            variant={plan.isHighlighted ? 'primary' : 'secondary'}
            className="w-full"
          >
            {ctaLabel}
          </Button>
        </a>
      </div>
    </Card>
  )
}
