/**
 * Astronomical & Celestial Coordinate Engine for Guaranésia - MG
 * Centro de Guaranésia / Templo da A.R.L.S. Paz, Harmonia e Concórdia nº 297
 * 
 * Geographic Coordinates:
 * Latitude:  -21.2981° S (-21° 17' 53" S)
 * Longitude: -46.8044° W (-46° 48' 16" W)
 * Elevation: ~745 m
 * Timezone:  America/Sao_Paulo (UTC-3)
 */

export const GUARANESIA_COORDINATES = {
  name: 'Centro de Guaranésia - MG',
  lodgeName: 'A.R.L.S. Paz, Harmonia e Concórdia nº 297',
  lat: -21.298056, // 21° 17' 53" S
  lng: -46.804444, // 46° 48' 16" W
  latDMS: "21° 17' 53\" S",
  lngDMS: "46° 48' 16\" W",
  altitudeMeters: 745,
  foundationDate: new Date('2015-10-16T20:00:00-03:00'),
};

export interface CelestialObjectInfo {
  id: string;
  name: string;
  latinName: string;
  rightAscensionHours: number; // RA in decimal hours (0 to 24)
  declinationDeg: number;       // Dec in degrees (-90 to +90)
  masonicSymbolism?: string;
  isZodiac: boolean;
  category: 'ZODIAC' | 'AUSTRAL_MAJOR' | 'ROYAL_STAR' | 'SOLAR_LUNAR';
}

export const CELESTIAL_CATALOG: CelestialObjectInfo[] = [
  // 12 Constelações Zodiacais
  {
    id: 'aries',
    name: 'Áries',
    latinName: 'Aries',
    rightAscensionHours: 2.6,
    declinationDeg: 20.8,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'O Impulso Inicial: O primeiro passo do Aprendiz na busca pela Luz.',
  },
  {
    id: 'taurus',
    name: 'Touro (Aldebaran & Plêiades)',
    latinName: 'Taurus',
    rightAscensionHours: 4.6,
    declinationDeg: 16.5,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'A Força de Sustentação: A pedra bruta firmemente assentada.',
  },
  {
    id: 'gemini',
    name: 'Gêmeos (Castor & Pólux)',
    latinName: 'Gemini',
    rightAscensionHours: 7.1,
    declinationDeg: 22.5,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'As Duas Colunas: Jachin e Boaz, Força e Beleza.',
  },
  {
    id: 'cancer',
    name: 'Câncer',
    latinName: 'Cancer',
    rightAscensionHours: 8.7,
    declinationDeg: 20.1,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'O Solstício de Verão: O abrigo do Templo contra o mundo profano.',
  },
  {
    id: 'leo',
    name: 'Leão (Regulus)',
    latinName: 'Leo',
    rightAscensionHours: 10.7,
    declinationDeg: 12.0,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'O Sol no Oriente: O fogo da razão e a sabedoria que preside os trabalhos.',
  },
  {
    id: 'virgo',
    name: 'Virgem (Spica)',
    latinName: 'Virgo',
    rightAscensionHours: 13.4,
    declinationDeg: -11.2,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'A Colheita da Sabedoria: O trigo da verdade e o desbastamento da mente.',
  },
  {
    id: 'libra',
    name: 'Balança (Libra)',
    latinName: 'Libra',
    rightAscensionHours: 15.3,
    declinationDeg: -15.6,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'O Nível e o Prumo: O equilíbrio exato da justiça e equidade.',
  },
  {
    id: 'scorpio',
    name: 'Escorpião (Antares)',
    latinName: 'Scorpius',
    rightAscensionHours: 16.9,
    declinationDeg: -26.4,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'A Transmutação Alquímica: A morte do ego profano e renascimento na virtude.',
  },
  {
    id: 'sagittarius',
    name: 'Sagitário (Centro Galáctico)',
    latinName: 'Sagittarius',
    rightAscensionHours: 19.1,
    declinationDeg: -25.5,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'A Flecha do Conhecimento: O esquadro apontando para a Verdade Suprema.',
  },
  {
    id: 'capricorn',
    name: 'Capricórnio',
    latinName: 'Capricornus',
    rightAscensionHours: 21.0,
    declinationDeg: -18.0,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'O Solstício de Inverno: A escalada da montanha sagrada.',
  },
  {
    id: 'aquarius',
    name: 'Aquário',
    latinName: 'Aquarius',
    rightAscensionHours: 22.3,
    declinationDeg: -10.5,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'A Água da Vida: O derramamento do amor fraterno para a humanidade.',
  },
  {
    id: 'pisces',
    name: 'Peixes',
    latinName: 'Pisces',
    rightAscensionHours: 0.7,
    declinationDeg: 15.0,
    isZodiac: true,
    category: 'ZODIAC',
    masonicSymbolism: 'O Laço Inquebrável: A união fraternal que conecta a humanidade.',
  },

  // Grandes Constelações e Estrelas Australis / Chaves do Templo Maçônico
  {
    id: 'crux',
    name: 'Cruzeiro do Sul',
    latinName: 'Crux Australis',
    rightAscensionHours: 12.5,
    declinationDeg: -60.2,
    isZodiac: false,
    category: 'AUSTRAL_MAJOR',
    masonicSymbolism: 'O Guia dos Navegantes Austrais: O ponto de referência do Hemisfério Sul.',
  },
  {
    id: 'orion',
    name: 'Órion (Três Marias & Betelgeuse)',
    latinName: 'Orion',
    rightAscensionHours: 5.6,
    declinationDeg: 0.0,
    isZodiac: false,
    category: 'AUSTRAL_MAJOR',
    masonicSymbolism: 'O Grande Caçador Celeste: A marcha firme do iniciado nos trabalhos.',
  },
  {
    id: 'sirius',
    name: 'Sírius (Estrela Flamígera • Cão Maior)',
    latinName: 'Canis Major / Sirius',
    rightAscensionHours: 6.75,
    declinationDeg: -16.7,
    isZodiac: false,
    category: 'ROYAL_STAR',
    masonicSymbolism: 'A Estrela Flamígera (Pentagrama): A luz do G∴A∴D∴U∴ que ilumina o Templo.',
  },
  {
    id: 'centaurus',
    name: 'Centauro (Alfa & Beta Centauri)',
    latinName: 'Centaurus',
    rightAscensionHours: 14.2,
    declinationDeg: -50.0,
    isZodiac: false,
    category: 'AUSTRAL_MAJOR',
    masonicSymbolism: 'Os Guardiões do Cruzeiro do Sul e a harmonia cósmica.',
  },
];

