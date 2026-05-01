import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'
import CatCard from '../components/CatCard'
import LoadingCat from '../components/LoadingCat'
import { getCats } from '../services/cats'
import type { Cat } from '../types/index'

export default function CatGalleryPage() {
  const [cats, setCats] = useState<Cat[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    let cancelled = false
    getCats().then((data) => {
      if (!cancelled) {
        setCats(data)
        setLoading(false)
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  const handleCatClick = (slug: string) => {
    navigate(`/gatos/${slug}`)
  }

  if (loading) {
    return <LoadingCat />
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        imageUrl=""
        title="Nuestros Gatitos"
        subtitle="10 residentes felinos disponibles para adopción"
        height="half"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {cats.map((cat, index) => (
            <AnimatedSection
              key={cat.id}
              animation="slideUp"
              delay={index * 0.08}
            >
              <CatCard cat={cat} onClick={handleCatClick} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  )
}
