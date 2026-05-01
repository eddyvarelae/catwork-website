import { supabase } from '../lib/supabase'
import type { Cat } from '../types/index'

const mockCats: Cat[] = [
  { id: '1', name: 'Copito', slug: 'copito', age: 3, personality: 'Copito es blanco como la nieve y el alma de Catwork. Sociable y curioso, siempre se acerca a saludar a los visitantes nuevos. Le encanta dormir sobre los teclados y ronronear mientras trabajas.', photos: ['/cats/copito.jpg', '/cats/copito.jpg', '/cats/copito.jpg'], adoptionStatus: 'available', createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z' },
  { id: '2', name: 'Dormilón', slug: 'dormilon', age: 5, personality: 'Dormilón hace honor a su nombre. Pacífico y gentil, pasa sus días tomando siestas en los rincones más soleados de Catwork. Su presencia tranquila calma hasta al visitante más estresado.', photos: ['/cats/dormilon.jpg', '/cats/dormilon.jpg', '/cats/dormilon.jpg'], adoptionStatus: 'not_available', createdAt: '2024-01-02T00:00:00Z', updatedAt: '2024-01-02T00:00:00Z' },
  { id: '3', name: 'Filiberto', slug: 'filiberto', age: 4, personality: 'Filiberto es el caballero del grupo. Elegante y distinguido, supervisa todo lo que pasa en Catwork con una mirada sabia. Le gusta sentarse junto a la ventana y ver pasar el mundo.', photos: ['/cats/filiberto.jpg', '/cats/filiberto.jpg', '/cats/filiberto.jpg'], adoptionStatus: 'available', createdAt: '2024-01-03T00:00:00Z', updatedAt: '2024-01-03T00:00:00Z' },
  { id: '4', name: 'Kiro', slug: 'kiro', age: 2, personality: 'Kiro es juguetón y lleno de energía. Le fascina perseguir bolitas de papel y hacer acrobacias entre las mesas. Es el payaso oficial de Catwork y siempre saca una sonrisa a todos.', photos: ['/cats/kiro.jpg', '/cats/kiro.jpg', '/cats/kiro.jpg'], adoptionStatus: 'available', createdAt: '2024-01-04T00:00:00Z', updatedAt: '2024-01-04T00:00:00Z' },
  { id: '5', name: 'Mufasa', slug: 'mufasa', age: 6, personality: 'Mufasa es el rey de Catwork. Con su melena imponente y su porte majestuoso, inspira respeto y cariño. Independiente pero leal, elige a su persona favorita del día y no se despega de ella.', photos: ['/cats/mufasa.jpg', '/cats/mufasa.jpg', '/cats/mufasa.jpg'], adoptionStatus: 'not_available', createdAt: '2024-01-05T00:00:00Z', updatedAt: '2024-01-05T00:00:00Z' },
  { id: '6', name: 'Pecas', slug: 'pecas', age: 3, personality: 'Pecas tiene manchitas adorables por todo el cuerpo. Cariñosa y sociable, busca regazos tibios para acurrucarse. Es la compañera perfecta para sesiones largas de trabajo con café.', photos: ['/cats/pecas.jpg', '/cats/pecas.jpg', '/cats/pecas.jpg'], adoptionStatus: 'available', createdAt: '2024-01-06T00:00:00Z', updatedAt: '2024-01-06T00:00:00Z' },
  { id: '7', name: 'Rodrigo', slug: 'rodrigo', age: 4, personality: 'Rodrigo es atigrado y travieso. Le gusta explorar cada rincón de Catwork y sorprender a los visitantes apareciendo donde menos lo esperan. Adora las galletas del menú.', photos: ['/cats/rodrigo.jpg', '/cats/rodrigo.jpg', '/cats/rodrigo.jpg'], adoptionStatus: 'available', createdAt: '2024-01-07T00:00:00Z', updatedAt: '2024-01-07T00:00:00Z' },
  { id: '8', name: 'Simba', slug: 'simba', age: 2, personality: 'Simba es aventurero y valiente. Siempre el primero en investigar cualquier cosa nueva que llegue a Catwork. Tímido al principio, pero una vez que te conoce se convierte en tu sombra.', photos: ['/cats/simba.jpg', '/cats/simba.jpg', '/cats/simba.jpg'], adoptionStatus: 'available', createdAt: '2024-01-08T00:00:00Z', updatedAt: '2024-01-08T00:00:00Z' },
  { id: '9', name: 'Canela', slug: 'canela', age: 4, personality: 'Canela tiene el pelaje del color de su nombre. Tranquila y cariñosa, busca los rincones más cálidos para descansar. Es tan reconfortante como la bebida que lleva su nombre.', photos: ['linear-gradient(135deg, #C17C5E 0%, #D4C5B5 100%)', 'linear-gradient(135deg, #E8956A 0%, #D4C5B5 100%)', 'linear-gradient(135deg, #D4C5B5 0%, #E8956A 100%)'], adoptionStatus: 'not_available', createdAt: '2024-01-09T00:00:00Z', updatedAt: '2024-01-09T00:00:00Z' },
  { id: '10', name: 'Galleta', slug: 'galleta', age: 8, personality: 'Galleta es la abuelita consentida de Catwork. Dulce y serena, pasa sus días tomando siestas en los rincones soleados. Su presencia tranquila calma hasta al visitante más estresado.', photos: ['linear-gradient(135deg, #E8DDD3 0%, #C17C5E 100%)', 'linear-gradient(135deg, #C17C5E 0%, #E8DDD3 100%)', 'linear-gradient(135deg, #E8DDD3 0%, #E8956A 100%)'], adoptionStatus: 'available', createdAt: '2024-01-10T00:00:00Z', updatedAt: '2024-01-10T00:00:00Z' },
]

const isSupabaseConfigured = (): boolean => {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
  return Boolean(url && key && !url.includes('placeholder'))
}

export async function getCats(): Promise<Cat[]> {
  if (!isSupabaseConfigured()) {
    return mockCats
  }

  const { data, error } = await supabase
    .from('cats')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching cats:', error)
    return mockCats
  }

  return data as Cat[]
}

export async function getCatBySlug(slug: string): Promise<Cat | null> {
  if (!isSupabaseConfigured()) {
    return mockCats.find((cat) => cat.slug === slug) ?? null
  }

  const { data, error } = await supabase
    .from('cats')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching cat:', error)
    return mockCats.find((cat) => cat.slug === slug) ?? null
  }

  return data as Cat
}
