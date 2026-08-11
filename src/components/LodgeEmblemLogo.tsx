import React from 'react';

interface LodgeEmblemLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const LodgeEmblemLogo: React.FC<LodgeEmblemLogoProps> = ({
  className = '',
  size = 120,
  showText = false,
}) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="relative flex items-center justify-center transition-transform duration-500 hover:scale-105"
      >
        {/* Soft Golden & Crimson Glow Backdrop */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-masonic-gold/20 via-masonic-crimson/20 to-masonic-gold/20 blur-xl opacity-60 pointer-events-none" />

        {/* High Resolution PNG Official Crest */}
        <img
          src="/assets/lodge-shield.png"
          alt="Estandarte Oficial A.R.L.S. Paz, Harmonia & Concórdia nº 297"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
        />
      </div>

      {showText && (
        <div className="mt-3 text-center">
          <h3 className="font-serif text-sm font-bold tracking-[0.25em] text-masonic-gold uppercase">
            Paz, Harmonia e Concórdia Nº 297
          </h3>
          <p className="font-mono text-[10px] tracking-widest text-masonic-crimson-light uppercase font-semibold">
            Fundada em 16 de Outubro de 2015 • GOMG
          </p>
        </div>
      )}
    </div>
  );
};
