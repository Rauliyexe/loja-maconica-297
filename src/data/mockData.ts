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
  motto: "Paz, Harmonia e Concórdia",
  mottoTranslation: "Pax, Harmonia et Concordia",
  journey: "10 Anos de Luz e Fraternidade no Oriente de Guaranésia",
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
  firstElevationDate: "17 de Setembro de 2016",
  firstExaltationDate: "10 de Dezembro de 2016",
  email: "contato@lojaphc297.org.br",
  phone: "(35) 99841-0297",
  address: "Rua Maçônica, nº 297 - Centro, Guaranésia - MG",
};

export const LUNAR_PHASES_DATA = [
  { name: 'Lua Nova', metaphor: 'Iniciação & Silêncio', description: 'A introspecção profunda, o desapego das ilusões profanas e o plantio das sementes da virtude no Templo interior.' },
  { name: 'Crescente', metaphor: 'Ação & Força', description: 'O impulso vigoroso do Aprendiz, o trabalho constante de desbastamento da pedra bruta com o maço e o cinzel.' },
  { name: 'Quarto Crescente', metaphor: 'Equilíbrio & Prumo', description: 'A busca pelo prumo e pelo nível moral, firmando as colunas do caráter e da retidão maçônica.' },
  { name: 'Gibosa Crescente', metaphor: 'Aperfeiçoamento', description: 'A geometria sagrada iluminando a mente do Companheiro na descoberta das artes liberais e das ciências.' },
  { name: 'Lua Cheia', metaphor: 'Plenitude & Luz', description: 'O apogeu da sabedoria do Mestre Maçom, a manifestação plena da luz do G∴A∴D∴U∴ irradiando concórdia.' },
  { name: 'Minguante', metaphor: 'Transmissão & Sabedoria', description: 'O dever sagrado de compartilhar os ensinamentos adquiridos, preparando os novos irmãos para a continuidade da Obra.' },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2015',
    title: 'Fundação da Loja',
    subtitle: '16 de Outubro de 2015',
    description: 'Nascida do ideal de maçons dedicados no Oriente de Guaranésia para erguer um templo de virtudes sob o Rito Escocês Antigo e Aceito.',
    fullNarrative: 'No dia 16 de Outubro de 2015, um grupo de valorosos Irmãos reuniu-se no Oriente de Guaranésia com o firme propósito de fundar a Loja Maçônica Paz, Harmonia & Concórdia nº 297.',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
  },
  {
    year: '2015',
    title: 'Consagração do Templo',
    subtitle: '04 de Dezembro de 2015',
    description: 'Sessão Magna de Sagração do Templo pelo Grande Oriente de Minas Gerais (GOMG) no dia de Santa Bárbara, padroeira de Guaranésia.',
    fullNarrative: 'Em 4 de dezembro de 2015, data consagrada a Santa Bárbara, realizou-se a solene Sessão Magna de Consagração do Templo.',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
  },
  {
    year: '2016',
    title: 'Primeiras Elevações & Exaltações',
    subtitle: 'Setembro e Dezembro de 2016',
    description: 'A Loja consolida suas primeiras turmas de Companheiros e Mestres Maçons, fortalecendo as colunas operativas.',
    fullNarrative: 'O ano de 2016 marcou a expansão do quadro obreiro com as primeiras sessões magnas de Elevação ao Grau de Companheiro e Exaltação ao Grau de Mestre.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
  {
    year: '2020',
    title: 'Criação do CESG & Ações Sociais',
    subtitle: 'Centro Social e Filantrópico',
    description: 'Estruturação do Centro Social de Guaranésia (CESG), fábrica de fraldas e projetos assistenciais à comunidade.',
    fullNarrative: 'A solidariedade maçônica materializou-se no Centro Social de Guaranésia (CESG), coordenando ações beneficentes contínuas como a Fábrica de Fraldas e o Cobertor Solidário.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80',
  },
  {
    year: '2026',
    title: 'Uma Década de Luz',
    subtitle: 'Consolidação e Futuro',
    description: 'Mais de 10 anos de trabalhos ininterruptos pela fraternidade, moralidade e aperfeiçoamento da humanidade.',
    fullNarrative: 'Completando sua primeira década de história, a Loja PHC nº 297 segue firme e altiva em seu propósito de espalhar a Luz e a Fraternidade.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
];

export const PRINCIPIOS_DATA: PrincipleItem[] = [
  {
    id: 'sabedoria',
    title: 'Sabedoria',
    latinName: 'Sapientia',
    symbol: '🏛️',
    initial: 'S',
    category: 'luzes',
    description: 'A coluna que inventa, concebe e orienta o edifício com a luz da razão e o discernimento.',
    details: 'Representada pelo Venerável Mestre no Oriente, a Sabedoria guia os passos da Oficina em direção à Verdade.',
  },
  {
    id: 'forca',
    title: 'Força',
    latinName: 'Fortitudo',
    symbol: '⚡',
    initial: 'F',
    category: 'luzes',
    description: 'A coluna que sustenta e executa a obra, conferindo estabilidade moral perante os desafios profanos.',
    details: 'Representada pelo Primeiro Vigilante no Ocidente, a Força simboliza a energia da vontade e a constância no bem.',
  },
  {
    id: 'beleza',
    title: 'Beleza',
    latinName: 'Pulchritudo',
    symbol: '✨',
    initial: 'B',
    category: 'luzes',
    description: 'A coluna que adorna e harmoniza a construção, unindo os corações em perfeita consonância.',
    details: 'Representada pelo Segundo Vigilante no Sul, a Beleza inspira a arte de viver em concórdia e fraternidade.',
  },
  {
    id: 'paz',
    title: 'Paz',
    latinName: 'Pax Universalis',
    symbol: '🕊️',
    initial: 'P',
    category: 'lema',
    description: 'A serenidade do espírito livre de paixões desordenadas e a harmonia com o Universo.',
    details: 'A Paz maçônica não é apenas a ausência de conflitos, mas a tranquilidade da ordem moral.',
  },
  {
    id: 'harmonia',
    title: 'Harmonia',
    latinName: 'Harmonia Cordis',
    symbol: '⚖️',
    initial: 'H',
    category: 'lema',
    description: 'A perfeita consonância entre o pensar, o sentir e o agir dentro e fora do Templo.',
    details: 'A Harmonia é a beleza que sustenta o edifício social e fraterno.',
  },
  {
    id: 'concordia',
    title: 'Concórdia',
    latinName: 'Concordia Fraterna',
    symbol: '🤝',
    initial: 'C',
    category: 'lema',
    description: 'A união sincera de corações que entrelaça todos os maçons em uma só corrente fraternal.',
    details: 'A Concórdia transforma a pluralidade em unidade, guiando as ações em prol do bem comum.',
  },
  {
    id: 'ordo_ab_chao',
    title: 'Ordo Ab Chao',
    latinName: 'Ordo Ab Chao',
    symbol: '🔺',
    initial: 'O',
    category: 'maxima',
    description: 'A Ordem que surge do Caos: o princípio maçônico supremo de transformação do profano em sagrado.',
    details: 'Da pedra bruta informe nasce o cubo perfeito da sabedoria e do autodomínio.',
  },
];

export const PRINCIPLES_DATA = PRINCIPIOS_DATA;

export const OFFICERS_DATA: OfficerItem[] = [
  { role: "Venerável Mestre", title: "Presidência & Sabedoria", description: "Dirige a Loja, preside os trabalhos rituais e zela pelo cumprimento dos regulamentos.", symbol: "Esquadro" },
  { role: "Primeiro Vigilante", title: "Coluna da Força", description: "Responsável pela instrução dos Companheiros e pela manutenção da disciplina no Ocidente.", symbol: "Nível" },
  { role: "Segundo Vigilante", title: "Coluna da Beleza", description: "Supervisiona a coluna dos Aprendizes e zela pelo silêncio, ordem e descanso dos obreiros.", symbol: "Prumo" },
  { role: "Orador", title: "Guardião da Lei", description: "Representa a Justiça e a Legislação Maçônica, interpretando as leis do GOMG e concluindo as deliberações.", symbol: "Livro da Lei" },
  { role: "Secretário", title: "Registro e Memória", description: "Registra as atas, expede pranchas e mantém o acervo histórico e documental da Loja.", symbol: "Duas Penas Cruzadas" },
  { role: "Tesoureiro", title: "Finanças e Patrimônio", description: "Administra o erário da Loja, recolhe as mensalidades e presta contas das obras sociais.", symbol: "Duas Chaves Cruzadas" },
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 1, title: 'Banquete Ritualístico de Solstício', category: 'Sessões Magnas', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', date: '21/06/2026', description: 'Celebração solsticial com os Irmãos do Oriente de Guaranésia e visitantes.' },
  { id: 2, title: 'Entrega da Fábrica de Fraldas', category: 'Ação Social CESG', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80', date: '15/07/2026', description: 'Doação de fraldas geriátricas ao Asilo de Guaranésia pelo Centro Social.' },
  { id: 3, title: 'Edição Anual do Boteco do CESG', category: 'Eventos Beneficentes', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80', date: '10/05/2026', description: 'Confraternização beneficente em prol dos projetos comunitários de Guaranésia.' },
  { id: 4, title: 'Sessão Magna de Elevação', category: 'Sessões Magnas', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80', date: '18/03/2026', description: 'Trabalhos solenes no Grau de Companheiro com a presença do GOMG.' },
  { id: 5, title: 'Campanha Cobertor Solidário', category: 'Ação Social CESG', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80', date: '02/06/2026', description: 'Distribuição de cobertores para famílias em vulnerabilidade no inverno.' },
  { id: 6, title: 'Instrução Filosófica de Mestres', category: 'Instrução', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80', date: '28/04/2026', description: 'Estudo aprofundado sobre a Geometria Sagrada e simbolismo rituário.' },
];

export const EVENTS_DATA: EventItem[] = [
  { id: 1, title: 'Boteco do CESG - 2026', dateDay: '12', dateMonth: 'SET', dateYear: '2026', time: '19:30', location: 'Salão de Eventos da Loja • Guaranésia', description: 'Tradicional noite gastronômica beneficente com música ao vivo e renda 100% destinada às ações do CESG.', type: 'Beneficente', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Pizza do Bem - 4ª Edição', dateDay: '24', dateMonth: 'OUT', dateYear: '2026', time: '18:00', location: 'Sede da Loja (Drive-Thru / Retirada)', description: 'Venda de pizzas artesanais produzidas pela Fraternidade Feminina e Irmãos para a Fábrica de Fraldas.', type: 'Ação Social', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Sessão Magna de Aniversário de 11 Anos', dateDay: '16', dateMonth: 'OUT', dateYear: '2026', time: '20:00', location: 'Templo da A.R.L.S. PHC nº 297', description: 'Comemoração dos 11 anos de fundação com presença do Grão-Mestre do Grande Oriente de Minas Gerais.', type: 'Sessão Magna', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80' },
];

export const DASHBOARD_NOTICES: DashboardNotice[] = [
  { id: 1, title: "Decreto nº 482/2026 - Convocação para Eleições do GOMG", date: "10/08/2026", category: "Decretos", content: "O Grão-Mestre convoca todos os Mestres Maçons regulares para a Assembleia Geral Eleitoral.", author: "Secretaria Geral do GOMG", urgent: true },
  { id: 2, title: "Prestação de Contas da 4ª Pizza do Bem", date: "05/08/2026", category: "Filantropia", content: "Arrecadação líquida de R$ 18.450,00 destinada integralmente à aquisição de celulose para a Fábrica de Fraldas.", author: "Tesouraria da Loja / CESG", urgent: false },
  { id: 3, title: "Escala de Oficiais para a Sessão de Companheiro", date: "01/08/2026", category: "Ritualística", content: "Confira a escala de cargos para a sessão de instrução na próxima quarta-feira às 20h.", author: "Mestre de Cerimônias", urgent: false },
];

export const DASHBOARD_DOCUMENTS: DashboardDocument[] = [
  { id: 1, title: "Constituição e Regulamento Geral do GOMG", category: "Legislação", degree: "Todos os Graus", updatedAt: "15/01/2026", size: "4.2 MB", downloadUrl: "#" },
  { id: 2, title: "Ritual do Grau 1 - Aprendiz Maçom (REAA)", category: "Rituais", degree: "Grau 1", updatedAt: "10/02/2026", size: "2.8 MB", downloadUrl: "#" },
  { id: 3, title: "Ata da Grande Comissão Consagradora (04/12/2015)", category: "Acervo Histórico", degree: "Todos os Graus", updatedAt: "04/12/2015", size: "3.5 MB", downloadUrl: "#" },
  { id: 4, title: "Calendário de Sessões Rituais - Quarta-feira 20h", category: "Agenda", degree: "Todos os Graus", updatedAt: "10/01/2026", size: "1.1 MB", downloadUrl: "#" },
  { id: 5, title: "Manual de Instrução Rituária - Grau 1 (Aprendiz)", category: "Instrução Ritual", degree: "Grau 1", updatedAt: "01/02/2026", size: "5.2 MB", downloadUrl: "#" },
  { id: 6, title: "Instruções sobre a Geometria Sagrada - Grau 2", category: "Instrução Ritual", degree: "Grau 2", updatedAt: "15/02/2026", size: "3.8 MB", downloadUrl: "#" },
  { id: 7, title: "Vademecum & Legislação do GOMG (Edição 2026)", category: "Legislação", degree: "Grau 3", updatedAt: "20/01/2026", size: "8.9 MB", downloadUrl: "#" },
];

export const DASHBOARD_MEETINGS: DashboardMeeting[] = [
  { id: 1, date: "12/08/2026", time: "20:00", degree: "Aprendiz", title: "Sessão Ordinária • Grau 1", temple: "Templo da Loja • Guaranésia - MG", workOrder: "Trabalhos sobre a Matéria e a Pedra Bruta" },
  { id: 2, date: "19/08/2026", time: "20:00", degree: "Companheiro", title: "Sessão de Instrução • Grau 2", temple: "Templo da Loja • Guaranésia - MG", workOrder: "A Geometria Sagrada e As Três Luzes (Sabedoria, Força e Beleza)" },
  { id: 3, date: "26/08/2026", time: "20:00", degree: "Mestre", title: "Sessão Magna • Grau 3", temple: "Templo da Loja • Guaranésia - MG", workOrder: "Elevação e Aplicação da Máxima Ordo Ab Chao" },
];

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

export const DASHBOARD_PAST_MASTERS = [
  { period: "2015 - 2017", name: "Ir. Adenilson Aparecido David", title: "Fundador & Primeiro Venerável Mestre" },
  { period: "2017 - 2019", name: "Ir. Joaquim Lázaro Silveira Ribeiro", title: "Gestão do CESG & Casa de Maria" },
  { period: "2019 - 2021", name: "Ir. Edelto Marcos Pedreiro", title: "Gestão da Pandemia & Boteco do CESG Em Box" },
  { period: "2021 - 2023", name: "Ir. Luiz Magri", title: "Expansão da Infraestrutura" },
  { period: "2023 - 2025", name: "Ir. André Magri", title: "Preparação para a Década de Luz" },
];

export const DASHBOARD_PAPERS = [
  { id: 1, title: "A Simbologia da Pedra Bruta no Século XXI", author: "Ir. Gabriel de Moraes", degree: "Grau 1", date: "10/06/2026", likes: 24 },
  { id: 2, title: "As Três Luzes e a Geometria do Templo de Salomão", author: "Ir. Joaquim Ribeiro", degree: "Grau 2", date: "22/05/2026", likes: 31 },
  { id: 3, title: "Ordo Ab Chao: A Filosofia Maçônica Perante o Caos Profano", author: "Ir. Adenilson David", degree: "Grau 3", date: "14/04/2026", likes: 45 },
];

// ============================================================================
// GESTÃO DE EVENTOS BENEFICENTES (ADMINISTRAÇÃO, FINANCEIRO & LOGÍSTICA)
// ============================================================================
export interface EventManagementData {
  id: 'quermesse' | 'pizza_do_bem' | 'boteco_cesg';
  name: string;
  subtitle: string;
  status: 'Planejamento' | 'Vendas Abertas' | 'Concluído / Prestação de Contas';
  nextDate: string;
  coordinator: string;
  financials: {
    revenueExpected: number;
    revenueRealized: number;
    expensesExpected: number;
    expensesRealized: number;
    netProfit: number;
    targetFundraising: number;
  };
  metrics: {
    ticketsTotal: number;
    ticketsSold: number;
    volunteersAssigned: number;
    beneficiaryCause: string;
  };
  sections: Array<{
    name: string;
    responsible: string;
    teamCount: number;
    status: string;
    details: string;
  }>;
  recentTransactions: Array<{
    id: string;
    description: string;
    type: 'RECEITA' | 'DESPESA';
    amount: number;
    date: string;
    category: string;
  }>;
}

export const EVENTS_MANAGEMENT_DATA: Record<string, EventManagementData> = {
  quermesse: {
    id: 'quermesse',
    name: 'Grande Quermesse Comunitária',
    subtitle: 'Barracas Gastronômicas, Fogazza, Pastel, Chopp & Bingo Fraternal',
    status: 'Planejamento',
    nextDate: '15 e 16 de Novembro de 2026',
    coordinator: 'Ir. Edelto Marcos Pedreiro & Fraternidade Feminina',
    financials: {
      revenueExpected: 68000,
      revenueRealized: 34200,
      expensesExpected: 22000,
      expensesRealized: 11450,
      netProfit: 22750,
      targetFundraising: 45000,
    },
    metrics: {
      ticketsTotal: 1200,
      ticketsSold: 640,
      volunteersAssigned: 32,
      beneficiaryCause: 'Fábrica de Fraldas e Manutenção do CESG',
    },
    sections: [
      { name: 'Barraca do Chopp & Bebidas', responsible: 'Ir. Gabriel de Moraes', teamCount: 6, status: 'Barris Encomendados', details: '12 barris de 50L previstos com chopp artesanal regional' },
      { name: 'Cozinha (Pastéis & Fogazzas)', responsible: 'Fraternidade Feminina / Cunhada Maria', teamCount: 12, status: 'Insumos Cotados', details: 'Produção estimada de 1.800 pastéis e 800 fogazzas' },
      { name: 'Bingo & Cartelas Beneficentes', responsible: 'Ir. Luiz Magri', teamCount: 4, status: 'Prêmios Arrecadados', details: '5 rodadas especiais com prendas doadas pelo comércio local' },
      { name: 'Caixa Central & Fichas', responsible: 'Ir. Toca (Tesouraria)', teamCount: 5, status: 'Máquinas POS Reservadas', details: '4 caixas com suporte a PIX, débito e dinheiro' },
      { name: 'Montagem, Tendas & Elétrica', responsible: 'Ir. Joaquim Ribeiro', teamCount: 5, status: 'Planta Aprovada', details: 'Estrutura coberta no pátio com gerador de suporte' },
    ],
    recentTransactions: [
      { id: 'TR-101', description: 'Venda Antecipada de Blocos de Fichas (Lote 1)', type: 'RECEITA', amount: 14500, date: '08/08/2026', category: 'Ingressos/Fichas' },
      { id: 'TR-102', description: 'Sinal de Locação de Tendas e Gerador', type: 'DESPESA', amount: 3500, date: '02/08/2026', category: 'Infraestrutura' },
      { id: 'TR-103', description: 'Patrocínio Ouro - Comércio de Guaranésia', type: 'RECEITA', amount: 6000, date: '28/07/2026', category: 'Patrocínios' },
      { id: 'TR-104', description: 'Compra de Embalagens e Descartáveis Ecológicos', type: 'DESPESA', amount: 1850, date: '20/07/2026', category: 'Insumos' },
    ],
  },

  pizza_do_bem: {
    id: 'pizza_do_bem',
    name: 'Pizza do Bem (5ª Edição)',
    subtitle: 'Pizzas Artesanais Pré-Assadas • Drive-Thru & Entrega Beneficente',
    status: 'Vendas Abertas',
    nextDate: '24 de Outubro de 2026',
    coordinator: 'Ir. André Magri & Ir. Gabriel de Moraes',
    financials: {
      revenueExpected: 42000,
      revenueRealized: 28500,
      expensesExpected: 14000,
      expensesRealized: 9800,
      netProfit: 18700,
      targetFundraising: 28000,
    },
    metrics: {
      ticketsTotal: 800,
      ticketsSold: 570,
      volunteersAssigned: 24,
      beneficiaryCause: 'Aquisição de Matéria-Prima (Fraldas) & Enxovais Casa de Maria',
    },
    sections: [
      { name: 'Montagem & Fornada Matutina', responsible: 'Ir. Adenilson David', teamCount: 8, status: 'Escala Fechada', details: 'Montagem artesanal dos sabores Calabresa, Mussarela e Moda do Mestre' },
      { name: 'Logística de Drive-Thru & Entrega', responsible: 'Ir. Edelto Pedreiro', teamCount: 6, status: 'Circuito Pronto', details: 'Fila expressa no portão lateral com entrega no porta-malas' },
      { name: 'Controle de Vouchers e Vendas', responsible: 'Ir. Toca', teamCount: 4, status: '82% das cartelas distribuídas', details: 'Cada Irmão recebeu 20 cartelas para comercialização fraterna' },
      { name: 'Compras & Cotação de Insumos', responsible: 'Ir. Joaquim Ribeiro', teamCount: 4, status: 'Queijos e Massas Faturados', details: 'Parceria com laticínios locais com 35% de desconto de apoio' },
    ],
    recentTransactions: [
      { id: 'PZ-201', description: 'Repasse Venda de Cartelas (Irmãos)', type: 'RECEITA', amount: 18200, date: '12/08/2026', category: 'Vendas' },
      { id: 'PZ-202', description: 'Compra de 380kg de Queijo Mussarela Especial', type: 'DESPESA', amount: 6840, date: '06/08/2026', category: 'Insumos' },
      { id: 'PZ-203', description: 'Venda de Cartelas via QR Code / Site', type: 'RECEITA', amount: 5300, date: '04/08/2026', category: 'Vendas Online' },
      { id: 'PZ-204', description: 'Caixas de Pizza Personalizadas com Selo CESG', type: 'DESPESA', amount: 1620, date: '29/07/2026', category: 'Embalagens' },
    ],
  },

  boteco_cesg: {
    id: 'boteco_cesg',
    name: 'Boteco do CESG (Edição de Gala)',
    subtitle: 'Porções Típicas de Boteco, Música ao Vivo e Noite Fraternal',
    status: 'Planejamento',
    nextDate: '12 de Setembro de 2026',
    coordinator: 'Ir. Joaquim Lázaro Silveira Ribeiro',
    financials: {
      revenueExpected: 55000,
      revenueRealized: 41200,
      expensesExpected: 18000,
      expensesRealized: 13900,
      netProfit: 27300,
      targetFundraising: 35000,
    },
    metrics: {
      ticketsTotal: 90,
      ticketsSold: 72,
      volunteersAssigned: 28,
      beneficiaryCause: 'Projetos da Casa de Maria e NA/AA Guaranésia',
    },
    sections: [
      { name: 'Mesas & Convites VIP (4 a 6 pessoas)', responsible: 'Ir. Luiz Magri', teamCount: 4, status: '80% Reservadas', details: 'Mesas numeradas com tábua de frios e porções inclusas' },
      { name: 'Cozinha de Boteco (Torresmo, Mandioca, Filé)', responsible: 'Ir. Adenilson David', teamCount: 10, status: 'Cardápio Definido', details: '5 opções de petiscos gourmet preparados na hora' },
      { name: 'Atração Musical & Som Acústico', responsible: 'Ir. Gabriel de Moraes', teamCount: 3, status: 'Contrato Assinado', details: 'Show acústico de MPB e Clássicos do Rock Nacional' },
      { name: 'Bar de Coquetéis & Cervejas Especiais', responsible: 'Ir. André Magri', teamCount: 6, status: 'Bebidas Consignadas', details: 'Carta de drinks clássicos e cervejas artesanais' },
    ],
    recentTransactions: [
      { id: 'BT-301', description: 'Reserva de 45 Mesas Família (Lote 1)', type: 'RECEITA', amount: 27000, date: '10/08/2026', category: 'Mesas' },
      { id: 'BT-302', description: 'Cachê Artístico & Estrutura de Iluminação', type: 'DESPESA', amount: 3200, date: '05/08/2026', category: 'Atrações' },
      { id: 'BT-303', description: 'Reserva de 27 Mesas Adicionais (Lote 2)', type: 'RECEITA', amount: 14200, date: '01/08/2026', category: 'Mesas' },
      { id: 'BT-304', description: 'Compra de Carnes Nobres e Insumos da Cozinha', type: 'DESPESA', amount: 5800, date: '25/07/2026', category: 'Alimentos' },
    ],
  },
};

// ============================================================================
// GESTÃO DE AÇÕES SOCIAIS & FILANTROPIA DA LOJA (CESG & TRONCO)
// ============================================================================
export interface SocialActionData {
  id: 'fabrica_fraldas' | 'casa_de_maria' | 'cobertor_solidario' | 'narcoticos_aa' | 'escola_de_pais';
  name: string;
  tagline: string;
  coordinator: string;
  schedule: string;
  location: string;
  impactMetrics: {
    primaryNumber: string;
    primaryLabel: string;
    secondaryNumber: string;
    secondaryLabel: string;
    tertiaryNumber: string;
    tertiaryLabel: string;
  };
  overview: string;
  objectives: string[];
  resourcesInStock: Array<{
    item: string;
    quantity: string;
    status: 'Estoque Seguro' | 'Necessita Reposição' | 'Em Trânsito / Compra';
  }>;
  upcomingActivities: Array<{
    date: string;
    title: string;
    responsible: string;
    description: string;
  }>;
}

export const SOCIAL_ACTIONS_DATA: Record<string, SocialActionData> = {
  fabrica_fraldas: {
    id: 'fabrica_fraldas',
    name: 'Fábrica de Fraldas Geriátricas & Infantis',
    tagline: 'Produção própria e distribuição gratuita para asilos, acamados e famílias carentes',
    coordinator: 'Ir. Adenilson Aparecido David & Equipe Operativa CESG',
    schedule: 'Sábados quinzenais (08h às 12h)',
    location: 'Sede Operacional do CESG • Guaranésia - MG',
    impactMetrics: {
      primaryNumber: '48.500',
      primaryLabel: 'Fraldas Produzidas em 2026',
      secondaryNumber: '142',
      secondaryLabel: 'Idosos e Crianças Atendidos/Mês',
      tertiaryNumber: '3',
      tertiaryLabel: 'Asilos e Entidades Parceiras',
    },
    overview: 'A Fábrica de Fraldas do CESG é mantida com recursos da Loja PHC nº 297 e eventos beneficentes. Conta com maquinário semiautomático próprio e equipe de voluntários para montagem, esterilização e embalagem.',
    objectives: [
      'Atender 100% dos idosos do Asilo de Guaranésia sem qualquer custo para a instituição',
      'Fornecer fraldas para pessoas com deficiência e pacientes acamados cadastrados na assistência social',
      'Manter estoque regulador mínimo de 3.000 unidades para emergências de saúde pública',
    ],
    resourcesInStock: [
      { item: 'Bobinas de Celulose e Manta Absorvente', quantity: '480 kg', status: 'Estoque Seguro' },
      { item: 'TNT Hidrofílico e Fitas Adesivas Bilaterais', quantity: '18 rolos', status: 'Estoque Seguro' },
      { item: 'Elásticos de Barreira Antivazamento', quantity: '4 caixas', status: 'Necessita Reposição' },
      { item: 'Embalagens Plásticas Seladas com Logo CESG', quantity: '1.200 pacotes', status: 'Estoque Seguro' },
    ],
    upcomingActivities: [
      { date: '22/08/2026', title: 'Mutirão de Produção • 2.500 Unidades', responsible: 'Ir. Gabriel de Moraes', description: 'Montagem dos tamanhos G e GG para entrega mensal no Lar dos Idosos.' },
      { date: '05/09/2026', title: 'Manutenção Preventiva das Seladoras', responsible: 'Ir. Joaquim Ribeiro', description: 'Revisão técnica de esteiras e resistências térmicas das máquinas.' },
      { date: '19/09/2026', title: 'Entrega Oficial Mensal de Fraldas', responsible: 'Ir. Edelto Pedreiro', description: 'Distribuição direta às 45 famílias cadastradas na Casa de Maria.' },
    ],
  },

  casa_de_maria: {
    id: 'casa_de_maria',
    name: 'Casa de Maria • Apoio à Gestante e Famílias',
    tagline: 'Acolhimento humanizado, enxovais para recém-nascidos e cestas de nutrição básica',
    coordinator: 'Fraternidade Feminina & Ir. Joaquim Lázaro Ribeiro',
    schedule: 'Terças e Quintas-feiras (14h às 17h)',
    location: 'Centro de Acolhimento Fraterno • Guaranésia - MG',
    impactMetrics: {
      primaryNumber: '185',
      primaryLabel: 'Enxovais Entregues este ano',
      secondaryNumber: '78',
      secondaryLabel: 'Mães e Bebês em Acompanhamento',
      tertiaryNumber: '240',
      tertiaryLabel: 'Cestas de Nutrição Familiar Doadas',
    },
    overview: 'A Casa de Maria atua na proteção à primeira infância e no apoio materno, orientando futuras mães em situação de vulnerabilidade, fornecendo enxovais completos (roupinhas, berços desmontáveis, banheiras e produtos de higiene).',
    objectives: [
      'Garantir que nenhum recém-nascido em Guaranésia saia da maternidade sem enxoval digno',
      'Oferecer rodas de conversa sobre aleitamento materno, cuidados neonatais e cidadania',
      'Auxiliar as famílias com suporte nutricional durante os primeiros 6 meses de vida do bebê',
    ],
    resourcesInStock: [
      { item: 'Kits de Enxoval Completo (Bolsa + Roupas + Mantas)', quantity: '34 kits montados', status: 'Estoque Seguro' },
      { item: 'Banheiras e Itens de Higiene Neonatal', quantity: '22 unidades', status: 'Necessita Reposição' },
      { item: 'Leite Especial e Fórmulas Infantis', quantity: '60 latas', status: 'Em Trânsito / Compra' },
      { item: 'Cestas Básicas de Apoio Familiar', quantity: '45 cestas', status: 'Estoque Seguro' },
    ],
    upcomingActivities: [
      { date: '27/08/2026', title: 'Roda de Conversa: Cuidados no Pós-Parto', responsible: 'Dra. Maria (Pediatra Voluntária)', description: 'Orientação gratuita e entrega de 8 novos enxovais para gestantes do 8º mês.' },
      { date: '10/09/2026', title: 'Triagem de Doações e Costura de Mantas', responsible: 'Fraternidade Feminina', description: 'Confecção artesanal de roupinhas e mantas de algodão.' },
    ],
  },

  cobertor_solidario: {
    id: 'cobertor_solidario',
    name: 'Campanha do Cobertor Solidário & Inverno',
    tagline: 'Aquecendo vidas: doação de cobertores novos e agasalhos no inverno regional',
    coordinator: 'Ir. Edelto Marcos Pedreiro & Ir. Luiz Magri',
    schedule: 'Campanha Anual (Maio a Agosto)',
    location: 'Ponto de Coleta e Distribuição • Templo e CESG',
    impactMetrics: {
      primaryNumber: '1.250',
      primaryLabel: 'Cobertores Novos Distribuídos',
      secondaryNumber: '320',
      secondaryLabel: 'Famílias Aquecidas em 2026',
      tertiaryNumber: '100%',
      tertiaryLabel: 'Cobertura Rural e Urbana',
    },
    overview: 'A campanha anual Cobertor Solidário arrecada fundos e adquire cobertores térmicos novos direto de fábrica para distribuição antes das primeiras frentes frias em Guaranésia, bairros periféricos e zona rural.',
    objectives: [
      'Garantir proteção térmica para famílias em extrema vulnerabilidade e moradores de rua',
      'Alcançar os distritos rurais e assentamentos do entorno de Guaranésia',
      'Mobilizar a comunidade local no espírito da caridade ativa e fraterna',
    ],
    resourcesInStock: [
      { item: 'Cobertores Casal Térmicos (Novos Embalados)', quantity: '180 unidades', status: 'Estoque Seguro' },
      { item: 'Cobertores Solteiro / Infantil', quantity: '95 unidades', status: 'Estoque Seguro' },
      { item: 'Agasalhos e Jaquetas Triadas', quantity: '310 peças', status: 'Estoque Seguro' },
    ],
    upcomingActivities: [
      { date: '30/08/2026', title: 'Ronda Fraterna de Inverno (Entrega Noturna)', responsible: 'Comissão de Solidariedade', description: 'Distribuição direta de cobertores e sopa quente para pessoas em situação de rua.' },
      { date: '15/09/2026', title: 'Encerramento e Balanço Oficial da Campanha 2026', responsible: 'Ir. Edelto Pedreiro', description: 'Prestação de contas do Tronco de Beneficência ao quadro de Obreiros.' },
    ],
  },

  narcoticos_aa: {
    id: 'narcoticos_aa',
    name: 'Apoio a Narcóticos Anônimos (NA) & Alcoólicos Anônimos (AA)',
    tagline: 'Cessão de espaço digno, acolhimento sigiloso e suporte contínuo à recuperação',
    coordinator: 'Ir. Luiz Magri & Ir. Edilson',
    schedule: 'Segundas, Quartas e Sextas-feiras (19h30 às 21h30)',
    location: 'Salão Social Anexo • Guaranésia - MG',
    impactMetrics: {
      primaryNumber: '144',
      primaryLabel: 'Reuniões Gratuitas Realizadas/Ano',
      secondaryNumber: '35',
      secondaryLabel: 'Membros Ativos em Recuperação',
      tertiaryNumber: '100%',
      tertiaryLabel: 'Sigilo e Acolhimento Gratuito',
    },
    overview: 'A Loja Maçônica PHC nº 297 disponibiliza seu espaço anexo, com estrutura climatizada, café fraterno e suporte logístico para os grupos tradicionais de NA e AA de Guaranésia, fortalecendo a recuperação de vidas e famílias.',
    objectives: [
      'Manter o espaço físico 100% seguro, acolhedor, limpo e sigiloso para os participantes',
      'Fornecer materiais de apoio, literatura oficial de recuperação e café semanal',
      'Auxiliar no encaminhamento voluntário para comunidades terapêuticas parceiras quando necessário',
    ],
    resourcesInStock: [
      { item: 'Literatura e Guias Oficiais de Passos NA/AA', quantity: '45 exemplares', status: 'Estoque Seguro' },
      { item: 'Insumos de Café e Lanche Fraterno', quantity: 'Suprimento Mensal', status: 'Estoque Seguro' },
      { item: 'Manutenção e Conservação da Sala', quantity: '100% Operacional', status: 'Estoque Seguro' },
    ],
    upcomingActivities: [
      { date: '21/08/2026', title: 'Reunião Aberta de Conscientização da Família', responsible: 'Grupo NA Guaranésia', description: 'Encontro temático para familiares e apoiadores do programa de 12 passos.' },
      { date: '18/09/2026', title: 'Comemoração de Sobriedade (Entrega de Fichas)', responsible: 'Grupo AA Guaranésia', description: 'Celebração de 1, 5 e 10 anos de sobriedade de membros da comunidade.' },
    ],
  },

  escola_de_pais: {
    id: 'escola_de_pais',
    name: 'Escola de Pais de Guaranésia',
    tagline: 'Fortalecendo os laços familiares, valores éticos e o diálogo entre pais e filhos',
    coordinator: 'Ir. Edilson & Ir. Gabriel de Moraes',
    schedule: 'Último Sábado do Mês (15h às 18h)',
    location: 'Auditório Cultural do Templo • Guaranésia - MG',
    impactMetrics: {
      primaryNumber: '620',
      primaryLabel: 'Pais e Educadores Capacitados',
      secondaryNumber: '12',
      secondaryLabel: 'Ciclos de Palestras Realizados',
      tertiaryNumber: '4',
      tertiaryLabel: 'Escolas Públicas Parceiras',
    },
    overview: 'Projeto voltado para o fortalecimento da instituição familiar como pilar da sociedade. Oferece ciclos de formação com pedagogos, psicólogos e educadores voluntários, abordando temas como comunicação não-violenta, limites, uso saudável de telas e prevenção às drogas.',
    objectives: [
      'Promover a reflexão sobre o papel formador da família na moral e na ética dos jovens',
      'Aproximar a comunidade escolar da realidade dos lares em Guaranésia',
      'Disponibilizar cartilhas educativas gratuitas para os participantes',
    ],
    resourcesInStock: [
      { item: 'Cartilhas Educativas "Família: Berço de Valores"', quantity: '350 exemplares', status: 'Estoque Seguro' },
      { item: 'Equipamento Audiovisual para Palestras', quantity: 'Projetor + Som HD', status: 'Estoque Seguro' },
      { item: 'Certificados de Participação para Pais', quantity: '200 impressos', status: 'Estoque Seguro' },
    ],
    upcomingActivities: [
      { date: '29/08/2026', title: 'Módulo: "Diálogo e Limites na Era Digital"', responsible: 'Profa. Dra. Helena (Palestrante)', description: 'Oficina prática com dinâmicas familiares para pais de crianças de 6 a 14 anos.' },
      { date: '26/09/2026', title: 'Fórum Municipal: Família e Prevenção', responsible: 'Ir. Edilson', description: 'Encontro com diretores de escolas municipais e estaduais no auditório da Loja.' },
    ],
  },
};
