import React, { useState, useEffect } from 'react';
import { Compass, KeyRound, Menu, X } from 'lucide-react';
import { LodgeEmblemLogo } from './LodgeEmblemLogo';
import { useGuaranesiaSky } from '../context/GuaranesiaSkyContext';

interface HeaderProps {
  onOpenLogin: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { skyState, setIsObservatoryModalOpen } = useGuaranesiaSky();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { name: 'A Loja', href: '#aloja' },
    { name: 'História', href: '#historia' },
    { name: 'Princípios', href: '#principios' },
  ];

  const rightNavLinks = [
    { name: 'Galeria', href: '#galeria' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Contato', href: '#contato' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-masonic-void/95 backdrop-blur-xl border-b border-masonic-gold/30 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.9)]'
          : 'bg-gradient-to-b from-masonic-void via-masonic-void/85 to-transparent py-3.5'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP CENTER-FOCUSED SYMMETRICAL HEADER */}
        <div className="hidden lg:flex items-center justify-between relative min-h-[48px]">
          
          {/* Left Balancing Space */}
          <div className="w-[300px] xl:w-[380px] shrink-0" />

          {/* Symmetrical Navigation Group Centered Exactly in Viewport */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-6 xl:space-x-8 whitespace-nowrap">
            
            {/* Left 3 Links */}
            <nav className="flex items-center space-x-5 xl:space-x-7">
              {leftNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-serif uppercase tracking-[0.2em] text-masonic-ivory/85 hover:text-masonic-gold transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-masonic-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Centerpiece: Symmetrical Lodge Emblem Logo */}
            <a
              href="#hero"
              className="flex items-center justify-center p-1 group transition-transform duration-300 hover:scale-110 shrink-0"
              title="A.R.L.S. Paz, Harmonia & Concórdia nº 297"
            >
              <LodgeEmblemLogo size={46} />
            </a>

            {/* Right 3 Links */}
            <nav className="flex items-center space-x-5 xl:space-x-7">
              {rightNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-serif uppercase tracking-[0.2em] text-masonic-ivory/85 hover:text-masonic-gold transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-masonic-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

          </div>

          {/* Right Action Icons & Controls (Harmonious Dual Buttons) */}
          <div className="flex items-center justify-end space-x-2.5 w-[300px] xl:w-[380px] shrink-0">
            
            {/* Guaranésia Sidereal Chip Button */}
            <button
              onClick={() => setIsObservatoryModalOpen(true)}
              className="h-9 px-3 rounded-sm border border-masonic-gold/30 bg-masonic-dark/85 hover:bg-masonic-slate hover:border-masonic-gold text-masonic-gold font-mono text-[10.5px] uppercase tracking-wider flex items-center space-x-2 transition-all shadow-sm group whitespace-nowrap"
              title="Observatório Celeste de Guaranésia"
            >
              <Compass className="w-3.5 h-3.5 text-masonic-gold transition-transform duration-300 group-hover:rotate-45 shrink-0" />
              <span className="font-semibold">GUARANÉSIA: {skyState.localSiderealTimeFormatted.split(' ')[0]} {skyState.localSiderealTimeFormatted.split(' ')[1]}</span>
            </button>

            {/* Member Area Login Button */}
            <button
              onClick={onOpenLogin}
              className="h-9 relative inline-flex items-center justify-center px-3.5 overflow-hidden font-serif text-[11px] tracking-[0.18em] uppercase font-bold text-masonic-gold border border-masonic-gold/60 rounded-sm shadow-gold-glow group hover:text-masonic-void transition-colors whitespace-nowrap shrink-0"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-masonic-gold via-masonic-gold-light to-masonic-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <span className="relative flex items-center space-x-1.5">
                <KeyRound className="w-3.5 h-3.5 text-masonic-gold group-hover:text-masonic-void transition-colors" />
                <span>ÁREA DO MEMBRO</span>
              </span>
            </button>
          </div>

        </div>

        {/* MOBILE & TABLET HEADER */}
        <div className="flex lg:hidden items-center justify-between">
          
          {/* Left Mobile Action: Guaranésia Astro Button */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsObservatoryModalOpen(true)}
              className="h-9 w-9 rounded-sm border border-masonic-gold/30 bg-masonic-dark/80 text-masonic-gold hover:border-masonic-gold transition-colors flex items-center justify-center"
              title="Observatório Celeste de Guaranésia"
            >
              <Compass className="w-4 h-4" />
            </button>
          </div>

          {/* Center Mobile Brand: Only Lodge Emblem Logo */}
          <a
            href="#hero"
            className="flex items-center justify-center group p-1 transition-transform duration-300 hover:scale-105"
            title="A.R.L.S. Paz, Harmonia & Concórdia nº 297"
          >
            <LodgeEmblemLogo size={40} />
          </a>

          {/* Right Mobile Actions: Member Key + Hamburger Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenLogin}
              className="h-9 px-2.5 rounded-sm border border-masonic-gold/40 bg-masonic-gold/10 text-masonic-gold hover:bg-masonic-gold hover:text-masonic-void transition-colors flex items-center space-x-1 font-serif text-[10px] uppercase font-bold tracking-wider"
              title="Acessar Área do Membro"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Membro</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 flex items-center justify-center text-masonic-ivory hover:text-masonic-gold transition-colors"
              title="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-masonic-void/98 backdrop-blur-2xl border-b border-masonic-gold/30 px-6 pt-5 pb-8 mt-2 shadow-2xl animate-fade-in">
          
          <div className="flex flex-col items-center text-center space-y-4">
            {allNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.22em] text-masonic-ivory/90 hover:text-masonic-gold py-1.5 font-serif transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-masonic-gold/40 to-transparent my-2" />

            <div className="w-full flex flex-col space-y-2.5 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsObservatoryModalOpen(true);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-masonic-slate border border-masonic-gold/40 text-masonic-gold font-mono text-xs tracking-wider uppercase rounded-sm hover:bg-masonic-gold/20 transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Observatório Celeste de Guaranésia</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-masonic-gold text-masonic-void font-serif text-xs font-bold tracking-widest uppercase hover:bg-masonic-gold-light transition-colors rounded-sm shadow-gold-glow"
              >
                <KeyRound className="w-4 h-4" />
                <span>Acessar Área do Membro</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
