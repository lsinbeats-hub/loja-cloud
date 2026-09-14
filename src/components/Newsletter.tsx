import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#F3F4F5] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#000000] mb-3">
          ENTRE PARA A CLOUD
        </h3>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-[#8A8A8A] font-normal mb-8 leading-relaxed">
          Receba novidades, lançamentos e ofertas exclusivas em primeira mão.
        </p>

        {/* Form or Confirmation */}
        {!isSubscribed ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-2.5 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 pl-11 bg-[#FFFFFF] text-sm text-[#000000] placeholder-[#8A8A8A] border border-[#E5E7EB] focus:border-[#000000] focus:outline-none transition-colors"
              />
              <Mail className="w-4 h-4 text-[#8A8A8A] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button
              type="submit"
              className="px-8 py-3.5 bg-[#000000] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest hover:bg-[#176B50] transition-colors duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              INSCREVER
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#176B50] px-6 py-3.5 text-[#176B50] text-sm font-bold animate-fade-in shadow-sm">
            <Check className="w-4 h-4" />
            <span>Inscrição realizada com sucesso! Bem-vindo(a) à comunidade CLOUD.</span>
          </div>
        )}

        <p className="text-[11px] text-[#8A8A8A] mt-4">
          Respeitamos sua privacidade. Cancele a qualquer momento com 1 clique.
        </p>
      </motion.div>
    </section>
  );
};
