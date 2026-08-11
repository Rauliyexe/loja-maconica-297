import React, { useState } from 'react';
import { EVENTS_DATA, EventItem } from '../data/mockData';
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionConstellations } from './SectionConstellations';

export const Eventos: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  return (
    <section id="eventos" className="relative py-28 w-full bg-masonic-dark border-t border-masonic-gold/20 overflow-hidden">
      {/* Zodiac Constellations for Eventos: Áries & Leão */}
      <SectionConstellations leftZodiacId="aries" rightZodiacId="leo" />
      <div className="absolute inset-0 stars-bg pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-masonic-gold/30 bg-masonic-gold/10 text-masonic-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>CALENDÁRIO INSTITUCIONAL</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            PRÓXIMOS <span className="gold-text-gradient font-black">EVENTOS</span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-6" />

          <p className="font-serif text-sm sm:text-base text-masonic-ivory/80 italic leading-relaxed">
            Acompanhe a agenda oficial de eventos, solenidades comemorativas e encontros da Loja Paz, Harmonia & Concórdia nº 297.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS_DATA.map((event) => (
            <div
              key={event.id}
              className="masonic-frame flex flex-col justify-between p-6 bg-masonic-card/90 border border-masonic-gold/25 rounded-sm shadow-card-lux hover:border-masonic-gold/60 transition-all duration-300 group"
            >
              <div>
                <div className="relative overflow-hidden aspect-video rounded-sm mb-6 border border-masonic-gold/20">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  
                  <div className="absolute top-3 left-3 px-3 py-1.5 bg-masonic-void/90 backdrop-blur-md border border-masonic-gold/50 rounded-sm text-center">
                    <span className="font-serif text-lg font-bold text-masonic-gold block leading-none">
                      {event.dateDay}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-ivory block mt-0.5">
                      {event.dateMonth}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-masonic-gold text-masonic-void font-mono text-[9px] font-bold uppercase tracking-widest rounded-sm">
                    {event.type}
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs font-mono text-masonic-gold/80 mb-2">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-masonic-gold" />
                    <span>{event.time}</span>
                  </span>
                  <span>•</span>
                  <span>{event.dateYear}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-masonic-ivory mb-3 group-hover:text-masonic-gold transition-colors">
                  {event.title}
                </h3>

                <p className="text-xs text-masonic-ivory/80 leading-relaxed font-sans font-light mb-4">
                  {event.description}
                </p>

                <div className="flex items-center space-x-2 text-xs font-sans text-masonic-ivory/70 border-t border-masonic-gold/10 pt-3">
                  <MapPin className="w-3.5 h-3.5 text-masonic-gold shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>

              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setRsvpSubmitted(false);
                  }}
                  className="w-full py-2.5 bg-masonic-slate border border-masonic-gold/40 text-masonic-gold font-serif text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-masonic-gold hover:text-masonic-void transition-colors flex items-center justify-center space-x-2"
                >
                  <span>MAIS INFORMAÇÕES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Event Detail & RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-masonic-void/95 backdrop-blur-xl animate-fade-in">
          <div className="relative max-w-lg w-full bg-masonic-card border border-masonic-gold/50 rounded-sm p-6 sm:p-8 shadow-2xl">
            
            <div className="mb-4">
              <span className="font-mono text-xs text-masonic-gold uppercase tracking-widest block mb-1">
                {selectedEvent.type} • {selectedEvent.dateDay} DE {selectedEvent.dateMonth}
              </span>
              <h3 className="font-serif text-2xl font-bold text-masonic-ivory">
                {selectedEvent.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-masonic-ivory/80 font-sans mb-6">
              {selectedEvent.description}
            </p>

            <div className="space-y-2 p-4 bg-masonic-dark border border-masonic-gold/20 rounded-sm mb-6 text-xs font-mono text-masonic-gold">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{selectedEvent.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Horário: {selectedEvent.time}</span>
              </div>
            </div>

            {rsvpSubmitted ? (
              <div className="p-4 bg-masonic-gold/15 border border-masonic-gold rounded-sm text-center space-y-2 mb-4">
                <CheckCircle2 className="w-8 h-8 text-masonic-gold mx-auto" />
                <h4 className="font-serif text-sm font-bold text-masonic-ivory">Confirmação de Presença Solicitada!</h4>
                <p className="text-xs text-masonic-ivory/80 font-sans">
                  A comissão organizadora entrará em contato para transmitir os detalhes do evento.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRsvpSubmitted(true);
                }}
                className="space-y-3 mb-4"
              >
                <div>
                  <label className="block text-[10px] font-mono uppercase text-masonic-gold mb-1">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Nome do Convidado"
                    className="w-full px-3 py-2 bg-masonic-slate border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-masonic-gold mb-1">E-mail para Contato</label>
                  <input
                    type="email"
                    required
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-3 py-2 bg-masonic-slate border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-masonic-gold text-masonic-void font-serif text-xs font-bold uppercase tracking-widest hover:bg-masonic-gold-light transition-colors"
                >
                  CONFIRMAR INTERESSE DE PRESENÇA
                </button>
              </form>
            )}

            <button
              onClick={() => setSelectedEvent(null)}
              className="w-full text-center text-xs font-mono text-masonic-ivory/60 hover:text-masonic-gold transition-colors pt-2"
            >
              Fechar Janela
            </button>

          </div>
        </div>
      )}
    </section>
  );
};
