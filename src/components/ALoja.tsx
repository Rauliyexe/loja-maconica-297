import React from 'react';
import { ShieldCheck, MapPin, Calendar, Landmark, BookOpen, Compass, HeartHandshake } from 'lucide-react';
import { SectionConstellations } from './SectionConstellations';
import { LODGE_INFO } from '../data/mockData';

export const ALoja: React.FC = () => {
  return (
    <section id="aloja" className="relative py-28 w-full bg-masonic-dark overflow-hidden border-t border-masonic-gold/20">
      {/* Zodiac Constellations for A Loja: Áries & Touro */}
      <SectionConstellations leftZodiacId="aries" rightZodiacId="taurus" />
      <div className="absolute inset-0 stars-bg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-masonic-crimson/50 bg-gradient-to-r from-masonic-crimson-deep/40 to-masonic-slate text-masonic-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Landmark className="w-3.5 h-3.5 text-masonic-crimson-light" />
            <span>INSTITUIÇÃO E PROPÓSITO • A.R.L.S. 297</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            A LOJA PAZ, HARMONIA <br />
            <span className="bg-gradient-to-r from-masonic-gold via-masonic-gold-light to-masonic-gold-dark bg-clip-text text-transparent font-black">
              E CONCÓRDIA Nº 297
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-masonic-crimson to-transparent mx-auto mb-6" />

          <p className="font-serif text-sm sm:text-base text-masonic-ivory/90 leading-relaxed italic">
            &ldquo;Ordo Ab Chao — Da escuridão à luz, do caos à ordem. Dedicada à evolução moral, intelectual e espiritual do ser humano, na constante jornada da pedra bruta à pedra polida.&rdquo;
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column - Classical Architectural Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="masonic-frame p-3 bg-masonic-slate border border-masonic-gold/30 rounded-sm shadow-card-lux group">
              <div className="relative overflow-hidden aspect-[4/5] rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
                  alt="Templo da Loja Maçônica em Guaranésia MG"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-masonic-void via-transparent to-transparent opacity-80" />
                
                {/* Floating Seal Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-masonic-card/90 backdrop-blur-md border border-masonic-gold/40 rounded-sm">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-masonic-gold block mb-1">
                    JURISDIÇÃO GOMG • REGISTRO Nº 297
                  </span>
                  <h4 className="font-serif text-sm text-masonic-ivory font-bold">
                    Grande Oriente de Minas Gerais
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Institutional Details */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            <div className="p-6 bg-masonic-card/80 border border-masonic-gold/20 rounded-sm hover:border-masonic-gold/40 transition-colors shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-masonic-gold/10 border border-masonic-gold/30 rounded-sm text-masonic-gold shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-masonic-ivory mb-2">
                    Origem e Identidade no Oriente de Guaranésia - MG
                  </h3>
                  <p className="text-xs sm:text-sm text-masonic-ivory/80 leading-relaxed font-sans">
                    Fundada em <strong>16 de Outubro de 2015</strong> no Oriente de Guaranésia - MG, a <strong>A.R.L.S. Paz, Harmonia & Concórdia nº 297</strong> é filiada ao <strong>Grande Oriente de Minas Gerais (GOMG)</strong>, constituída com o propósito firme de lapidar a pedra bruta do ser humano através da busca pelo conhecimento e da prática da virtude.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-masonic-card/80 border border-masonic-gold/20 rounded-sm hover:border-masonic-gold/40 transition-colors shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-masonic-gold/10 border border-masonic-gold/30 rounded-sm text-masonic-gold shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-masonic-ivory mb-2">
                    Jornada Filosofica: Da Pedra Bruta à Pedra Polida
                  </h3>
                  <p className="text-xs sm:text-sm text-masonic-ivory/80 leading-relaxed font-sans">
                    Nossas sessões rituais ocorrem semanalmente todas as <strong>quartas-feiras às 20h</strong> no Templo da Loja. Sob o lema <em>Ordo Ab Chao</em>, buscamos transformar o caos interior em harmonia e sabedoria espiritual.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-masonic-slate/90 border border-masonic-gold/20 text-center rounded-sm">
                <Calendar className="w-5 h-5 text-masonic-gold mx-auto mb-2" />
                <span className="font-mono text-[10px] text-masonic-gold uppercase block">Fundação</span>
                <span className="font-serif text-xs font-bold text-masonic-ivory">16 DE OUTUBRO DE 2015</span>
              </div>

              <div className="p-4 bg-masonic-slate/90 border border-masonic-gold/20 text-center rounded-sm">
                <MapPin className="w-5 h-5 text-masonic-gold mx-auto mb-2" />
                <span className="font-mono text-[10px] text-masonic-gold uppercase block">Oriente</span>
                <span className="font-serif text-xs font-bold text-masonic-ivory">GUARANÉSIA • MG</span>
              </div>

              <div className="p-4 bg-masonic-slate/90 border border-masonic-gold/20 text-center rounded-sm col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-masonic-gold mx-auto mb-2" />
                <span className="font-mono text-[10px] text-masonic-gold uppercase block">Obediência</span>
                <span className="font-serif text-xs font-bold text-masonic-ivory">GOMG (MINAS GERAIS)</span>
              </div>
            </div>

          </div>

        </div>

        {/* SOCIAL PROJECTS BANNER (CESG & CASA DE MARIA) */}
        <div className="masonic-frame p-6 sm:p-8 bg-masonic-card/90 border border-masonic-gold/30 rounded-sm shadow-card-lux">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-masonic-gold/10 border border-masonic-gold/30 rounded-sm text-masonic-gold shrink-0">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-masonic-gold block mb-1">
                  INSTITUCIONAL & PROJETOS SOCIAIS
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-masonic-ivory">
                  Apoio Fraternal à Comunidade de Guaranésia
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 bg-masonic-slate border border-masonic-gold/30 rounded-sm text-center">
                <span className="font-serif text-xs font-bold text-masonic-gold block">CESG</span>
                <span className="font-mono text-[10px] text-masonic-ivory/70">Centro Educativo</span>
              </div>

              <div className="px-4 py-2 bg-masonic-slate border border-masonic-gold/30 rounded-sm text-center">
                <span className="font-serif text-xs font-bold text-masonic-gold block">Casa de Maria</span>
                <span className="font-mono text-[10px] text-masonic-ivory/70">Apoio Social</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