export interface CalculatedPosition {
  object: CelestialObjectInfo;
  altitudeDeg: number;       // Altitude acima do horizonte (-90° a +90°)
  azimuthDeg: number;        // Azimute em graus (0° = Norte, 90° = Leste, 180° = Sul, 270° = Oeste)
  hourAngleHours: number;    // Ângulo Horário em horas (-12h a +12h)
  hourAngleDeg: number;
  isVisible: boolean;        // true se altitude > 0°
  isZenithal: boolean;       // true se está no alto do céu de Guaranésia (Alt > 55°)
  opacity: number;           // Coeficiente de brilho/visibilidade (0 a 1) para renderização
  compassDirection: string;  // N, NE, E, SE, S, SW, W, NW
}

export interface GuaranesiaSkyState {
  date: Date;
  dateFormatted: string;
  civilTimeFormatted: string; // Horário oficial de Brasília (ex: 21:08:37)
  julianDate: number;
  greenwichSiderealTimeHours: number;
  localSiderealTimeHours: number; // LST
  localSiderealTimeFormatted: string; // TSL em horas (ex: 18h 33m 54s)
  zenithRightAscensionDeg: number;
  zenithDeclinationDeg: number;
  sunAltitudeDeg: number;
  sunAzimuthDeg: number;
  isNight: boolean;
  isTwilight: boolean;
  moonPhaseIndex: number; // 0-7
  moonPhaseName: string;
  moonIlluminationPercent: number;
  culminatingConstellation: CelestialObjectInfo;
  visibleConstellations: CalculatedPosition[];
  allPositions: Record<string, CalculatedPosition>;
  zodiacPositions: Record<string, CalculatedPosition>;
}

/**
 * Calcula o Dia Juliano (Julian Date) para uma data UTC
 */
