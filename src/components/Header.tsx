import React, { useState, useEffect } from 'react';
import { Compass, KeyRound, Menu, X } from 'lucide-react';
import { LODGE_INFO } from '../data/mockData';
import { LodgeEmblemLogo } from './LodgeEmblemLogo';

interface HeaderProps {
  onOpenLogin: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Loja', href: '#aloja' },
    { name: 'História', href: '#historia' },
    { name: 'Princípios', href: '#principios' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-masonic-void/95 backdrop-blur-xl border-b border-masonic-gold/30 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.9)]'
          : 'bg-gradient-to-b from-masonic-void via-masonic-void/80 to-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Left */}
          <a href="#hero" className="flex items-center space-x-3.5 group shrink-0">
            <LodgeEmblemLogo size={42} />
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-masonic-crimson animate-pulse" />
                <span className="font-serif text-xs sm:text-sm tracking-[0.2em] font-extrabold text-masonic-ivory group-hover:text-masonic-gold transition-colors whitespace-nowrap">
                  PAZ, HARMONIA & CONCÓRDIA
                </span>
              </div>
              <span className="font-mono text-[9px] tracking-[0.22em] text-masonic-gold/90 uppercase whitespace-nowrap">
                A.R.L.S. Nº 297 • GUARANÉSIA - MG • GOMG
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-serif uppercase tracking-[0.2em] text-masonic-ivory/85 hover:text-masonic-gold transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-masonic-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Member Area Button (Right) */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenLogin}
              className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-serif text-xs tracking-[0.2em] uppercase font-bold text-masonic-gold border border-masonic-gold/60 rounded-sm shadow-gold-glow group hover:text-masonic-void transition-colors whitespace-nowrap"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-masonic-gold via-masonic-gold-light to-masonic-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <span className="relative flex items-center space-x-2">
                <KeyRound className="w-3.5 h-3.5 text-masonic-gold group-hover:text-masonic-void transition-colors" />
                <span>ÁREA DO MEMBRO</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenLogin}
              className="sm:hidden p-2 text-masonic-gold border border-masonic-gold/40 rounded-sm"
              title="Área do Membro"
            >
              <KeyRound className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-masonic-ivory hover:text-masonic-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-masonic-dark/95 backdrop-blur-2xl border-b border-masonic-gold/30 px-6 pt-4 pb-6 mt-3 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-masonic-ivory/90 hover:text-masonic-gold py-2 border-b border-masonic-gold/10 font-serif"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-masonic-gold/10 border border-masonic-gold text-masonic-gold font-serif text-xs tracking-widest uppercase hover:bg-masonic-gold hover:text-masonic-void transition-colors rounded-sm"
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
