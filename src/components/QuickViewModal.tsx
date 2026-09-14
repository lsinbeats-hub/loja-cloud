import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check, Shield, Truck } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
  isFavorite: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isFavorite,
  onToggleWishlist,
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [sizeError, setSizeError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[0];

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleAdd = () => {
    if (!currentSize) {
      setSizeError(true);
      return;
    }
    onAddToCart(product, currentSize);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FFFFFF] shadow-2xl z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white text-[#000000] rounded-full shadow-md transition-all"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Column */}
        <div className="md:w-1/2 bg-[#F3F4F5] p-6 flex flex-col justify-between">
          <div className="relative aspect-square w-full overflow-hidden bg-white/40">
            <img
              src={product.images[selectedImageIdx] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />

            {product.badge && (
              <span className="absolute top-3 left-3 bg-[#176B50] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnail switcher - compact with animations */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 mt-4 justify-center items-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-md bg-[#FFFFFF] border-2 overflow-hidden transition-all duration-200 cursor-pointer ${
                    selectedImageIdx === idx
                      ? 'border-[#000000] scale-105 shadow-sm ring-1 ring-black/10'
                      : 'border-[#E5E7EB] opacity-60 hover:opacity-100 hover:scale-105 hover:border-[#8A8A8A]'
                  }`}
                  aria-label={`Ver foto ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-1 text-[11px] font-bold text-[#8A8A8A] uppercase tracking-wider">
              <span>{product.category} • {product.subcategory}</span>
              <button
                onClick={() => onToggleWishlist(product.id)}
                className="hover:text-[#176B50] flex items-center gap-1"
                title="Favoritar"
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorite ? 'fill-[#176B50] text-[#176B50]' : 'text-[#8A8A8A]'
                  }`}
                />
              </button>
            </div>

            <h2 className="text-xl md:text-2xl font-black uppercase text-[#000000] tracking-tight mb-2">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-xl font-black text-[#000000]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#8A8A8A] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-xs text-[#555555] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#000000]">
                  Selecione o Tamanho
                </label>
                <span className="text-[11px] text-[#8A8A8A] underline cursor-pointer hover:text-black">
                  Guia de Medidas
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`py-2 text-xs font-bold transition-all border ${
                      currentSize === size
                        ? 'bg-[#000000] text-[#FFFFFF] border-[#000000]'
                        : 'bg-[#FFFFFF] text-[#000000] border-[#E5E7EB] hover:border-[#000000]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="text-[11px] text-red-600 mt-1">
                  Por favor selecione um tamanho.
                </p>
              )}
            </div>

            {/* Specs */}
            {product.specs && (
              <div className="mb-6 bg-[#F3F4F5] p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A] mb-2">
                  Especificações Técnicas
                </p>
                <ul className="space-y-1">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-[11px] text-[#444444] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#176B50]"></span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Button & Guarantees */}
          <div className="pt-4 border-t border-[#F3F4F5] space-y-3">
            <button
              onClick={handleAdd}
              disabled={justAdded}
              className={`w-full py-3.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                justAdded
                  ? 'bg-[#176B50] text-[#FFFFFF]'
                  : 'bg-[#000000] text-[#FFFFFF] hover:bg-[#222222]'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>PRODUTO ADICIONADO!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADICIONAR À SACOLA</span>
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-2 text-[10px] text-[#8A8A8A] pt-1">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#176B50]" />
                <span>Frete Grátis acima R$ 299</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#176B50]" />
                <span>Troca Grátis até 30 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
