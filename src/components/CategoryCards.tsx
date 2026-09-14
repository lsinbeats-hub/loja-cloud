import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES_DATA } from '../data/mockData';

interface CategoryCardsProps {
  onSelectCategory: (category: string) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({ onSelectCategory }) => {
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
              DESTAQUES
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#000000]">
            EXPLORE A CLOUD
          </h2>
          <p className="text-[#8A8A8A] text-sm md:text-base mt-2 font-normal">
            Encontre seu estilo.
          </p>
        </motion.div>

        {/* 4 Cards Grid with 4:5 aspect ratio and staggered scroll entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              onClick={() => onSelectCategory(item.filterCategory)}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#F3F4F5] aspect-[4/5] flex flex-col justify-end p-6 select-none transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background Image with smooth zoom on hover */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay that darkens smoothly */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/45" />

              {/* Content Box */}
              <div className="relative z-10 text-[#FFFFFF] transform transition-transform duration-300 group-hover:-translate-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#DCEBE5] block mb-1">
                  COLEÇÃO
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-2 text-[#FFFFFF]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F3F4F5]/80 font-normal line-clamp-2 mb-4 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.subtitle}
                </p>

                {/* Discrete CTA: "EXPLORAR" */}
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FFFFFF] border-b border-transparent group-hover:border-[#FFFFFF] pb-0.5 transition-all duration-200">
                  <span>EXPLORAR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
