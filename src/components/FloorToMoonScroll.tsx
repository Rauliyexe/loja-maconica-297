import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Moon, Sun, Compass, ChevronDown } from 'lucide-react';
import { AllSeeingEye } from './AllSeeingEye';
import { VectorEarth } from './VectorEarth';

gsap.registerPlugin(ScrollTrigger);

export const FloorToMoonScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('TEMPLO MAÇÔNICO • O NASCER DO SOL');
  const [celestialState, setCelestialState] = useState<'sun' | 'dusk' | 'moon'>('sun');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Preload PNG Images for Sun and Moon
    const sunImg = new Image();
    sunImg.src = '/assets/sun.png';

    const moonImg = new Image();
    moonImg.src = '/assets/moon.png';

    // Starfield Particles
    const particleCount = window.innerWidth < 768 ? 60 : 160;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * 1000 + 1,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.4 ? '#c5a059' : '#ffffff',
    }));

    // Moon Craters Data for Terrain
    const craterCount = 30;
    const craters = Array.from({ length: craterCount }, () => ({
      x: (Math.random() - 0.5) * 1200,
      y: Math.random() * 450 + 40,
      r: Math.random() * 38 + 12,
    }));

    const renderState = { progress: 0 };

    // GSAP ScrollTrigger - Fast, direct 1-to-1 scrub, unpins IMMEDIATELY at 100%
    const ctxTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=100%', // Exactly 1 viewport height of scroll, no extra dead scroll!
      pin: true,
      pinSpacing: true,
      scrub: 0.3,
      onUpdate: (self) => {
        const clampedProg = Math.min(1, Math.max(0, self.progress));
        renderState.progress = clampedProg;
        setScrollProgress(Math.round(clampedProg * 100));

        if (clampedProg < 0.4) {
          setPhaseText('SOL NASCENTE • ALVORADA DO CONHECIMENTO');
          setCelestialState('sun');
        } else if (clampedProg < 0.7) {
          setPhaseText('POR DO SOL & CREPÚSCULO • TRANSFORMAÇÃO');
          setCelestialState('dusk');
        } else {
          setPhaseText('NASCER DA LUA • APOGEU CELESTE & LUZ REFLETIDA');
          setCelestialState('moon');
        }
      },
    });

    let animationFrameId: number;

    const render = () => {
      const prog = renderState.progress; // 0.0 to 1.0
      ctx.clearRect(0, 0, width, height);

      const horizonY = height * (0.45 + prog * 0.05);

      // -------------------------------------------------------------
      // 1. SKY GRADIENT SHIFT (DAWN -> NOON -> DUSK -> NIGHT)
      // -------------------------------------------------------------
      const skyGradient = ctx.createLinearGradient(0, 0, 0, height);

      if (prog < 0.35) {
        const t = prog / 0.35;
        skyGradient.addColorStop(0, `rgb(${Math.round(15 + t * 25)}, ${Math.round(18 + t * 15)}, ${Math.round(35 + t * 10)})`);
        skyGradient.addColorStop(0.5, `rgb(${Math.round(30 + t * 40)}, ${Math.round(25 + t * 30)}, ${Math.round(20 + t * 10)})`);
        skyGradient.addColorStop(1, '#040406');
      } else if (prog < 0.7) {
        const t = (prog - 0.35) / 0.35;
        skyGradient.addColorStop(0, `rgb(${Math.round(40 * (1 - t) + 10)}, ${Math.round(30 * (1 - t) + 10)}, ${Math.round(30 * (1 - t) + 15)})`);
        skyGradient.addColorStop(0.5, `rgb(${Math.round(70 * (1 - t) + 12)}, ${Math.round(40 * (1 - t) + 10)}, ${Math.round(25 * (1 - t) + 12)})`);
        skyGradient.addColorStop(1, '#020203');
      } else {
        skyGradient.addColorStop(0, '#0d101a');
        skyGradient.addColorStop(0.5, '#070912');
        skyGradient.addColorStop(1, '#040406');
      }

      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // 2. STARS & CELESTIAL PARTICLES
      // -------------------------------------------------------------
      const starAlpha = Math.min(1, 0.2 + prog * 0.8);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      particles.forEach((p) => {
        p.z -= p.speed + prog * 3;
        if (p.z <= 0) p.z = 1000;

        const k = 400 / p.z;
        const px = p.x * k;
        const py = p.y * k;

        if (px > -width / 2 && px < width / 2 && py > -height / 2 && py < height / 2) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * (1 + (1 - p.z / 1000)), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = starAlpha * (1 - p.z / 1000);
          ctx.fill();
        }
      });
      ctx.restore();

      // -------------------------------------------------------------
      // 3. SUN RISING & SETTING WITH USER PNG ASSET
      // -------------------------------------------------------------
      if (prog <= 0.6) {
        const sunProg = prog / 0.55;
        const sunX = width * (0.1 + sunProg * 0.8);
        const sunArcY = horizonY - Math.sin(sunProg * Math.PI) * (height * 0.35);
        const sunSize = 110;

        ctx.save();
        const sunGlowAlpha = Math.max(0, Math.sin(sunProg * Math.PI));

        // Sun Aura Glow
        const sunGlow = ctx.createRadialGradient(sunX, sunArcY, 15, sunX, sunArcY, sunSize * 1.8);
        sunGlow.addColorStop(0, `rgba(255, 170, 0, ${0.85 * sunGlowAlpha})`);
        sunGlow.addColorStop(0.4, `rgba(223, 140, 20, ${0.35 * sunGlowAlpha})`);
        sunGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(sunX, sunArcY, sunSize * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Draw Sun PNG Image
        if (sunImg.complete && sunImg.naturalWidth !== 0) {
          ctx.globalAlpha = sunGlowAlpha;
          ctx.drawImage(sunImg, sunX - sunSize / 2, sunArcY - sunSize / 2, sunSize, sunSize);
        }

        ctx.restore();
      }

      // -------------------------------------------------------------
      // 4. MOON RISING & ASCENDING TO ZENITH WITH USER PNG ASSET
      // -------------------------------------------------------------
      if (prog >= 0.35) {
        const moonProg = (prog - 0.35) / 0.65;
        const moonX = width * (0.15 + moonProg * 0.7);
        const moonArcY = horizonY - Math.sin(moonProg * Math.PI) * (height * 0.38);
        const moonSize = 115;

        ctx.save();
        const moonGlowAlpha = Math.min(1, Math.sin(moonProg * Math.PI) * 1.2);

        // Moon Atmosphere Aura Glow
        const moonGlow = ctx.createRadialGradient(moonX, moonArcY, 20, moonX, moonArcY, moonSize * 1.6);
        moonGlow.addColorStop(0, `rgba(232, 226, 213, ${0.75 * moonGlowAlpha})`);
        moonGlow.addColorStop(0.5, `rgba(197, 160, 89, ${0.2 * moonGlowAlpha})`);
        moonGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = moonGlow;
        ctx.beginPath();
        ctx.arc(moonX, moonArcY, moonSize * 1.6, 0, Math.PI * 2);
        ctx.fill();

        // Draw Moon PNG Image
        if (moonImg.complete && moonImg.naturalWidth !== 0) {
          ctx.globalAlpha = moonGlowAlpha;
          ctx.drawImage(moonImg, moonX - moonSize / 2, moonArcY - moonSize / 2, moonSize, moonSize);
        }

        ctx.restore();
      }

      // -------------------------------------------------------------
      // 5. 3D PERSPECTIVE FLOOR (CHECKERBOARD -> ELEGANT GOLDEN TERRAIN)
      // -------------------------------------------------------------
      const floorRows = 26;
      const floorCols = 24;

      ctx.save();
      for (let r = 0; r < floorRows; r++) {
        const rowProg = r / floorRows;
        const z = 1 - Math.pow(rowProg, 2.2);
        const y = horizonY + z * (height - horizonY);
        const nextZ = 1 - Math.pow((r + 1) / floorRows, 2.2);
        const nextY = horizonY + nextZ * (height - horizonY);

        const tileWidthAtY = width * (1.6 - (1 - z) * 1.2);
        const nextTileWidthAtY = width * (1.6 - (1 - nextZ) * 1.2);

        for (let c = 0; c < floorCols; c++) {
          const colProg = (c - floorCols / 2) / (floorCols / 2);
          const nextColProg = (c + 1 - floorCols / 2) / (floorCols / 2);

          const x1 = width / 2 + colProg * tileWidthAtY;
          const x2 = width / 2 + nextColProg * tileWidthAtY;
          const x3 = width / 2 + nextColProg * nextTileWidthAtY;
          const x4 = width / 2 + colProg * nextTileWidthAtY;

          const isWhiteTile = (r + c) % 2 === 0;
          const tileDarkness = Math.min(1, prog * 1.2);
          let tileColor: string;

          if (prog < 0.35) {
            if (isWhiteTile) {
              // Imperial Marble White/Ivory with subtle warm gold undertone
              const lum = Math.max(45, Math.floor(240 - tileDarkness * 175));
              tileColor = `rgb(${lum}, ${lum - 8}, ${Math.max(25, lum - 25)})`;
            } else {
              // Imperial Deep Obsidian Black with crimson undertone
              const lum = Math.max(10, Math.floor(22 - tileDarkness * 12));
              tileColor = `rgb(${lum + 12}, ${lum}, ${lum + 4})`;
            }
          } else if (prog < 0.7) {
            const baseGray = 30 + Math.sin(r * 0.8 + c * 0.6) * 12;
            tileColor = `rgb(${Math.floor(baseGray + 15)}, ${Math.floor(baseGray)}, ${Math.floor(baseGray + 5)})`;
          } else {
            const rockNoise = Math.sin(r * 0.4) * Math.cos(c * 0.4) * 14;
            const lunarLum = Math.max(18, Math.min(60, 32 + rockNoise));
            tileColor = `rgb(${Math.floor(lunarLum)}, ${Math.floor(lunarLum + 2)}, ${Math.floor(lunarLum + 8)})`;
          }

          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.lineTo(x3, nextY);
          ctx.lineTo(x4, nextY);
          ctx.closePath();

          ctx.fillStyle = tileColor;
          ctx.globalAlpha = Math.max(0.4, Math.min(1, rowProg * 1.6));
          ctx.fill();

          // Elegant Metallic Golden Grid Lines between tiles
          ctx.strokeStyle = isWhiteTile
            ? `rgba(197, 160, 89, ${0.45 * rowProg})`
            : `rgba(220, 38, 38, ${0.25 * rowProg})`;
          ctx.lineWidth = Math.max(0.75, rowProg * 2.2);
          ctx.stroke();
        }
      }

      // Vignette Gradient Fade at Horizon for Smooth Floor-to-Sky Blend
      const horizonFade = ctx.createLinearGradient(0, horizonY, 0, horizonY + height * 0.25);
      horizonFade.addColorStop(0, 'rgba(4, 4, 6, 0.95)');
      horizonFade.addColorStop(0.3, 'rgba(4, 4, 6, 0.6)');
      horizonFade.addColorStop(1, 'rgba(4, 4, 6, 0)');
      ctx.fillStyle = horizonFade;
      ctx.fillRect(0, horizonY, width, height * 0.25);

      ctx.restore();

      // -------------------------------------------------------------
      // 6. LUNAR TERRAIN CRATERS
      // -------------------------------------------------------------
      if (prog > 0.45) {
        const moonOpacity = (prog - 0.45) / 0.55;
        ctx.save();
        ctx.globalAlpha = moonOpacity;

        // Craters on ground
        ctx.translate(width / 2, horizonY);
        craters.forEach((cr) => {
          ctx.beginPath();
          ctx.ellipse(cr.x, cr.y, cr.r * 1.4, cr.r * 0.45, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(12, 14, 20, 0.7)';
          ctx.fill();

          ctx.strokeStyle = 'rgba(197, 160, 89, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      ctxTrigger.kill();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="transformacao"
      ref={containerRef}
      className="relative w-full bg-masonic-void"
    >
      {/* Sticky Canvas Container Locked in Viewport during animation */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between p-3 sm:p-6 md:p-12 z-10">
        
        {/* ALL-SEEING EYE IN TEMPLE TRANSFORMATION PHASE */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 transition-opacity duration-500"
          style={{
            opacity: Math.max(0, 0.25 - scrollProgress * 0.003),
          }}
        >
          <AllSeeingEye size={600} />
        </div>

        {/* VECTOR EARTH ON THE HORIZON */}
        {scrollProgress > 45 && (
          <div
            className="absolute top-20 sm:top-28 right-4 sm:right-24 z-10 transition-all duration-700 pointer-events-none"
            style={{
              opacity: Math.min(1, (scrollProgress - 45) / 30),
              transform: `scale(${0.6 + (scrollProgress - 45) * 0.006})`,
            }}
          >
            <VectorEarth size={80} opacity={0.9} />
            <span className="font-mono text-[8px] sm:text-[9px] text-masonic-gold uppercase tracking-[0.2em] block text-center mt-1 opacity-80">
              TERRA • COSMOS
            </span>
          </div>
        )}

        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Top HUD Display */}
        <div className="relative z-20 flex items-center justify-between gap-2 border border-masonic-gold/40 py-2 sm:py-3 backdrop-blur-xl bg-gradient-to-r from-masonic-dark/90 via-masonic-slate/95 to-masonic-dark/90 px-3 sm:px-6 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            {celestialState === 'sun' && <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-masonic-gold animate-spin-slow shrink-0" />}
            {celestialState === 'dusk' && <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-masonic-crimson-light shrink-0" />}
            {celestialState === 'moon' && <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-masonic-gold animate-pulse shrink-0" />}
            
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-masonic-gold font-extrabold truncate">
              {phaseText}
            </span>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-3 font-mono text-[10px] sm:text-xs text-masonic-ivory/90 bg-masonic-void/80 px-2 sm:px-3 py-1 rounded border border-masonic-gold/30 shrink-0">
            <span className="hidden xs:inline text-masonic-ivory/70">CICLO:</span>
            <span className="text-masonic-gold font-black text-xs sm:text-sm">{scrollProgress}%</span>
          </div>
        </div>

        {/* Floating Center Message Cards */}
        <div className="relative z-20 max-w-2xl mx-auto text-center my-auto transition-all duration-700 px-2">
          {scrollProgress < 35 && (
            <div className="masonic-frame p-5 sm:p-8 md:p-10 bg-gradient-to-b from-masonic-slate/95 via-masonic-card/95 to-masonic-dark/95 backdrop-blur-xl border border-masonic-gold/50 rounded-sm shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(197,160,89,0.2)] animate-fade-in max-h-[65vh] overflow-y-auto">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-masonic-gold/15 border border-masonic-gold/40 text-masonic-gold font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
                <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>CICLO DA MANHÃ • O NASCER DO SOL</span>
              </div>
              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl text-masonic-ivory font-bold mb-2 sm:mb-4 tracking-wide uppercase">
                O Sol Nascente <span className="text-masonic-gold font-black">&</span> A Razão
              </h2>
              <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-2 sm:mb-4" />
              <p className="text-xs sm:text-sm text-masonic-ivory/90 leading-relaxed font-serif italic font-light">
                O Sol desponta no Oriente, desenhando sua órbita dourada sobre o Templo e iluminando o piso xadrez sob o olhar vigilante da Providência. Representa a clareza da razão, a busca ativa pelo conhecimento e o início dos trabalhos morais.
              </p>
            </div>
          )}

          {scrollProgress >= 35 && scrollProgress < 70 && (
            <div className="masonic-frame p-5 sm:p-8 md:p-10 bg-gradient-to-b from-masonic-crimson-deep/90 via-masonic-card/95 to-masonic-dark/95 backdrop-blur-xl border border-masonic-crimson/50 rounded-sm shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(220,38,38,0.25)] animate-fade-in max-h-[65vh] overflow-y-auto">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-masonic-crimson/20 border border-masonic-crimson/50 text-masonic-crimson-light font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
                <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>CICLO DO OCIDENTE • O POR DO SOL</span>
              </div>
              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl text-masonic-gold font-bold mb-2 sm:mb-4 tracking-wide uppercase">
                O Ocidente <span className="text-masonic-crimson-light font-black">&</span> A Transição
              </h2>
              <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-masonic-crimson to-transparent mx-auto mb-2 sm:mb-4" />
              <p className="text-xs sm:text-sm text-masonic-ivory/90 leading-relaxed font-serif italic font-light">
                O Sol se põe no Ocidente, colorindo o horizonte de tons ambarinos e bronze. É o momento de repouso dos instrumentos de trabalho e início do recolhimento filosófico profundo.
              </p>
            </div>
          )}

          {scrollProgress >= 70 && (
            <div className="masonic-frame p-5 sm:p-8 md:p-10 bg-gradient-to-b from-masonic-slate/95 via-masonic-card/95 to-masonic-void/95 backdrop-blur-xl border border-masonic-gold/60 rounded-sm shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(197,160,89,0.3)] animate-fade-in max-h-[65vh] overflow-y-auto">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-masonic-gold/20 border border-masonic-gold/50 text-masonic-gold-light font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
                <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>CICLO DA NOITE • O NASCER DA LUA</span>
              </div>
              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl text-masonic-ivory font-bold mb-2 sm:mb-4 tracking-wide uppercase">
                O Nascer da Lua <span className="text-masonic-gold font-black">&</span> O Cosmos
              </h2>
              <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-masonic-gold to-transparent mx-auto mb-2 sm:mb-4" />
              <p className="text-xs sm:text-sm text-masonic-ivory/90 leading-relaxed font-serif italic font-light">
                A Lua prateada surge no céu estelar, atingindo seu ápice sobre o terreno lunar. A luz refletida guia a contemplação da alma, conectando a matéria à plenitude do universo.
              </p>
            </div>
          )}
        </div>

        {/* Bottom HUD Directive */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-0 border border-masonic-gold/30 py-2 sm:py-3 backdrop-blur-xl bg-masonic-dark/90 px-3 sm:px-6 rounded-sm shadow-[0_-4px_25px_rgba(0,0,0,0.8)]">
          <div className="flex items-center space-x-2 text-masonic-gold text-[10px] sm:text-xs font-mono font-semibold truncate">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-masonic-gold shrink-0" />
            <span className="truncate">ÓRBITAS CELESTES • TEMPLO MAÇÔNICO</span>
          </div>

          <div className="flex items-center space-x-1.5 text-masonic-ivory/80 text-[10px] sm:text-xs font-mono font-medium animate-pulse shrink-0">
            <span>ROLE PARA CONTINUAR</span>
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-masonic-gold" />
          </div>
        </div>

      </div>
    </section>
  );
};
