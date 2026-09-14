import React from 'react';
import { X, MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/mockData';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreLocatorModal: React.FC<StoreLocatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-xl bg-[#FFFFFF] shadow-2xl z-10 overflow-hidden animate-scale-in">
        <div className="p-6 border-b border-[#F3F4F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#176B50]" />
            <h3 className="text-lg font-black uppercase tracking-tight text-[#000000]">
              LOCALIZADOR DE LOJAS CLOUD
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-[#000000] hover:text-[#8A8A8A]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto divide-y divide-[#F3F4F5]">
          {STORE_LOCATIONS.map((store, idx) => (
            <div key={idx} className="pt-4 first:pt-0">
              <h4 className="text-sm font-bold uppercase text-[#000000] tracking-tight mb-2">
                {store.name}
              </h4>
              <div className="space-y-1 text-xs text-[#555555]">
                <p className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-[#8A8A8A] shrink-0" />
                  <span>{store.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#8A8A8A] shrink-0" />
                  <span>{store.hours}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#8A8A8A] shrink-0" />
                  <span>{store.phone}</span>
                </p>
              </div>

              <div className="mt-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#176B50] hover:underline"
                >
                  <span>Ver rotas no Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#F3F4F5] text-center text-xs text-[#8A8A8A]">
          Experimente nossos sneakers em uma de nossas flagships com atendimento especializado.
        </div>
      </div>
    </div>
  );
};
