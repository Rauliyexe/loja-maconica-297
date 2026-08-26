import React from 'react';
import { Compass, KeyRound, ChevronDown } from 'lucide-react';
import { AllSeeingEye } from './AllSeeingEye';
import { LunarPhaseSVG } from './LunarPhaseSVG';
import { MasonicPillarSVG } from './MasonicPillarSVG';
import { LodgeEmblemLogo } from './LodgeEmblemLogo';

interface HeroProps {
  onOpenLogin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLogin }) => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 bg-masonic-void">
      
      {/* DISCREET INSTITUTIONAL TEMPLE BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-luminosity pointer-events-none z-0 scale-105"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      />

      {/* Radial Vignette & Gradient Overlays for Elegance & High Text Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-masonic-void/60 to-masonic-void pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-masonic-void/90 via-transparent to-masonic-void pointer-events-none z-0" />

      {/* Background Starfield */}
      <div className="absolute inset-0 stars-bg opacity-30 pointer-events-none z-0" />

      {/* ALL-SEEING EYE WITH FLUID RADIATING RAYS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 z-0 scale-90 sm:scale-110">
        <AllSeeingEye size={650} />
      </div>

      {/* LEFT MASONIC PILLAR B (BOAZ - TERRESTRIAL GLOBE) */}
      <div className="hidden lg:flex absolute left-4 xl:left-12 bottom-4 top-24 flex-col items-center justify-end pointer-events-none opacity-90 hover:opacity-100 transition-opacity duration-700 z-10">
        <div className="relative group">
          <MasonicPillarSVG type="B" height={540} />
          <div className="absolute -bottom-2 left-0 right-0 text-center">
            <span className="font-serif text-[10px] tracking-[0.3em] text-masonic-gold uppercase bg-masonic-void/90 px-3 py-1 border border-masonic-gold/40 rounded-sm">
              COLUNA B • BOAZ
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT MASONIC PILLAR J (JACHIN - CELESTIAL GLOBE) */}
      <div className="hidden lg:flex absolute right-4 xl:right-12 bottom-4 top-24 flex-col items-center justify-end pointer-events-none opacity-90 hover:opacity-100 transition-opacity duration-700 z-10">
        <div className="relative group">
          <MasonicPillarSVG type="J" height={540} />
          <div className="absolute -bottom-2 left-0 right-0 text-center">
            <span className="font-serif text-[10px] tracking-[0.3em] text-masonic-gold uppercase bg-masonic-void/90 px-3 py-1 border border-masonic-gold/40 rounded-sm">
              COLUNA J • JACHIN
            </span>
          </div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* MAJESTIC OFFICIAL EMBLEM LOGO DISPLAY */}
        <div className="relative mb-4 sm:mb-6 group cursor-pointer">
          {/* Radial Red & Gold Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-masonic-crimson/30 via-masonic-gold/20 to-masonic-crimson/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          <div className="sm:hidden">
            <LodgeEmblemLogo size={150} />
          </div>
          <div className="hidden sm:block">
            <LodgeEmblemLogo size={210} />
          </div>
        </div>

        {/* Top Masonic Emblem Badge */}
        <div className="mb-4 inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-masonic-gold/40 bg-gradient-to-r from-masonic-crimson-deep/60 via-masonic-slate/85 to-masonic-crimson-deep/60 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.25)] max-w-full">
          <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-masonic-gold shrink-0" />
          <span className="font-mono text-[9.5px] xs:text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-masonic-ivory truncate">
            AUG.·. RESP.·. LOJA MAÇÔNICA • OR.·. GUARANÉSIA-MG
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-masonic-ivory uppercase leading-tight mb-3 drop-shadow-2xl">
          PAZ, HARMONIA <br />
          <span className="bg-gradient-to-r from-masonic-gold via-masonic-gold-light to-masonic-gold-dark bg-clip-text text-transparent font-black">
            E CONCÓRDIA
          </span>
        </h1>

        {/* Lodge Number & Affiliation Badges */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-masonic-crimson" />
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.4em] font-black text-masonic-gold drop-shadow-md">
              Nº 297
            </span>
            <div className="w-12 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-masonic-crimson" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-masonic-gold/90">
            <span className="px-2.5 py-0.5 rounded bg-masonic-crimson-dark/40 border border-masonic-crimson/50 text-masonic-ivory">
              FUNDADA EM 16 DE OUTUBRO DE 2015
            </span>
            <span className="px-2.5 py-0.5 rounded bg-masonic-slate border border-masonic-gold/30 text-masonic-gold-light">
              FILIADA AO GRANDE ORIENTE DE MINAS GERAIS
            </span>
          </div>
        </div>

        {/* Subtitle / Philosophical Motto */}
        <p className="max-w-2xl text-base sm:text-lg text-masonic-ivory/90 font-serif italic font-light leading-relaxed mb-8 text-center">
          &ldquo;Ordo Ab Chao — Da escuridão à luz, do caos à ordem. A jornada da pedra bruta à pedra polida.&rdquo;
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="#transformacao"
            className="w-full sm:w-auto px-8 py-4 bg-masonic-gold hover:bg-masonic-gold-light text-masonic-void font-serif text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] flex items-center justify-center space-x-2"
          >
            <span>CONHEÇA A LOJA</span>
          </a>

          <button
            onClick={onOpenLogin}
            className="w-full sm:w-auto px-8 py-4 bg-masonic-slate/80 hover:bg-masonic-gold/20 border border-masonic-gold/50 text-masonic-gold font-serif text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center space-x-2 group"
          >
            <KeyRound className="w-4 h-4 text-masonic-gold group-hover:rotate-12 transition-transform" />
            <span>ÁREA DO MEMBRO</span>
          </button>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center animate-bounce">
          <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-gold/60 mb-2">
            Desça para a jornada
          </span>
          <a href="#transformacao" className="text-masonic-gold/70 hover:text-masonic-gold transition-colors">
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
