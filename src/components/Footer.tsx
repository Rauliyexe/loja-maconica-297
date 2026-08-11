import React from 'react';
import { Compass, KeyRound, Shield, Heart } from 'lucide-react';
import { LODGE_INFO } from '../data/mockData';
import { LodgeEmblemLogo } from './LodgeEmblemLogo';

interface FooterProps {
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogin }) => {
  return (
    <footer className="relative bg-masonic-dark border-t border-masonic-gold/30 text-masonic-ivory pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-masonic-gold/20">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-4">
              <LodgeEmblemLogo size={60} />
              <div>
                <h3 className="font-serif text-lg font-bold text-masonic-gold uppercase">
                  {LODGE_INFO.name}
                </h3>
                <span className="font-mono text-[10px] text-masonic-crimson-light uppercase block font-semibold">
                  A.R.L.S. Nº 297 • {LODGE_INFO.affiliation}
                </span>
              </div>
            </div>

            <p className="text-xs text-masonic-ivory/70 leading-relaxed font-sans font-light max-w-md">
              Oficina maçônica dedicada à evolução moral, intelectual e espiritual do ser humano, sob a máxima &ldquo;{LODGE_INFO.motto}&rdquo; ({LODGE_INFO.mottoTranslation}) e a constante jornada &ldquo;{LODGE_INFO.journey}&rdquo;.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-masonic-gold/80">
              <Shield className="w-4 h-4 text-masonic-gold" />
              <span>FUNDADA EM {LODGE_INFO.foundationDate.toUpperCase()} • ORIENTE DE {LODGE_INFO.location.toUpperCase()}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-serif uppercase tracking-widest">
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-masonic-gold block mb-2 font-bold">NAVEGAÇÃO</span>
              <a href="#aloja" className="block text-masonic-ivory/80 hover:text-masonic-gold transition-colors">A Loja</a>
              <a href="#historia" className="block text-masonic-ivory/80 hover:text-masonic-gold transition-colors">História</a>
              <a href="#principios" className="block text-masonic-ivory/80 hover:text-masonic-gold transition-colors">Princípios</a>
            </div>
            
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-masonic-gold block mb-2 font-bold">INSTITUCIONAL</span>
              <a href="#galeria" className="block text-masonic-ivory/80 hover:text-masonic-gold transition-colors">Galeria</a>
              <a href="#eventos" className="block text-masonic-ivory/80 hover:text-masonic-gold transition-colors">Eventos</a>
              <a href="#contato" className="block text-masonic-ivory/80 hover:text-masonic-gold transition-colors">Contato</a>
            </div>
          </div>

          {/* Social Partnerships */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-[10px] text-masonic-gold block font-bold uppercase tracking-widest">
              PARCERIAS SOCIAIS
            </span>
            
            <div className="space-y-2 text-xs font-sans text-masonic-ivory/80">
              <div className="p-3 bg-masonic-card border border-masonic-gold/20 rounded-sm flex items-center space-x-2">
                <Heart className="w-4 h-4 text-masonic-gold shrink-0" />
                <span>CESG — Centro Educativo</span>
              </div>
              <div className="p-3 bg-masonic-card border border-masonic-gold/20 rounded-sm flex items-center space-x-2">
                <Heart className="w-4 h-4 text-masonic-gold shrink-0" />
                <span>Casa de Maria (Guaranésia - MG)</span>
              </div>
            </div>

            <button
              onClick={onOpenLogin}
              className="w-full py-2.5 bg-masonic-gold/10 border border-masonic-gold text-masonic-gold font-serif text-xs uppercase tracking-widest hover:bg-masonic-gold hover:text-masonic-void transition-colors rounded-sm flex items-center justify-center space-x-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>Área do Membro</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-masonic-ivory/60 space-y-4 sm:space-y-0">
          <div>
            © 2015 - {new Date().getFullYear()} {LODGE_INFO.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-4">
            <span>ORIENTE DE GUARANÉSIA - MG</span>
            <span>•</span>
            <span className="text-masonic-gold">GOMG</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
