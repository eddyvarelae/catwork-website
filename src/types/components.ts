import type { Cat, Product } from './index';

// === Interfaces de Componentes ===

export interface HeroSectionProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  overlayOpacity?: number;
  height?: 'full' | 'half';
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'parallax';
  delay?: number;
  className?: string;
}

export interface CatCardProps {
  cat: Cat;
  onClick: (slug: string) => void;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}
