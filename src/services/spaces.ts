import { supabase } from '../lib/supabase'
import type { Space } from '../types/index'

const mockSpaces: Space[] = [
  {
    id: 'sp1',
    type: 'bullpen',
    name: 'Bullpen',
    description:
      'Área abierta de coworking con 20 lugares para laptop. Sin escritorios fijos — elige tu spot favorito cada día. Wi-Fi de alta velocidad y la mejor compañía gatuna incluida.',
    capacity: 20,
    photos: ['linear-gradient(135deg, #E8DDD3 0%, #D4C5B5 100%)'],
    amenities: ['Wi-Fi', 'Enchufes en cada lugar', 'Compañía gatuna', 'Café de bienvenida'],
    isReservable: false,
  },
  {
    id: 'sp2',
    type: 'booth',
    name: 'Cabina Insonorizada 1',
    description:
      'Cabina privada e insonorizada, perfecta para videollamadas y trabajo que requiere concentración total. Capacidad para 1 persona.',
    capacity: 1,
    photos: ['linear-gradient(135deg, #C17C5E 0%, #E8DDD3 100%)'],
    amenities: ['Insonorización', 'Pantalla', 'Wi-Fi', 'Iluminación ajustable'],
    isReservable: true,
  },
  {
    id: 'sp3',
    type: 'booth',
    name: 'Cabina Insonorizada 2',
    description:
      'Cabina privada e insonorizada, perfecta para videollamadas y trabajo que requiere concentración total. Capacidad para 1 persona.',
    capacity: 1,
    photos: ['linear-gradient(135deg, #E8956A 0%, #D4C5B5 100%)'],
    amenities: ['Insonorización', 'Pantalla', 'Wi-Fi', 'Iluminación ajustable'],
    isReservable: true,
  },
  {
    id: 'sp4',
    type: 'meeting_room',
    name: 'Sala de Juntas',
    description:
      'Sala privada para reuniones con capacidad para 8 personas. Equipada con pantalla, pizarrón y todo lo necesario para sesiones productivas.',
    capacity: 8,
    photos: ['linear-gradient(135deg, #D4C5B5 0%, #C17C5E 100%)'],
    amenities: ['Pantalla', 'Pizarrón', 'Wi-Fi', 'Capacidad 8 personas', 'Aire acondicionado'],
    isReservable: true,
  },
]

const isSupabaseConfigured = (): boolean => {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
  return Boolean(url && key && !url.includes('placeholder'))
}

export async function getSpaces(): Promise<Space[]> {
  if (!isSupabaseConfigured()) {
    return mockSpaces
  }

  const { data, error } = await supabase
    .from('spaces')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching spaces:', error)
    return mockSpaces
  }

  return data as Space[]
}
