import React from 'react';

interface PillarProps {
  type: 'B' | 'J';
  height?: number;
}

export const MasonicPillarSVG: React.FC<PillarProps> = ({ type, height = 580 }) => {
  const isB = type === 'B';
  const width = Math.round(height * 0.32);

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
          {/* Metallic Gold Gradients */}
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

          {/* Black & Gold Terrestrial Globe Radial Base (Column B) */}
          <radialGradient id="fullBlackGoldGlobe" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#252b36" />
            <stop offset="50%" stopColor="#0f1117" />
            <stop offset="85%" stopColor="#050608" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* Celestial Obsidian Radial Base (Column J) */}
          <radialGradient id="fullCelestialGlobe" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1a253b" />
            <stop offset="50%" stopColor="#09101d" />
            <stop offset="85%" stopColor="#03060d" />
            <stop offset="100%" stopColor="#010204" />
          </radialGradient>

          {/* Globe Surface Clip Sphere */}
          <clipPath id="globeFullClip">
            <circle cx="90" cy="55" r="42" />
          </clipPath>

          {/* 360 Degree Continuous Rotation Animation */}
          <style>{`
            @keyframes fullGlobeRotation360 {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .rotating-full-globe {
              animation: fullGlobeRotation360 22s linear infinite;
              transform-origin: 90px 55px;
              transform-box: fill-box;
            }
          `}</style>
        </defs>

        {/* ========================================================================= */}
        {/* 1. TOP GLOBES (FULL 360° SURFACE COVERAGE + GUARANTEED ROTATION) */}
        {/* ========================================================================= */}

        {isB ? (
          /* =========================================================================
             COLUMN B (BOAZ): 100% FULL-SURFACE COVERED TERRESTRIAL GLOBE (BLACK & GOLD)
             ========================================================================= */
          <g>
            {/* Outer Golden Atmosphere Ring */}
            <circle cx="90" cy="55" r="43.5" stroke="#c5a059" strokeWidth="1.2" fill="none" />
            <circle cx="90" cy="55" r="45" stroke="#f5e096" strokeWidth="0.6" opacity="0.4" strokeDasharray="3 2" fill="none" />

            {/* Clipped Full-Coverage Terrestrial Globe */}
            <g clipPath="url(#globeFullClip)">
              {/* Globe Base Sphere */}
              <circle cx="90" cy="55" r="42" fill="url(#fullBlackGoldGlobe)" />

              {/* 360° ROTATING FULL-SURFACE MAP GROUP */}
              <g className="rotating-full-globe">
                {/* 1. FULL DENSE GEODESIC GRID (LATITUDE & LONGITUDE COVERING ALL QUADRANTS) */}
                <line x1="90" y1="13" x2="90" y2="97" stroke="#f5e096" strokeWidth="0.6" opacity="0.6" />
                <line x1="48" y1="55" x2="132" y2="55" stroke="#f5e096" strokeWidth="0.6" opacity="0.6" />
                
                <ellipse cx="90" cy="55" rx="42" ry="11" stroke="#c5a059" strokeWidth="0.5" opacity="0.45" fill="none" />
                <ellipse cx="90" cy="55" rx="42" ry="22" stroke="#c5a059" strokeWidth="0.5" opacity="0.45" fill="none" />
                <ellipse cx="90" cy="55" rx="42" ry="33" stroke="#c5a059" strokeWidth="0.5" opacity="0.45" fill="none" />

                <ellipse cx="90" cy="55" rx="11" ry="42" stroke="#c5a059" strokeWidth="0.5" opacity="0.45" fill="none" />
                <ellipse cx="90" cy="55" rx="22" ry="42" stroke="#c5a059" strokeWidth="0.5" opacity="0.45" fill="none" />
                <ellipse cx="90" cy="55" rx="33" ry="42" stroke="#c5a059" strokeWidth="0.5" opacity="0.45" fill="none" />

                {/* 2. FULL CONTINENT LANDMASS COVERAGE (NORTH AMERICA, SOUTH AMERICA, EUROPE, AFRICA, ASIA, AUSTRALIA, ANTARCTICA) */}
                {/* North America */}
                <path
                  d="M 54 28 C 50 18 68 15 78 22 C 84 25 82 35 74 38 C 66 40 56 35 54 28 Z"
                  fill="#c5a059" stroke="#f5e096" strokeWidth="0.6" opacity="0.9"
                />
                {/* South America */}
                <path
                  d="M 72 44 C 82 45 90 54 84 68 C 80 78 72 82 66 74 C 64 64 68 52 72 44 Z"
                  fill="#c5a059" stroke="#f5e096" strokeWidth="0.6" opacity="0.9"
                />
                {/* Europe */}
                <path
                  d="M 94 22 C 102 18 112 25 106 32 C 100 34 92 30 94 22 Z"
                  fill="#c5a059" stroke="#f5e096" strokeWidth="0.6" opacity="0.9"
                />
                {/* Africa */}
                <path
                  d="M 92 36 C 104 34 116 42 112 58 C 106 72 94 70 90 56 C 88 46 90 38 92 36 Z"
                  fill="#c5a059" stroke="#f5e096" strokeWidth="0.6" opacity="0.9"
                />
                {/* Asia */}
                <path
                  d="M 108 18 C 122 15 132 28 126 42 C 118 45 110 38 108 18 Z"
                  fill="#c5a059" stroke="#f5e096" strokeWidth="0.6" opacity="0.9"
                />
                {/* Australia */}
                <path
                  d="M 116 64 C 126 62 130 72 122 78 C 114 78 112 70 116 64 Z"
                  fill="#c5a059" stroke="#f5e096" strokeWidth="0.6" opacity="0.9"
                />
                {/* Antarctica Base Ice Ring */}
                <path
                  d="M 60 90 Q 90 85 120 90 Q 90 98 60 90 Z"
                  fill="#f5e096" stroke="#c5a059" strokeWidth="0.5" opacity="0.8"
                />

                {/* Micro Archipelago Islands */}
                <circle cx="58" cy="48" r="1.5" fill="#f5e096" />
                <circle cx="120" cy="52" r="1.5" fill="#f5e096" />
                <circle cx="102" cy="80" r="1.8" fill="#f5e096" />
              </g>

              {/* 3D Specular Shading Overlay */}
              <radialGradient id="fullShadeB" cx="30%" cy="25%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                <stop offset="60%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.82" />
              </radialGradient>
              <circle cx="90" cy="55" r="42" fill="url(#fullShadeB)" />
            </g>
          </g>
        ) : (
          /* =========================================================================
             COLUMN J (JACHIN): 100% FULL-SURFACE COVERED CELESTIAL GLOBE (ZODIAC & STARS)
             ========================================================================= */
          <g>
            {/* Outer Golden Atmosphere Ring */}
            <circle cx="90" cy="55" r="43.5" stroke="#c5a059" strokeWidth="1.2" fill="none" />
            <circle cx="90" cy="55" r="45" stroke="#f5e096" strokeWidth="0.6" opacity="0.4" strokeDasharray="3 2" fill="none" />

            {/* Clipped Full-Coverage Celestial Globe */}
            <g clipPath="url(#globeFullClip)">
              {/* Globe Base Sphere */}
              <circle cx="90" cy="55" r="42" fill="url(#fullCelestialGlobe)" />

              {/* 360° ROTATING FULL-SURFACE CELESTIAL MAP GROUP */}
              <g className="rotating-full-globe">
                {/* 1. FULL CELESTIAL COORDINATE GRID (RIGHT ASCENSION & DECLINATION LINES) */}
                <circle cx="90" cy="55" r="35" stroke="#c5a059" strokeWidth="0.5" opacity="0.35" fill="none" strokeDasharray="2 2" />
                <circle cx="90" cy="55" r="22" stroke="#c5a059" strokeWidth="0.5" opacity="0.35" fill="none" />
                
                <ellipse cx="90" cy="55" rx="42" ry="16" stroke="#f5e096" strokeWidth="1.8" fill="none" opacity="0.85" />
                <ellipse cx="90" cy="55" rx="16" ry="42" stroke="#c5a059" strokeWidth="0.6" fill="none" opacity="0.4" />

                {/* 2. DENSE CONSTELLATION MAP CONNECTORS ACROSS ALL QUADRANTS */}
                {/* Northern Hemisphere Constellation Map (Ursa / Cassiopeia) */}
                <g stroke="#c5a059" strokeWidth="0.7" opacity="0.8">
                  <line x1="62" y1="28" x2="72" y2="22" />
                  <line x1="72" y1="22" x2="84" y2="26" />
                  <line x1="84" y1="26" x2="96" y2="20" />
                  <line x1="96" y1="20" x2="108" y2="28" />
                  <line x1="108" y1="28" x2="118" y2="22" />
                </g>
                <circle cx="62" cy="28" r="1.6" fill="#ffffff" />
                <circle cx="72" cy="22" r="1.3" fill="#f5e096" />
                <circle cx="84" cy="26" r="1.6" fill="#ffffff" />
                <circle cx="96" cy="20" r="1.3" fill="#f5e096" />
                <circle cx="108" cy="28" r="1.6" fill="#ffffff" />
                <circle cx="118" cy="22" r="1.3" fill="#f5e096" />

                {/* Southern Hemisphere Constellation Map (Orion / Crux) */}
                <g stroke="#c5a059" strokeWidth="0.7" opacity="0.8">
                  <line x1="60" y1="80" x2="72" y2="86" />
                  <line x1="72" y1="86" x2="86" y2="78" />
                  <line x1="86" y1="78" x2="98" y2="84" />
                  <line x1="98" y1="84" x2="112" y2="76" />
                  <line x1="112" y1="76" x2="122" y2="84" />
                </g>
                <circle cx="60" cy="80" r="1.3" fill="#f5e096" />
                <circle cx="72" cy="86" r="1.6" fill="#ffffff" />
                <circle cx="86" cy="78" r="1.3" fill="#f5e096" />
                <circle cx="98" cy="84" r="1.6" fill="#ffffff" />
                <circle cx="112" cy="76" r="1.3" fill="#f5e096" />
                <circle cx="122" cy="84" r="1.6" fill="#ffffff" />

                {/* Equatorial Belt Vector Sigils (All 12 Signs Distributed 360°) */}
                {/* Aries ♈ */}
                <path d="M 52 50 Q 56 44 60 50 L 56 56" stroke="#f5e096" strokeWidth="1" fill="none" />
                {/* Taurus ♉ */}
                <path d="M 72 48 Q 77 43 82 48 M 77 48 A 4 4 0 1 1 77 56 A 4 4 0 1 1 77 48" stroke="#f5e096" strokeWidth="1" fill="none" />
                {/* Gemini ♊ */}
                <path d="M 92 46 L 102 46 M 92 58 L 102 58 M 95 46 L 95 58 M 99 46 L 99 58" stroke="#f5e096" strokeWidth="1" fill="none" />
                {/* Leo ♌ */}
                <path d="M 112 52 Q 116 45 120 52 L 122 48" stroke="#f5e096" strokeWidth="1" fill="none" />

                {/* Additional Star Clusters in All Quadrants */}
                <circle cx="52" cy="38" r="1.2" fill="#ffffff" />
                <circle cx="65" cy="62" r="1.2" fill="#f5e096" />
                <circle cx="115" cy="38" r="1.2" fill="#ffffff" />
                <circle cx="126" cy="60" r="1.2" fill="#f5e096" />
              </g>

              {/* 3D Specular Shading Overlay */}
              <radialGradient id="fullShadeJ" cx="30%" cy="25%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                <stop offset="60%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.82" />
              </radialGradient>
              <circle cx="90" cy="55" r="42" fill="url(#fullShadeJ)" />
            </g>
          </g>
        )}

        {/* ========================================================================= */}
        {/* 2. SLEEK MINIMALIST CAPITAL */}
        {/* ========================================================================= */}
        <path d="M 64 97 Q 90 105 116 97 L 108 105 L 72 105 Z" fill="url(#minGoldCapital)" stroke="#3d2c0b" strokeWidth="0.8" />

        <rect x="36" y="105" width="108" height="7" rx="1" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="0.8" />

        <g transform="translate(46, 124)">
          <circle cx="0" cy="0" r="13" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="1" />
          <circle cx="0" cy="0" r="7" fill="#171105" stroke="#c5a059" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="3" fill="#f7e6a6" />
        </g>

        <g transform="translate(134, 124)">
          <circle cx="0" cy="0" r="13" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="1" />
          <circle cx="0" cy="0" r="7" fill="#171105" stroke="#c5a059" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="3" fill="#f7e6a6" />
        </g>

        <rect x="46" y="114" width="88" height="18" fill="url(#minGoldCapital)" stroke="#3d2c0b" strokeWidth="0.8" />
        <rect x="52" y="132" width="76" height="8" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="0.8" />

        {/* ========================================================================= */}
        {/* 3. SLEEK MINIMALIST SHAFT */}
        {/* ========================================================================= */}
        <rect x="56" y="140" width="68" height="320" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="1.2" />

        {Array.from({ length: 7 }).map((_, i) => {
          const x = 62 + i * 9.3;
          return (
            <line
              key={`min-flute-${i}`}
              x1={x}
              y1="140"
              x2={x}
              y2="460"
              stroke="#2b1f07"
              strokeWidth="1.2"
              opacity="0.6"
            />
          );
        })}

        {/* MINIMALIST ENGRAVED LETTER B / J */}
        <g transform="translate(90, 300)">
          <text
            x="1"
            y="1"
            fill="#000000"
            fontSize="46"
            fontFamily="serif"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="central"
            opacity="0.8"
          >
            {type}
          </text>

          <text
            x="0"
            y="0"
            fill="#ffffff"
            stroke="#47330d"
            strokeWidth="1.2"
            fontSize="46"
            fontFamily="serif"
            fontWeight="black"
            textAnchor="middle"
            dominantBaseline="central"
            className="filter drop-shadow-[0_0_8px_rgba(247,230,166,0.8)]"
          >
            {type}
          </text>
        </g>

        {/* ========================================================================= */}
        {/* 4. SLEEK MINIMALIST PLINTH BASE */}
        {/* ========================================================================= */}
        <rect x="52" y="460" width="76" height="10" fill="url(#minGoldCapital)" stroke="#3d2c0b" strokeWidth="1" />
        <rect x="42" y="470" width="96" height="14" rx="1.5" fill="url(#minGoldShaft)" stroke="#3d2c0b" strokeWidth="1" />
        <rect x="32" y="484" width="116" height="16" rx="1.5" fill="url(#minGoldCapital)" stroke="#2b1f07" strokeWidth="1.2" />
        <rect x="24" y="500" width="132" height="12" fill="#140f04" stroke="#c5a059" strokeWidth="1" />

      </svg>
    </div>
  );
};
