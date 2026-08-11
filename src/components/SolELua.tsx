import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import { LUNAR_PHASES_DATA } from '../data/mockData';
import { SectionConstellations } from './SectionConstellations';
import { LunarPhaseSVG } from './LunarPhaseSVG';

export const SolELua: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(4);

  return (
    <section id="solelua" className="relative py-28 w-full bg-masonic-void border-t border-masonic-gold/20 overflow-hidden">
      {/* Zodiac Constellations for Sol e Lua: Libra & Escorpião */}
      <SectionConstellations leftZodiacId="libra" rightZodiacId="scorpio" />
      <div className="absolute inset-0 stars-bg pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-masonic-gold/30 bg-masonic-gold/10 text-masonic-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>ALQUIMIA & ASTRONOMIA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            A DUALIDADE <span className="gold-text-gradient font-black">SOL E LUA</span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-6" />

          <p className="font-serif text-sm sm:text-base text-masonic-ivory/80 italic leading-relaxed">
            As duas grandes luzes que governam o dia e a noite no firmamento ritualístico e na alma humana.
          </p>
        </div>

        {/* Dual Split Cards + Central Sacred Geometric Seal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          
          {/* Left Column: SOL (Sun PNG) */}
          <div className="lg:col-span-5 masonic-frame p-8 bg-masonic-dark/90 border border-masonic-gold/30 rounded-sm shadow-card-lux group hover:border-masonic-gold transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2 bg-masonic-gold/10 border border-masonic-gold/30 rounded-full group-hover:scale-110 transition-transform shrink-0">
                <img src="/assets/sun.png" alt="Sol PNG" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <span className="font-mono text-xs text-masonic-gold tracking-widest uppercase block">
                  ASPECTO MASCULINO • DIA
                </span>
                <h3 className="font-serif text-2xl font-bold text-masonic-ivory uppercase">
                  O SOL (SOLIS)
                </h3>
              </div>
            </div>

            <p className="font-serif text-sm text-masonic-gold italic mb-4">
              &ldquo;Representa a luz ativa, o conhecimento direto, a razão consciente e a verdade revelada.&rdquo;
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-masonic-ivory/80 font-sans font-light border-t border-masonic-gold/10 pt-4">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-masonic-gold rounded-full" />
                <span><strong>Luz e Discernimento:</strong> Dissipa as sombras da ignorância e do erro.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-masonic-gold rounded-full" />
                <span><strong>Ação Operativa:</strong> A força geradora que impulsiona os trabalhos no Templo.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-masonic-gold rounded-full" />
                <span><strong>Venerável Mestre:</strong> Simbolizado pela posição no Oriente.</span>
              </li>
            </ul>
          </div>

          {/* Center Column: CENTRAL EQUILIBRIUM SEAL */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center my-4 lg:my-0">
            <div className="relative flex items-center justify-center w-28 h-28 rounded-full border border-masonic-gold/50 bg-masonic-card shadow-gold-glow">
              <svg className="w-20 h-20 text-masonic-gold animate-rotate-slow" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.8" />
                <polygon points="50,5 90,85 10,85" stroke="currentColor" strokeWidth="0.8" />
                <polygon points="50,95 90,15 10,15" stroke="currentColor" strokeWidth="0.8" />
              </svg>
              <Scale className="w-7 h-7 text-masonic-gold absolute" />
            </div>
            <span className="mt-3 font-mono text-[10px] uppercase tracking-widest text-masonic-gold text-center">
              EQUILÍBRIO & HARMONIA
            </span>
          </div>

          {/* Right Column: LUA (Moon PNG) */}
          <div className="lg:col-span-5 masonic-frame p-8 bg-masonic-dark/90 border border-masonic-gold/30 rounded-sm shadow-card-lux group hover:border-masonic-gold transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2 bg-masonic-gold/10 border border-masonic-gold/30 rounded-full group-hover:scale-110 transition-transform shrink-0">
                <img src="/assets/moon.png" alt="Lua PNG" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <span className="font-mono text-xs text-masonic-gold tracking-widest uppercase block">
                  ASPECTO FEMININO • NOITE
                </span>
                <h3 className="font-serif text-2xl font-bold text-masonic-ivory uppercase">
                  A LUA (LUNA)
                </h3>
              </div>
            </div>

            <p className="font-serif text-sm text-masonic-gold italic mb-4">
              &ldquo;Representa a luz refletida, a contemplação interior, a intuição e as fases de transformação.&rdquo;
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-masonic-ivory/80 font-sans font-light border-t border-masonic-gold/10 pt-4">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-masonic-gold rounded-full" />
                <span><strong>Reflexão e Introspecção:</strong> O trabalho silencioso na câmara escura do ser.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-masonic-gold rounded-full" />
                <span><strong>Ciclos de Aprendizado:</strong> A mutabilidade da vida e a renovação periódica.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-masonic-gold rounded-full" />
                <span><strong>Segundo Vigilante:</strong> Simbolizado pela posição no Ocidente/Sul.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* INTERACTIVE LUNAR PHASES COMPONENT */}
        <div className="masonic-frame p-8 sm:p-12 bg-masonic-card/90 border border-masonic-gold/30 rounded-sm shadow-card-lux">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-masonic-gold block mb-1">
              METÁFORA VISUAL DE EVOLUÇÃO
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-masonic-ivory uppercase">
              AS FASES DA LUA & O APERFEIÇOAMENTO
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {LUNAR_PHASES_DATA.map((item, idx) => {
              const isCurrent = idx === activePhaseIndex;
              // Map index 0-5 to phase SVG numbers
              const phaseNum = idx === 0 ? 0 : idx === 1 ? 1 : idx === 2 ? 2 : idx === 3 ? 3 : idx === 4 ? 4 : 6;
              return (
                <button
                  key={item.name}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-4 rounded-sm border transition-all duration-300 flex flex-col items-center text-center ${
                    isCurrent
                      ? 'bg-masonic-gold/20 border-masonic-gold shadow-gold-glow scale-105'
                      : 'bg-masonic-slate/60 border-masonic-gold/20 hover:border-masonic-gold/50'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full border border-masonic-gold/40 flex items-center justify-center mb-3 bg-masonic-void">
                    <LunarPhaseSVG phase={phaseNum} size={28} active={isCurrent} />
                  </div>

                  <span className={`font-serif text-xs font-bold uppercase tracking-wider mb-1 ${
                    isCurrent ? 'text-masonic-gold' : 'text-masonic-ivory'
                  }`}>
                    {item.name}
                  </span>

                  <span className="font-mono text-[9px] text-masonic-gold/70 line-clamp-1">
                    {item.metaphor.split('&')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-6 bg-masonic-dark border border-masonic-gold/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-masonic-gold/10 border border-masonic-gold/30 rounded-full shrink-0">
                <img src="/assets/moon.png" alt="Moon Phase" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <span className="font-mono text-xs text-masonic-gold tracking-widest uppercase block">
                  SIGNIFICADO SIMBÓLICO: {LUNAR_PHASES_DATA[activePhaseIndex].metaphor}
                </span>
                <h4 className="font-serif text-xl font-bold text-masonic-ivory">
                  {LUNAR_PHASES_DATA[activePhaseIndex].name}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-masonic-ivory/85 font-serif italic max-w-xl border-l-2 border-masonic-gold/40 pl-4">
              {LUNAR_PHASES_DATA[activePhaseIndex].description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
