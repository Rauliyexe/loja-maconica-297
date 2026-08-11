export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  fullNarrative?: string;
  image: string;
}

export interface PrincipleItem {
  id: string;
  title: string;
  latinName: string;
  symbol: string;
  initial: string;
  description: string;
  details: string;
  category: 'luzes' | 'lema' | 'maxima';
}

export interface OfficerItem {
  role: string;
  title: string;
  description: string;
  symbol: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  description: string;
}

export interface EventItem {
  id: number;
  title: string;
  dateDay: string;
  dateMonth: string;
  dateYear: string;
  time: string;
  location: string;
  description: string;
  type: string;
  image: string;
}

export interface DashboardNotice {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  author: string;
  urgent: boolean;
}

export interface DashboardDocument {
  id: number;
  title: string;
  category: string;
  degree: string;
  updatedAt: string;
  size: string;
  downloadUrl: string;
}

export interface DashboardMeeting {
  id: number;
  date: string;
  time: string;
  degree: string;
  title: string;
  temple: string;
  workOrder: string;
}

export const LODGE_INFO = {
  name: "Loja Maçônica Paz, Harmonia & Concórdia nº 297",
  shortName: "PHC nº 297",
  number: "297",
  affiliation: "Grande Oriente de Minas Gerais (GOMG)",
  location: "Guaranésia - MG",
  fullLocation: "Oriente de Guaranésia, Minas Gerais",
  foundationDate: "16 de Outubro de 2015",
  consecrationDate: "4 de Dezembro de 2015",
  patronDay: "Dia de Santa Bárbara (Padroeira de Guaranésia)",
  motherLodge: "Loja Estrela de Minas (Guaxupé) • VM Bruno Ricciardi",
  founders: [
    "Adenilson Aparecido David",
    "Joaquim Lázaro Silveira Ribeiro",
    "Paulinho Contador (in memoriam)",
    "Toca",
    "Edilson",
    "Edelto Marcos Pedreiro",
    "Luiz Magri"
  ],
  earlyInitiates: ["André Magri", "Júlio Valeriano", "Guilherme Borges"],
  meetingTime: "Todas as quartas-feiras, às 20h",
  motto: "Ordo Ab Chao",
  mottoTranslation: "Da escuridão à luz, do caos à ordem",
  journey: "Da pedra bruta à pedra polida",
  socialPartnerships: [
    "CESG — Centro Educativo e Social de Guaranésia",
    "Casa de Maria",
    "Fábrica de Fraldas",
    "Escola de Pais"
  ],
};

