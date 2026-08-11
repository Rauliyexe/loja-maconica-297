import React, { useState } from 'react';
import { PRINCIPIOS_DATA } from '../data/mockData';
import { Sparkles, Compass, Flame, Droplets, Wind, Mountain, Layers, ShieldCheck } from 'lucide-react';
import { SectionConstellations } from './SectionConstellations';
import { AlchemicalTransmutationSeal } from './AlchemicalTransmutationSeal';

export const Principios: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('sabedoria');
  const activePrinciple = PRINCIPIOS_DATA.find((p) => p.id === selectedId) || PRINCIPIOS_DATA[0];

  const tresLuzes = PRINCIPIOS_DATA.filter((p) => p.category === 'luzes');
  const lemaOficina = PRINCIPIOS_DATA.filter((p) => p.category === 'lema');

  // Alchemical Latin Principles & Transmutation Correspondences
  const alchemicalMetadata: Record<string, { element: string; latinMotto: string; sigilName: string; symbolChar: string }> = {
    sabedoria: {
      element: "Mercúrio Hermético (☿)",
      latinMotto: "Lux e Tenebris • Sapientia Prima",
      sigilName: "Princípio da Iluminação & Mente Fluida",
      symbolChar: "☿",
    },
    forca: {
      element: "Enxofre Alquímico (🜍)",
      latinMotto: "Igne Natura Renovatur Integra",
      sigilName: "Fogo Interior da Virtude & Firmeza Moral",
      symbolChar: "🜍",
    },
    beleza: {
      element: "Sal Sapientiae (🜔)",
      latinMotto: "Harmonia Pulchritudo • Forma Purificata",
      sigilName: "Estética da Alma & Perfeição da Pedra Polida",
      symbolChar: "🜔",
    },
    paz: {
      element: "Água Filosofal (🜄)",
      latinMotto: "Pax Mentalis • Tranquillitas Animi",
      sigilName: "Serenidade das Paixões & Silêncio Interior",
      symbolChar: "🜄",
    },
    harmonia: {
      element: "Ar Cósmico (🜁)",
      latinMotto: "Ordo Ab Chao • Macrocosmus in Microcosmo",
      sigilName: "Geometria do Universo & Ordem Rituária",
      symbolChar: "🜁",
    },
    concordia: {
      element: "Terra Sagrada (🜃)",
      latinMotto: "Visita Interiora Terrae Rectificando",
      sigilName: "União Fraternal & Aliança Inquebrável",
      symbolChar: "🜃",
    },
  };

  const meta = alchemicalMetadata[selectedId] || alchemicalMetadata['sabedoria'];

  return (
    <section id="principios" className="relative py-28 w-full bg-masonic-dark border-t border-masonic-gold/20 overflow-hidden">
      {/* Zodiac Constellations for Princípios: Leão & Virgem */}
      <SectionConstellations leftZodiacId="leo" rightZodiacId="virgo" />

      {/* Ambient Alchemical Particle Grid Background */}
      <div className="absolute inset-0 stars-bg opacity-30 pointer-events-none" />

      {/* Background Rotating Sacred Geometry Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <div className="animate-spin-slow">
          <AlchemicalTransmutationSeal activeType={selectedId} size={750} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Alchemical Crest */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-masonic-gold/40 bg-masonic-gold/10 text-masonic-gold font-mono text-xs uppercase tracking-[0.25em] mb-4 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSMUTAÇÃO MORAL & ALQUIMIA SAGRADA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            AS TRÊS LUZES & <span className="gold-text-gradient font-black">PRINCÍPIOS ALQUÍMICOS</span>
          </h2>

          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-6" />

          <p className="font-serif text-sm sm:text-base text-masonic-ivory/90 italic leading-relaxed max-w-2xl mx-auto">
            &ldquo;Solve et Coagula — Dissolve as imperfeições da pedra bruta e edifica as colunas inabaláveis da virtude moral no Oriente de Guaranésia - MG.&rdquo;
          </p>
        </div>

        {/* 1. AS TRÊS LUZES (SABEDORIA ☿, FORÇA 🜍, BELEZA 🜔) ALCHEMICAL TRIA PRIMA */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-masonic-gold font-bold block">
              TRIA PRIMA • AS TRÊS COLUNAS DA ORDEM
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-masonic-ivory uppercase tracking-wider">
              AS TRÊS LUZES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tresLuzes.map((luz) => {
              const luzMeta = alchemicalMetadata[luz.id];
              const isSelected = selectedId === luz.id;

              return (
                <button
                  key={luz.id}
                  onClick={() => setSelectedId(luz.id)}
                  className={`masonic-frame p-6 sm:p-8 bg-masonic-card/95 border rounded-sm transition-all duration-500 text-left relative overflow-hidden group ${
                    isSelected
                      ? 'border-masonic-gold shadow-[0_0_35px_rgba(197,160,89,0.4)] scale-[1.03] bg-masonic-card'
                      : 'border-masonic-gold/30 hover:border-masonic-gold/60 hover:bg-masonic-slate/80'
                  }`}
                >
                  {/* Corner Alchemical Symbol Accent */}
                  <span className="absolute top-3 right-4 font-serif text-2xl opacity-40 group-hover:opacity-100 transition-opacity text-masonic-gold">
                    {luzMeta?.symbolChar}
                  </span>

                  <div className="flex items-center space-x-4 mb-4">
                    {/* Initial & Alchemical Sigil Emblem */}
                    <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-serif text-2xl font-black transition-transform duration-500 group-hover:scale-110 shadow-gold-glow ${
                      isSelected
                        ? 'border-masonic-gold bg-masonic-gold text-masonic-void'
                        : 'border-masonic-gold/60 bg-masonic-slate text-masonic-gold'
                    }`}>
                      {luz.initial}
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-masonic-gold tracking-widest uppercase block font-bold">
                        {luzMeta?.element}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-masonic-ivory uppercase tracking-wider">
                        {luz.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-masonic-ivory/95 font-serif italic leading-relaxed mb-4">
                    &ldquo;{luz.description}&rdquo;
                  </p>

                  <div className="pt-3 border-t border-masonic-gold/15 flex items-center justify-between text-[10px] font-mono text-masonic-gold">
                    <span>SELO: {luz.latinName.toUpperCase()}</span>
                    <span className="font-serif italic">{luzMeta?.symbolChar}</span>
                  </div>

                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-masonic-gold via-masonic-gold-light to-masonic-gold shadow-[0_0_15px_#c5a059]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. O LEMA TRIAPARTIDO (PAZ 🕊️, HARMONIA 📐, CONCÓRDIA 🤝) */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-masonic-gold font-bold block">
              ALIANÇA FRATERNAL • ORDO AB CHAO
            </span>
            <h3 className="font-serif text-2xl font-bold text-masonic-ivory uppercase tracking-wider">
              PAZ, HARMONIA & CONCÓRDIA
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lemaOficina.map((p) => {
              const pMeta = alchemicalMetadata[p.id];
              const isSelected = selectedId === p.id;

              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`p-6 rounded-sm border transition-all duration-300 text-left relative group ${
                    isSelected
                      ? 'bg-masonic-gold/20 border-masonic-gold shadow-gold-glow scale-[1.02]'
                      : 'bg-masonic-card/80 border-masonic-gold/25 hover:border-masonic-gold/50 hover:bg-masonic-slate'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{p.symbol}</span>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-gold block font-bold">
                          {pMeta?.element}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-masonic-ivory uppercase">
                          {p.title}
                        </h4>
                      </div>
                    </div>
                    <span className="font-serif text-lg text-masonic-gold opacity-60">
                      {pMeta?.symbolChar}
                    </span>
                  </div>

                  <p className="text-xs text-masonic-ivory/80 font-sans font-light">
                    {p.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. INTERACTIVE ALCHEMICAL TRANSMUTATION FURNACE CARD */}
        <div className="masonic-frame p-8 sm:p-12 bg-masonic-card/95 border border-masonic-gold/50 rounded-sm shadow-2xl relative overflow-hidden">
          
          {/* Top Banner Alchemical Motto */}
          <div className="flex items-center justify-between border-b border-masonic-gold/30 pb-4 mb-8">
            <div className="flex items-center space-x-3">
              <Compass className="w-5 h-5 text-masonic-gold animate-spin-slow" />
              <span className="font-mono text-xs text-masonic-gold uppercase tracking-[0.25em] font-bold">
                MATÉRIA PRIMA & TRANSMUTAÇÃO: {activePrinciple.title.toUpperCase()}
              </span>
            </div>
            <span className="hidden sm:inline-block font-serif text-xs italic text-masonic-gold/80">
              {meta.latinMotto}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full border-2 border-masonic-gold bg-masonic-slate flex items-center justify-center font-serif text-3xl font-black text-masonic-gold shadow-gold-glow">
                  {activePrinciple.initial}
                </div>
                <div>
                  <span className="font-mono text-xs text-masonic-gold tracking-widest uppercase block font-bold">
                    {meta.sigilName}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-masonic-ivory uppercase tracking-wider">
                    {activePrinciple.title}
                  </h3>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-masonic-gold via-masonic-gold/30 to-transparent" />

              <p className="font-serif text-lg sm:text-xl text-masonic-gold italic leading-relaxed">
                &ldquo;{activePrinciple.description}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-masonic-ivory/90 leading-relaxed font-sans font-light">
                {activePrinciple.details}
              </p>

              {/* Alchemical Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-3 font-mono text-[10px] text-masonic-gold">
                <div className="px-3 py-1.5 bg-masonic-dark border border-masonic-gold/30 rounded-sm flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-masonic-gold" />
                  <span>ELEMENTO: {meta.element}</span>
                </div>
                <div className="px-3 py-1.5 bg-masonic-dark border border-masonic-gold/30 rounded-sm flex items-center space-x-2">
                  <Layers className="w-3.5 h-3.5 text-masonic-gold" />
                  <span>MÁXIMA: {meta.latinMotto}</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Vector Alchemical Seal Component */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 border border-masonic-gold/30 bg-masonic-dark/90 rounded-sm shadow-inner">
              <AlchemicalTransmutationSeal activeType={selectedId} size={300} />
              
              <span className="mt-4 font-mono text-[10px] tracking-[0.25em] text-masonic-gold uppercase text-center">
                SELO ALQUÍMICO • {activePrinciple.title.toUpperCase()}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