export function getJulianDate(date: Date): number {
  const time = date.getTime();
  return (time / 86400000) + 2440587.5;
}

/**
 * Calcula o Tempo Sideral de Greenwich (GMST) em horas decimais (0 a 24)
 */
export function getGMST(jd: number): number {
  const d = jd - 2451545.0;
  let gmst = 18.697374558 + 24.06570982441908 * d;
  gmst = ((gmst % 24) + 24) % 24;
  return gmst;
}

/**
 * Calcula o Tempo Sideral Local (LST) para Guaranésia (-46.8044° W)
 */
export function getGuaranesiaLST(date: Date): number {
  const jd = getJulianDate(date);
  const gmst = getGMST(jd);
  const longitudeHours = GUARANESIA_COORDINATES.lng / 15; // -3.1203 horas
  let lst = gmst + longitudeHours;
  lst = ((lst % 24) + 24) % 24;
  return lst;
}

/**
 * Converte horas decimais para formato HH:MM:SS
 */
export function formatHoursToHMS(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  return `${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
}

/**
 * Calcula a posição horizontal (Altitude e Azimute) para uma coordenada celeste (RA, Dec)
 * a partir das coordenadas geográficas do centro de Guaranésia (-21.2981° S, -46.8044° W).
 */
export function calculateHorizontalCoordinates(
  raHours: number,
  decDeg: number,
  lstHours: number,
  latDeg: number = GUARANESIA_COORDINATES.lat
): { altitudeDeg: number; azimuthDeg: number; hourAngleHours: number; hourAngleDeg: number } {
  let haHours = lstHours - raHours;
  if (haHours < -12) haHours += 24;
  if (haHours > 12) haHours -= 24;

  const haRad = (haHours * 15) * (Math.PI / 180);
  const decRad = decDeg * (Math.PI / 180);
  const latRad = latDeg * (Math.PI / 180);

  // sin(Alt) = sin(Lat)*sin(Dec) + cos(Lat)*cos(Dec)*cos(HA)
  const sinAlt = Math.sin(latRad) * Math.sin(decRad) + Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
  const altRad = Math.asin(Math.max(-1, Math.min(1, sinAlt)));
  const altDeg = altRad * (180 / Math.PI);

  const cosAlt = Math.cos(altRad);
  let azDeg = 0;

  if (Math.abs(cosAlt) > 0.0001) {
    const cosAz = (Math.sin(decRad) - Math.sin(latRad) * Math.sin(altRad)) / (Math.cos(latRad) * cosAlt);
    const clampedCosAz = Math.max(-1, Math.min(1, cosAz));
    let azRad = Math.acos(clampedCosAz);

    if (Math.sin(haRad) > 0) {
      azRad = 2 * Math.PI - azRad;
    }
    azDeg = azRad * (180 / Math.PI);
  }

  return {
    altitudeDeg: altDeg,
    azimuthDeg: azDeg,
    hourAngleHours: haHours,
    hourAngleDeg: haHours * 15,
  };
}

export function getCompassDirection(azimuthDeg: number): string {
  const directions = ['Norte (N)', 'NNE', 'Nordeste (NE)', 'ENE', 'Leste (L)', 'ESE', 'Sudeste (SE)', 'SSE', 'Sul (S)', 'SSW', 'Sudoeste (SO)', 'OSO', 'Oeste (O)', 'ONO', 'Noroeste (NO)', 'NNO'];
  const index = Math.round(((azimuthDeg % 360) / 22.5)) % 16;
  return directions[index];
}

export function calculateSunPosition(date: Date, lstHours: number): { altitudeDeg: number; azimuthDeg: number } {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
  const solarDec = -23.44 * Math.cos(((dayOfYear + 10) / 365.25) * 2 * Math.PI);
  const solarRA = ((dayOfYear / 365.25) * 24 + 18) % 24;

  const pos = calculateHorizontalCoordinates(solarRA, solarDec, lstHours);
  return { altitudeDeg: pos.altitudeDeg, azimuthDeg: pos.azimuthDeg };
}

export function calculateMoonPhase(date: Date): { phaseIndex: number; phaseName: string; illumination: number } {
  const knownNewMoon = new Date('2000-01-06T18:14:00Z').getTime();
  const synodicMonth = 29.53058867 * 86400000;
  const phaseCycle = ((date.getTime() - knownNewMoon) % synodicMonth) / synodicMonth;
  const phaseNormalized = (phaseCycle + 1) % 1;

  const phaseIndex = Math.floor(phaseNormalized * 8) % 8;
  const illumination = Math.round((1 - Math.cos(phaseNormalized * 2 * Math.PI)) / 2 * 100);

  const phaseNames = [
    'Lua Nova (Silêncio & Introspecção)',
    'Lua Crescente Côncava (Primeiro Passo)',
    'Quarto Crescente (Trabalho & Força)',
    'Lua Crescente Convexa (Aperfeiçoamento)',
    'Lua Cheia (Plenitude & Iluminação)',
    'Lua Minguante Convexa (Colheita & Sabedoria)',
    'Quarto Minguante (Reflexão Moral)',
    'Lua Minguante Côncava (Conclusão do Ciclo)',
  ];

  return {
    phaseIndex,
    phaseName: phaseNames[phaseIndex],
    illumination,
  };
}

export function calculateGuaranesiaSky(date: Date = new Date()): GuaranesiaSkyState {
  const jd = getJulianDate(date);
  const gmst = getGMST(jd);
  const lst = getGuaranesiaLST(date);

  const sunPos = calculateSunPosition(date, lst);
  const isNight = sunPos.altitudeDeg < -6;
  const isTwilight = sunPos.altitudeDeg >= -18 && sunPos.altitudeDeg <= 0;

  const moon = calculateMoonPhase(date);

  const allPositions: Record<string, CalculatedPosition> = {};
  const zodiacPositions: Record<string, CalculatedPosition> = {};
  const visibleList: CalculatedPosition[] = [];

  let closestToZenithObject = CELESTIAL_CATALOG[0];
  let minZenithDistance = 999;

  CELESTIAL_CATALOG.forEach((obj) => {
    const coords = calculateHorizontalCoordinates(obj.rightAscensionHours, obj.declinationDeg, lst);
    const isVisible = coords.altitudeDeg > 0;
    const isZenithal = coords.altitudeDeg >= 55;

    const zenithDist = 90 - coords.altitudeDeg;
    if (zenithDist < minZenithDistance) {
      minZenithDistance = zenithDist;
      closestToZenithObject = obj;
    }

    let opacity = 0.25;
    if (coords.altitudeDeg > 0) {
      opacity = 0.45 + (coords.altitudeDeg / 90) * 0.55;
    } else {
      opacity = Math.max(0.1, 0.25 + (coords.altitudeDeg / 90) * 0.15);
    }

    const item: CalculatedPosition = {
      object: obj,
      altitudeDeg: coords.altitudeDeg,
      azimuthDeg: coords.azimuthDeg,
      hourAngleHours: coords.hourAngleHours,
      hourAngleDeg: coords.hourAngleDeg,
      isVisible,
      isZenithal,
      opacity,
      compassDirection: getCompassDirection(coords.azimuthDeg),
    };

    allPositions[obj.id] = item;
    if (obj.isZodiac) {
      zodiacPositions[obj.id] = item;
    }
    if (isVisible) {
      visibleList.push(item);
    }
  });

  visibleList.sort((a, b) => b.altitudeDeg - a.altitudeDeg);

  return {
    date,
    dateFormatted: date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    civilTimeFormatted: date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
    julianDate: jd,
    greenwichSiderealTimeHours: gmst,
    localSiderealTimeHours: lst,
    localSiderealTimeFormatted: formatHoursToHMS(lst),
    zenithRightAscensionDeg: lst * 15,
    zenithDeclinationDeg: GUARANESIA_COORDINATES.lat,
    sunAltitudeDeg: sunPos.altitudeDeg,
    sunAzimuthDeg: sunPos.azimuthDeg,
    isNight,
    isTwilight,
    moonPhaseIndex: moon.phaseIndex,
    moonPhaseName: moon.phaseName,
    moonIlluminationPercent: moon.illumination,
    culminatingConstellation: closestToZenithObject,
    visibleConstellations: visibleList,
    allPositions,
    zodiacPositions,
  };
}
