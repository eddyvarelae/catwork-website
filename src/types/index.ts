// === Tipos de Dominio ===

export interface Cat {
  id: string;
  name: string;
  slug: string;
  age: number;
  personality: string;
  photos: string[];        // URLs de Supabase Storage
  adoptionStatus: 'available' | 'adopted' | 'not_available';
  createdAt: string;
  updatedAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;           // en MXN
  category: 'coffee' | 'cookie';
  imageUrl?: string;
  isActive: boolean;
}

export interface DailyMenu {
  id: string;
  date: string;            // formato YYYY-MM-DD
  items: MenuItem[];
  publishedAt: string | null;
  createdBy: string;       // admin user id
}

export interface Space {
  id: string;
  type: 'bullpen' | 'booth' | 'meeting_room';
  name: string;
  description: string;
  capacity: number;
  photos: string[];
  amenities: string[];
  isReservable: boolean;
}

export interface Reservation {
  id: string;
  userId: string;
  spaceId: string;
  date: string;            // formato YYYY-MM-DD
  startTime: string;       // formato HH:mm
  endTime: string;         // formato HH:mm
  status: 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;           // en MXN
  sizes: string[];
  photos: string[];
  stock: Record<string, number>;  // { "S": 5, "M": 10, ... }
  category: string;
  isActive: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  imageUrl: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: ShippingAddress;
  stripeSessionId: string;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

export interface ShippingAddress {
  fullName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  type: 'walk_in' | 'general' | 'premium';
  price: number;
  period: 'one_time' | 'monthly';
  benefits: string[];
  isHighlighted: boolean;
}
