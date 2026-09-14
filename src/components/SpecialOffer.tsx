import React, { useState } from 'react';
import { Check, ArrowRight, Copy } from 'lucide-react';
import { motion } from 'motion/react';

export const SpecialOffer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('CLOUD10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-[#000000] text-[#FFFFFF] py-20 md:py-28 px-4 md:px-8 border-y border-[#1A1A1A] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#176B50]"></span>
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DCEBE5]">
            BENEFÍCIOS EXCLUSIVOS
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] mb-4 text-[#FFFFFF]">
          BEM-VINDO À CLOUD.
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-[#8A8A8A] font-light max-w-lg mb-8 md:mb-10">
          Ganhe <strong className="text-[#FFFFFF] font-semibold">10% OFF</strong> na sua primeira compra.
        </p>

        {/* Form or Success State */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row items-stretch gap-3"
          >
            <input
              type="email"
              required
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 bg-[#111111] text-[#FFFFFF] text-sm placeholder-[#8A8A8A] border border-[#222222] focus:border-[#FFFFFF] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#FFFFFF] text-[#000000] text-xs font-bold uppercase tracking-widest hover:bg-[#176B50] hover:text-[#FFFFFF] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-lg active:scale-95"
            >
              <span>QUERO MEU DESCONTO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <div className="bg-[#111111] border border-[#222222] p-6 max-w-md w-full animate-fade-in text-center">
            <div className="w-10 h-10 rounded-full bg-[#176B50] text-[#FFFFFF] flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight text-[#FFFFFF] mb-1">
              Desconto Liberado!
            </h3>
            <p className="text-xs text-[#8A8A8A] mb-4">
              Use o cupom abaixo no checkout ou na sacola para garantir 10% OFF:
            </p>
            <div
              onClick={handleCopyCode}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#000000] border border-dashed border-[#176B50] text-sm font-mono font-bold tracking-widest text-[#FFFFFF] cursor-pointer hover:bg-[#1A1A1A] transition-colors"
            >
              <span>CLOUD10</span>
              <Copy className="w-4 h-4 text-[#176B50]" />
            </div>
            {copied && (
              <p className="text-[11px] text-[#176B50] font-bold mt-2">
                Código copiado para a área de transferência!
              </p>
            )}
          </div>
        )}

        <p className="text-[11px] text-[#555555] mt-6 tracking-wide">
          Ao se inscrever, você concorda com os Termos de Serviço e Política de Privacidade da CLOUD.
        </p>
      </motion.div>
    </section>
  );
};