export const FULL_HISTORY_TEXT = `
Tudo começou em uma visita do maçom Adenilson Aparecido David à Loja Maçônica Odilon Piconez, no Oriente de Muzambinho, onde aconteceria a consagração do templo daquela loja. Lá, ele foi apresentado aos maçons João dos Reis, da Loja Caminhos da Esperança (Nova Resende), e Agostinho Reis Melo, da Loja Deus e Caridade IX (Cabo Verde), então Delegados Distritais do Grande Oriente de Minas Gerais. Na ocasião, compartilhou o sonho de fundar uma nova loja maçônica em Guaranésia e iniciou conversas com o então Grão-Mestre Lázaro Emanuel Franco Sales, presente para presidir a Sessão Magna.

Entusiasmado com o apoio recebido, Adenilson trouxe a proposta aos Irmãos Edelto Marcos Pedreiro e Joaquim Lázaro Silveira Ribeiro, que prontamente aceitaram o desafio e, juntos, começaram a contatar maçons adormecidos dispostos a colocar em prática esse audacioso projeto.

A primeira reunião aconteceu em 1º de abril de 2015, no Salão da Conferência São Vicente. A semente estava plantada — e a Loja Estrela de Minas, de Guaxupé, liderada pelo então Venerável Mestre Bruno Ricciardi, tornou-se a Loja-mãe da PHC, oferecendo apoio crucial e definitivo.

Enquanto isso, o saudoso Paulinho Contador assumiu toda a documentação junto ao GOMG. Entre abril e setembro de 2015, várias reuniões na casa de Joaquim definiram o nome da Loja, a diretoria e o quadro de obreiros. Em 16 de outubro de 2015 chegou a Carta Constitutiva.

Por 49 dias, os sete mestres fundadores — Adenilson, Joaquim, Paulinho, Toca, Edilson, Edelto e Luiz Magri —, com os recém-iniciados André Magri, Júlio Valeriano e Guilherme Borges, reformaram o espaço. E em 4 de dezembro de 2015, dia de Santa Bárbara, padroeira de Guaranésia, a Grande Comissão Consagradora adentrou as portas da nova Loja, acompanhada por maçons de 16 lojas e 15 cidades. A PHC nascia oficialmente.
`;

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "01/ABR/2015",
    title: "A Semente",
    subtitle: "PRIMEIRA REUNIÃO • SALÃO SÃO VICENTE",
    description: "Primeira reunião no Salão da Conferência São Vicente, com os futuros fundadores e os Delegados Distritais João dos Reis e Agostinho Reis Melo.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "ABR-SET/2015",
    title: "Reuniões Preparatórias",
    subtitle: "ENCONTROS E LOJA-MÃE ESTRELA DE MINAS",
    description: "Encontros na casa do Irmão Joaquim definem o nome da Loja, a diretoria e o quadro inicial de obreiros. A Loja Estrela de Minas, de Guaxupé, torna-se a Loja-mãe.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "16/OUT/2015",
    title: "Carta Constitutiva",
    subtitle: "EXPEDIÇÃO OFICIAL PELO GOMG",
    description: "A Loja Paz, Harmonia e Concórdia nº 297 recebe sua Carta Constitutiva do Grande Oriente de Minas Gerais, oficializando sua existência.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "OUT-DEZ/2015",
    title: "49 Dias de Trabalho",
    subtitle: "REFORMA E EDIFICAÇÃO DO TEMPLO",
    description: "Os sete mestres fundadores e Irmãos da Loja Estrela de Minas dedicam-se à reforma do espaço, transformando-o em um Templo digno da Ordem.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "04/DEZ/2015",
    title: "Sagração do Templo",
    subtitle: "DIA DE SANTA BÁRBARA • PADROEIRA DE GUARANÉSIA",
    description: "No dia de Santa Bárbara, padroeira de Guaranésia, a Grande Comissão Consagradora — liderada pelo Grão-Mestre Lázaro Emanuel Franco Sales — sagra o Templo, com a presença de maçons de 16 lojas e 15 cidades.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "2017",
    title: "Gestão do CESG & Casa de Maria",
    subtitle: "EXPANSÃO FRATERNAL E SOCIAL",
    description: "A Loja assume a gestão do Centro Educativo e Social de Guaranésia (CESG). Em 12 de outubro inaugura-se também a Casa de Maria, captando e distribuindo doações para famílias em vulnerabilidade.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "25/OUT/2020",
    title: "Boteco do CESG — Em Box",
    subtitle: "HOMENAGEM A PAULINHO CONTADOR",
    description: "Durante a pandemia, a Loja realiza o tradicional Boteco em formato 'em box' com live. Evento dedicado ao saudoso Paulinho Contador, falecido no mesmo dia.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    year: "2025",
    title: "Década de Luz",
    subtitle: "10 ANOS DA PHC Nº 297 & NOVO COMPLEXO",
    description: "Em 16 de outubro celebram-se os 10 anos da Carta Constitutiva. Em 4 de dezembro, os 10 anos da Sagração do Templo. Um terreno doado pela Prefeitura abrigará o novo Templo, a nova Casa de Maria, a Fábrica de Fraldas e a Escola de Pais.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80",
  },
];

