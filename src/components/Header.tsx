import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  onSelectCategory: (category: string) => void;
  activeCategory?: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAuth,
  onSelectCategory,
  activeCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickSearchText, setQuickSearchText] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Mulher', id: 'Mulher' },
    { label: 'Homem', id: 'Homem' },
    { label: 'Sneakers', id: 'Sneakers' },
    { label: 'Streetwear', id: 'Streetwear' },
    { label: 'Novidades', id: 'Novidades' },
    { label: 'Ofertas', id: 'Ofertas', badge: true },
  ];

  const handleNavClick = (id: string) => {
    onSelectCategory(id);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearchText.trim()) {
      onSelectCategory(quickSearchText.trim());
      setQuickSearchText('');
    } else {
      onOpenSearch();
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-[61px] transition-all duration-300 bg-[#FFFFFF] flex items-center ${
          isScrolled
            ? 'shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-[#E5E7EB]'
            : 'border-b border-[#F3F4F5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full h-full flex items-center justify-between gap-4">
          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 -ml-1 text-[#000000] hover:text-[#176B50] transition-colors rounded-full active:scale-95"
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenSearch}
              className="p-1.5 text-[#000000] hover:text-[#176B50] transition-colors rounded-full active:scale-95"
              aria-label="Pesquisar"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Logo CLOUD */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory('TODOS');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-1 transition-transform duration-200 hover:scale-[1.02] active:scale-95"
            >
              <span className="font-black text-2xl md:text-3xl tracking-[-0.07em] uppercase text-[#000000] select-none">
                CLOUD
              </span>
              <span className="w-2 h-2 rounded-full bg-[#176B50] mb-2 inline-block transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#12543e]"></span>
            </a>
          </div>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 text-[13px] font-semibold tracking-tight transition-colors duration-200 group flex items-center gap-1.5 ${
                    isActive ? 'text-[#000000]' : 'text-[#555555] hover:text-[#000000]'
                  }`}
                >
                  <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded bg-[#176B50] text-[#FFFFFF] leading-none animate-pulse">
                      OFERTA
                    </span>
                  )}
                  {/* Animated underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#000000] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right utility icons & search */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            {/* Desktop search bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center relative transition-all duration-300 group"
            >
              <input
                type="text"
                placeholder="Buscar sneakers, roupas..."
                value={quickSearchText}
                onChange={(e) => setQuickSearchText(e.target.value)}
                className="w-48 sm:w-60 md:w-72 lg:w-[450px] h-[32px] pl-9 pr-8 text-xs bg-[#F3F4F5] hover:bg-[#EAEBED] focus:bg-[#FFFFFF] text-[#000000] placeholder-[#8A8A8A] rounded-full border border-transparent focus:border-[#000000] shadow-none focus:shadow-sm outline-none transition-all duration-200"
              />
              <Search
                onClick={onOpenSearch}
                className="w-4 h-4 text-[#8A8A8A] absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer group-hover:text-[#000000] transition-colors"
              />
              {quickSearchText && (
                <button
                  type="button"
                  onClick={() => setQuickSearchText('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#8A8A8A] hover:text-[#000000]"
                >
                  ✕
                </button>
              )}
            </form>

            {/* Account */}
            <button
              onClick={onOpenAuth}
              className="hidden sm:flex p-2 text-[#000000] hover:text-[#176B50] hover:bg-[#F3F4F5] rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Minha Conta"
              title="Minha Conta"
            >
              <User className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#000000] hover:text-[#176B50] hover:bg-[#F3F4F5] rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Favoritos"
              title="Favoritos"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#176B50] text-[#FFFFFF] text-[10px] font-black rounded-full flex items-center justify-center animate-badge-bounce shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart / Sacola */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#000000] hover:text-[#176B50] hover:bg-[#F3F4F5] rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Sacola de Compras"
              title="Sacola"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#000000] text-[#FFFFFF] text-[10px] font-black rounded-full flex items-center justify-center animate-badge-bounce shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-xs bg-[#FFFFFF] h-full shadow-2xl flex flex-col z-10 animate-slide-in">
            {/* Drawer header */}
            <div className="p-4 border-b border-[#F3F4F5] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tighter uppercase">CLOUD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#176B50]"></span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#000000] hover:text-[#8A8A8A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search in mobile drawer */}
            <div className="p-4 border-b border-[#F3F4F5]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar na CLOUD..."
                  value={quickSearchText}
                  onChange={(e) => setQuickSearchText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearchSubmit(e);
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-[#F3F4F5] text-[#000000] rounded-md outline-none"
                />
                <Search className="w-4 h-4 text-[#8A8A8A] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex-1 overflow-y-auto py-4 px-4 divide-y divide-[#F3F4F5]">
              <div className="space-y-1 pb-4">
                <p className="text-[11px] font-bold text-[#8A8A8A] uppercase tracking-wider mb-2">
                  Categorias
                </p>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full flex items-center justify-between py-3 text-base font-medium text-[#000000] hover:text-[#176B50] text-left transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#176B50] text-white">
                        OFERTA
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-[#8A8A8A]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Utility links inside mobile menu */}
              <div className="pt-4 space-y-2">
                <p className="text-[11px] font-bold text-[#8A8A8A] uppercase tracking-wider mb-2">
                  Minha Conta & Ajuda
                </p>
                <button
                  onClick={() => {
                    onOpenAuth();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-sm text-[#000000] font-medium flex items-center gap-2"
                >
                  <User className="w-4 h-4 text-[#8A8A8A]" />
                  <span>Entrar / Cadastrar</span>
                </button>
                <button
                  onClick={() => {
                    onOpenWishlist();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-sm text-[#000000] font-medium flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#8A8A8A]" />
                  <span>Favoritos ({wishlistCount})</span>
                </button>
              </div>
            </div>

            {/* Drawer footer info */}
            <div className="p-4 bg-[#F3F4F5] text-xs text-[#8A8A8A]">
              <p className="font-semibold text-[#000000] mb-1">CLOUD — MOVE DIFFERENT</p>
              <p>Frete grátis para todo o Brasil acima de R$ 299.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
