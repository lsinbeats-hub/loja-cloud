import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import {
  PixIcon,
  MastercardIcon,
  VisaIcon,
  EloIcon,
  BoletoIcon,
  ApplePayIcon,
  GooglePayIcon,
  AmexIcon,
} from './PaymentIcons';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenStoreLocator: () => void;
  onOpenHelp: () => void;
  onOpenOrders: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenStoreLocator,
  onOpenHelp,
  onOpenOrders,
}) => {
  return (
    <footer className="w-full bg-[#FFFFFF] text-[#000000] border-t border-[#F3F4F5] pt-16 pb-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-7xl mx-auto px-4 md:px-8"
      >
        {/* Main 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="font-black text-2xl tracking-tighter uppercase text-[#000000]">
                CLOUD
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#176B50]"></span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#8A8A8A] mb-4">
              Viva diferente.
            </p>
            <p className="text-xs text-[#8A8A8A] leading-relaxed max-w-xs">
              Moda contemporânea, silhuetas icônicas e cultura urbana projetadas para quem define a própria cadência.
            </p>
          </div>

          {/* Col 2: COMPRE */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-widest text-[#000000] mb-4">
              COMPRE
            </h5>
            <ul className="space-y-2.5 text-xs text-[#8A8A8A]">
              {['Mulher', 'Homem', 'Sneakers', 'Streetwear', 'Novidades', 'Ofertas'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-[#000000] transition-colors cursor-pointer text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: ATENDIMENTO */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-widest text-[#000000] mb-4">
              ATENDIMENTO
            </h5>
            <ul className="space-y-2.5 text-xs text-[#8A8A8A]">
              <li>
                <button
                  onClick={onOpenHelp}
                  className="hover:text-[#000000] transition-colors cursor-pointer text-left"
                >
                  Central de ajuda
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHelp}
                  className="hover:text-[#000000] transition-colors cursor-pointer text-left"
                >
                  Trocas e devoluções
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenOrders}
                  className="hover:text-[#000000] transition-colors cursor-pointer text-left"
                >
                  Rastrear pedido
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHelp}
                  className="hover:text-[#000000] transition-colors cursor-pointer text-left"
                >
                  Formas de pagamento
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHelp}
                  className="hover:text-[#000000] transition-colors cursor-pointer text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: SOBRE */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-widest text-[#000000] mb-4">
              SOBRE
            </h5>
            <ul className="space-y-2.5 text-xs text-[#8A8A8A]">
              <li>
                <span className="hover:text-[#000000] transition-colors cursor-pointer">
                  Nossa história
                </span>
              </li>
              <li>
                <button
                  onClick={onOpenStoreLocator}
                  className="hover:text-[#000000] transition-colors cursor-pointer text-left"
                >
                  Lojas
                </button>
              </li>
              <li>
                <span className="hover:text-[#000000] transition-colors cursor-pointer">
                  Carreiras
                </span>
              </li>
              <li>
                <span className="hover:text-[#000000] transition-colors cursor-pointer">
                  Privacidade
                </span>
              </li>
              <li>
                <span className="hover:text-[#000000] transition-colors cursor-pointer">
                  Termos
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: REDES SOCIAIS */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-widest text-[#000000] mb-4">
              REDES SOCIAIS
            </h5>
            <ul className="space-y-2.5 text-xs text-[#8A8A8A]">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#000000] flex items-center gap-2 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#000000] flex items-center gap-2 transition-colors"
                >
                  <span className="font-bold text-xs tracking-tighter">TT</span>
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#000000] flex items-center gap-2 transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#000000] flex items-center gap-2 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>X / Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Methods */}
        <div className="pt-8 border-t border-[#F3F4F5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8A8A]">
          <p>© 2026 CLOUD. Todos os direitos reservados.</p>

          {/* Payment Method Badges with authentic icons */}
          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-2 text-[11px]">
            <div
              title="Pix - Pagamento Instantâneo"
              aria-label="Pix"
              className="h-7 w-11 sm:h-7.5 sm:w-12 bg-[#FFFFFF] border border-[#E5E7EB] rounded flex items-center justify-center p-1 shadow-xs hover:border-[#000000] hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <PixIcon className="h-full w-auto max-h-[18px] max-w-full" />
            </div>
            <div
              title="Mastercard"
              aria-label="Mastercard"
              className="h-7 w-11 sm:h-7.5 sm:w-12 bg-[#FFFFFF] border border-[#E5E7EB] rounded flex items-center justify-center p-1 shadow-xs hover:border-[#000000] hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <MastercardIcon className="h-full w-auto max-h-[18px] max-w-full" />
            </div>
            <div
              title="Visa"
              aria-label="Visa"
              className="h-7 w-11 sm:h-7.5 sm:w-12 bg-[#FFFFFF] border border-[#E5E7EB] rounded flex items-center justify-center p-1 shadow-xs hover:border-[#000000] hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <VisaIcon className="h-full w-auto max-h-[15px] max-w-full" />
            </div>
            <div
              title="Elo"
              aria-label="Elo"
              className="h-7 w-11 sm:h-7.5 sm:w-12 bg-[#FFFFFF] border border-[#E5E7EB] rounded flex items-center justify-center p-1 shadow-xs hover:border-[#000000] hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <EloIcon className="h-full w-auto max-h-[18px] max-w-full" />
            </div>
            <div
              title="American Express"
              aria-label="American Express"
              className="h-7 w-11 sm:h-7.5 sm:w-12 bg-[#FFFFFF] border border-[#E5E7EB] rounded flex items-center justify-center p-1 shadow-xs hover:border-[#000000] hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <AmexIcon className="h-full w-auto max-h-[18px] max-w-full" />
            </div>
            <div
              title="Boleto Bancário"
              aria-label="Boleto Bancário"
              className="h-7 w-11 sm:h-7.5 sm:w-12 bg-[#FFFFFF] border border-[#E5E7EB] rounded flex items-center justify-center p-1 shadow-xs hover:border-[#000000] hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <BoletoIcon className="h-full w-auto max-h-[18px] max-w-full" />
            </div>
            <div
              title="Apple Pay"
              aria-label="Apple Pay"
              className="h-7 w-11 sm:h-7.5 sm:w-12 bg-[#FFFFFF] border border-[#E5E7EB] rounded flex items-center justify-center p-1 shadow-xs hover:border-[#000000] hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <ApplePayIcon className="h-full w-auto max-h-[18px] max-w-full" />
            </div>
            <div
              title="Google Pay"
              aria-label="Google Pay"
              className="h-7 w-11 sm:h-7.5 sm:w-12 bg-[#FFFFFF] border border-[#E5E7EB] rounded flex items-center justify-center p-1 shadow-xs hover:border-[#000000] hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default select-none"
            >
              <GooglePayIcon className="h-full w-auto max-h-[18px] max-w-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