export const PRINCIPIOS_DATA: PrincipleItem[] = [
  {
    id: "sabedoria",
    title: "Sabedoria",
    latinName: "Sapientia",
    symbol: "🕯️",
    initial: "S",
    description: "Buscar continuamente o conhecimento, polindo a pedra bruta do espírito.",
    details: "A Sabedoria direciona a mente do maçom para a busca incessante da verdade, dissipando a ignorância e iluminando o caminho da autossuperação.",
    category: "luzes",
  },
  {
    id: "forca",
    title: "Força",
    latinName: "Fortitudo",
    symbol: "🏛️",
    initial: "F",
    description: "Persistir na virtude e sustentar os Irmãos com firmeza moral.",
    details: "A Força dá sustentação à Coluna da Fraternidade, capacitando o iniciado a permanecer firme perante as adversidades da vida profana.",
    category: "luzes",
  },
  {
    id: "beleza",
    title: "Beleza",
    latinName: "Pulchritudo",
    symbol: "✨",
    initial: "B",
    description: "Harmonizar pensamento, palavra e ação em uma vida íntegra.",
    details: "A Beleza ornamenta as obras rituais e morais, expressando a perfeição estética da alma que lapidou a sua pedra bruta.",
    category: "luzes",
  },
  {
    id: "paz",
    title: "Paz",
    latinName: "Pax Mentalis",
    symbol: "🕊️",
    initial: "P",
    description: "Tranquilidade da alma e serenidade das paixões.",
    details: "A Paz é o estado fundamental de harmonia interior necessário para que o maçom desbaste sua pedra bruta sem as perturbações do ego profano.",
    category: "lema",
  },
  {
    id: "harmonia",
    title: "Harmonia",
    latinName: "Harmonia Universalis",
    symbol: "📐",
    initial: "H",
    description: "Concordância perfeita das partes no todo.",
    details: "A Harmonia reflete a ordem cósmica (Ordo Ab Chao) dentro do Templo e nas relações humanas, conectando o micro ao macrocosmo.",
    category: "lema",
  },
  {
    id: "concordia",
    title: "Concórdia",
    latinName: "Concordia Fraterna",
    symbol: "🤝",
    initial: "C",
    description: "União dos corações sob a mesma causa moral.",
    details: "A Concórdia une os irmãos de Guaranésia - MG sob a aliança inquebrável da solidariedade e cooperação fraternal.",
    category: "lema",
  },
];

export const OFFICERS_DATA: OfficerItem[] = [
  {
    role: "Venerável Mestre",
    title: "ORIENTE • SABEDORIA",
    description: "Preside as reuniões rituais da Loja, representando a sabedoria e a luz diretora dos trabalhos de Guaranésia - MG.",
    symbol: "Esquadro",
  },
  {
    role: "Primeiro Vigilante",
    title: "OCIDENTE • FORÇA",
    description: "Supervisiona a Coluna da Força e os trabalhos de lapidação da pedra bruta, auxiliando o Venerável Mestre no governo da Loja.",
    symbol: "Nível",
  },
  {
    role: "Segundo Vigilante",
    title: "SUL • BELEZA",
    description: "Supervisiona a Coluna da Beleza e a recreação dos Irmãos, cuidando do repouso e da instrução dos Aprendizes.",
    symbol: "Prumo",
  },
  {
    role: "Secretário & Orador",
    title: "GUARDIÕES DA LEI E MEMÓRIA",
    description: "Responsáveis por guardar a síntese das pranchas registradas e garantir a estrita observância das leis do GOMG.",
    symbol: "Pena & Livro",
  },
  {
    role: "Tesoureiro & Hospedeiro",
    title: "BENEFICÊNCIA & CARIDADE",
    description: "Gestão do Tronco de Beneficência que canaliza recursos para instituições parceiras como o CESG — Centro Educativo e a Casa de Maria.",
    symbol: "Chaves & Bolsa",
  },
  {
    role: "Cobridor & Guardião",
    title: "SEGURANÇA DO TEMPLO",
    description: "Guarda a entrada da Oficina durante as sessões ordinárias das quartas-feiras às 20h, assegurando a cobertura ritualística.",
    symbol: "Espada Flamejante",
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    title: "Templo da Loja Paz, Harmonia & Concórdia nº 297",
    category: "Sede",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    date: "Guaranésia - MG",
    description: "Interior do Templo sagrado construído pelos 7 mestres fundadores em 49 dias de trabalho.",
  },
  {
    id: 2,
    title: "Ação Social com o CESG — Centro Educativo",
    category: "Ações Sociais",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80",
    date: "Parceria Comunitária",
    description: "Entrega de suprimentos educativos e apoio ao programa de desenvolvimento infantil do CESG.",
  },
  {
    id: 3,
    title: "Apoio Beneficente à Casa de Maria",
    category: "Ações Sociais",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80",
    date: "Ação Fraternal",
    description: "Atividade filantrópica em suporte às famílias atendidas pela Casa de Maria em Guaranésia - MG.",
  },
  {
    id: 4,
    title: "Sessão Comemorativa de Consagração",
    category: "História",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    date: "04 de Dezembro",
    description: "Registro da consagração solene no dia de Santa Bárbara (04/12/2015) com irmãos de 16 lojas e 15 cidades.",
  },
  {
    id: 5,
    title: "Banquete Fraternal e Confraternização",
    category: "Confraternizações",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
    date: "Encontro Fraternal",
    description: "Ágape fraternal fortalecendo os laços de união entre os Irmãos e cunhadas de Guaranésia.",
  },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    title: "Sessão Ordinária Ritualística",
    dateDay: "TODA",
    dateMonth: "QUARTA",
    dateYear: "2026",
    time: "20:00",
    location: "Templo da Loja • Guaranésia - MG",
    description: "Reunião semanal ordinária dos trabalhos rituais para Aprendizes, Companheiros e Mestres.",
    type: "Sessão Magna",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Solenidade Anual de Consagração (04 de Dezembro)",
    dateDay: "04",
    dateMonth: "DEZ",
    dateYear: "2026",
    time: "20:00",
    location: "Templo da Loja • Guaranésia - MG",
    description: "Sessão magna comemorativa celebrando a consagração da Loja no Dia de Santa Bárbara (04/12/2015).",
    type: "Festiva",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Campanha Solidária: CESG & Casa de Maria",
    dateDay: "15",
    dateMonth: "NOV",
    dateYear: "2026",
    time: "09:00",
    location: "Guaranésia - MG",
    description: "Ação beneficente conjunta direcionada às crianças do CESG e às famílias amparadas pela Casa de Maria.",
    type: "Ação Social",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80",
  },
];

