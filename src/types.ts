export interface Product {
  id: string;
  name: string;
  category: 'Sneakers' | 'Streetwear' | 'Mulher' | 'Homem';
  subcategory: string;
  price: number;
  originalPrice?: number;
  images: [string, string];
  sizes: string[];
  badge?: string;
  badgeType?: 'green' | 'black' | 'light';
  isFavorite?: boolean;
  description: string;
  specs?: string[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface HeroSlide {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface CategoryCardData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  filterCategory: 'Mulher' | 'Homem' | 'Sneakers' | 'Streetwear';
}

export interface SneakerCategoryData {
  id: string;
  name: string;
  description: string;
  image: string;
  count: string;
}
