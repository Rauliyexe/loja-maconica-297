import React from 'react';
import { OFFICERS_DATA } from '../data/mockData';
import { Shield, Lock, Users } from 'lucide-react';
import { SectionConstellations } from './SectionConstellations';

export const MembrosInstitucional: React.FC = () => {
  return (
    <section id="membros" className="relative py-28 w-full bg-masonic-dark border-t border-masonic-gold/20 overflow-hidden">
      {/* Zodiac Constellations for Membros: Sagitário & Capricórnio */}
      <SectionConstellations leftZodiacId="sagittarius" rightZodiacId="capricorn" />
      <div className="absolute inset-0 stars-bg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-masonic-gold/30 bg-masonic-gold/10 text-masonic-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>CORPO ADMINISTRATIVO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            OFICIAIS DA <span className="gold-text-gradient font-black">LOJA</span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-6" />

          <p className="font-serif text-sm sm:text-base text-masonic-ivory/80 italic leading-relaxed">
            A estrutura de liderança e os oficiais responsáveis pela condução ritualística e administrativa da Oficina no período atual.
          </p>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {OFFICERS_DATA.map((officer) => (
            <div
              key={officer.role}
              className="masonic-frame p-6 bg-masonic-card/90 border border-masonic-gold/20 rounded-sm shadow-card-lux hover:border-masonic-gold/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-masonic-gold tracking-widest uppercase">
                  {officer.title}
                </span>
                <span className="p-2 bg-masonic-gold/10 border border-masonic-gold/30 rounded-sm text-masonic-gold group-hover:scale-110 transition-transform">
                  <Shield className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase tracking-wider mb-2">
                {officer.role}
              </h3>

              <div className="w-12 h-[1px] bg-masonic-gold/40 mb-3" />

              <p className="text-xs text-masonic-ivory/80 leading-relaxed font-sans font-light mb-4">
                {officer.description}
              </p>

              <div className="pt-3 border-t border-masonic-gold/10 flex items-center justify-between text-[10px] font-mono text-masonic-gold/70">
                <span>SÍMBOLO RITUAL:</span>
                <span className="font-bold text-masonic-gold">{officer.symbol}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Note Banner */}
        <div className="p-4 bg-masonic-slate/80 border border-masonic-gold/30 rounded-sm flex items-center justify-center space-x-3 text-center">
          <Lock className="w-4 h-4 text-masonic-gold shrink-0" />
          <p className="font-mono text-xs text-masonic-ivory/70">
            EM RESPEITO À PRIVACIDADE INSTITUCIONAL, NOMES DE MEMBROS E DADOS INDIVIDUAIS SÃO RESTRITOS À <strong className="text-masonic-gold font-serif uppercase">ÁREA PRIVADA DO MEMBRO</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