export const LUNAR_PHASES_DATA = [
  {
    name: "Lua Nova",
    metaphor: "Início & Iniciação",
    description: "Simboliza a primeira reunião em 1º de abril de 2015 no Salão São Vicente e a busca inicial pela luz.",
  },
  {
    name: "Lua Crescente",
    metaphor: "Apoio & Carta Constitutiva",
    description: "O apoio da Loja-mãe Estrela de Minas (Guaxupé) e a chegada da Carta Constitutiva do GOMG em 16/10/2015.",
  },
  {
    name: "Quarto Crescente",
    metaphor: "Trabalho dos 7 Mestres",
    description: "Os 49 dias de reforma e dedicação dos sete mestres fundadores e primeiros iniciados.",
  },
  {
    name: "Gibosa Crescente",
    metaphor: "Consagração Solene",
    description: "A consagração do Templo em 4 de dezembro de 2015 (Dia de Santa Bárbara) com 16 lojas e 15 cidades.",
  },
  {
    name: "Lua Cheia",
    metaphor: "Plenitude & Ordo Ab Chao",
    description: "O apogeu do Templo em Guaranésia - MG: a pedra polida reluzindo e os trabalhos com o CESG e a Casa de Maria.",
  },
  {
    name: "Quarto Minguante",
    metaphor: "Transmissão da Tradição",
    description: "O dever permanente de transmitir os valores morais e a memória dos fundadores às futuras gerações.",
  },
];

export const DASHBOARD_NOTICES: DashboardNotice[] = [
  {
    id: 1,
    title: "Convocação para Sessão de Instalação e Eleição",
    date: "12 de Agosto, 2026",
    category: "Edital Oficial",
    content: "Convocamos todos os Mestres Maçons da A.R.L.S. Paz, Harmonia & Concórdia nº 297 para a sessão ordinária no Templo de Guaranésia - MG.",
    author: "Secretaria",
    urgent: true,
  },
  {
    id: 2,
    title: "Balanço do Tronco de Beneficência • CESG & Casa de Maria",
    date: "05 de Agosto, 2026",
    category: "Relatório de Beneficência",
    content: "Relatório de prestação de contas das doações encaminhadas ao CESG — Centro Educativo e à Casa de Maria.",
    author: "Tesouraria",
    urgent: false,
  },
  {
    id: 3,
    title: "Orientação Rituária do GOMG sobre Trabalhos de Quarta-feira",
    date: "28 de Julho, 2026",
    category: "Boletim GOMG",
    content: "Circular oficial do Grande Oriente de Minas Gerais detalhando as diretrizes rituais para o segundo semestre de 2026.",
    author: "Oratória",
    urgent: false,
  },
];

