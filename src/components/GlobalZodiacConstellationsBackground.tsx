import React from 'react';
import { ZODIAC_CONSTELLATIONS } from '../data/constellationsData';

export const GlobalZodiacConstellationsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* ------------------------------------------------------------- */}
      {/* GLOBAL ZODIAC CONSTELLATIONS BACKGROUND ECOSYSTEM */}
      {/* ------------------------------------------------------------- */}

      {/* 1. Áries (Top Left - A Loja Area) */}
      <div className="absolute top-[110vh] left-6 sm:left-16 opacity-35 animate-float-slow">
        <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polyline points="30,70 70,50 100,65 140,90" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" />
          <circle cx="30" cy="70" r="3.5" fill="#ebd197" className="animate-ping" />
          <circle cx="70" cy="50" r="3" fill="#ffffff" />
          <circle cx="100" cy="65" r="3" fill="#ebd197" />
          <circle cx="140" cy="90" r="3" fill="#ffffff" />
          <text x="35" y="60" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            ARIES ♈
          </text>
        </svg>
      </div>

      {/* 2. Touro (Top Right - A Loja Area) */}
      <div className="absolute top-[130vh] right-6 sm:right-20 opacity-30 animate-pulse-subtle">
        <svg className="w-60 h-60 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polyline points="40,80 80,60 120,40" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <line x1="40" y1="80" x2="100" y2="90" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <line x1="100" y1="90" x2="150" y2="70" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <line x1="40" y1="80" x2="130" y2="110" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <circle cx="40" cy="80" r="4" fill="#ebd197" />
          <circle cx="80" cy="60" r="3" fill="#ffffff" />
          <circle cx="120" cy="40" r="3" fill="#ebd197" />
          <circle cx="100" cy="90" r="3" fill="#ffffff" />
          <circle cx="150" cy="70" r="3" fill="#ebd197" />
          <text x="45" y="70" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            TAURUS ♉
          </text>
        </svg>
      </div>

      {/* 3. Gêmeos (Left - História Area) */}
      <div className="absolute top-[210vh] left-8 sm:left-24 opacity-35 animate-float-slow">
        <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <line x1="40" y1="30" x2="70" y2="35" stroke="currentColor" strokeWidth="0.9" />
          <line x1="40" y1="30" x2="50" y2="80" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" />
          <line x1="70" y1="35" x2="80" y2="85" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" />
          <line x1="50" y1="80" x2="60" y2="130" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" />
          <line x1="80" y1="85" x2="90" y2="135" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" />
          <circle cx="40" cy="30" r="3.5" fill="#ebd197" />
          <circle cx="70" cy="35" r="3.5" fill="#ffffff" />
          <circle cx="60" cy="130" r="3" fill="#ebd197" />
          <text x="45" y="25" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            GEMINI ♊
          </text>
        </svg>
      </div>

      {/* 4. Câncer (Right - História Area) */}
      <div className="absolute top-[240vh] right-8 sm:right-28 opacity-30 animate-pulse-subtle">
        <svg className="w-48 h-48 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <line x1="80" y1="40" x2="120" y2="75" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <line x1="80" y1="40" x2="40" y2="90" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <line x1="80" y1="40" x2="90" y2="130" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <circle cx="80" cy="40" r="4" fill="#ebd197" className="animate-ping" />
          <circle cx="120" cy="75" r="3" fill="#ffffff" />
          <circle cx="40" cy="90" r="3" fill="#ebd197" />
          <text x="85" y="30" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            CANCER ♋
          </text>
        </svg>
      </div>

      {/* 5. Leão (Left - Princípios Area) */}
      <div className="absolute top-[310vh] left-6 sm:left-20 opacity-35 animate-float-slow">
        <svg className="w-60 h-60 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polygon points="30,80 60,40 100,30 130,55 110,95 70,110" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" fill="none" />
          <circle cx="30" cy="80" r="4" fill="#ebd197" />
          <circle cx="60" cy="40" r="3" fill="#ffffff" />
          <circle cx="100" cy="30" r="3" fill="#ebd197" />
          <circle cx="130" cy="55" r="3" fill="#ffffff" />
          <text x="35" y="95" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            LEO ♌
          </text>
        </svg>
      </div>

      {/* 6. Virgem (Right - Princípios Area) */}
      <div className="absolute top-[340vh] right-6 sm:right-20 opacity-30 animate-pulse-subtle">
        <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polyline points="40,110 70,70 110,40" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <polyline points="70,70 130,80 100,120 40,110" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <circle cx="40" cy="110" r="4" fill="#ebd197" />
          <circle cx="70" cy="70" r="3" fill="#ffffff" />
          <circle cx="110" cy="40" r="3" fill="#ebd197" />
          <text x="45" y="125" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            VIRGO ♍
          </text>
        </svg>
      </div>

      {/* 7. Libra (Left - Sol & Lua Area) */}
      <div className="absolute top-[410vh] left-8 sm:left-24 opacity-40 animate-float-slow">
        <svg className="w-64 h-64 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polygon points="50,90 100,40 140,80 90,130" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" />
          <line x1="100" y1="40" x2="90" y2="130" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <circle cx="50" cy="90" r="4" fill="#ebd197" className="animate-ping" />
          <circle cx="100" cy="40" r="3.5" fill="#ffffff" />
          <circle cx="140" cy="80" r="3.5" fill="#ebd197" />
          <circle cx="90" cy="130" r="3.5" fill="#ffffff" />
          <text x="55" y="105" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.85">
            LIBRA ♎
          </text>
        </svg>
      </div>

      {/* 8. Escorpião (Right - Sol & Lua Area) */}
      <div className="absolute top-[440vh] right-8 sm:right-24 opacity-35 animate-pulse-subtle">
        <svg className="w-60 h-60 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polyline points="50,50 80,70 110,95 130,125 110,145 80,135" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="3" fill="#ffffff" />
          <circle cx="80" cy="70" r="4" fill="#ebd197" />
          <circle cx="110" cy="95" r="3" fill="#ffffff" />
          <circle cx="130" cy="125" r="3.5" fill="#ebd197" />
          <text x="85" y="60" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            SCORPIUS ♏
          </text>
        </svg>
      </div>

      {/* 9. Sagitário (Left - Membros Area) */}
      <div className="absolute top-[510vh] left-6 sm:left-20 opacity-35 animate-float-slow">
        <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polygon points="40,80 70,50 100,40 120,70 90,110" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" fill="none" />
          <line x1="70" y1="50" x2="90" y2="110" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" />
          <circle cx="40" cy="80" r="3.5" fill="#ebd197" />
          <circle cx="70" cy="50" r="3" fill="#ffffff" />
          <circle cx="100" cy="40" r="3" fill="#ebd197" />
          <text x="45" y="95" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            SAGITTARIUS ♐
          </text>
        </svg>
      </div>

      {/* 10. Capricórnio (Right - Galeria Area) */}
      <div className="absolute top-[580vh] right-6 sm:right-20 opacity-35 animate-pulse-subtle">
        <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polygon points="30,40 60,60 110,100 90,120 60,60" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" fill="none" />
          <line x1="110" y1="100" x2="140" y2="90" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" />
          <circle cx="30" cy="40" r="3" fill="#ffffff" />
          <circle cx="60" cy="60" r="3.5" fill="#ebd197" />
          <circle cx="110" cy="100" r="3.5" fill="#ebd197" />
          <text x="35" y="30" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            CAPRICORNUS ♑
          </text>
        </svg>
      </div>

      {/* 11. Aquário (Left - Eventos Area) */}
      <div className="absolute top-[660vh] left-8 sm:left-24 opacity-35 animate-float-slow">
        <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polygon points="40,50 80,40 120,70 90,110 50,120" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 2" fill="none" />
          <circle cx="40" cy="50" r="3.5" fill="#ebd197" />
          <circle cx="80" cy="40" r="3" fill="#ffffff" />
          <circle cx="120" cy="70" r="3.5" fill="#ebd197" />
          <text x="45" y="40" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            AQUARIUS ♒
          </text>
        </svg>
      </div>

      {/* 12. Peixes (Right - Contato Area) */}
      <div className="absolute top-[740vh] right-8 sm:right-24 opacity-35 animate-pulse-subtle">
        <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polygon points="30,100 70,60 120,40 140,80 90,120" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" fill="none" />
          <circle cx="30" cy="100" r="3.5" fill="#ebd197" />
          <circle cx="70" cy="60" r="3" fill="#ffffff" />
          <circle cx="120" cy="40" r="3.5" fill="#ebd197" />
          <text x="35" y="115" fill="#c5a059" fontSize="9" fontFamily="Cinzel, serif" opacity="0.8">
            PISCES ♓
          </text>
        </svg>
      </div>

    </div>
  );
};
