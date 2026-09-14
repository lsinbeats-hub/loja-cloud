import React, { useState, useMemo } from 'react';
import { Product, CartItem } from './types';
import { FEATURED_PRODUCTS } from './data/mockData';
import { Header } from './components/Header';
import { PromoBar } from './components/PromoBar';
import { HeroCarousel } from './components/HeroCarousel';
import { CategoryCards } from './components/CategoryCards';
import { ProductGrid } from './components/ProductGrid';
import { EditorialBanner } from './components/EditorialBanner';
import { SneakerSection } from './components/SneakerSection';
import { SpecialOffer } from './components/SpecialOffer';
import { Benefits } from './components/Benefits';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { HelpModal } from './components/HelpModal';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';

export default function App() {
  // State management
  const [cart, setCart] = useState<CartItem[]>([
    // Preload one iconic item so bag count and drawer are immediately active and engaging
    {
      product: FEATURED_PRODUCTS[0],
      selectedSize: '41',
      quantity: 1,
    },
  ]);

  const [wishlist, setWishlist] = useState<string[]>([FEATURED_PRODUCTS[1].id]);
  const [activeCategory, setActiveCategory] = useState<string>('TODOS');

  // Modal and drawer controls
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Toast feedback state
  const [toastState, setToastState] = useState<{
    open: boolean;
    product: Product | null;
    size: string;
  }>({
    open: false,
    product: null,
    size: '',
  });

  // Filtered products list
  const filteredProducts = useMemo(() => {
    if (!activeCategory || activeCategory === 'TODOS') {
      // By default show the 4 requested iconic models from prompt
      return FEATURED_PRODUCTS.slice(0, 4);
    }
    if (activeCategory === 'Ofertas') {
      return FEATURED_PRODUCTS.filter((p) => p.originalPrice !== undefined);
    }
    if (activeCategory === 'Novidades') {
      return FEATURED_PRODUCTS.filter((p) => p.badge?.includes('NOVO') || p.badge?.includes('DROP'));
    }
    const filtered = FEATURED_PRODUCTS.filter(
      (p) =>
        p.category.toLowerCase() === activeCategory.toLowerCase() ||
        p.subcategory.toLowerCase().includes(activeCategory.toLowerCase())
    );
    return filtered.length > 0 ? filtered : FEATURED_PRODUCTS.slice(0, 4);
  }, [activeCategory]);

  // Cart operations
  const handleAddToCart = (product: Product, size?: string) => {
    const chosenSize = size || product.sizes[2] || product.sizes[0];
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === chosenSize
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedSize: chosenSize, quantity: 1 }];
    });

    // Show visual confirmation toast
    setToastState({
      open: true,
      product,
      size: chosenSize,
    });
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size)
      )
    );
  };

  // Wishlist toggle
  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleScrollToProducts = () => {
    const el = document.getElementById('produtos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryAndScroll = (category: string) => {
    setActiveCategory(category);
    handleScrollToProducts();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] flex flex-col antialiased selection:bg-[#000000] selection:text-[#FFFFFF]">
      {/* Header Principal */}
      <Header
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onSelectCategory={handleSelectCategoryAndScroll}
        activeCategory={activeCategory}
      />

      {/* 3. Barra Promocional */}
      <PromoBar onPromoClick={handleScrollToProducts} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 4. Hero Principal (Carrossel Funcional) */}
        <HeroCarousel
          onShopNow={handleScrollToProducts}
          onExploreCollection={handleScrollToProducts}
        />

        {/* 5. Categorias em Destaque (4 Cards 4:5) */}
        <CategoryCards onSelectCategory={handleSelectCategoryAndScroll} />

        {/* 6. Produtos Mais Vendidos (Grid de 4 produtos) */}
        <ProductGrid
          products={filteredProducts}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          activeFilter={activeCategory}
          onResetFilter={() => setActiveCategory('TODOS')}
        />

        {/* 7. Banner Editorial (Seu Estilo. Suas Regras.) */}
        <EditorialBanner onExploreCollection={handleScrollToProducts} />

        {/* 8. Seção de Sneakers (Running, Lifestyle, Street) */}
        <SneakerSection onSelectCategory={handleSelectCategoryAndScroll} />

        {/* 9. Oferta Especial (Welcome to CLOUD / 10% OFF) */}
        <SpecialOffer />

        {/* 10. Benefícios da Loja */}
        <Benefits />

        {/* 11. Newsletter (Entre para a CLOUD) */}
        <Newsletter />
      </main>

      {/* 12. Footer Completo */}
      <Footer
        onSelectCategory={handleSelectCategoryAndScroll}
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenOrders={() => setIsHelpOpen(true)}
      />

      {/* Interactive Overlays & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          alert('Redirecionando para o ambiente de pagamento seguro CLOUD Pay...');
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        allProducts={FEATURED_PRODUCTS}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isFavorite={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={FEATURED_PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        onSelectCategory={handleSelectCategoryAndScroll}
      />

      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <Toast
        product={toastState.product}
        size={toastState.size}
        isOpen={toastState.open}
        onClose={() => setToastState((prev) => ({ ...prev, open: false }))}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