export const DASHBOARD_DOCUMENTS: DashboardDocument[] = [
  {
    id: 1,
    title: "Estatuto Social & Regimento Interno (2026)",
    category: "Legislação",
    degree: "Todos os Graus",
    updatedAt: "15/01/2026",
    size: "2.4 MB",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Carta Constitutiva Expedida pelo GOMG (16/10/2015)",
    category: "Acervo Histórico",
    degree: "Todos os Graus",
    updatedAt: "16/10/2015",
    size: "4.8 MB",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Ata da Grande Comissão Consagradora (04/12/2015)",
    category: "Acervo Histórico",
    degree: "Todos os Graus",
    updatedAt: "04/12/2015",
    size: "3.5 MB",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Calendário de Sessões Rituais - Quarta-feira 20h",
    category: "Agenda",
    degree: "Todos os Graus",
    updatedAt: "10/01/2026",
    size: "1.1 MB",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Manual de Instrução Rituária - Grau 1 (Aprendiz)",
    category: "Instrução Ritual",
    degree: "Grau 1",
    updatedAt: "01/02/2026",
    size: "5.2 MB",
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "Instruções sobre a Geometria Sagrada - Grau 2 (Companheiro)",
    category: "Instrução Ritual",
    degree: "Grau 2",
    updatedAt: "15/02/2026",
    size: "3.8 MB",
    downloadUrl: "#",
  },
  {
    id: 7,
    title: "Vademecum & Legislação do GOMG (Edição 2026)",
    category: "Legislação",
    degree: "Grau 3",
    updatedAt: "20/01/2026",
    size: "8.9 MB",
    downloadUrl: "#",
  },
];

export const DASHBOARD_MEETINGS: DashboardMeeting[] = [
  {
    id: 1,
    date: "12/08/2026",
    time: "20:00",
    degree: "Aprendiz",
    title: "Sessão Ordinária • Grau 1",
    temple: "Templo da Loja • Guaranésia - MG",
    workOrder: "Trabalhos sobre a Matéria e a Pedra Bruta",
  },
  {
    id: 2,
    date: "19/08/2026",
    time: "20:00",
    degree: "Companheiro",
    title: "Sessão de Instrução • Grau 2",
    temple: "Templo da Loja • Guaranésia - MG",
    workOrder: "A Geometria Sagrada e As Três Luzes (Sabedoria, Força e Beleza)",
  },
  {
    id: 3,
    date: "26/08/2026",
    time: "20:00",
    degree: "Mestre",
    title: "Sessão Magna • Grau 3",
    temple: "Templo da Loja • Guaranésia - MG",
    workOrder: "Elevação e Aplicação da Máxima Ordo Ab Chao",
  },
];

// LOGGED IN BROTHER PROFILE DATA WITH AVATAR PHOTO
export const LOGGED_IN_BROTHER = {
  name: "Ir. Gabriel de Moraes Vasconcelos",
  role: "Mestre Maçom",
  cim: "297.842-MG",
  degree: "Grau 3",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  initiationDate: "16 de Outubro de 2015",
  oriente: "Guaranésia - MG",
  motherLodge: "Loja Estrela de Minas (Guaxupé)",
  monthlyFeeStatus: "Quitação em Dia ✓",
};

