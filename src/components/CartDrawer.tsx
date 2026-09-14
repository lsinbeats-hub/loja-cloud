import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 299;
  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'CLOUD10') {
      setDiscountPercent(10);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Cupom inválido. Tente "CLOUD10"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#FFFFFF] h-full shadow-2xl flex flex-col z-10 animate-slide-in">
        {/* Header */}
        <div className="p-5 border-b border-[#F3F4F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-black uppercase tracking-tight text-[#000000]">
              SACOLA DE COMPRAS
            </h3>
            <span className="text-xs bg-[#F3F4F5] text-[#000000] px-2 py-0.5 rounded-full font-bold">
              {items.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#000000] hover:text-[#8A8A8A] transition-colors rounded-full"
            aria-label="Fechar sacola"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#F3F4F5] px-5 py-3 border-b border-[#E5E7EB]/50">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            {freeShippingRemaining > 0 ? (
              <span className="text-[#000000]">
                Faltam <strong className="text-[#176B50] font-black">{formatPrice(freeShippingRemaining)}</strong> para Frete Grátis
              </span>
            ) : (
              <span className="text-[#176B50] font-bold flex items-center gap-1">
                <span>🎉 Parabéns! Você ganhou FRETE GRÁTIS!</span>
              </span>
            )}
            <span className="text-[10px] text-[#8A8A8A]">Meta: R$ 299,00</span>
          </div>
          <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#176B50] transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#F3F4F5]">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#F3F4F5] flex items-center justify-center text-[#8A8A8A] mb-4">
                <Tag className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h4 className="text-base font-bold uppercase text-[#000000] mb-1">
                Sua sacola está vazia
              </h4>
              <p className="text-xs text-[#8A8A8A] max-w-xs mb-6">
                Descubra os novos drops de sneakers e streetwear da CLOUD e monte seu visual.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#000000] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest hover:bg-[#176B50] transition-colors"
              >
                EXPLORAR PRODUTOS
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.product.id}-${item.selectedSize}-${idx}`} className="pt-4 first:pt-0 flex gap-3.5 group">
                {/* Product thumbnail - compact and animated */}
                <div className="w-16 h-16 rounded-md bg-[#F3F4F5] shrink-0 overflow-hidden relative border border-[#E5E7EB]">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-[#000000] tracking-tight">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#8A8A8A] mt-0.5">
                        Tamanho: <strong className="text-[#000000]">{item.selectedSize}</strong>
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                      className="text-[#8A8A8A] hover:text-[#000000] transition-colors p-1"
                      title="Remover item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#E5E7EB]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                        className="px-2 py-1 text-[#000000] hover:bg-[#F3F4F5] transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                        className="px-2 py-1 text-[#000000] hover:bg-[#F3F4F5] transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-bold text-[#000000]">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with totals and checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#F3F4F5] bg-[#FFFFFF] space-y-3">
            {/* Coupon field */}
            {!couponApplied ? (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Cupom (ex: CLOUD10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs uppercase bg-[#F3F4F5] border border-[#E5E7EB] focus:border-[#000000] outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#000000] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider hover:bg-[#176B50] transition-colors"
                >
                  APLICAR
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-between text-xs bg-[#DCEBE5] text-[#176B50] px-3 py-2 font-semibold">
                <span>Cupom CLOUD10 aplicado (-10%)</span>
                <button
                  onClick={() => {
                    setDiscountPercent(0);
                    setCouponApplied(false);
                    setCouponCode('');
                  }}
                  className="underline text-[11px]"
                >
                  Remover
                </button>
              </div>
            )}
            {couponError && <p className="text-[11px] text-red-600">{couponError}</p>}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs pt-1">
              <div className="flex justify-between text-[#8A8A8A]">
                <span>Subtotal</span>
                <span className="font-semibold text-[#000000]">{formatPrice(subtotal)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#176B50]">
                  <span>Desconto (10%)</span>
                  <span className="font-bold">-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#8A8A8A]">
                <span>Frete</span>
                <span className="font-semibold text-[#176B50]">
                  {freeShippingRemaining === 0 ? 'GRÁTIS' : 'Calculado no checkout'}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-[#000000] pt-2 border-t border-[#F3F4F5]">
                <span>TOTAL</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-[#000000] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest hover:bg-[#176B50] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
            >
              <span>FINALIZAR COMPRA</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8A8A8A] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#176B50]" />
              <span>Checkout 100% Criptografado e Seguro</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
