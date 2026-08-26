import React from 'react';
import { ZODIAC_CONSTELLATIONS } from '../data/constellationsData';
import { useGuaranesiaSky } from '../context/GuaranesiaSkyContext';

interface SectionConstellationsProps {
  leftZodiacId: string;
  rightZodiacId: string;
}

export const SectionConstellations: React.FC<SectionConstellationsProps> = ({
  leftZodiacId,
  rightZodiacId,
}) => {
  const { skyState } = useGuaranesiaSky();
  const leftItem = ZODIAC_CONSTELLATIONS.find((c) => c.id === leftZodiacId);
  const rightItem = ZODIAC_CONSTELLATIONS.find((c) => c.id === rightZodiacId);

  const leftPos = skyState.zodiacPositions[leftZodiacId];
  const rightPos = skyState.zodiacPositions[rightZodiacId];

  const leftOpacity = leftPos ? leftPos.opacity : 0.35;
  const rightOpacity = rightPos ? rightPos.opacity : 0.35;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* LEFT ZODIAC CONSTELLATION */}
      {leftItem && (
        <div
          className="absolute top-8 sm:top-12 left-2 sm:left-12 transition-all duration-1000 animate-float-slow"
          style={{ opacity: leftOpacity }}
        >
          <svg className="w-28 h-28 sm:w-52 sm:h-52 text-masonic-gold opacity-40 sm:opacity-100" viewBox="0 0 180 160" fill="none">
            {leftItem.edges.map(([fromIdx, toIdx], i) => {
              const s1 = leftItem.stars[fromIdx];
              const s2 = leftItem.stars[toIdx];
              if (!s1 || !s2) return null;
              return (
                <line
                  key={`l-edge-${i}`}
                  x1={s1.x}
                  y1={s1.y}
                  x2={s2.x}
                  y2={s2.y}
                  stroke="currentColor"
                  strokeWidth="0.9"
                  strokeDasharray="2 2"
                />
              );
            })}

            {leftItem.stars.map((star, idx) => (
              <g key={`l-star-${idx}`}>
                <circle
                  cx={star.x}
                  cy={star.y}
                  r={star.name ? 3.5 : 2.5}
                  fill={idx % 2 === 0 ? '#ebd197' : '#ffffff'}
                />
              </g>
            ))}
          </svg>
          {leftPos && (
            <div className="absolute bottom-2 left-4 font-mono text-[9px] text-masonic-gold/80 tracking-wider bg-masonic-dark/85 px-2 py-0.5 rounded border border-masonic-gold/25">
              {leftPos.isVisible ? `Visível em Guaranésia (${Math.round(leftPos.altitudeDeg)}°)` : 'Abaixo do Horizonte'}
            </div>
          )}
        </div>
      )}

      {/* RIGHT ZODIAC CONSTELLATION */}
      {rightItem && (
        <div
          className="absolute bottom-8 sm:bottom-12 right-2 sm:right-12 transition-all duration-1000 animate-pulse-subtle"
          style={{ opacity: rightOpacity }}
        >
          <svg className="w-28 h-28 sm:w-52 sm:h-52 text-masonic-gold opacity-40 sm:opacity-100" viewBox="0 0 180 160" fill="none">
            {rightItem.edges.map(([fromIdx, toIdx], i) => {
              const s1 = rightItem.stars[fromIdx];
              const s2 = rightItem.stars[toIdx];
              if (!s1 || !s2) return null;
              return (
                <line
                  key={`r-edge-${i}`}
                  x1={s1.x}
                  y1={s1.y}
                  x2={s2.x}
                  y2={s2.y}
                  stroke="currentColor"
                  strokeWidth="0.9"
                  strokeDasharray="2 2"
                />
              );
            })}

            {rightItem.stars.map((star, idx) => (
              <g key={`r-star-${idx}`}>
                <circle
                  cx={star.x}
                  cy={star.y}
                  r={star.name ? 3.5 : 2.5}
                  fill={idx % 2 === 0 ? '#ebd197' : '#ffffff'}
                />
              </g>
            ))}
          </svg>
          {rightPos && (
            <div className="absolute top-2 right-4 font-mono text-[9px] text-masonic-gold/80 tracking-wider bg-masonic-dark/85 px-2 py-0.5 rounded border border-masonic-gold/25">
              {rightPos.isVisible ? `Visível em Guaranésia (${Math.round(rightPos.altitudeDeg)}°)` : 'Abaixo do Horizonte'}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
