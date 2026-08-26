import React, { useState } from 'react';
import { useGuaranesiaSky } from '../context/GuaranesiaSkyContext';
import { GUARANESIA_COORDINATES } from '../lib/astronomyGuaranesia';
import {
  Compass,
  Sparkles,
  Radio,
  Clock,
  MapPin,
  Eye,
  Sliders,
  RotateCcw,
  History,
  X,
  ChevronRight,
  Sun,
  Moon,
  Star,
  Info,
  Calendar,
} from 'lucide-react';

export const GuaranesiaCelestialObservatory: React.FC = () => {
  const {
    skyState,
    isLive,
    setIsLive,
    hourOffset,
    setHourOffset,
    resetToNow,
    setFoundationSky,
    isObservatoryModalOpen,
    setIsObservatoryModalOpen,
  } = useGuaranesiaSky();

  const [selectedConstellationId, setSelectedConstellationId] = useState<string | null>(null);

  // Projeção polar do domo celeste de Guaranésia para SVG Planisfério
  // Raio do horizonte: r = 130 (Alt = 0°), Centro: (160, 160) (Zênite, Alt = 90°)
  // Azimute: 0° = Norte (topo), 90° = Leste (direita), 180° = Sul (baixo), 270° = Oeste (esquerda)
  const getSkyDomeCoordinates = (altDeg: number, azDeg: number) => {
    const cx = 160;
    const cy = 160;
    if (altDeg < 0) return null; // Abaixo do horizonte

    const r = 130 * (1 - altDeg / 90);
    const rad = (azDeg * Math.PI) / 180;
    const x = cx + r * Math.sin(rad);
    const y = cy - r * Math.cos(rad);

    return { x, y, r };
  };

  const activeSelectedPos = selectedConstellationId
    ? skyState.allPositions[selectedConstellationId]
    : null;

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* 1. ULTRA-COMPACT DISCREET FLOATING BUTTON (BOTTOM RIGHT) */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center justify-end group">
        <button
          onClick={() => setIsObservatoryModalOpen(true)}
          className="relative flex items-center gap-2 p-2 sm:p-2.5 sm:group-hover:px-4 sm:group-hover:py-2.5 rounded-full bg-masonic-dark/95 border border-masonic-gold/40 text-masonic-ivory shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md hover:border-masonic-gold hover:bg-masonic-slate transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(197,160,89,0.35)]"
          title="Observatório Celeste de Guaranésia (Clique para abrir)"
        >
          {/* Live Status Indicator */}
          <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
            <span
              className={`inline-flex h-2 w-2 rounded-full ${
                isLive ? 'bg-emerald-400' : 'bg-amber-400'
              }`}
            />
          </span>

          {/* Compass Icon */}
          <Compass className="w-4 h-4 text-masonic-gold shrink-0 group-hover:rotate-45 transition-transform duration-300" />

          {/* Text: Collapsed by default, reveals on hover */}
          <div className="hidden sm:group-hover:flex flex-col text-left whitespace-nowrap overflow-hidden transition-all duration-300">
            <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-gold font-bold leading-none">
              GUARANÉSIA-MG
            </span>
            <span className="font-mono text-[9px] text-masonic-ivory/80 leading-tight mt-0.5">
              Hora: {skyState.civilTimeFormatted} • TSL: {skyState.localSiderealTimeFormatted.split(' ')[0]} {skyState.localSiderealTimeFormatted.split(' ')[1]}
            </span>
          </div>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. FULL ASTRONOMICAL OBSERVATORY MODAL */}
      {/* ------------------------------------------------------------- */}
      {isObservatoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-masonic-void/90 backdrop-blur-2xl animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-masonic-card/95 border border-masonic-gold/40 rounded-sm shadow-[0_20px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto max-h-[95vh] sm:max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-masonic-dark via-masonic-slate to-masonic-dark border-b border-masonic-gold/30">
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <div className="p-1.5 sm:p-2 bg-masonic-gold/15 border border-masonic-gold/40 rounded-full text-masonic-gold shrink-0">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-masonic-gold font-bold">
                      OBSERVATÓRIO CELESTE
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[8px] sm:text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      GPS
                    </span>
                  </div>
                  <h3 className="font-serif text-sm sm:text-2xl font-extrabold text-masonic-ivory uppercase tracking-wider">
                    Firmamento • <span className="text-masonic-gold font-black">Guaranésia - MG</span>
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsObservatoryModalOpen(false)}
                className="p-1.5 sm:p-2 text-masonic-ivory/70 hover:text-masonic-gold hover:bg-masonic-gold/10 rounded-full transition-colors shrink-0"
                title="Fechar Observatório"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-3 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
              
              {/* Coordinates, Local Clock & Sidereal Time Summary Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 bg-masonic-void/90 p-3 sm:p-4 border border-masonic-gold/25 rounded-sm">
                
                {/* 1. Local Time (Civil Clock) */}
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-gold/80 flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-masonic-gold" />
                    <span>HORÁRIO LOCAL (BRASÍLIA)</span>
                  </span>
                  <span className="font-mono text-xs sm:text-base font-black text-masonic-ivory mt-0.5">
                    {skyState.civilTimeFormatted}
                  </span>
                  <span className="font-mono text-[10px] text-masonic-ivory/60">
                    Fuso UTC-3 • Guaranésia
                  </span>
                </div>

                {/* 2. Sidereal Time (LST) */}
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-gold/80 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-masonic-gold" />
                    <span>TEMPO SIDERAL (TSL)</span>
                  </span>
                  <span className="font-mono text-xs sm:text-base font-black text-masonic-gold mt-0.5">
                    {skyState.localSiderealTimeFormatted}
                  </span>
                  <span className="font-mono text-[10px] text-masonic-ivory/60">
                    Rotação Estelar (RAMC {(skyState.localSiderealTimeHours * 15).toFixed(0)}°)
                  </span>
                </div>

                {/* 3. GPS Coordinates */}
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-gold/80 flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-masonic-gold" />
                    <span>COORDENADAS GPS</span>
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-masonic-ivory mt-0.5">
                    {GUARANESIA_COORDINATES.latDMS}
                  </span>
                  <span className="font-mono text-[10px] text-masonic-ivory/60">
                    {GUARANESIA_COORDINATES.lngDMS} ({GUARANESIA_COORDINATES.altitudeMeters}m)
                  </span>
                </div>

                {/* 4. Zenith Constellation */}
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-gold/80 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-masonic-gold" />
                    <span>NO ZÊNITE (ÁPICE CELESTE)</span>
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-masonic-gold mt-0.5 truncate">
                    {skyState.culminatingConstellation.name}
                  </span>
                  <span className="font-mono text-[10px] text-masonic-ivory/60">
                    Ponto mais alto sobre o Templo
                  </span>
                </div>
              </div>

              {/* Main Grid: Left = SVG Sky Dome Planisphere, Right = Controls & Visible Constellations */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* SVG SKY DOME PLANISPHERE (360° Real-time Celestial View) */}
                <div className="lg:col-span-6 bg-masonic-void/95 p-6 border border-masonic-gold/30 rounded-sm flex flex-col items-center justify-center relative">
                  <div className="w-full flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-masonic-gold uppercase tracking-widest flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>DOMO CELESTE 360° (PROJEÇÃO DE GUARANÉSIA)</span>
                    </span>
                    <span className="font-mono text-[9px] text-masonic-ivory/60">
                      N = Norte • S = Sul • Z = Zênite
                    </span>
                  </div>

                  <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-square flex items-center justify-center">
                    <svg
                      viewBox="0 0 320 320"
                      className="w-full h-full text-masonic-gold drop-shadow-2xl"
                    >
                      <defs>
                        <radialGradient id="skyGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#0c1122" stopOpacity="1" />
                          <stop offset="70%" stopColor="#060810" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#020305" stopOpacity="0.9" />
                        </radialGradient>
                      </defs>

                      {/* Horizon Outer Base Circle */}
                      <circle
                        cx="160"
                        cy="160"
                        r="135"
                        fill="url(#skyGrad)"
                        stroke="#c5a059"
                        strokeWidth="1.2"
                      />

                      {/* Altitude Rings (30°, 60°) */}
                      <circle
                        cx="160"
                        cy="160"
                        r="90"
                        fill="none"
                        stroke="#c5a059"
                        strokeWidth="0.5"
                        strokeDasharray="3 3"
                        opacity="0.3"
                      />
                      <circle
                        cx="160"
                        cy="160"
                        r="45"
                        fill="none"
                        stroke="#c5a059"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                        opacity="0.4"
                      />

                      {/* Cardinal Cross Lines (Meridian & Prime Vertical) */}
                      <line x1="160" y1="25" x2="160" y2="295" stroke="#c5a059" strokeWidth="0.4" opacity="0.3" />
                      <line x1="25" y1="160" x2="295" y2="160" stroke="#c5a059" strokeWidth="0.4" opacity="0.3" />

                      {/* Cardinal Label Points */}
                      <text x="160" y="18" textAnchor="middle" fill="#c5a059" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="bold">N</text>
                      <text x="304" y="163" textAnchor="start" fill="#c5a059" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="bold">L</text>
                      <text x="160" y="312" textAnchor="middle" fill="#c5a059" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="bold">S</text>
                      <text x="16" y="163" textAnchor="end" fill="#c5a059" fontSize="9" fontFamily="Space Mono, monospace" fontWeight="bold">O</text>

                      {/* Center Zenith Cross */}
                      <circle cx="160" cy="160" r="2.5" fill="#c5a059" />
                      <text x="165" y="155" fill="#c5a059" fontSize="7.5" fontFamily="Cinzel, serif" opacity="0.8">ZÊNITE</text>

                      {/* Visible Constellations Nodes Rendered on Sky Dome with clean positioning */}
                      {skyState.visibleConstellations.map((pos) => {
                        const coords = getSkyDomeCoordinates(pos.altitudeDeg, pos.azimuthDeg);
                        if (!coords) return null;

                        const isZenith = pos.isZenithal;
                        const isSelected = selectedConstellationId === pos.object.id;

                        return (
                          <g
                            key={pos.object.id}
                            className="cursor-pointer transition-all duration-300"
                            onClick={() => setSelectedConstellationId(pos.object.id)}
                          >
                            {/* Subtle Highlight Glow */}
                            {(isZenith || isSelected) && (
                              <circle
                                cx={coords.x}
                                cy={coords.y}
                                r={isSelected ? 10 : 8}
                                fill={isSelected ? '#ebd197' : '#c5a059'}
                                opacity={isSelected ? 0.35 : 0.2}
                              />
                            )}

                            {/* Node Star Point */}
                            <circle
                              cx={coords.x}
                              cy={coords.y}
                              r={isZenith ? 4 : isSelected ? 3.5 : 2.5}
                              fill={isSelected ? '#fde047' : isZenith ? '#ebd197' : '#ffffff'}
                              stroke="#c5a059"
                              strokeWidth={isZenith ? 1 : 0.6}
                            />

                            {/* Node Label Text */}
                            <text
                              x={coords.x + 5}
                              y={coords.y - 3}
                              fill={isSelected ? '#fde047' : isZenith ? '#ebd197' : '#cbd5e1'}
                              fontSize={isZenith || isSelected ? '8.5' : '7'}
                              fontFamily="Space Mono, monospace"
                              fontWeight={isZenith || isSelected ? 'bold' : 'normal'}
                              opacity={pos.opacity}
                            >
                              {pos.object.name.split(' ')[0]} ({Math.round(pos.altitudeDeg)}°)
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  <span className="mt-3 text-[10px] text-center font-mono text-masonic-ivory/60">
                    Toque em qualquer constelação acima para inspecionar os dados astronômicos.
                  </span>
                </div>

                {/* CONTROLS & VISIBLE LIST RIGHT COLUMN */}
                <div className="lg:col-span-6 flex flex-col space-y-4">
                  
                  {/* Real-time / Simulator Controls */}
                  <div className="p-4 bg-masonic-slate/80 border border-masonic-gold/30 rounded-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-masonic-gold font-bold flex items-center space-x-1.5">
                        <Sliders className="w-3.5 h-3.5" />
                        <span>CONTROLE DO SIMULADOR CELESTE</span>
                      </span>
                      <span className="font-mono text-[10px] text-masonic-ivory/70">
                        {skyState.dateFormatted}
                      </span>
                    </div>

                    {/* Quick Preset Buttons */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <button
                        onClick={resetToNow}
                        className={`px-2.5 py-1.5 rounded-sm font-mono text-[10px] uppercase tracking-wider flex items-center justify-center space-x-1 border transition-all ${
                          isLive && hourOffset === 0
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                            : 'bg-masonic-dark text-masonic-ivory/80 border-masonic-gold/20 hover:border-masonic-gold/40'
                        }`}
                      >
                        <Radio className="w-3 h-3" />
                        <span>Agora (Ao Vivo)</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsLive(false);
                          const night = new Date();
                          night.setHours(21, 0, 0, 0);
                          setHourOffset(0);
                        }}
                        className="px-2.5 py-1.5 rounded-sm font-mono text-[10px] uppercase tracking-wider flex items-center justify-center space-x-1 bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/20 hover:border-masonic-gold/40 transition-all"
                      >
                        <Moon className="w-3 h-3 text-masonic-gold" />
                        <span>Hoje às 21:00</span>
                      </button>

                      <button
                        onClick={setFoundationSky}
                        className="px-2.5 py-1.5 rounded-sm font-mono text-[10px] uppercase tracking-wider flex items-center justify-center space-x-1 bg-masonic-crimson-dark/40 text-masonic-gold border border-masonic-crimson/50 hover:bg-masonic-crimson-dark/60 transition-all"
                      >
                        <History className="w-3 h-3" />
                        <span>16/10/2015</span>
                      </button>
                    </div>

                    {/* Time Offset Slider */}
                    <div>
                      <div className="flex items-center justify-between font-mono text-[10px] text-masonic-ivory/80 mb-1">
                        <span>Avançar/Voltar Horas ({hourOffset >= 0 ? `+${hourOffset}h` : `${hourOffset}h`}):</span>
                        <button
                          onClick={() => setHourOffset(0)}
                          className="text-masonic-gold hover:underline flex items-center space-x-0.5"
                        >
                          <RotateCcw className="w-2.5 h-2.5" />
                          <span>Zerar</span>
                        </button>
                      </div>
                      <input
                        type="range"
                        min="-12"
                        max="12"
                        step="0.5"
                        value={hourOffset}
                        onChange={(e) => {
                          setIsLive(false);
                          setHourOffset(parseFloat(e.target.value));
                        }}
                        className="w-full h-1.5 bg-masonic-void rounded-lg appearance-none cursor-pointer accent-masonic-gold"
                      />
                    </div>
                  </div>

                  {/* Selected Constellation Deep Inspection Card */}
                  {activeSelectedPos && (
                    <div className="p-4 bg-masonic-void border border-masonic-gold/50 rounded-sm shadow-gold-glow animate-fade-in">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-widest text-masonic-gold block">
                            {activeSelectedPos.object.latinName}
                          </span>
                          <h4 className="font-serif text-base font-bold text-masonic-ivory">
                            {activeSelectedPos.object.name}
                          </h4>
                        </div>

                        <div className="text-right font-mono text-xs text-masonic-gold">
                          <span className="block font-bold">Altitude: {activeSelectedPos.altitudeDeg.toFixed(1)}°</span>
                          <span className="text-[10px] text-masonic-ivory/70">Azimute: {activeSelectedPos.azimuthDeg.toFixed(0)}° ({activeSelectedPos.compassDirection})</span>
                        </div>
                      </div>

                      <p className="font-serif text-xs italic text-masonic-ivory/90 border-l border-masonic-gold/40 pl-2.5 py-0.5">
                        &ldquo;{activeSelectedPos.object.masonicSymbolism}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Visible Constellations Live Scroll List */}
                  <div className="flex flex-col space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-masonic-gold/80 block mb-1">
                      CONSTELAÇÕES VISÍVEIS EM GUARANÉSIA AGORA ({skyState.visibleConstellations.length})
                    </span>

                    {skyState.visibleConstellations.map((pos) => {
                      const isSelected = selectedConstellationId === pos.object.id;
                      return (
                        <button
                          key={pos.object.id}
                          onClick={() => setSelectedConstellationId(pos.object.id)}
                          className={`w-full flex items-center justify-between p-2.5 rounded-sm border text-left transition-all ${
                            isSelected
                              ? 'bg-masonic-gold/20 border-masonic-gold text-masonic-gold'
                              : 'bg-masonic-dark/70 border-masonic-gold/15 hover:border-masonic-gold/40 text-masonic-ivory'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-masonic-gold" />
                            <div>
                              <span className="font-serif text-xs font-semibold block">
                                {pos.object.name}
                              </span>
                              <span className="font-mono text-[9px] text-masonic-gold/70">
                                {pos.isZenithal ? '[NO ZÊNITE]' : `Direção: ${pos.compassDirection}`}
                              </span>
                            </div>
                          </div>

                          <div className="font-mono text-xs text-right">
                            <span className="text-masonic-gold font-bold">
                              {pos.altitudeDeg.toFixed(1)}°
                            </span>
                            <span className="text-[9px] text-masonic-ivory/50 block">
                              Az {pos.azimuthDeg.toFixed(0)}°
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 bg-masonic-dark border-t border-masonic-gold/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] sm:text-[10px] font-mono text-masonic-ivory/60 text-center sm:text-left">
              <span>Sincronizado: Lat -21.2981° S / Lng -46.8044° W (Guaranésia - MG)</span>
              <button
                onClick={() => setIsObservatoryModalOpen(false)}
                className="w-full sm:w-auto px-4 py-1.5 bg-masonic-gold hover:bg-masonic-gold-light text-masonic-void font-bold uppercase rounded-sm transition-colors"
              >
                Concluir
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
