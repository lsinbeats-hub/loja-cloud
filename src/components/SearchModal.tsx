import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (category: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.subcategory.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const quickTags = ['Sneakers', 'Streetwear', 'Running', 'Hoodie', 'Novo Drop', 'Mulher', 'Homem'];

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] shadow-2xl z-10 overflow-hidden animate-scale-in">
        {/* Search Input Bar */}
        <div className="p-4 md:p-6 border-b border-[#F3F4F5] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8A8A8A]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Digite o que procura (ex: Cloud Runner, Moletom, Sneakers)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base md:text-lg text-[#000000] placeholder-[#8A8A8A] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#8A8A8A] hover:text-[#000000] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold tracking-wider text-[#8A8A8A] hover:text-[#000000] pl-2 border-l border-[#E5E7EB]"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-6 py-3 bg-[#F3F4F5] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#8A8A8A] font-semibold uppercase text-[10px] tracking-wider whitespace-nowrap">
            Sugestões:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setQuery(tag);
              }}
              className="px-2.5 py-1 bg-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF] text-[#000000] text-xs transition-colors rounded-full whitespace-nowrap cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 md:p-6 divide-y divide-[#F3F4F5]">
          {query.trim() && filteredProducts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-sm text-[#000000] font-bold">Nenhum produto encontrado para "{query}"</p>
              <p className="text-xs text-[#8A8A8A] mt-1">
                Tente buscar por "Sneakers", "Runner", "Hoodie" ou explore as categorias.
              </p>
            </div>
          )}

          {filteredProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                onSelectProduct(p);
                onClose();
              }}
              className="py-3 flex items-center gap-4 cursor-pointer group hover:bg-[#F3F4F5]/50 px-2 transition-colors"
            >
              <div className="w-12 h-12 rounded-md border border-[#E5E7EB] bg-[#F3F4F5] shrink-0 overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold text-[#8A8A8A] tracking-wider">
                  {p.category}
                </span>
                <h4 className="text-sm font-bold uppercase text-[#000000] group-hover:text-[#176B50] transition-colors">
                  {p.name}
                </h4>
                <p className="text-xs font-black text-[#000000] mt-0.5">{formatPrice(p.price)}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#000000] group-hover:translate-x-1 transition-all" />
            </div>
          ))}

          {!query.trim() && (
            <div className="py-6 text-center text-xs text-[#8A8A8A]">
              Digite acima para buscar em todo o catálogo CLOUD.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
