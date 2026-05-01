import HeroSection from '../components/HeroSection'
import AnimatedSection from '../components/AnimatedSection'
import PriceCard from '../components/PriceCard'
import type { MembershipPlan } from '../types/index'

const plans: MembershipPlan[] = [
  {
    id: 'walk-in',
    name: 'Walk-In',
    type: 'walk_in',
    price: 50,
    period: 'one_time',
    benefits: [
      'Acceso al Bullpen',
      'Wi-Fi',
      'Café de bienvenida',
      'Compañía gatuna',
    ],
    isHighlighted: false,
  },
  {
    id: 'general',
    name: 'General',
    type: 'general',
    price: 500,
    period: 'monthly',
    benefits: [
      'Acceso ilimitado al Bullpen',
      'Wi-Fi premium',
      'Descuento en cafetería',
      'Comunidad Catwork',
      'Eventos exclusivos',
    ],
    isHighlighted: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    type: 'premium',
    price: 800,
    period: 'monthly',
    benefits: [
      'Todo lo de General',
      'Reserva de cabinas y sala de juntas',
      'Café ilimitado',
      'Descuento en merch',
      'Acceso prioritario',
    ],
    isHighlighted: true,
  },
]

const faqs = [
  {
    question: '¿Puedo visitar sin membresía?',
    answer:
      'Sí. Con la modalidad Walk-In solo necesitas un consumo mínimo de $50 MXN en cafetería para acceder al Bullpen durante el día.',
  },
  {
    question: '¿Qué incluye la Membresía General?',
    answer:
      'Acceso ilimitado al Bullpen, Wi-Fi premium, descuento en cafetería, acceso a la comunidad Catwork y eventos exclusivos para miembros.',
  },
  {
    question: '¿Puedo reservar cabinas con la Membresía General?',
    answer:
      'No. La reserva de cabinas insonorizadas y sala de juntas está disponible exclusivamente para miembros Premium.',
  },
  {
    question: '¿Cómo cancelo mi membresía?',
    answer:
      'Puedes cancelar tu membresía en cualquier momento. El acceso se mantiene hasta el final del periodo pagado.',
  },
  {
    question: '¿Hay descuentos para estudiantes?',
    answer:
      'Sí. Contáctanos con tu credencial vigente para conocer nuestras tarifas especiales para estudiantes.',
  },
]

export default function MembershipsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <HeroSection
        imageUrl=""
        title="Planes y Precios"
        subtitle="Elige el plan que mejor se adapte a tu estilo de trabajo"
        height="half"
      />

      {/* Pricing cards */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.id} animation="slideUp" delay={i * 0.15}>
              <PriceCard
                plan={plan}
                note={plan.type === 'walk_in' ? 'Sin membresía — solo consumo mínimo' : undefined}
                ctaLabel={plan.type === 'walk_in' ? 'Visítanos' : 'Contratar'}
                ctaHref={plan.type === 'walk_in' ? '/espacios' : '#contacto'}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-beige-200 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-center font-heading text-3xl text-charcoal">
              Preguntas Frecuentes
            </h2>
          </AnimatedSection>

          <div className="mt-10 space-y-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} animation="slideUp" delay={i * 0.08}>
                <div className="rounded-2xl bg-beige-100 p-6">
                  <h3 className="font-heading text-lg text-charcoal">{faq.question}</h3>
                  <p className="mt-2 font-body text-sm text-charcoal/70">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
