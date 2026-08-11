import React from 'react';
import { ZODIAC_CONSTELLATIONS } from '../data/constellationsData';

interface SectionConstellationsProps {
  leftZodiacId: string;
  rightZodiacId: string;
}

export const SectionConstellations: React.FC<SectionConstellationsProps> = ({
  leftZodiacId,
  rightZodiacId,
}) => {
  const leftItem = ZODIAC_CONSTELLATIONS.find((c) => c.id === leftZodiacId);
  const rightItem = ZODIAC_CONSTELLATIONS.find((c) => c.id === rightZodiacId);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      
      {/* LEFT ZODIAC CONSTELLATION (PURE SVG WITHOUT CAPTIONS) */}
      {leftItem && (
        <div className="absolute top-12 left-4 sm:left-12 animate-float-slow">
          <svg className="w-52 h-52 text-masonic-gold" viewBox="0 0 180 160" fill="none">
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
                  className={idx === 0 ? 'animate-ping' : ''}
                />
              </g>
            ))}
          </svg>
        </div>
      )}

      {/* RIGHT ZODIAC CONSTELLATION (PURE SVG WITHOUT CAPTIONS) */}
      {rightItem && (
        <div className="absolute bottom-12 right-4 sm:right-12 animate-pulse-subtle">
          <svg className="w-52 h-52 text-masonic-gold" viewBox="0 0 180 160" fill="none">
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
                  className={idx === 1 ? 'animate-ping' : ''}
                />
              </g>
            ))}
          </svg>
        </div>
      )}

    </div>
  );
};
