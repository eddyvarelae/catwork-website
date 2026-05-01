import { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'
import MenuItemCard from '../components/MenuItemCard'
import LoadingCat from '../components/LoadingCat'
import { getDailyMenu } from '../services/menu'
import type { DailyMenu, MenuItem } from '../types/index'

/**
 * Format today's date in Spanish, e.g. "Jueves, 30 de abril de 2026"
 */
function formatDateInSpanish(date: Date): string {
  const days = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles',
    'Jueves', 'Viernes', 'Sábado',
  ]
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ]

  const dayName = days[date.getDay()]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${dayName}, ${day} de ${month} de ${year}`
}

export default function MenuPage() {
  const [dailyMenu, setDailyMenu] = useState<DailyMenu | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getDailyMenu().then((data) => {
      if (!cancelled) {
        setDailyMenu(data)
        setLoading(false)
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return <LoadingCat />
  }

  const coffeeItems: MenuItem[] =
    dailyMenu?.items.filter((item) => item.category === 'coffee') ?? []
  const cookieItems: MenuItem[] =
    dailyMenu?.items.filter((item) => item.category === 'cookie') ?? []
  const hasMenu = dailyMenu && dailyMenu.items.length > 0

  const todayFormatted = formatDateInSpanish(new Date())

  return (
    <div className="min-h-screen">
      <HeroSection
        imageUrl=""
        title="Menú del Día"
        subtitle="Café y galletas artesanales — cambia cada día"
        height="half"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Today's date */}
        <AnimatedSection animation="fadeIn">
          <p className="mb-12 text-center font-body text-lg text-charcoal/60">
            {todayFormatted}
          </p>
        </AnimatedSection>

        {hasMenu ? (
          <>
            {/* Coffee section */}
            {coffeeItems.length > 0 && (
              <div className="mb-16">
                <AnimatedSection animation="slideUp">
                  <h2 className="mb-8 font-heading text-3xl text-charcoal">
                    ☕ Café
                  </h2>
                </AnimatedSection>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {coffeeItems.map((item, index) => (
                    <AnimatedSection
                      key={item.id}
                      animation="slideUp"
                      delay={index * 0.1}
                    >
                      <MenuItemCard item={item} />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}

            {/* Cookie section */}
            {cookieItems.length > 0 && (
              <div>
                <AnimatedSection animation="slideUp">
                  <h2 className="mb-8 font-heading text-3xl text-charcoal">
                    🍪 Galletas
                  </h2>
                </AnimatedSection>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cookieItems.map((item, index) => (
                    <AnimatedSection
                      key={item.id}
                      animation="slideUp"
                      delay={index * 0.1}
                    >
                      <MenuItemCard item={item} />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Fallback when no menu is published */
          <AnimatedSection animation="fadeIn">
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="text-6xl" role="img" aria-label="Gato">🐱</span>
              <p className="mt-6 font-heading text-2xl text-charcoal">
                El menú del día estará disponible próximamente
              </p>
              <p className="mt-2 font-body text-charcoal/60">
                Nuestros baristas están preparando algo especial para ti.
              </p>
            </div>
          </AnimatedSection>
        )}
      </section>
    </div>
  )
}