// MEMBERS DIRECTORY DATA WITH AVATARS
export const DASHBOARD_MEMBERS = [
  { id: 1, name: "Adenilson Aparecido David", role: "Venerável Mestre", cim: "297.001-MG", degree: "Mestre Inst.", profession: "Empresário", phone: "(35) 99841-0001", initDate: "16/10/2015", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Joaquim Lázaro Silveira Ribeiro", role: "Primeiro Vigilante", cim: "297.002-MG", degree: "Mestre Inst.", profession: "Engenheiro Civil", phone: "(35) 99841-0002", initDate: "16/10/2015", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Edelto Marcos Pedreiro", role: "Segundo Vigilante", cim: "297.003-MG", degree: "Mestre", profession: "Administrador", phone: "(35) 99841-0003", initDate: "16/10/2015", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" },
  { id: 4, name: "Luiz Magri", role: "Secretário", cim: "297.004-MG", degree: "Mestre", profession: "Advogado", phone: "(35) 99841-0004", initDate: "16/10/2015", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" },
  { id: 5, name: "Gabriel de Moraes Vasconcelos", role: "Mestre Maçom", cim: "297.842-MG", degree: "Mestre", profession: "Arquiteto", phone: "(35) 99841-0005", initDate: "16/10/2015", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Toca", role: "Tesoureiro", cim: "297.005-MG", degree: "Mestre", profession: "Contador", phone: "(35) 99841-0006", initDate: "16/10/2015", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80" },
  { id: 7, name: "Edilson", role: "Orador", cim: "297.006-MG", degree: "Mestre", profession: "Professor", phone: "(35) 99841-0007", initDate: "16/10/2015", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80" },
  { id: 8, name: "André Magri", role: "Mestre de Cerimônias", cim: "297.007-MG", degree: "Mestre", profession: "Médico", phone: "(35) 99841-0008", initDate: "04/12/2015", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80" },
];

// MONTHLY DUES PAYMENT TABLE PER MEMBER (TABELA DE MENSALIDADES 2026)
export const DASHBOARD_PAYMENTS = [
  { id: 1, name: "Adenilson Aparecido David", cim: "297.001-MG", fee: "R$ 250,00", jan: "Pago", fev: "Pago", mar: "Pago", abr: "Pago", mai: "Pago", jun: "Pago", jul: "Pago", ago: "Pago", lastDate: "05/08/2026" },
  { id: 2, name: "Joaquim Lázaro Silveira Ribeiro", cim: "297.002-MG", fee: "R$ 250,00", jan: "Pago", fev: "Pago", mar: "Pago", abr: "Pago", mai: "Pago", jun: "Pago", jul: "Pago", ago: "Pago", lastDate: "04/08/2026" },
  { id: 3, name: "Edelto Marcos Pedreiro", cim: "297.003-MG", fee: "R$ 250,00", jan: "Pago", fev: "Pago", mar: "Pago", abr: "Pago", mai: "Pago", jun: "Pago", jul: "Pago", ago: "Pendente", lastDate: "10/07/2026" },
  { id: 4, name: "Luiz Magri", cim: "297.004-MG", fee: "R$ 250,00", jan: "Pago", fev: "Pago", mar: "Pago", abr: "Pago", mai: "Pago", jun: "Pago", jul: "Pago", ago: "Pago", lastDate: "02/08/2026" },
  { id: 5, name: "Gabriel de Moraes Vasconcelos", cim: "297.842-MG", fee: "R$ 250,00", jan: "Pago", fev: "Pago", mar: "Pago", abr: "Pago", mai: "Pago", jun: "Pago", jul: "Pago", ago: "Pago", lastDate: "01/08/2026" },
  { id: 6, name: "Toca", cim: "297.005-MG", fee: "R$ 250,00", jan: "Pago", fev: "Pago", mar: "Pago", abr: "Pago", mai: "Pago", jun: "Pago", jul: "Pago", ago: "Pago", lastDate: "05/08/2026" },
  { id: 7, name: "Edilson", cim: "297.006-MG", fee: "R$ 250,00", jan: "Pago", fev: "Pago", mar: "Pago", abr: "Pago", mai: "Pago", jun: "Pago", jul: "Pago", ago: "Pendente", lastDate: "12/07/2026" },
  { id: 8, name: "André Magri", cim: "297.007-MG", fee: "R$ 250,00", jan: "Pago", fev: "Pago", mar: "Pago", abr: "Pago", mai: "Pago", jun: "Pago", jul: "Pago", ago: "Pago", lastDate: "03/08/2026" },
];

// PAST MASTERS
export const DASHBOARD_PAST_MASTERS = [
  { period: "2015 - 2017", name: "Ir. Adenilson Aparecido David", title: "Fundador & Primeiro Venerável Mestre" },
  { period: "2017 - 2019", name: "Ir. Joaquim Lázaro Silveira Ribeiro", title: "Gestão do CESG & Casa de Maria" },
  { period: "2019 - 2021", name: "Ir. Edelto Marcos Pedreiro", title: "Gestão da Pandemia & Boteco do CESG Em Box" },
  { period: "2021 - 2023", name: "Ir. Luiz Magri", title: "Expansão da Infraestrutura" },
  { period: "2023 - 2025", name: "Ir. André Magri", title: "Preparação para a Década de Luz" },
];

// ARCHITECTURE PAPERS
export const DASHBOARD_PAPERS = [
  { id: 1, title: "A Simbologia da Pedra Bruta no Século XXI", author: "Ir. Gabriel de Moraes", degree: "Grau 1", date: "10/06/2026", likes: 24 },
  { id: 2, title: "As Três Luzes e a Geometria do Templo de Salomão", author: "Ir. Joaquim Ribeiro", degree: "Grau 2", date: "22/05/2026", likes: 31 },
  { id: 3, title: "Ordo Ab Chao: A Filosofia Maçônica Perante o Caos Profano", author: "Ir. Adenilson David", degree: "Grau 3", date: "14/04/2026", likes: 45 },
];
