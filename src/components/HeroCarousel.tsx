import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';

interface HeroCarouselProps {
  onShopNow: () => void;
  onExploreCollection: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onShopNow,
  onExploreCollection,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const active = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full h-[65vh] md:h-[75vh] min-h-[500px] max-h-[820px] bg-[#000000] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Campanha Principal CLOUD"
    >
      {/* Background images with crossfade */}
      {HERO_SLIDES.map((slide, index) => {
        const isCurrent = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title.replace('\n', ' ')}
              className="w-full h-full object-cover object-center scale-100 md:scale-[1.02] transition-transform duration-[7000ms] ease-out"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Cinematic subtle contrast gradient (allows full photography visibility while guaranteeing WCAG text legibility) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 md:hidden" />
          </div>
        );
      })}

      {/* Hero Content Overlay */}
      <div className="relative z-20 w-[1281px] max-w-full h-[450px] mx-auto px-4 md:px-8 flex flex-col justify-center">
        <div key={currentSlide} className="max-w-xl text-[#FFFFFF] mt-6 md:mt-0 animate-fade-in">
          {/* Tagline / Subtitle */}
          <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
            <span className="w-2.5 h-2.5 bg-[#176B50] inline-block rounded-full animate-ping"></span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#FFFFFF]">
              {active.tag}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[-0.05em] leading-[0.95] mb-4 md:mb-6 whitespace-pre-line text-[#FFFFFF] drop-shadow-md">
            {active.title}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-[#F3F4F5]/95 max-w-md font-normal leading-relaxed mb-8">
            {active.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
            <button
              onClick={onShopNow}
              className="h-12 px-8 bg-[#000000] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] border border-[#000000] hover:border-[#FFFFFF] hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl text-center flex items-center justify-center cursor-pointer"
            >
              {active.ctaPrimary}
            </button>

            <button
              onClick={onExploreCollection}
              className="h-12 px-8 bg-transparent text-[#FFFFFF] font-bold text-xs uppercase tracking-widest border border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-105 active:scale-95 transition-all duration-200 text-center flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
            >
              {active.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Manual slide nav arrows (desktop) */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-2">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-black/40 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-black/40 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Footer Carousel Indicator: "01 / 03" with progress bars */}
      <div className="absolute bottom-6 left-0 right-0 z-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Numerical indicator: "01 / 03" */}
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#FFFFFF] font-mono select-none">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>

          {/* Progress bars */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group p-1"
                aria-label={`Ir para slide ${idx + 1}`}
              >
                <div
                  className={`h-1 transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? 'w-10 bg-[#FFFFFF]'
                      : 'w-4 bg-white/40 group-hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Subtle audio / lifestyle tag on right */}
        <div className="hidden sm:block text-right">
          <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
            SEASON 2026 • GLOBAL DROP
          </p>
        </div>
      </div>
    </section>
  );
};
