import React from 'react';
import { ZODIAC_CONSTELLATIONS } from '../data/constellationsData';

export const ConstellationBackgroundOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 z-0">
      {/* Floating Constellation 1: Libra (Top Left) */}
      <div className="absolute top-12 left-6 sm:left-16 animate-float-slow">
        <svg className="w-48 h-48 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <line x1="50" y1="90" x2="100" y2="40" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="100" y1="40" x2="140" y2="80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="140" y1="80" x2="90" y2="130" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="90" y1="130" x2="50" y2="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="50" cy="90" r="3" fill="#ebd197" className="animate-ping" />
          <circle cx="100" cy="40" r="3" fill="#ffffff" />
          <circle cx="140" cy="80" r="3" fill="#ebd197" />
          <circle cx="90" cy="130" r="3" fill="#ffffff" />
        </svg>
      </div>

      {/* Floating Constellation 2: Leo (Top Right) */}
      <div className="absolute top-20 right-8 sm:right-24 animate-pulse-subtle">
        <svg className="w-52 h-52 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polyline points="30,80 60,40 100,30 130,55 110,95 70,110 30,80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="30" cy="80" r="4" fill="#ebd197" />
          <circle cx="60" cy="40" r="3" fill="#ffffff" />
          <circle cx="100" cy="30" r="3" fill="#ebd197" />
          <circle cx="130" cy="55" r="3" fill="#ffffff" />
          <circle cx="110" cy="95" r="3" fill="#ebd197" />
        </svg>
      </div>

      {/* Floating Constellation 3: Scorpio (Bottom Left) */}
      <div className="absolute bottom-16 left-12 animate-float-slow">
        <svg className="w-56 h-56 text-masonic-gold" viewBox="0 0 180 160" fill="none">
          <polyline points="50,50 80,70 110,95 130,125 110,145 80,135" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="3" fill="#ffffff" />
          <circle cx="80" cy="70" r="4" fill="#ebd197" className="animate-ping" />
          <circle cx="110" cy="95" r="3" fill="#ffffff" />
          <circle cx="130" cy="125" r="3" fill="#ebd197" />
        </svg>
      </div>
    </div>
  );
};
