import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

// ─── Placeholder Data ────────────────────────────────────────────────

const cats = [
  { name: 'Copito', personality: 'Sociable y curioso', photo: '/cats/copito.jpg' },
  { name: 'Simba', personality: 'Aventurero y valiente', photo: '/cats/simba.jpg' },
  { name: 'Pecas', personality: 'Cariñosa y social', photo: '/cats/pecas.jpg' },
  { name: 'Kiro', personality: 'Juguetón y travieso', photo: '/cats/kiro.jpg' },
]

const menuItems = [
  { name: 'Latte de Vainilla', price: 65 },
  { name: 'Americano Orgánico', price: 45 },
  { name: 'Galleta de Chocolate', price: 35 },
]

const spaces = [
  {
    name: 'Bullpen',
    capacity: '20 lugares',
    description: 'Área abierta de coworking con mesas compartidas, Wi-Fi de alta velocidad y la compañía de nuestros gatitos.',
  },
  {
    name: 'Cabinas Insonorizadas',
    capacity: '2 disponibles',
    description: 'Espacios cerrados y aislados acústicamente, ideales para videollamadas y trabajo enfocado.',
  },
  {
    name: 'Sala de Juntas',
    capacity: '1 disponible',
    description: 'Espacio privado para reuniones de equipo con pantalla, pizarrón y café ilimitado.',
  },
]

