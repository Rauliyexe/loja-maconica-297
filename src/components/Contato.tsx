import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle, Heart } from 'lucide-react';
import { SectionConstellations } from './SectionConstellations';

export const Contato: React.FC = () => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contato" className="relative py-28 w-full bg-masonic-void border-t border-masonic-gold/20 overflow-hidden">
      {/* Zodiac Constellations for Contato: Libra & Escorpião */}
      <SectionConstellations leftZodiacId="libra" rightZodiacId="scorpio" />
      <div className="absolute inset-0 stars-bg pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-masonic-gold/30 bg-masonic-gold/10 text-masonic-gold font-mono text-xs uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>COMUNICAÇÃO INSTITUCIONAL</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-masonic-ivory mb-4">
            ENTRE EM <span className="gold-text-gradient font-black">CONTATO</span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-6" />

          <p className="font-serif text-sm sm:text-base text-masonic-ivory/80 italic leading-relaxed">
            Canal reservado para correspondência institucional, contato fraternal e informações sobre nossas ações beneficentes com o CESG — Centro Educativo e a Casa de Maria.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="masonic-frame p-6 bg-masonic-card/90 border border-masonic-gold/25 rounded-sm shadow-card-lux space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-masonic-gold/10 border border-masonic-gold/30 rounded-sm text-masonic-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-masonic-ivory uppercase">
                    Sede da Loja
                  </h3>
                  <p className="text-xs text-masonic-ivory/80 font-sans mt-1">
                    Templo da Loja Maçônica Paz, Harmonia & Concórdia nº 297<br />
                    <strong>Oriente de Guaranésia — Minas Gerais (MG)</strong><br />
                    Filiada ao Grande Oriente de Minas Gerais (GOMG)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-masonic-gold/10 border border-masonic-gold/30 rounded-sm text-masonic-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-masonic-ivory uppercase">
                    Horário das Reuniões Ordinárias
                  </h3>
                  <p className="text-xs text-masonic-ivory/80 font-sans mt-1">
                    Sessões Rituais Ordinárias:<br />
                    <strong>Todas as Quartas-Feiras às 20h00</strong> (Pontualmente)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-masonic-gold/10 border border-masonic-gold/30 rounded-sm text-masonic-gold shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-masonic-ivory uppercase">
                    Instituições Parceiras
                  </h3>
                  <p className="text-xs text-masonic-ivory/80 font-sans mt-1">
                    • <strong>CESG — Centro Educativo</strong><br />
                    • <strong>Casa de Maria</strong> (Guaranésia - MG)
                  </p>
                </div>
              </div>

            </div>

            {/* Map Placeholder Frame */}
            <div className="masonic-frame relative overflow-hidden rounded-sm border border-masonic-gold/30 bg-masonic-dark aspect-[16/9] flex items-center justify-center p-6 text-center group">
              <div className="absolute inset-0 stars-bg opacity-40 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="w-8 h-8 text-masonic-gold mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-serif text-sm font-bold text-masonic-ivory">ORIENTE DE GUARANÉSIA - MG</span>
                <span className="font-mono text-[10px] text-masonic-gold/70 mt-1">GOMG • FUNDADA EM 16/10/2015</span>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="masonic-frame p-8 bg-masonic-card/90 border border-masonic-gold/30 rounded-sm shadow-card-lux">
              
              <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase mb-6 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-masonic-gold" />
                <span>Formulário Mensagem Institucional</span>
              </h3>

              {formSent ? (
                <div className="p-8 bg-masonic-gold/15 border border-masonic-gold rounded-sm text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-masonic-gold mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-masonic-ivory">Mensagem Encaminhada à Secretaria!</h4>
                  <p className="text-xs sm:text-sm text-masonic-ivory/80 font-sans max-w-md mx-auto">
                    Agradecemos seu contato. Sua mensagem foi registrada no arquivo de correspondência institucional e será analisada com a devida discrição.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="px-6 py-2 bg-masonic-gold text-masonic-void font-serif text-xs font-bold uppercase tracking-widest hover:bg-masonic-gold-light transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase text-masonic-gold mb-1">
                        Seu Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Gabriel Soares"
                        className="w-full px-4 py-3 bg-masonic-slate border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase text-masonic-gold mb-1">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="exemplo@email.com"
                        className="w-full px-4 py-3 bg-masonic-slate border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-masonic-gold mb-1">
                      Assunto da Mensagem
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Esclarecimento Institucional / Parcerias Beneficentes"
                      className="w-full px-4 py-3 bg-masonic-slate border border-masonic-gold/30 text-masonic-gold/90 text-xs rounded-sm focus:border-masonic-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase text-masonic-gold mb-1">
                      Conteúdo da Mensagem
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Escreva sua mensagem com clareza e objetividade..."
                      className="w-full px-4 py-3 bg-masonic-slate border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-masonic-gold text-masonic-void font-serif text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-masonic-gold-light transition-all shadow-gold-glow flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ENVIAR MENSAGEM INSTITUCIONAL</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
