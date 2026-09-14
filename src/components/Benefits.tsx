import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: Truck,
      title: 'FRETE GRÁTIS',
      desc: 'Acima de R$ 299',
    },
    {
      icon: RotateCcw,
      title: 'TROCA FÁCIL',
      desc: 'Até 30 dias',
    },
    {
      icon: ShieldCheck,
      title: 'PAGAMENTO SEGURO',
      desc: 'Compra protegida',
    },
    {
      icon: Headphones,
      title: 'ATENDIMENTO',
      desc: 'Estamos aqui para ajudar',
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-14 md:py-20 border-b border-[#F3F4F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col items-center text-center p-2 group transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* Minimalist Linear Icon Frame */}
                <div className="w-12 h-12 mb-4 rounded-full bg-[#F3F4F5] flex items-center justify-center text-[#000000] group-hover:bg-[#176B50] group-hover:text-[#FFFFFF] transition-colors duration-300">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Benefit Title */}
                <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-[#000000] mb-1">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-[#8A8A8A] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
