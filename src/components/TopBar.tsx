import React from 'react';
import { MapPin, HelpCircle, Package, User } from 'lucide-react';

interface TopBarProps {
  onOpenStoreLocator: () => void;
  onOpenHelp: () => void;
  onOpenOrders: () => void;
  onOpenAuth: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenStoreLocator,
  onOpenHelp,
  onOpenOrders,
  onOpenAuth,
}) => {
  return (
    <div className="w-full bg-[#FFFFFF] border-b border-[#F3F4F5] text-[#8A8A8A] text-[11px] font-medium tracking-wide h-[30px] flex items-center px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Left subtle slogan / brand presence */}
        <div className="hidden sm:flex items-center space-x-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#176B50]"></span>
          <span className="text-[#000000] font-semibold tracking-wider text-[10px] uppercase">
            CLOUD — VIVA DIFERENTE
          </span>
        </div>

        {/* Right utility items */}
        <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
          <button
            onClick={onOpenStoreLocator}
            className="hover:text-[#000000] transition-colors flex items-center gap-1.5 py-1"
            title="Encontrar lojas físicas"
          >
            <MapPin className="w-3 h-3 text-[#8A8A8A]" />
            <span>Localizador de lojas</span>
          </button>

          <span className="text-[#D1D5DB]">|</span>

          <button
            onClick={onOpenHelp}
            className="hover:text-[#000000] transition-colors flex items-center gap-1.5 py-1"
          >
            <HelpCircle className="w-3 h-3 text-[#8A8A8A]" />
            <span>Ajuda</span>
          </button>

          <span className="text-[#D1D5DB]">|</span>

          <button
            onClick={onOpenOrders}
            className="hover:text-[#000000] transition-colors flex items-center gap-1.5 py-1"
          >
            <Package className="w-3 h-3 text-[#8A8A8A]" />
            <span>Pedidos</span>
          </button>

          <span className="text-[#D1D5DB]">|</span>

          <button
            onClick={onOpenAuth}
            className="hover:text-[#000000] text-[#000000] font-semibold transition-colors flex items-center gap-1.5 py-1"
          >
            <User className="w-3 h-3 text-[#000000]" />
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
