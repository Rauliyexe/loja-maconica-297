import React from 'react';

interface VectorEarthProps {
  size?: number;
  opacity?: number;
  className?: string;
}

export const VectorEarth: React.FC<VectorEarthProps> = ({ size = 260, opacity = 1, className = '' }) => {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none transition-opacity duration-500 ${className}`}
      style={{ opacity }}
    >
      {/* Atmosphere Glow Aura Ring */}
      <div
        className="absolute rounded-full bg-blue-500/20 blur-xl animate-pulse-subtle"
        style={{ width: size * 1.15, height: size * 1.15 }}
      />
      
      <div
        className="absolute rounded-full border border-cyan-400/30 animate-spin-slow opacity-60"
        style={{ width: size * 1.08, height: size * 1.08 }}
      />

      {/* Photorealistic PNG Earth Asset */}
      <img
        src="/assets/earth.png"
        alt="Terra Celestial"
        className="relative z-10 object-contain filter drop-shadow-[0_0_25px_rgba(64,165,255,0.6)] animate-pulse-subtle"
        style={{ width: size, height: size }}
      />
    </div>
  );
};
