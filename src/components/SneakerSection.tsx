import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SNEAKER_CATEGORIES } from '../data/mockData';

interface SneakerSectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const SneakerSection: React.FC<SneakerSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-0.5 bg-[#176B50]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A8A8A]">
              LABORATÓRIO SNEAKERS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#000000]">
            ENCONTRE SEU PRÓXIMO SNEAKER
          </h2>
          <p className="text-[#8A8A8A] text-sm md:text-base mt-2 font-normal">
            Performance, conforto e estilo em um só lugar.
          </p>
        </motion.div>

        {/* 3 Categories Grid with staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SNEAKER_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              onClick={() => onSelectCategory('Sneakers')}
              className="group flex flex-col bg-[#FFFFFF] cursor-pointer select-none"
            >
              {/* Image Container with smooth hover */}
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] bg-[#F3F4F5] overflow-hidden mb-5 rounded-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />

                <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                  {cat.count}
                </span>
              </div>

              {/* Text metadata */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#000000] group-hover:text-[#176B50] transition-colors">
                    {cat.name}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-[#8A8A8A] leading-relaxed mb-4 flex-1">
                  {cat.description}
                </p>

                {/* CTA "VER PRODUTOS" */}
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#000000] group-hover:text-[#176B50] pt-2 border-t border-[#F3F4F5] transition-colors">
                  <span>VER PRODUTOS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
