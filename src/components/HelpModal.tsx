import React, { useState } from 'react';
import { X, ChevronDown, MessageSquare, Phone, Mail } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'faq' | 'orders';
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose, defaultTab = 'faq' }) => {
  const [activeTab, setActiveTab] = useState<'faq' | 'orders'>(defaultTab);
  const [orderCode, setOrderCode] = useState('');
  const [orderSearched, setOrderSearched] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'Qual o prazo de entrega dos pedidos?',
      a: 'O prazo padrão é de 2 a 5 dias úteis para capitais e até 8 dias úteis para demais regiões do Brasil. Pedidos acima de R$ 299 possuem Frete Grátis expresso.',
    },
    {
      q: 'Como funciona a política de trocas e devoluções?',
      a: 'Você tem até 30 dias corridos a partir da data de entrega para solicitar a troca gratuita ou devolução. O sneaker deve estar na embalagem original sem marcas de uso externo.',
    },
    {
      q: 'Os sneakers CLOUD são originais e possuem garantia?',
      a: 'Sim, somos os fabricantes e proprietários exclusivos da marca CLOUD. Todos os produtos são acompanhados de nota fiscal eletrônica e garantia de 90 dias contra defeitos de fabricação.',
    },
    {
      q: 'Quais formas de pagamento são aceitas?',
      a: 'Aceitamos PIX com 5% de desconto imediato, Cartões de Crédito (Visa, Mastercard, Elo) em até 10x sem juros, Apple Pay e Google Pay.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-xl bg-[#FFFFFF] shadow-2xl z-10 overflow-hidden animate-scale-in">
        <div className="p-6 border-b border-[#F3F4F5] flex items-center justify-between">
          <h3 className="text-lg font-black uppercase tracking-tight text-[#000000]">
            CENTRAL DE AJUDA & ATENDIMENTO
          </h3>
          <button onClick={onClose} className="p-1.5 text-[#000000] hover:text-[#8A8A8A]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#F3F4F5] bg-[#F3F4F5]">
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'faq' ? 'bg-[#FFFFFF] text-[#000000] border-t-2 border-[#000000]' : 'text-[#8A8A8A] hover:text-[#000000]'
            }`}
          >
            Dúvidas Frequentes
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'orders' ? 'bg-[#FFFFFF] text-[#000000] border-t-2 border-[#000000]' : 'text-[#8A8A8A] hover:text-[#000000]'
            }`}
          >
            Rastrear Pedido
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'faq' ? (
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-[#E5E7EB]">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full p-3.5 text-left text-xs font-bold uppercase text-[#000000] flex justify-between items-center"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8A8A8A] transition-transform ${
                        expandedFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === i && (
                    <div className="p-3.5 pt-0 text-xs text-[#555555] leading-relaxed border-t border-[#F3F4F5] bg-[#F3F4F5]/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}

              {/* Direct channels */}
              <div className="mt-6 pt-4 border-t border-[#F3F4F5] grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#F3F4F5] flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#176B50]" />
                  <div>
                    <p className="font-bold text-[#000000]">WhatsApp CLOUD</p>
                    <p className="text-[11px] text-[#8A8A8A]">(11) 98765-4321</p>
                  </div>
                </div>
                <div className="p-3 bg-[#F3F4F5] flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#176B50]" />
                  <div>
                    <p className="font-bold text-[#000000]">E-mail Suporte</p>
                    <p className="text-[11px] text-[#8A8A8A]">ajuda@cloudmove.com</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-[#555555]">
                Digite o código do seu pedido (ex: #CLD-9482) ou o CPF cadastrado para rastrear a entrega em tempo real:
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="#CLD-0000 ou CPF"
                  value={orderCode}
                  onChange={(e) => setOrderCode(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-xs bg-[#F3F4F5] border border-[#E5E7EB] outline-none"
                />
                <button
                  onClick={() => setOrderSearched(true)}
                  className="px-6 py-2.5 bg-[#000000] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider hover:bg-[#176B50]"
                >
                  RASTREAR
                </button>
              </div>

              {orderSearched && (
                <div className="p-4 bg-[#F3F4F5] border border-[#E5E7EB] text-xs space-y-2 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#000000]">PEDIDO #CLD-98421</span>
                    <span className="px-2 py-0.5 bg-[#176B50] text-[#FFFFFF] font-bold text-[10px] rounded">
                      EM TRÂNSITO
                    </span>
                  </div>
                  <p className="text-[#8A8A8A]">Objeto postado e em rota de entrega ao destino.</p>
                  <p className="text-[#000000] font-semibold pt-1">
                    Previsão de entrega: 2 dias úteis
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
