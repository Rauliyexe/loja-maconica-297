import React, { useState } from 'react';
import { ZODIAC_CONSTELLATIONS } from '../data/constellationsData';
import { useGuaranesiaSky } from '../context/GuaranesiaSkyContext';
import { Compass, ChevronLeft, ChevronRight, MapPin, Eye, Radio, Star } from 'lucide-react';

export const ZodiacSkyAtlas: React.FC = () => {
  const { skyState, setIsObservatoryModalOpen } = useGuaranesiaSky();
  const [selectedId, setSelectedId] = useState<string>('libra');
  const [isAutoSyncWithZenith, setIsAutoSyncWithZenith] = useState(false);

  const activeConstellation =
    ZODIAC_CONSTELLATIONS.find((c) => c.id === (isAutoSyncWithZenith && skyState.culminatingConstellation.isZodiac ? skyState.culminatingConstellation.id : selectedId)) ||
    ZODIAC_CONSTELLATIONS[6];

  const posInGuaranesia = skyState.zodiacPositions[activeConstellation.id];

  const handleNext = () => {
    setIsAutoSyncWithZenith(false);
    const currentIndex = ZODIAC_CONSTELLATIONS.findIndex((c) => c.id === activeConstellation.id);
    const nextIndex = (currentIndex + 1) % ZODIAC_CONSTELLATIONS.length;
    setSelectedId(ZODIAC_CONSTELLATIONS[nextIndex].id);
  };

  const handlePrev = () => {
    setIsAutoSyncWithZenith(false);
    const currentIndex = ZODIAC_CONSTELLATIONS.findIndex((c) => c.id === activeConstellation.id);
    const prevIndex = (currentIndex - 1 + ZODIAC_CONSTELLATIONS.length) % ZODIAC_CONSTELLATIONS.length;
    setSelectedId(ZODIAC_CONSTELLATIONS[prevIndex].id);
  };

  const handleSyncZenith = () => {
    setIsAutoSyncWithZenith(true);
    if (skyState.culminatingConstellation.isZodiac) {
      setSelectedId(skyState.culminatingConstellation.id);
    }
  };

  return (
    <section id="zodiaco" className="relative py-28 w-full bg-masonic-dark border-t border-masonic-gold/20 overflow-hidden">
      
      {/* Background Starfield */}
      <div className="absolute inset-0 stars-bg pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-masonic-gold/30 bg-masonic-gold/10 text-masonic-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-masonic-gold" />
            <span>ECOSSISTEMA CELESTE • GUARANÉSIA - MG</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            O ZODÍACO & AS <span className="gold-text-gradient font-black">ESTRELAS</span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-6" />

          <p className="font-serif text-sm sm:text-base text-masonic-ivory/80 italic leading-relaxed mb-6">
            As doze constelações zodiacais sincronizadas com a coordenada exata de <strong>Guaranésia (21° 17' 53" S • 46° 48' 16" W)</strong> e o Tempo Sideral Local.
          </p>

          {/* Guaranésia Sky Live Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleSyncZenith}
              className={`px-4 py-2 rounded-sm border font-mono text-xs uppercase tracking-wider flex items-center space-x-2 transition-all ${
                isAutoSyncWithZenith
                  ? 'bg-masonic-gold text-masonic-void border-masonic-gold font-bold shadow-gold-glow'
                  : 'bg-masonic-card/90 border-masonic-gold/40 text-masonic-gold hover:bg-masonic-gold/20'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Sincronizar com Zênite de Guaranésia ({skyState.culminatingConstellation.name.split(' ')[0]})</span>
            </button>

            <button
              onClick={() => setIsObservatoryModalOpen(true)}
              className="px-4 py-2 bg-masonic-slate/80 hover:bg-masonic-slate border border-masonic-gold/30 text-masonic-ivory font-mono text-xs uppercase tracking-wider rounded-sm flex items-center space-x-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-masonic-gold" />
              <span>Abrir Domo Celeste 360°</span>
            </button>
          </div>
        </div>

        {/* 12 Zodiac Symbol Quick Selector Bar */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {ZODIAC_CONSTELLATIONS.map((item) => {
            const isSelected = item.id === activeConstellation.id;
            const itemPos = skyState.zodiacPositions[item.id];
            const isItemVisible = itemPos?.isVisible;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setIsAutoSyncWithZenith(false);
                  setSelectedId(item.id);
                }}
                className={`relative flex flex-col items-center justify-center w-14 h-16 sm:w-16 sm:h-20 rounded-sm border transition-all duration-300 shrink-0 ${
                  isSelected
                    ? 'bg-masonic-gold/20 border-masonic-gold shadow-gold-glow scale-105'
                    : 'bg-masonic-card/70 border-masonic-gold/20 hover:border-masonic-gold/50 hover:bg-masonic-slate'
                }`}
              >
                {/* Visible in Guaranésia Live Dot */}
                {isItemVisible && (
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" title="Visível em Guaranésia agora" />
                )}

                <span className={`text-xl sm:text-2xl mb-1 ${isSelected ? 'text-masonic-gold' : 'text-masonic-ivory/70'}`}>
                  {item.symbol}
                </span>
                <span className={`font-serif text-[9px] uppercase tracking-wider ${isSelected ? 'text-masonic-gold font-bold' : 'text-masonic-ivory/60'}`}>
                  {item.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Constellation Interactive Card */}
        <div className="masonic-frame p-6 sm:p-10 bg-masonic-card/90 border border-masonic-gold/30 rounded-sm shadow-card-lux relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: SVG Star Map Display */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-6 bg-masonic-void/90 border border-masonic-gold/20 rounded-sm min-h-[320px] group">
              
              {/* Background Celestial Grid Circles */}
              <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                <svg className="w-[300px] h-[300px] text-masonic-gold" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.3" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.3" />
                </svg>
              </div>

              {/* Constellation Vector Render */}
              <svg className="w-full h-64 text-masonic-gold relative z-10" viewBox="0 0 180 160" fill="none">
                {/* Golden Connection Lines */}
                {activeConstellation.edges.map(([fromIdx, toIdx], i) => {
                  const s1 = activeConstellation.stars[fromIdx];
                  const s2 = activeConstellation.stars[toIdx];
                  if (!s1 || !s2) return null;
                  return (
                    <line
                      key={`edge-${i}`}
                      x1={s1.x}
                      y1={s1.y}
                      x2={s2.x}
                      y2={s2.y}
                      stroke="#c5a059"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                      opacity="0.85"
                    />
                  );
                })}

                {/* Star Nodes */}
                {activeConstellation.stars.map((star, idx) => (
                  <g key={`star-${idx}`}>
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={star.name ? 5 : 3.5}
                      fill="#ebd197"
                      opacity="0.9"
                    />
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={star.name ? 2.5 : 1.8}
                      fill="#ffffff"
                    />
                    {star.name && (
                      <text
                        x={star.x + 7}
                        y={star.y + 4}
                        fill="#c5a059"
                        fontSize="7.5"
                        fontFamily="Space Mono, monospace"
                        opacity="0.9"
                      >
                        {star.name}
                      </text>
                    )}
                  </g>
                ))}
              </svg>

              {/* Bottom Badge inside Map with Guaranésia Coordinates */}
              <div className="mt-4 flex items-center space-x-2 text-[10px] font-mono text-masonic-gold/80 z-10">
                <MapPin className="w-3.5 h-3.5 text-masonic-gold" />
                <span>CALIBRADO PARA AS COORDENADAS DE GUARANÉSIA-MG</span>
              </div>

            </div>

            {/* Right Side: Information & Masonic Interpretation & Live Astro Position */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-serif text-masonic-gold">{activeConstellation.symbol}</span>
                  <div>
                    <span className="font-mono text-xs text-masonic-gold uppercase tracking-widest block">
                      {activeConstellation.latinName} • ELEMENTO {activeConstellation.element.toUpperCase()}
                    </span>
                    <h3 className="font-serif text-3xl font-extrabold text-masonic-ivory uppercase">
                      {activeConstellation.name}
                    </h3>
                  </div>
                </div>

                <div className="px-3 py-1 bg-masonic-gold/15 border border-masonic-gold/40 text-masonic-gold font-mono text-xs rounded-sm">
                  {activeConstellation.period}
                </div>
              </div>

              {/* Guaranésia Real-Time Astrometric Coordinates Card */}
              {posInGuaranesia && (
                <div className="p-3 bg-masonic-void/90 border border-masonic-gold/30 rounded-sm font-mono text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${posInGuaranesia.isVisible ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                    <span className="text-masonic-ivory">
                      {posInGuaranesia.isVisible
                        ? `Visível em Guaranésia agora (${posInGuaranesia.compassDirection})`
                        : 'Abaixo do horizonte de Guaranésia'}
                    </span>
                  </div>

                  <div className="text-right text-masonic-gold font-bold">
                    <span>Altitude: {posInGuaranesia.altitudeDeg.toFixed(1)}°</span>
                    <span className="text-[10px] text-masonic-ivory/60 ml-2">Az: {posInGuaranesia.azimuthDeg.toFixed(0)}°</span>
                  </div>
                </div>
              )}

              <div className="w-full h-[1px] bg-gradient-to-r from-masonic-gold/40 via-masonic-gold/10 to-transparent" />

              <div>
                <span className="font-mono text-[10px] uppercase text-masonic-gold tracking-widest block mb-1">
                  INTERPRETAÇÃO FILOSÓFICA & MAÇÔNICA
                </span>
                <p className="font-serif text-sm sm:text-base text-masonic-ivory/90 italic leading-relaxed border-l-2 border-masonic-gold/50 pl-4 py-1">
                  &ldquo;{activeConstellation.masonicMeaning}&rdquo;
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="pt-4 flex items-center justify-between border-t border-masonic-gold/15">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-masonic-slate border border-masonic-gold/30 text-masonic-gold font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-masonic-gold hover:text-masonic-void transition-colors flex items-center space-x-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <span className="font-mono text-xs text-masonic-ivory/60">
                  {ZODIAC_CONSTELLATIONS.findIndex((c) => c.id === activeConstellation.id) + 1} / 12
                </span>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-masonic-slate border border-masonic-gold/30 text-masonic-gold font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-masonic-gold hover:text-masonic-void transition-colors flex items-center space-x-1"
                >
                  <span>Próxima</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
