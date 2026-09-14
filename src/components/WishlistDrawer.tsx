import React from 'react';
import { X, Trash2, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  allProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size?: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  allProducts,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const favoritedProducts = allProducts.filter((p) => wishlistIds.includes(p.id));

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FFFFFF] h-full shadow-2xl flex flex-col z-10 animate-slide-in">
        <div className="p-5 border-b border-[#F3F4F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 fill-[#176B50] text-[#176B50]" />
            <h3 className="text-base font-black uppercase tracking-tight text-[#000000]">
              MEUS FAVORITOS ({favoritedProducts.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#000000] hover:text-[#8A8A8A] transition-colors rounded-full"
            aria-label="Fechar favoritos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#F3F4F5]">
          {favoritedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center text-[#8A8A8A] mb-4">
                <Heart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h4 className="text-base font-bold uppercase text-[#000000] mb-1">
                Nenhum favorito salvo
              </h4>
              <p className="text-xs text-[#8A8A8A] max-w-xs mb-6">
                Clique no ícone de coração nos produtos para salvar itens que você deseja garantir depois.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#000000] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest hover:bg-[#176B50] transition-colors"
              >
                DESCOBRIR PRODUTOS
              </button>
            </div>
          ) : (
            favoritedProducts.map((product) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-3.5 group">
                <div className="w-16 h-16 rounded-md bg-[#F3F4F5] shrink-0 overflow-hidden border border-[#E5E7EB]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-[#000000]">
                        {product.name}
                      </h4>
                      <p className="text-xs font-black text-[#000000] mt-1">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="text-[#8A8A8A] hover:text-[#000000] transition-colors p-1"
                      title="Remover"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, product.sizes[0]);
                    }}
                    className="mt-2 w-full py-2 bg-[#000000] text-[#FFFFFF] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#176B50] transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>MOVER PARA SACOLA</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
