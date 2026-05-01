import { supabase } from '../lib/supabase'
import type { MenuItem, DailyMenu } from '../types/index'

const mockMenuItems: MenuItem[] = [
  // Coffee items
  {
    id: 'c1',
    name: 'Latte de Vainilla',
    description: 'Espresso suave con leche vaporizada y un toque de vainilla natural.',
    price: 65,
    category: 'coffee',
    isActive: true,
  },
  {
    id: 'c2',
    name: 'Americano Orgánico',
    description: 'Café de altura cultivado en Chiapas, intenso y aromático.',
    price: 45,
    category: 'coffee',
    isActive: true,
  },
  {
    id: 'c3',
    name: 'Cappuccino',
    description: 'Espresso con espuma de leche cremosa y un toque de canela.',
    price: 55,
    category: 'coffee',
    isActive: true,
  },
  {
    id: 'c4',
    name: 'Mocha de Chocolate',
    description: 'Espresso con chocolate artesanal oaxaqueño y leche vaporizada.',
    price: 70,
    category: 'coffee',
    isActive: true,
  },
  {
    id: 'c5',
    name: 'Espresso Doble',
    description: 'Doble shot de espresso para los que necesitan energía extra.',
    price: 40,
    category: 'coffee',
    isActive: true,
  },
  {
    id: 'c6',
    name: 'Café de Olla',
    description: 'Receta tradicional mexicana con piloncillo y canela.',
    price: 50,
    category: 'coffee',
    isActive: true,
  },
  // Cookie items
  {
    id: 'k1',
    name: 'Galleta de Chocolate',
    description: 'Galleta crujiente con chispas de chocolate semi-amargo.',
    price: 35,
    category: 'cookie',
    isActive: true,
  },
  {
    id: 'k2',
    name: 'Galleta de Avena y Pasas',
    description: 'Galleta suave de avena integral con pasas y miel.',
    price: 30,
    category: 'cookie',
    isActive: true,
  },
  {
    id: 'k3',
    name: 'Galleta de Mantequilla',
    description: 'Clásica galleta de mantequilla con un toque de sal de mar.',
    price: 25,
    category: 'cookie',
    isActive: true,
  },
  {
    id: 'k4',
    name: 'Polvorón de Nuez',
    description: 'Polvorón tradicional con nuez pecana de Sonora.',
    price: 35,
    category: 'cookie',
    isActive: true,
  },
  {
    id: 'k5',
    name: 'Concha de Vainilla',
    description: 'Pan dulce mexicano con cobertura crujiente de vainilla.',
    price: 28,
    category: 'cookie',
    isActive: true,
  },
]

const mockDailyMenu: DailyMenu = {
  id: 'dm1',
  date: new Date().toISOString().split('T')[0],
  items: [
    mockMenuItems[0], // Latte de Vainilla
    mockMenuItems[2], // Cappuccino
    mockMenuItems[5], // Café de Olla
    mockMenuItems[6], // Galleta de Chocolate
    mockMenuItems[9], // Polvorón de Nuez
  ],
  publishedAt: new Date().toISOString(),
  createdBy: 'admin',
}

const isSupabaseConfigured = (): boolean => {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
  return Boolean(url && key && !url.includes('placeholder'))
}

export async function getDailyMenu(): Promise<DailyMenu | null> {
  if (!isSupabaseConfigured()) {
    return mockDailyMenu
  }

  const today = new Date().toISOString().split('T')[0]

  const { data: dailyMenu, error: menuError } = await supabase
    .from('daily_menus')
    .select('*')
    .eq('menu_date', today)
    .not('published_at', 'is', null)
    .single()

  if (menuError || !dailyMenu) {
    console.error('Error fetching daily menu:', menuError)
    return null
  }

  const { data: menuItemLinks, error: linksError } = await supabase
    .from('daily_menu_items')
    .select('menu_item_id')
    .eq('daily_menu_id', dailyMenu.id)

  if (linksError || !menuItemLinks) {
    console.error('Error fetching menu item links:', linksError)
    return null
  }

  const itemIds = menuItemLinks.map((link: { menu_item_id: string }) => link.menu_item_id)

  const { data: items, error: itemsError } = await supabase
    .from('menu_items')
    .select('*')
    .in('id', itemIds)
    .eq('is_active', true)

  if (itemsError) {
    console.error('Error fetching menu items:', itemsError)
    return null
  }

  return {
    id: dailyMenu.id,
    date: dailyMenu.menu_date,
    items: (items as MenuItem[]) || [],
    publishedAt: dailyMenu.published_at,
    createdBy: dailyMenu.created_by,
  }
}

export async function getMenuItems(): Promise<MenuItem[]> {
  if (!isSupabaseConfigured()) {
    return mockMenuItems
  }

  const { data, error } = await supabase
    .from('menu_items')
    .select('*')
    .eq('is_active', true)
    .order('category', { ascending: true })
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching menu items:', error)
    return mockMenuItems
  }

  return data as MenuItem[]
}
