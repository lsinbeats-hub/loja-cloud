import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size?: string) => void;
  onQuickView: (product: Product) => void;
  activeFilter?: string;
  onResetFilter?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  activeFilter,
  onResetFilter,
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});
  const [addedItemAnimation, setAddedItemAnimation] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleAddClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const defaultSize = product.sizes[2] || product.sizes[0];
    onAddToCart(product, defaultSize);

    setAddedItemAnimation(product.id);
    setTimeout(() => {
      setAddedItemAnimation(null);
    }, 1500);
  };

  return (
    <section id="produtos" className="w-full py-16 md:py-24 bg-[#FFFFFF] border-t border-[#F3F4F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-0.5 bg-[#176B50]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A8A8A]">
                MAIS VENDIDOS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#000000]">
              OS MAIS DESEJADOS
            </h2>
            <p className="text-[#8A8A8A] text-sm md:text-base mt-2 font-normal">
              Os favoritos da comunidade CLOUD.
            </p>
          </div>

          {activeFilter && activeFilter !== 'TODOS' && (
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <span className="text-xs text-[#8A8A8A]">
                Filtrando por: <strong className="text-[#000000]">{activeFilter}</strong>
              </span>
              <button
                onClick={onResetFilter}
                className="text-xs uppercase font-bold text-[#176B50] hover:underline cursor-pointer"
              >
                Limpar filtro
              </button>
            </div>
          )}
        </motion.div>

        {/* 4 Products Grid on Desktop, 2 on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => {
            const isFav = wishlist.includes(product.id);
            const isHovered = hoveredProduct === product.id;
            const isRecentlyAdded = addedItemAnimation === product.id;
            const currentImgIdx = activeImageIndices[product.id] ?? 0;
            const activeImage = product.images[currentImgIdx] || product.images[0];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => onQuickView(product)}
                className="group relative flex flex-col cursor-pointer select-none bg-[#FFFFFF] p-2 sm:p-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 border border-transparent hover:border-[#F3F4F5]"
              >
                {/* Product Image Frame */}
                <div className="relative w-full aspect-square bg-[#F3F4F5] overflow-hidden rounded-md mb-3">
                  {/* Active Perspective Image with dynamic zoom */}
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badges */}
                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span
                        className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm shadow-sm ${
                          product.badgeType === 'green'
                            ? 'bg-[#176B50] text-[#FFFFFF]'
                            : product.badgeType === 'black'
                            ? 'bg-[#000000] text-[#FFFFFF]'
                            : 'bg-[#FFFFFF] text-[#000000] border border-[#000000]/10'
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110 active:scale-95"
                    aria-label={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                    title={isFav ? 'Remover dos favoritos' : 'Salvar favorito'}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 transition-colors ${
                        isFav
                          ? 'fill-[#176B50] text-[#176B50]'
                          : 'text-[#000000] hover:text-[#176B50]'
                      }`}
                    />
                  </button>

                  {/* Quick View Button (Desktop only on hover) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
                    }}
                    className={`hidden md:flex absolute top-12 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-black items-center justify-center transition-all duration-200 shadow-sm hover:scale-110 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                    title="Ver detalhes"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#000000]" />
                  </button>

                  {/* Add to Bag Reveal Button on Hover (Desktop) */}
                  <div
                    className={`hidden md:block absolute bottom-0 left-0 right-0 p-2.5 z-10 transition-all duration-300 ${
                      isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
                    }`}
                  >
                    <button
                      onClick={(e) => handleAddClick(e, product)}
                      className={`w-full py-2.5 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md rounded-sm ${
                        isRecentlyAdded
                          ? 'bg-[#176B50] text-[#FFFFFF]'
                          : 'bg-[#000000] text-[#FFFFFF] hover:bg-[#222222]'
                      }`}
                    >
                      {isRecentlyAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>ADICIONADO</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>ADICIONAR À SACOLA</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Compact Miniature Thumbnails Selector */}
                {product.images.length > 1 && (
                  <div className="flex items-center gap-1.5 mb-2.5 px-0.5">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndices((prev) => ({ ...prev, [product.id]: idx }));
                        }}
                        onMouseEnter={() => {
                          setActiveImageIndices((prev) => ({ ...prev, [product.id]: idx }));
                        }}
                        className={`w-7 h-7 rounded-sm overflow-hidden border transition-all duration-200 ${
                          currentImgIdx === idx
                            ? 'border-[#000000] ring-1 ring-black scale-105 opacity-100'
                            : 'border-transparent opacity-60 hover:opacity-100 hover:border-[#8A8A8A]'
                        }`}
                        title={`Ver ângulo ${idx + 1}`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Product Metadata */}
                <div className="flex flex-col flex-1 px-0.5">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#8A8A8A] uppercase tracking-wider mb-0.5 font-medium">
                    <span>{product.subcategory}</span>
                  </div>

                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#000000] uppercase tracking-tight leading-snug group-hover:text-[#176B50] transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Pricing */}
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="text-xs sm:text-sm md:text-base font-black text-[#000000]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[11px] sm:text-xs text-[#8A8A8A] line-through font-normal">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Mobile Quick Buy Button */}
                  <div className="mt-2.5 md:hidden">
                    <button
                      onClick={(e) => handleAddClick(e, product)}
                      className={`w-full py-2 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors rounded-sm ${
                        isRecentlyAdded
                          ? 'bg-[#176B50] text-[#FFFFFF]'
                          : 'bg-[#000000] text-[#FFFFFF] active:bg-[#333333]'
                      }`}
                    >
                      {isRecentlyAdded ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>ADICIONADO</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3 h-3" />
                          <span>COMPRAR</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
