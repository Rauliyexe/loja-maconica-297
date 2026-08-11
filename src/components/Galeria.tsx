import React, { useState } from 'react';
import { GALLERY_DATA, GalleryItem } from '../data/mockData';
import { Camera, X, Maximize2 } from 'lucide-react';
import { SectionConstellations } from './SectionConstellations';

export const Galeria: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Todos', 'História', 'Sede', 'Eventos', 'Confraternizações', 'Ações Sociais'];

  const filteredItems = activeCategory === 'Todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="relative py-28 w-full bg-masonic-void border-t border-masonic-gold/20 overflow-hidden">
      {/* Zodiac Constellations for Galeria: Aquário & Peixes */}
      <SectionConstellations leftZodiacId="aquarius" rightZodiacId="pisces" />
      <div className="absolute inset-0 stars-bg pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-masonic-gold/30 bg-masonic-gold/10 text-masonic-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>ACERVO VISUAL INSTITUCIONAL</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            GALERIA <span className="gold-text-gradient font-black">FOTOGRÁFICA</span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-6" />

          <p className="font-serif text-sm sm:text-base text-masonic-ivory/80 italic leading-relaxed">
            Registros da nossa arquitetura, solenidades, recepções fraternais e trabalhos de caridade.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-masonic-gold text-masonic-void font-bold shadow-gold-glow'
                  : 'bg-masonic-slate/80 text-masonic-ivory/70 border border-masonic-gold/20 hover:border-masonic-gold/50 hover:text-masonic-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="masonic-frame relative group cursor-pointer overflow-hidden rounded-sm border border-masonic-gold/20 bg-masonic-card aspect-[4/3] shadow-card-lux"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-masonic-void via-masonic-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 bg-masonic-gold/20 border border-masonic-gold rounded-full text-masonic-gold">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-masonic-gold tracking-widest uppercase block mb-1">
                    {item.category} • {item.date}
                  </span>
                  <h3 className="font-serif text-base font-bold text-masonic-ivory">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-masonic-void/95 backdrop-blur-xl animate-fade-in">
          <div className="relative max-w-4xl w-full bg-masonic-card border border-masonic-gold/40 rounded-sm p-6 shadow-2xl">
            
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 p-2 text-masonic-ivory hover:text-masonic-gold transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-hidden rounded-sm border border-masonic-gold/20 mb-4 max-h-[70vh]">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-masonic-gold/20 pt-4 gap-2">
              <div>
                <span className="font-mono text-xs text-masonic-gold uppercase tracking-widest block">
                  {activeLightboxItem.category} • REGISTRO {activeLightboxItem.date}
                </span>
                <h3 className="font-serif text-xl font-bold text-masonic-ivory">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs text-masonic-ivory/80 font-sans mt-1">
                  {activeLightboxItem.description}
                </p>
              </div>

              <button
                onClick={() => setActiveLightboxItem(null)}
                className="px-4 py-2 border border-masonic-gold/50 text-masonic-gold font-serif text-xs uppercase tracking-widest hover:bg-masonic-gold hover:text-masonic-void transition-colors shrink-0"
              >
                Fechar Visualização
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
