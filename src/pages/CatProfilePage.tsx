import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import AdoptionBadge from '../components/AdoptionBadge'
import LoadingCat from '../components/LoadingCat'
import Button from '../components/ui/Button'
import { getCatBySlug } from '../services/cats'
import type { Cat } from '../types/index'

export default function CatProfilePage() {
  const { slug } = useParams<{ slug: string }>()
  const [cat, setCat] = useState<Cat | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    if (slug) {
      getCatBySlug(slug).then((data) => {
        if (!cancelled) {
          setCat(data)
          setLoading(false)
        }
      })
    }
    return () => {
      cancelled = true
    }
  }, [slug])

  if (loading) {
    return <LoadingCat />
  }

  if (!cat) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="font-heading text-4xl text-charcoal">Gatito no encontrado</h1>
        <p className="mt-4 font-body text-lg text-charcoal/70">
          No pudimos encontrar al gatito que buscas.
        </p>
        <Link
          to="/gatos"
          className="mt-8 inline-flex items-center font-body text-terracotta hover:text-coral transition-colors"
        >
          ← Volver a la galería
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          to="/gatos"
          className="inline-flex items-center font-body text-terracotta hover:text-coral transition-colors"
        >
          ← Volver a la galería
        </Link>
      </div>

      {/* Cat name and badge */}
      <AnimatedSection animation="fadeIn" className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="font-heading text-5xl text-charcoal md:text-6xl lg:text-7xl">
            {cat.name}
          </h1>
          <AdoptionBadge adoptionStatus={cat.adoptionStatus} />
        </div>
      </AnimatedSection>

      {/* Photo gallery */}
      <AnimatedSection animation="slideUp" delay={0.1} className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cat.photos.map((photo, index) => {
            const isGradient = photo.startsWith('linear-gradient')
            return (
              <div key={index} className="aspect-square overflow-hidden rounded-2xl">
                {isGradient ? (
                  <div
                    className="h-full w-full"
                    style={{ background: photo }}
                    role="img"
                    aria-label={`Foto ${index + 1} de ${cat.name}`}
                  />
                ) : (
                  <img
                    src={photo}
                    alt={`Foto ${index + 1} de ${cat.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            )
          })}
        </div>
      </AnimatedSection>

      {/* Details */}
      <AnimatedSection animation="slideUp" delay={0.2} className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Personality */}
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl text-charcoal">Personalidad</h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-charcoal/80">
              {cat.personality}
            </p>
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-charcoal/50">
                Edad
              </h3>
              <p className="mt-1 font-heading text-2xl text-charcoal">
                {cat.age} {cat.age === 1 ? 'año' : 'años'}
              </p>
            </div>

            <div>
              <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-charcoal/50">
                Estado de adopción
              </h3>
              <div className="mt-2">
                {cat.adoptionStatus === 'available' ? (
                  <span className="font-body text-sage">Disponible</span>
                ) : cat.adoptionStatus === 'adopted' ? (
                  <span className="font-body text-terracotta">Adoptado</span>
                ) : (
                  <span className="font-body text-charcoal/60">No disponible</span>
                )}
              </div>
            </div>

            {/* Contact CTA — only when available for adoption */}
            {cat.adoptionStatus === 'available' && (
              <div className="pt-2">
                <a
                  href="mailto:adopciones@catwork.mx?subject=Adopción de gato: {cat.name}"
                  aria-label={`Contactar para adoptar a ${cat.name}`}
                >
                  <Button variant="primary" size="lg" className="w-full">
                    Quiero adoptar a {cat.name}
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
