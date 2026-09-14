import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PromoBarProps {
  onPromoClick?: () => void;
}

export const PromoBar: React.FC<PromoBarProps> = ({ onPromoClick }) => {
  return (
    <div
      onClick={onPromoClick}
      className="w-full bg-[#000000] text-[#FFFFFF] py-2 px-4 cursor-pointer hover:bg-[#111111] transition-colors group select-none relative z-30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center relative text-center">
        <div className="flex items-center gap-2 text-xs md:text-[13px] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#176B50] hidden sm:inline-block animate-pulse" />
          <span>FRETE GRÁTIS ACIMA DE R$ 299 • 10% OFF NA PRIMEIRA COMPRA</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};