const memberships = [
  {
    name: 'Walk-In',
    price: '$50 MXN',
    period: 'consumo mínimo',
    benefits: ['Acceso al Bullpen', 'Wi-Fi', 'Café de bienvenida'],
    highlighted: false,
  },
  {
    name: 'General',
    price: '$500 MXN',
    period: '/mes',
    benefits: ['Acceso ilimitado al Bullpen', 'Wi-Fi premium', 'Descuento en cafetería', 'Comunidad Catwork'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$800 MXN',
    period: '/mes',
    benefits: ['Todo lo de General', 'Reserva de cabinas y sala', 'Café ilimitado', 'Descuento en merch', 'Acceso prioritario'],
    highlighted: true,
  },
]

const merchItems = [
  { name: 'Gorra Catwork', price: '$350 MXN' },
  { name: 'Sudadera Michi', price: '$650 MXN' },
  { name: 'Tote Bag Gatuno', price: '$250 MXN' },
]

// ─── Component ───────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="-mt-16">
      {/* ── 1. Hero Section ─────────────────────────────────────── */}
      <HeroSection
        imageUrl=""
        title="Catwork"
        subtitle="Trabaja rodeado de gatitos — Coworking & Cat Café en Hermosillo"
        height="full"
      />

      {/* Scroll-down indicator */}
      <div className="relative -mt-20 z-10 flex justify-center pb-8">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cream"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </div>

      {/* ── 2. Cats Preview Section ─────────────────────────────── */}
      <section className="py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl text-charcoal md:text-5xl lg:text-6xl">
                Conoce a nuestros gatitos
              </h2>
              <p className="mt-4 font-body text-lg text-charcoal/70">
                10 residentes felinos esperándote
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cats.map((cat, i) => (
              <AnimatedSection key={cat.name} animation="slideUp" delay={0.1 * i}>
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-beige-300 to-beige-400 overflow-hidden">
                    <img
                      src={cat.photo}
                      alt={`Foto de ${cat.name}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-xl text-charcoal">{cat.name}</h3>
                    <p className="mt-1 font-body text-sm text-charcoal/70">{cat.personality}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeIn" delay={0.4}>
            <div className="mt-12 text-center">
              <Link to="/gatos">
                <Button variant="secondary" size="lg">
                  Ver todos los gatitos
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. Daily Menu Preview Section ───────────────────────── */}
      <section className="py-24 px-6 bg-beige-200 md:py-32">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl text-charcoal md:text-5xl lg:text-6xl">
                Menú del día
              </h2>
              <p className="mt-4 font-body text-lg text-charcoal/70">
                Café y galletas artesanales que cambian cada día
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {menuItems.map((item, i) => (
              <AnimatedSection key={item.name} animation="fadeIn" delay={0.1 * i}>
                <div className="flex items-center justify-between rounded-xl bg-cream p-5">
                  <span className="font-body text-lg text-charcoal">{item.name}</span>
                  <span className="font-heading text-xl text-terracotta">${item.price} MXN</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeIn" delay={0.3}>
            <div className="mt-12 text-center">
              <Link to="/menu">
                <Button variant="secondary" size="lg">
                  Ver menú completo
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Spaces Preview Section ───────────────────────────── */}
      <section className="py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection animation="slideLeft">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl text-charcoal md:text-5xl lg:text-6xl">
                Nuestros espacios
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {spaces.map((space, i) => (
              <AnimatedSection key={space.name} animation="slideLeft" delay={0.15 * i}>
                <Card className="p-6 h-full flex flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-heading text-2xl text-charcoal">{space.name}</h3>
                    <span className="rounded-full bg-terracotta/10 px-3 py-1 font-body text-sm text-terracotta">
                      {space.capacity}
                    </span>
                  </div>
                  <p className="font-body text-sm text-charcoal/70 flex-1">{space.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeIn" delay={0.4}>
            <div className="mt-12 text-center">
              <Link to="/espacios">
                <Button variant="secondary" size="lg">
                  Explorar espacios
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. Pet Policy Banner ────────────────────────────────── */}
      <AnimatedSection animation="fadeIn">
        <section className="py-16 px-6 bg-beige-300">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-3xl text-charcoal md:text-4xl">
              🐱 Solo gatitos — no se admiten perros
            </p>
            <p className="mt-4 font-body text-charcoal/80">
              En Catwork conviven únicamente nuestros 10 gatos residentes. No se permite el ingreso de perros ni otras mascotas externas para garantizar un ambiente tranquilo y seguro para todos.
            </p>
            <div className="mt-6">
              <Link to="/politica-mascotas">
                <Button variant="ghost" size="md">
                  Conocer política completa
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 6. Memberships Preview Section ──────────────────────── */}
      <section className="py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl text-charcoal md:text-5xl lg:text-6xl">
                Planes y precios
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {memberships.map((plan, i) => (
              <AnimatedSection key={plan.name} animation="slideUp" delay={0.15 * i}>
                <Card
                  className={`p-6 h-full flex flex-col ${
                    plan.highlighted
                      ? 'ring-2 ring-terracotta bg-cream'
                      : ''
                  }`}
                >
                  {plan.highlighted && (
                    <span className="mb-4 inline-block self-start rounded-full bg-terracotta px-3 py-1 font-body text-xs font-medium text-cream">
                      Recomendado
                    </span>
                  )}
                  <h3 className="font-heading text-2xl text-charcoal">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="font-heading text-3xl text-terracotta">{plan.price}</span>
                    <span className="font-body text-sm text-charcoal/60">{plan.period}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 font-body text-sm text-charcoal/80">
                        <span className="text-sage mt-0.5">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeIn" delay={0.4}>
            <div className="mt-12 text-center">
              <Link to="/membresias">
                <Button variant="primary" size="lg">
                  Ver todos los planes
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 7. Merch Preview Section ────────────────────────────── */}
      <section className="py-24 px-6 bg-beige-200 md:py-32">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl text-charcoal md:text-5xl lg:text-6xl">
                Merch gatuno
              </h2>
              <p className="mt-4 font-body text-lg text-charcoal/70">
                Llévate un recuerdo de Catwork
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {merchItems.map((item, i) => (
              <AnimatedSection key={item.name} animation="slideUp" delay={0.1 * i}>
                <Card className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-beige-300 to-pink/30 flex items-center justify-center">
                    <span className="text-5xl" role="img" aria-label={item.name}>🧢</span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h3 className="font-heading text-lg text-charcoal">{item.name}</h3>
                    <span className="font-body text-sm font-medium text-terracotta">{item.price}</span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeIn" delay={0.3}>
            <div className="mt-12 text-center">
              <Link to="/tienda">
                <Button variant="secondary" size="lg">
                  Visitar tienda
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 8. Social Media Section ─────────────────────────────── */}
      <section className="py-24 px-6 md:py-32">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl text-charcoal md:text-5xl lg:text-6xl">
                Síguenos
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.2}>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a
                href="https://instagram.com/catwork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-beige-200 px-8 py-4 font-body text-lg text-charcoal hover:bg-beige-300 transition-colors"
                aria-label="Visitar Instagram de Catwork"
              >
                <InstagramIcon />
                Instagram
              </a>
              <a
                href="https://tiktok.com/@catwork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-beige-200 px-8 py-4 font-body text-lg text-charcoal hover:bg-beige-300 transition-colors"
                aria-label="Visitar TikTok de Catwork"
              >
                <TikTokIcon />
                TikTok
              </a>
            </div>
          </AnimatedSection>

          {/* Placeholder for Instagram feed — will be implemented in task 12.1 */}
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-xl bg-beige-200"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-4 text-center font-body text-sm text-charcoal/50">
              Feed de Instagram — próximamente
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

// ─── Inline SVG Icons ────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.83 4.83 0 0 1-1-.15z" />
    </svg>
  )
}
