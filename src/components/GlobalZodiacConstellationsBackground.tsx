import React from 'react';
import { ZODIAC_CONSTELLATIONS } from '../data/constellationsData';
import { useGuaranesiaSky } from '../context/GuaranesiaSkyContext';

export const GlobalZodiacConstellationsBackground: React.FC = () => {
  const { skyState } = useGuaranesiaSky();

  // Mapeamento vertical de cada constelação ao longo do scroll da página
  const constellationPositions: Record<string, { top: string; side: 'left' | 'right'; offsetClass: string }> = {
    aries: { top: '110vh', side: 'left', offsetClass: 'left-6 sm:left-16' },
    taurus: { top: '130vh', side: 'right', offsetClass: 'right-6 sm:right-20' },
    gemini: { top: '210vh', side: 'left', offsetClass: 'left-8 sm:left-24' },
    cancer: { top: '240vh', side: 'right', offsetClass: 'right-8 sm:right-28' },
    leo: { top: '310vh', side: 'left', offsetClass: 'left-6 sm:left-20' },
    virgo: { top: '340vh', side: 'right', offsetClass: 'right-6 sm:right-20' },
    libra: { top: '410vh', side: 'left', offsetClass: 'left-8 sm:left-24' },
    scorpio: { top: '440vh', side: 'right', offsetClass: 'right-8 sm:right-24' },
    sagittarius: { top: '510vh', side: 'left', offsetClass: 'left-6 sm:left-20' },
    capricorn: { top: '580vh', side: 'right', offsetClass: 'right-6 sm:right-20' },
    aquarius: { top: '660vh', side: 'left', offsetClass: 'left-8 sm:left-24' },
    pisces: { top: '740vh', side: 'right', offsetClass: 'right-8 sm:right-24' },
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {ZODIAC_CONSTELLATIONS.map((c, idx) => {
        const layout = constellationPositions[c.id] || { top: `${100 + idx * 60}vh`, side: 'left', offsetClass: 'left-6' };
        const pos = skyState.zodiacPositions[c.id];
        const opacity = pos ? pos.opacity : 0.25;
        const isZenith = pos?.isZenithal;
        const isVisible = pos?.isVisible;

        return (
          <div
            key={c.id}
            className={`absolute ${layout.offsetClass} transition-all duration-1000 ${
              idx % 2 === 0 ? 'animate-float-slow' : 'animate-pulse-subtle'
            }`}
            style={{ top: layout.top, opacity }}
          >
            <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
              {/* Golden Connection Lines using genuine IAU astronomical edges */}
              {c.edges.map(([fromIdx, toIdx], edgeIdx) => {
                const s1 = c.stars[fromIdx];
                const s2 = c.stars[toIdx];
                if (!s1 || !s2) return null;
                return (
                  <line
                    key={`edge-${c.id}-${edgeIdx}`}
                    x1={s1.x}
                    y1={s1.y}
                    x2={s2.x}
                    y2={s2.y}
                    stroke="#c5a059"
                    strokeWidth="0.9"
                    strokeDasharray="2.5 2.5"
                    opacity="0.8"
                  />
                );
              })}

              {/* Star Nodes */}
              {c.stars.map((star, starIdx) => (
                <g key={`star-${c.id}-${starIdx}`}>
                  <circle
                    cx={star.x}
                    cy={star.y}
                    r={star.name ? (isZenith ? 4.5 : 3.5) : 2.5}
                    fill={starIdx % 2 === 0 ? '#ebd197' : '#ffffff'}
                  />
                </g>
              ))}

              {/* Constellation Name Label */}
              <text
                x={c.stars[0]?.x || 40}
                y={(c.stars[0]?.y || 40) - 10}
                fill="#c5a059"
                fontSize="8.5"
                fontFamily="Cinzel, serif"
                opacity="0.85"
              >
                {c.name.toUpperCase()} {isVisible && pos ? `(${Math.round(pos.altitudeDeg)}°)` : ''}
              </text>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
