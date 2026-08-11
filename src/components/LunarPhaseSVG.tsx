import React from 'react';

interface LunarPhaseSVGProps {
  phase: number; // 0 to 7 (0: Nova, 1: Crescente 1, 2: Quarto Crescente, 3: Gibosa 1, 4: Cheia, 5: Gibosa 2, 6: Quarto Minguante, 7: Minguante)
  size?: number;
  active?: boolean;
}

export const LunarPhaseSVG: React.FC<LunarPhaseSVGProps> = ({
  phase,
  size = 24,
  active = false,
}) => {
  // Phase angles & illumination offsets
  const isFull = phase === 4;
  const isNew = phase === 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${active ? 'scale-125 filter drop-shadow-[0_0_8px_#c5a059]' : 'opacity-80 hover:opacity-100'}`}
    >
      <defs>
        <radialGradient id={`moonSphere-${phase}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor={active || isFull ? '#fff3d6' : '#e6e1d5'} />
          <stop offset="60%" stopColor={active || isFull ? '#c5a059' : '#999285'} />
          <stop offset="100%" stopColor={active || isFull ? '#735926' : '#403d37'} />
        </radialGradient>
      </defs>

      {/* Outer Golden/Silver Border Ring */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke={active ? '#c5a059' : 'rgba(197, 160, 89, 0.4)'}
        strokeWidth={active ? '1.5' : '1'}
        fill="#08080c"
      />

      {/* Moon Base Sphere */}
      <circle cx="20" cy="20" r="15" fill={`url(#moonSphere-${phase})`} />

      {/* Shadow Mask for Lunar Phases */}
      {isNew && (
        <circle cx="20" cy="20" r="15.2" fill="#08080c" opacity="0.9" />
      )}

      {phase === 1 && ( // Waxing Crescent (Crescente inicial)
        <path d="M 20 5 A 15 15 0 0 1 20 35 A 8 15 0 0 0 20 5 Z" fill="#08080c" opacity="0.92" />
      )}

      {phase === 2 && ( // First Quarter (Quarto Crescente)
        <path d="M 20 5 A 15 15 0 0 0 20 35 Z" fill="#08080c" opacity="0.9" />
      )}

      {phase === 3 && ( // Waxing Gibbous (Gibosa)
        <path d="M 20 5 A 15 15 0 0 0 20 35 A 8 15 0 0 1 20 5 Z" fill="#08080c" opacity="0.8" />
      )}

      {phase === 5 && ( // Waning Gibbous (Gibosa Minguante)
        <path d="M 20 5 A 15 15 0 0 1 20 35 A 8 15 0 0 0 20 5 Z" fill="#08080c" opacity="0.8" />
      )}

      {phase === 6 && ( // Last Quarter (Quarto Minguante)
        <path d="M 20 5 A 15 15 0 0 1 20 35 Z" fill="#08080c" opacity="0.9" />
      )}

      {phase === 7 && ( // Waning Crescent (Minguante final)
        <path d="M 20 5 A 15 15 0 0 1 20 35 A 8 15 0 0 1 20 5 Z" fill="#08080c" opacity="0.92" />
      )}

      {/* Surface Craters Accent */}
      <circle cx="15" cy="14" r="1.5" fill="rgba(0,0,0,0.15)" />
      <circle cx="22" cy="24" r="2" fill="rgba(0,0,0,0.15)" />
    </svg>
  );
};
