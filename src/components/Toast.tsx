import React, { useEffect } from 'react';
import { Check, ShoppingBag, X } from 'lucide-react';
import { Product } from '../types';

interface ToastProps {
  product: Product | null;
  size: string;
  isOpen: boolean;
  onClose: () => void;
  onOpenCart: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  product,
  size,
  isOpen,
  onClose,
  onOpenCart,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#FFFFFF] border-2 border-[#000000] shadow-2xl p-4 animate-slide-up flex gap-3 items-center">
      {/* Product preview thumbnail */}
      <div className="w-14 h-14 bg-[#F3F4F5] shrink-0 overflow-hidden relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-[#176B50] p-0.5 text-white">
          <Check className="w-3 h-3" />
        </div>
      </div>

      {/* Message & Product info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#176B50] uppercase tracking-wider">
          <span>Produto adicionado à sacola</span>
        </div>
        <h5 className="text-xs font-black uppercase text-[#000000] truncate">
          {product.name}
        </h5>
        <p className="text-[11px] text-[#8A8A8A]">
          Tam: <strong className="text-[#000000]">{size}</strong> •{' '}
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-1.5 shrink-0">
        <button
          onClick={() => {
            onClose();
            onOpenCart();
          }}
          className="px-3 py-1.5 bg-[#000000] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-wider hover:bg-[#176B50] transition-colors flex items-center gap-1"
        >
          <ShoppingBag className="w-3 h-3" />
          <span>VER</span>
        </button>
        <button
          onClick={onClose}
          className="p-1 text-[#8A8A8A] hover:text-[#000000] self-end"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
