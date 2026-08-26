import React from 'react';

interface PillarProps {
  type: 'B' | 'J';
  height?: number;
}

export const MasonicPillarSVG: React.FC<PillarProps> = ({ type, height = 580 }) => {
  const isB = type === 'B';
  const width = Math.round(height * 0.32);

  // Unique IDs to avoid conflicts when both pillars are rendered
  const uid = isB ? 'boaz' : 'jachin';
  const clipId = `globeClip-${uid}`;
  const shadeGradId = `globeShade-${uid}`;
  const rimGradId = `rimGrad-${uid}`;
  const glowId = `globeGlow-${uid}`;

  // Globe center and radius in SVG viewBox coords
  const GCX = 90;
  const GCY = 55;
  const GR = 42;

  // The texture image (2:1 equirectangular) is rendered 4× the globe width for
  // seamless looping, starting at -2× and translating +4× over one full animation.
  const texW = GR * 4; // 168px wide = 2× diameter per texture tile
  const texH = GR * 2; // 84px high = 1× diameter

  const texY = GCY - GR; // top of globe = 13px
  const texXStart = GCX - texW / 2; // so texture centre aligns at globe centre

  return (
    <div className="relative flex flex-col items-center select-none group" style={{ width, height }}>

      {/* Golden Atmosphere Glow behind Globe */}
      <div className="absolute top-2 w-28 h-28 rounded-full bg-masonic-gold/15 blur-xl group-hover:bg-masonic-gold/30 transition-all duration-700 pointer-events-none" />

      <svg
        viewBox="0 0 180 520"
        className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
        fill="none"
      >
        <defs>
          {/* ── Metallic Gold Gradients ── */}
          <linearGradient id="minGoldShaft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#574116" />
            <stop offset="20%" stopColor="#c5a059" />
            <stop offset="50%" stopColor="#f7e6a6" />
            <stop offset="80%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#3d2c0b" />
          </linearGradient>

          <linearGradient id="minGoldCapital" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7e6a6" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#634914" />
          </linearGradient>

          {/* ── Globe Clip (sphere shape) ── */}
          <clipPath id={clipId}>
            <circle cx={GCX} cy={GCY} r={GR} />
          </clipPath>

          {/* ── Specular 3-D Shading Overlay ── */}
          <radialGradient id={shadeGradId} cx="30%" cy="25%" r="72%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="55%"  stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.88" />
          </radialGradient>

          {/* ── Rim / Atmosphere ring gradient ── */}
          <radialGradient id={rimGradId} cx="50%" cy="50%" r="50%">
            <stop offset="82%"  stopColor="transparent" />
            <stop offset="92%"  stopColor={isB ? '#c5a059' : '#7a90c8'} stopOpacity="0.5" />
            <stop offset="100%" stopColor={isB ? '#f7e6a6' : '#aec3ff'} stopOpacity="0.15" />
          </radialGradient>

          {/* ── Outer Glow Filter ── */}
          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── CSS Animation for full 360° texture scroll ── */}
          <style>{`
            @keyframes globeScroll-${uid} {
              0%   { transform: translateX(0px); }
              100% { transform: translateX(-${texW}px); }
            }
            .globe-tex-${uid} {
              animation: globeScroll-${uid} 28s linear infinite;
            }
          `}</style>
        </defs>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 1. TOP GLOBE WITH FULL TEXTURE WRAP */}
        {/* ══════════════════════════════════════════════════════════ */}

        {/* Faint outer atmosphere glow ring */}
        <circle
          cx={GCX} cy={GCY} r={GR + 5}
          fill={isB ? 'rgba(197,160,89,0.06)' : 'rgba(100,140,255,0.06)'}
          filter={`url(#${glowId})`}
        />

        {/* Hard golden rim */}
        <circle cx={GCX} cy={GCY} r={GR + 1.5} stroke="#c5a059" strokeWidth="1.2" fill="none" />
        <circle cx={GCX} cy={GCY} r={GR + 3}   stroke="#f5e096" strokeWidth="0.5" opacity="0.4" strokeDasharray="3 2" fill="none" />

        {/* Clipped globe area */}
        <g clipPath={`url(#${clipId})`}>

          {/* ── Scrolling texture strip (two copies side by side = seamless loop) ── */}
          <g className={`globe-tex-${uid}`}>
            {/* First copy */}
            <image
              href={isB ? '/assets/earth-texture.jpg' : '/assets/celestial-texture.jpg'}
              x={texXStart}
              y={texY}
              width={texW}
              height={texH}
              preserveAspectRatio="xMidYMid slice"
            />
            {/* Second copy – placed immediately to the right for seamless loop */}
            <image
              href={isB ? '/assets/earth-texture.jpg' : '/assets/celestial-texture.jpg'}
              x={texXStart + texW}
              y={texY}
              width={texW}
              height={texH}
              preserveAspectRatio="xMidYMid slice"
            />
          </g>

          {/* ── Grid overlay (latitude / longitude or RA/Dec) ── */}
          {isB ? (
            // Terrestrial grid – longitude & latitude ellipses
            <g opacity="0.22" stroke="#f7e6a6" strokeWidth="0.5" fill="none">
              {/* Equator */}
              <ellipse cx={GCX} cy={GCY} rx={GR} ry={GR * 0.08} />
              {/* Tropics */}
              <ellipse cx={GCX} cy={GCY - GR * 0.4} rx={GR * 0.92} ry={GR * 0.07} />
              <ellipse cx={GCX} cy={GCY + GR * 0.4} rx={GR * 0.92} ry={GR * 0.07} />
              {/* Polar circles */}
              <ellipse cx={GCX} cy={GCY - GR * 0.72} rx={GR * 0.7}  ry={GR * 0.05} />
              <ellipse cx={GCX} cy={GCY + GR * 0.72} rx={GR * 0.7}  ry={GR * 0.05} />
              {/* Meridians (vertical ellipses) */}
              <ellipse cx={GCX} cy={GCY} rx={GR * 0.2}  ry={GR} />
              <ellipse cx={GCX} cy={GCY} rx={GR * 0.5}  ry={GR} />
              <ellipse cx={GCX} cy={GCY} rx={GR * 0.85} ry={GR} />
            </g>
          ) : (
            // Celestial grid – ecliptic + RA circles
            <g opacity="0.25" stroke="#c5d8ff" strokeWidth="0.5" fill="none">
              {/* Celestial equator */}
              <ellipse cx={GCX} cy={GCY} rx={GR} ry={GR * 0.08} stroke="#f7e6a6" />
              {/* Ecliptic (tilted) */}
              <ellipse cx={GCX} cy={GCY} rx={GR} ry={GR * 0.22} transform={`rotate(-23.5 ${GCX} ${GCY})`} stroke="#f7e6a6" strokeWidth="0.8" strokeDasharray="4 2" />
              {/* RA lines */}
              <ellipse cx={GCX} cy={GCY} rx={GR * 0.15} ry={GR} />
              <ellipse cx={GCX} cy={GCY} rx={GR * 0.5}  ry={GR} />
              <ellipse cx={GCX} cy={GCY} rx={GR * 0.85} ry={GR} />
            </g>
          )}

          {/* ── 3-D Specular Shading ── */}
          <circle cx={GCX} cy={GCY} r={GR} fill={`url(#${shadeGradId})`} />

          {/* ── Atmospheric rim ── */}
          <circle cx={GCX} cy={GCY} r={GR} fill={`url(#${rimGradId})`} />
        </g>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 2. CAPITAL (TOP PILLAR CAP) */}
        {/* ══════════════════════════════════════════════════════════ */}
        <path d="M 64 97 Q 90 105 116 97 L 108 105 L 72 105 Z" fill="url(#minGoldCapital)" stroke="#3d2c0b" strokeWidth="0.8" />
        <rect x="36" y="105" width="108" height="7" rx="1" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="0.8" />

        <g transform="translate(46, 124)">
          <circle cx="0" cy="0" r="13" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="1" />
          <circle cx="0" cy="0" r="7"  fill="#171105" stroke="#c5a059" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="3"  fill="#f7e6a6" />
        </g>
        <g transform="translate(134, 124)">
          <circle cx="0" cy="0" r="13" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="1" />
          <circle cx="0" cy="0" r="7"  fill="#171105" stroke="#c5a059" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="3"  fill="#f7e6a6" />
        </g>

        <rect x="46" y="114" width="88" height="18" fill="url(#minGoldCapital)" stroke="#3d2c0b" strokeWidth="0.8" />
        <rect x="52" y="132" width="76" height="8"  fill="url(#minGoldShaft)"   stroke="#3d2c0b" strokeWidth="0.8" />

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 3. SHAFT */}
        {/* ══════════════════════════════════════════════════════════ */}
        <rect x="56" y="140" width="68" height="320" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="1.2" />

        {Array.from({ length: 7 }).map((_, i) => {
          const x = 62 + i * 9.3;
          return (
            <line
              key={`min-flute-${i}`}
              x1={x} y1="140"
              x2={x} y2="460"
              stroke="#2b1f07"
              strokeWidth="1.2"
              opacity="0.6"
            />
          );
        })}

        {/* ENGRAVED LETTER B / J */}
        <g transform="translate(90, 300)">
          <text x="1" y="1" fill="#000000" fontSize="46" fontFamily="serif" fontWeight="bold"
            textAnchor="middle" dominantBaseline="central" opacity="0.8">
            {type}
          </text>
          <text x="0" y="0" fill="#ffffff" stroke="#47330d" strokeWidth="1.2"
            fontSize="46" fontFamily="serif" fontWeight="black"
            textAnchor="middle" dominantBaseline="central"
            className="filter drop-shadow-[0_0_8px_rgba(247,230,166,0.8)]">
            {type}
          </text>
        </g>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* 4. PLINTH BASE */}
        {/* ══════════════════════════════════════════════════════════ */}
        <rect x="52" y="460" width="76"  height="10" fill="url(#minGoldCapital)" stroke="#3d2c0b" strokeWidth="1" />
        <rect x="42" y="470" width="96"  height="14" rx="1.5" fill="url(#minGoldShaft)"   stroke="#3d2c0b" strokeWidth="1" />
        <rect x="32" y="484" width="116" height="16" rx="1.5" fill="url(#minGoldCapital)" stroke="#2b1f07" strokeWidth="1.2" />
        <rect x="24" y="500" width="132" height="12" fill="#140f04" stroke="#c5a059" strokeWidth="1" />

      </svg>
    </div>
  );
};
