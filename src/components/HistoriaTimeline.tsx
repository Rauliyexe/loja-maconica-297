import React from 'react';
import { TIMELINE_DATA } from '../data/mockData';
import { Scroll } from 'lucide-react';
import { SectionConstellations } from './SectionConstellations';

export const HistoriaTimeline: React.FC = () => {
  return (
    <section id="historia" className="relative py-28 w-full bg-masonic-void border-t border-masonic-gold/20 overflow-hidden">
      {/* Zodiac Constellations for História: Gêmeos & Câncer */}
      <SectionConstellations leftZodiacId="gemini" rightZodiacId="cancer" />
      <div className="absolute inset-0 stars-bg pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-masonic-gold/30 bg-masonic-gold/10 text-masonic-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Scroll className="w-3.5 h-3.5" />
            <span>MARCOS HISTÓRICOS DA PHC Nº 297</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            LINHA DO <span className="gold-text-gradient font-black">TEMPO</span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto" />
        </div>

        {/* Clean Timeline Stream */}
        <div className="relative border-l-2 border-masonic-gold/30 ml-4 sm:ml-36 md:ml-48 space-y-12">
          
          {TIMELINE_DATA.map((item) => (
            <div key={item.year} className="relative group pl-6 sm:pl-12">
              
              {/* Timeline Year Node Badge on the Left */}
              <div className="absolute -left-[17px] sm:-left-[187px] md:-left-[235px] top-0 flex items-center space-x-3">
                <div className="hidden sm:flex flex-col text-right w-36 sm:w-44">
                  <span className="font-serif text-lg sm:text-xl font-extrabold text-masonic-gold tracking-wider">
                    {item.year}
                  </span>
                </div>

                {/* Node Diamond Emblem */}
                <div className="w-8 h-8 rounded-full border-2 border-masonic-gold bg-masonic-dark flex items-center justify-center shadow-gold-glow group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2.5 h-2.5 bg-masonic-gold rotate-45" />
                </div>
              </div>

              {/* Card Container */}
              <div className="masonic-frame p-6 sm:p-8 bg-masonic-card/90 border border-masonic-gold/25 rounded-sm shadow-card-lux group-hover:border-masonic-gold/60 transition-all duration-300">
                
                {/* Mobile Year Badge */}
                <div className="sm:hidden mb-3 inline-block px-3 py-1 bg-masonic-gold/10 border border-masonic-gold/40 text-masonic-gold font-mono text-xs font-bold rounded-sm">
                  {item.year}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Text Content */}
                  <div className="md:col-span-8 flex flex-col justify-center">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-masonic-ivory mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-masonic-ivory/85 leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Node Image */}
                  <div className="md:col-span-4 relative overflow-hidden aspect-video rounded-sm border border-masonic-gold/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-masonic-void/60 to-transparent" />
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
