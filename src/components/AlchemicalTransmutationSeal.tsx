import React from 'react';

interface AlchemicalSealProps {
  activeType: string; // 'sabedoria' | 'forca' | 'beleza' | 'paz' | 'harmonia' | 'concordia'
  size?: number;
}

export const AlchemicalTransmutationSeal: React.FC<AlchemicalSealProps> = ({ activeType, size = 320 }) => {
  // Color aura accents per active alchemical principle
  const getGlowColor = () => {
    switch (activeType) {
      case 'sabedoria':
        return '#c5a059'; // Golden Mercury
      case 'forca':
        return '#e07a5f'; // Fiery Sulfur Crimson
      case 'beleza':
        return '#81b29a'; // Emerald Salt / Harmonious Jade
      case 'paz':
        return '#64dfdf'; // Ethereal Blue
      case 'harmonia':
        return '#f4a261'; // Solar Amber
      case 'concordia':
        return '#d4af37'; // Pure Gold
      default:
        return '#c5a059';
    }
  };

  const glowColor = getGlowColor();

  return (
    <div className="relative flex items-center justify-center pointer-events-none select-none" style={{ width: size, height: size }}>
      
      {/* Outer Ethereal Glow */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-700 blur-2xl opacity-30"
        style={{ backgroundColor: glowColor }}
      />

      <svg
        viewBox="0 0 500 500"
        className="w-full h-full text-masonic-gold relative z-10 filter drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]"
        fill="none"
      >
        {/* Outer Alchemical Boundary Circle */}
        <circle cx="250" cy="250" r="235" stroke={glowColor} strokeWidth="1.5" strokeDasharray="6 3" className="animate-spin-slow opacity-80" />
        <circle cx="250" cy="250" r="225" stroke="#c5a059" strokeWidth="0.8" opacity="0.6" />

        {/* Concentric Runic Circle with Alchemical Nodes */}
        <circle cx="250" cy="250" r="200" stroke="#c5a059" strokeWidth="1" strokeDasharray="1 5" />
        
        {/* 12 Outer Alchemical Ray Spokes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 250 + 200 * Math.cos(angle);
          const y1 = 250 + 200 * Math.sin(angle);
          const x2 = 250 + 225 * Math.cos(angle);
          const y2 = 250 + 225 * Math.sin(angle);
          return (
            <line key={`spoke-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c5a059" strokeWidth="1" opacity="0.7" />
          );
        })}

        {/* SQUARING THE CIRCLE (Alchemical Magnum Opus Geometry) */}
        {/* Outer Square */}
        <rect
          x="108"
          y="108"
          width="284"
          height="284"
          stroke="#c5a059"
          strokeWidth="1.2"
          opacity="0.85"
          transform="rotate(45 250 250)"
        />

        {/* Inscribed Triangle (The Divine Triad / As Três Luzes) */}
        <polygon
          points="250,55 418,347 82,347"
          stroke={glowColor}
          strokeWidth="1.8"
          className="transition-all duration-700"
        />

        {/* Inverted Sacred Triangle (Salomonic Seal Hexagram interplay) */}
        <polygon
          points="250,445 418,153 82,153"
          stroke="#c5a059"
          strokeWidth="0.8"
          opacity="0.4"
          strokeDasharray="4 2"
        />

        {/* Inner Alchemical Crucible Circle */}
        <circle cx="250" cy="250" r="95" stroke="#c5a059" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="85" stroke={glowColor} strokeWidth="1" strokeDasharray="3 3" className="animate-spin-reverse-slow" />

        {/* Central Alchemical Tria Prima Sigil Rendering */}
        {activeType === 'sabedoria' && (
          /* Mercury Hermeticum Sigil (☿) */
          <g transform="translate(250, 250)" className="animate-pulse-subtle">
            <circle cx="0" cy="-10" r="22" stroke={glowColor} strokeWidth="3" />
            <line x1="0" y1="12" x2="0" y2="45" stroke={glowColor} strokeWidth="3" />
            <line x1="-18" y1="30" x2="18" y2="30" stroke={glowColor} strokeWidth="3" />
            {/* Horns of Mercury */}
            <path d="M -18 -32 Q 0 -50 18 -32" stroke={glowColor} strokeWidth="3" fill="none" />
          </g>
        )}

        {activeType === 'forca' && (
          /* Sulfur Alchemical Triangle with Cross (🜍) */
          <g transform="translate(250, 250)" className="animate-pulse-subtle">
            <polygon points="0,-45 32,10 -32,10" stroke={glowColor} strokeWidth="3" fill="none" />
            <line x1="0" y1="10" x2="0" y2="50" stroke={glowColor} strokeWidth="3" />
            <line x1="-18" y1="32" x2="18" y2="32" stroke={glowColor} strokeWidth="3" />
          </g>
        )}

        {activeType === 'beleza' && (
          /* Sal Sapientiae Circle with Horizontal Line (🜔) */
          <g transform="translate(250, 250)" className="animate-pulse-subtle">
            <circle cx="0" cy="0" r="36" stroke={glowColor} strokeWidth="3" />
            <line x1="-36" y1="0" x2="36" y2="0" stroke={glowColor} strokeWidth="3" />
            <circle cx="0" cy="0" r="10" fill={glowColor} />
          </g>
        )}

        {['paz', 'harmonia', 'concordia'].includes(activeType) && (
          /* Compass & Square Emblem Core */
          <g transform="translate(250, 250)" className="animate-pulse-subtle">
            <path d="M 0 -45 L 35 35 L -35 35 Z" stroke={glowColor} strokeWidth="2.5" fill="none" />
            <path d="M -40 -20 L 0 25 L 40 -20" stroke="#c5a059" strokeWidth="2.5" fill="none" />
            <circle cx="0" cy="0" r="8" fill={glowColor} />
          </g>
        )}

        {/* 4 Element Sigil Points at Vertices (Ignis 🜂, Aqua 🜄, Aer 🜁, Terra 🜃) */}
        <text x="242" y="42" fill="#c5a059" fontSize="16" fontFamily="serif" fontWeight="bold">🜂</text>
        <text x="430" y="360" fill="#c5a059" fontSize="16" fontFamily="serif" fontWeight="bold">🜄</text>
        <text x="50" y="360" fill="#c5a059" fontSize="16" fontFamily="serif" fontWeight="bold">🜁</text>
        <text x="242" y="475" fill="#c5a059" fontSize="16" fontFamily="serif" fontWeight="bold">🜃</text>

      </svg>
    </div>
  );
};
