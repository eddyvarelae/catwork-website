import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'
import SpaceCard from '../components/SpaceCard'
import Button from '../components/ui/Button'
import { getSpaces } from '../services/spaces'
import type { Space } from '../types/index'

export default function SpacesPage() {
  const [spaces, setSpaces] = useState<Space[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSpaces().then((data) => {
      setSpaces(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <HeroSection
        imageUrl=""
        title="Nuestros Espacios"
        subtitle="Diseñados para que trabajes cómodo, rodeado de gatitos"
        height="half"
      />

      {/* Spaces grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {loading ? (
          <p className="text-center font-body text-charcoal/60">Cargando espacios…</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2">
            {spaces.map((space, i) => (
              <AnimatedSection key={space.id} animation="slideUp" delay={i * 0.1}>
                <SpaceCard space={space} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>

      {/* Pet policy banner */}
      <AnimatedSection animation="fadeIn">
        <section className="bg-beige-200 py-10 text-center">
          <p className="font-heading text-2xl text-charcoal">
            🐱 Solo gatitos — no se admiten perros
          </p>
          <p className="mt-2 font-body text-sm text-charcoal/60">
            Los únicos animales en Catwork son nuestros 10 gatos residentes.
          </p>
        </section>
      </AnimatedSection>

      {/* CTAs */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <AnimatedSection animation="slideUp">
          <h2 className="font-heading text-3xl text-charcoal">¿Listo para trabajar con gatitos?</h2>
          <p className="mt-3 font-body text-charcoal/70">
            Consulta nuestros planes y precios, o reserva tu espacio favorito.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/membresias">
              <Button variant="primary" size="lg">Ver planes y precios</Button>
            </Link>
            <Link to="/reservaciones">
              <Button variant="secondary" size="lg">Reservar espacio</Button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
