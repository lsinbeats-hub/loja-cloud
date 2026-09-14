import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface EditorialBannerProps {
  onExploreCollection: () => void;
}

export const EditorialBanner: React.FC<EditorialBannerProps> = ({ onExploreCollection }) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full h-[480px] md:h-[620px] bg-[#000000] overflow-hidden group rounded-lg md:rounded-xl shadow-lg"
        >
          {/* Streetwear Campaign Image */}
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=85"
            alt="Campanha Editorial CLOUD Streetwear"
            className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
            loading="lazy"
          />

          {/* High-end Editorial Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent md:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />

          {/* Editorial Content */}
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-6 md:p-16 text-[#FFFFFF] z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#176B50]"></span>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#DCEBE5]">
                  MANIFESTO CLOUD
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[-0.05em] leading-[0.92] mb-4 text-[#FFFFFF] drop-shadow-sm whitespace-pre-line">
                SEU ESTILO.
                <br />
                SUAS REGRAS.
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-[#F3F4F5]/90 font-light mb-8 max-w-md leading-relaxed">
                Não siga tendências. Crie as suas.
              </p>

              {/* Button */}
              <div>
                <button
                  onClick={onExploreCollection}
                  className="h-12 px-8 bg-[#FFFFFF] text-[#000000] font-bold text-xs uppercase tracking-widest hover:bg-[#176B50] hover:text-[#FFFFFF] transition-all duration-300 shadow-xl inline-flex items-center gap-2 cursor-pointer group/btn"
                >
                  <span>CONHEÇA A COLEÇÃO</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
