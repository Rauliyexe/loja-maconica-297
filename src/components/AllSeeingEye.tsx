import React from 'react';

interface AllSeeingEyeProps {
  className?: string;
  size?: number;
}

export const AllSeeingEye: React.FC<AllSeeingEyeProps> = ({
  className = '',
  size = 550,
}) => {
  // Exact center coordinate of the 500x500 ViewBox
  const cx = 250;
  const cy = 240;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      
      {/* FLUID RADIATING LIGHT BEAMS (BACKGROUND AURA & RAYS) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Soft Golden Background Glow */}
        <div className="w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-masonic-gold/30 via-masonic-gold/10 to-transparent rounded-full blur-3xl animate-pulse-subtle" />

        {/* Dynamic Expanding Wave Ring 1 */}
        <div
          className="absolute rounded-full border border-masonic-gold/40"
          style={{
            animation: 'fluidWave 6s cubic-bezier(0.2, 0.8, 0.4, 1) infinite',
          }}
        />
        
        {/* Dynamic Expanding Wave Ring 2 */}
        <div
          className="absolute rounded-full border border-masonic-gold/30"
          style={{
            animation: 'fluidWave 6s cubic-bezier(0.2, 0.8, 0.4, 1) infinite',
            animationDelay: '3s',
          }}
        />
      </div>

      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-masonic-gold filter drop-shadow-[0_0_35px_rgba(197,160,89,0.5)] relative z-10"
      >
        <defs>
          {/* Radial Gradient for Iris */}
          <radialGradient id="irisGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#ebd197" />
            <stop offset="75%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#574219" />
          </radialGradient>

          {/* Golden Shimmer Gradient for Lines */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ebd197" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#8e6f30" />
          </linearGradient>

          {/* Fading Golden Beam Gradient for Light Rays */}
          <linearGradient id="rayBeamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ebd197" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#c5a059" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* 1. FLUID LIGHT RAYS EMANATING FROM SURROUNDINGS */}
        {/* ------------------------------------------------------------- */}
        
        {/* Layer A: Clockwise Rotating Fine Rays */}
        <g
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
          opacity="0.65"
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            animation: 'fluidRayRotate 40s linear infinite',
          }}
        >
          {Array.from({ length: 48 }).map((_, i) => {
            const angle = (i * 7.5 * Math.PI) / 180;
            const r1 = 145;
            const r2 = 245 + (i % 3) * 15;
            return (
              <line
                key={`ray-a-${i}`}
                x1={cx + Math.cos(angle) * r1}
                y1={cy + Math.sin(angle) * r1}
                x2={cx + Math.cos(angle) * r2}
                y2={cy + Math.sin(angle) * r2}
                strokeDasharray={i % 2 === 0 ? 'none' : '4 4'}
              />
            );
          })}
        </g>

        {/* Layer B: Counter-Clockwise Pulsing Wide Beams */}
        <g
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            animation: 'fluidRayRotateCounter 50s linear infinite',
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x1 = cx + Math.cos(angle - 0.08) * 140;
            const y1 = cy + Math.sin(angle - 0.08) * 140;
            const x2 = cx + Math.cos(angle + 0.08) * 140;
            const y2 = cy + Math.sin(angle + 0.08) * 140;
            const x3 = cx + Math.cos(angle) * 248;
            const y3 = cy + Math.sin(angle) * 248;

            return (
              <polygon
                key={`beam-${i}`}
                points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                fill="url(#rayBeamGradient)"
                opacity={0.25 + (i % 2) * 0.15}
              />
            );
          })}
        </g>

        {/* ------------------------------------------------------------- */}
        {/* 2. SACRED DELTA TRIANGLE (PERFECTLY CENTERED AROUND CY=240) */}
        {/* ------------------------------------------------------------- */}
        {/* Top vertex: 250,55; Bottom vertices: 445,410 and 55,410. Height = 355. Center of height = 232.5 */}
        <polygon
          points={`${cx},55 445,410 55,410`}
          stroke="url(#goldGradient)"
          strokeWidth="3.5"
          fill="rgba(13, 15, 23, 0.55)"
        />
        <polygon
          points={`${cx},73 430,398 70,398`}
          stroke="url(#goldGradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.75"
        />

        {/* Concentric Sacred Geometry Rings Around Eye */}
        <circle cx={cx} cy={cy} r="95" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.6" />
        <circle cx={cx} cy={cy} r="110" stroke="url(#goldGradient)" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.45" />

        {/* ------------------------------------------------------------- */}
        {/* 3. PERMANENTLY OPEN MAGNIFICENT ALL-SEEING EYE */}
        {/* ------------------------------------------------------------- */}
        <g>
          {/* Eye Almond Sclera Base */}
          <path
            d={`M ${cx - 90} ${cy} Q ${cx} ${cy - 85} ${cx + 90} ${cy} Q ${cx} ${cy + 85} ${cx - 90} ${cy} Z`}
            fill="#06070a"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
          />

          {/* Iris Outer Golden Ring */}
          <circle cx={cx} cy={cy} r="46" fill="url(#irisGlow)" stroke="#c5a059" strokeWidth="1.5" />

          {/* Pupil Center */}
          <circle cx={cx} cy={cy} r="20" fill="#040406" />
          <circle cx={cx + 8} cy={cy - 8} r="5.5" fill="#ffffff" opacity="0.95" />

          {/* Iris Rays Detail */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            return (
              <line
                key={`iris-line-${i}`}
                x1={cx + Math.cos(angle) * 20}
                y1={cy + Math.sin(angle) * 20}
                x2={cx + Math.cos(angle) * 44}
                y2={cy + Math.sin(angle) * 44}
                stroke="#574219"
                strokeWidth="0.9"
                opacity="0.75"
              />
            );
          })}

          {/* Eyelash Arch Upper & Lower Accents */}
          <path
            d={`M ${cx - 100} ${cy} Q ${cx} ${cy - 97} ${cx + 100} ${cy}`}
            stroke="url(#goldGradient)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d={`M ${cx - 95} ${cy} Q ${cx} ${cy + 93} ${cx + 95} ${cy}`}
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          />
        </g>

      </svg>

      {/* CSS Animations for Fluid Rays & Expanding Waves */}
      <style>{`
        @keyframes fluidRayRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes fluidRayRotateCounter {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @keyframes fluidWave {
          0% {
            width: 150px;
            height: 150px;
            opacity: 0.8;
          }
          100% {
            width: 650px;
            height: 650px;
            opacity: 0;
          }
        }
      `}</style>

    </div>
  );
};
