export interface ConstellationStar {
  x: number;
  y: number;
  r?: number;
  name?: string;
}

export interface ZodiacConstellation {
  id: string;
  name: string;
  latinName: string;
  symbol: string;
  element: 'Fogo' | 'Terra' | 'Ar' | 'Água';
  period: string;
  masonicMeaning: string;
  stars: ConstellationStar[];
  edges: [number, number][];
}

export const ZODIAC_CONSTELLATIONS: ZodiacConstellation[] = [
  {
    id: 'aries',
    name: 'Áries',
    latinName: 'Aries',
    symbol: '♈',
    element: 'Fogo',
    period: '21 Mar - 19 Abr',
    masonicMeaning: 'O Impulso Inicial: O primeiro passo do Aprendiz na busca pela Luz, rompendo as trevas da ignorância.',
    stars: [
      { x: 30, y: 70, name: 'Hamal' },
      { x: 70, y: 50, name: 'Sheratan' },
      { x: 100, y: 65, name: 'Mesarthim' },
      { x: 140, y: 90 },
    ],
    edges: [[0, 1], [1, 2], [2, 3]],
  },
  {
    id: 'taurus',
    name: 'Touro',
    latinName: 'Taurus',
    symbol: '♉',
    element: 'Terra',
    period: '20 Abr - 20 Mai',
    masonicMeaning: 'A Força de Sustentação: A pedra bruta firmly assentada sobre a terra com perseverança e trabalho constante.',
    stars: [
      { x: 40, y: 80, name: 'Aldebaran' },
      { x: 80, y: 60, name: 'Elnath' },
      { x: 120, y: 40 },
      { x: 100, y: 90 },
      { x: 150, y: 70 },
      { x: 130, y: 110, name: 'Pleiades' },
    ],
    edges: [[0, 1], [1, 2], [0, 3], [3, 4], [0, 5]],
  },
  {
    id: 'gemini',
    name: 'Gêmeos',
    latinName: 'Gemini',
    symbol: '♊',
    element: 'Ar',
    period: '21 Mai - 20 Jun',
    masonicMeaning: 'As Duas Colunas: Jachin e Boaz, Força e Beleza, a dualidade em perfeita união rituária.',
    stars: [
      { x: 40, y: 30, name: 'Castor' },
      { x: 70, y: 35, name: 'Pollux' },
      { x: 50, y: 80 },
      { x: 80, y: 85 },
      { x: 60, y: 130 },
      { x: 90, y: 135, name: 'Alhena' },
    ],
    edges: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5]],
  },
  {
    id: 'cancer',
    name: 'Câncer',
    latinName: 'Cancer',
    symbol: '♋',
    element: 'Água',
    period: '21 Jun - 22 Jul',
    masonicMeaning: 'O Solstício de Verão: O apogeu da luz e o refúgio seguro do Templo como abrigo das tempestades profanas.',
    stars: [
      { x: 80, y: 40, name: 'Asellus Australis' },
      { x: 120, y: 75, name: 'Acubens' },
      { x: 40, y: 90, name: 'Tegmine' },
      { x: 90, y: 130 },
    ],
    edges: [[0, 1], [0, 2], [0, 3]],
  },
  {
    id: 'leo',
    name: 'Leão',
    latinName: 'Leo',
    symbol: '♌',
    element: 'Fogo',
    period: '23 Jul - 22 Ago',
    masonicMeaning: 'O Sol no Oriente: O fogo da razão e a sabedoria que preside os trabalhos com majestade e justiça.',
    stars: [
      { x: 30, y: 80, name: 'Regulus' },
      { x: 60, y: 40, name: 'Algieba' },
      { x: 100, y: 30, name: 'Adhafera' },
      { x: 130, y: 55, name: 'Denebola' },
      { x: 110, y: 95 },
      { x: 70, y: 110 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]],
  },
  {
    id: 'virgo',
    name: 'Virgem',
    latinName: 'Virgo',
    symbol: '♍',
    element: 'Terra',
    period: '23 Ago - 22 Set',
    masonicMeaning: 'A Colheita da Sabedoria: O trigo da verdade e o trabalho recompensado pelo desbastamento da mente.',
    stars: [
      { x: 40, y: 110, name: 'Spica' },
      { x: 70, y: 70, name: 'Porrima' },
      { x: 110, y: 40, name: 'Vindemiatrix' },
      { x: 130, y: 80 },
      { x: 100, y: 120, name: 'Heze' },
    ],
    edges: [[0, 1], [1, 2], [1, 3], [3, 4], [4, 0]],
  },
  {
    id: 'libra',
    name: 'Balança (Libra)',
    latinName: 'Libra',
    symbol: '♎',
    element: 'Ar',
    period: '23 Set - 22 Out',
    masonicMeaning: 'O Nível e o Prumo: O equilíbrio exato da justiça, a equidade entre todos os irmãos no Templo.',
    stars: [
      { x: 50, y: 90, name: 'Zubenelgenubi' },
      { x: 100, y: 40, name: 'Zubeneschamali' },
      { x: 140, y: 80, name: 'Zubenelhakrabi' },
      { x: 90, y: 130, name: 'Brachium' },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [1, 3]],
  },
  {
    id: 'scorpio',
    name: 'Escorpião',
    latinName: 'Scorpius',
    symbol: '♏',
    element: 'Água',
    period: '23 Out - 21 Nov',
    masonicMeaning: 'A Transmutação Alquímica: A morte do ego profano e o nascimento do homem renovado pelas virtudes.',
    stars: [
      { x: 50, y: 50, name: 'Graffias' },
      { x: 80, y: 70, name: 'Antares' },
      { x: 110, y: 95 },
      { x: 130, y: 125, name: 'Shaula' },
      { x: 110, y: 145 },
      { x: 80, y: 135, name: 'Sargas' },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
  },
  {
    id: 'sagittarius',
    name: 'Sagitário',
    latinName: 'Sagittarius',
    symbol: '♐',
    element: 'Fogo',
    period: '22 Nov - 21 Dez',
    masonicMeaning: 'A Flecha do Conhecimento: O esquadro apontando para as estrelas na busca contínua da Verdade.',
    stars: [
      { x: 40, y: 80, name: 'Kaus Australis' },
      { x: 70, y: 50, name: 'Kaus Media' },
      { x: 100, y: 40, name: 'Kaus Borealis' },
      { x: 120, y: 70, name: 'Nunki' },
      { x: 90, y: 110, name: 'Ascella' },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 4]],
  },
  {
    id: 'capricorn',
    name: 'Capricórnio',
    latinName: 'Capricornus',
    symbol: '♑',
    element: 'Terra',
    period: '22 Dez - 19 Jan',
    masonicMeaning: 'O Solstício de Inverno: A escalada da montanha sagrada e a superação das provações ritualísticas.',
    stars: [
      { x: 30, y: 40, name: 'Algedi' },
      { x: 60, y: 60, name: 'Dabih' },
      { x: 110, y: 100, name: 'Deneb Algedi' },
      { x: 140, y: 90, name: 'Nashira' },
      { x: 90, y: 120 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [2, 4], [4, 1]],
  },
  {
    id: 'aquarius',
    name: 'Aquário',
    latinName: 'Aquarius',
    symbol: '♒',
    element: 'Ar',
    period: '20 Jan - 18 Fev',
    masonicMeaning: 'A Água da Vida & Fraternidade: O derramamento do conhecimento e do auxílio fraterno para a humanidade.',
    stars: [
      { x: 40, y: 50, name: 'Sadalmelik' },
      { x: 80, y: 40, name: 'Sadalsuud' },
      { x: 120, y: 70, name: 'Skat' },
      { x: 90, y: 110, name: 'Sadachbia' },
      { x: 50, y: 120 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
  },
  {
    id: 'pisces',
    name: 'Peixes',
    latinName: 'Pisces',
    symbol: '♓',
    element: 'Água',
    period: '19 Fev - 20 Mar',
    masonicMeaning: 'O Laço Inquebrável: A união fraternal que conecta todos os maçons espalhados pela superfície da Terra.',
    stars: [
      { x: 30, y: 100, name: 'Alrescha' },
      { x: 70, y: 60, name: 'Fum al Samakah' },
      { x: 120, y: 40 },
      { x: 140, y: 80 },
      { x: 90, y: 120 },
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
  },
];
