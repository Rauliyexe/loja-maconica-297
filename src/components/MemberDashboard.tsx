import React, { useState } from 'react';
import { LodgeEmblemLogo } from './LodgeEmblemLogo';
import { BrotherGoatChat } from './BrotherGoatChat';
import {
  DASHBOARD_NOTICES,
  DASHBOARD_DOCUMENTS,
  DASHBOARD_MEETINGS,
  DASHBOARD_MEMBERS,
  DASHBOARD_PAST_MASTERS,
  DASHBOARD_PAPERS,
  LOGGED_IN_BROTHER,
  EVENTS_MANAGEMENT_DATA,
  SOCIAL_ACTIONS_DATA,
  EventManagementData,
  SocialActionData,
} from '../data/mockData';
import {
  Home,
  User,
  Users,
  Calendar,
  FileText,
  LogOut,
  Bell,
  Download,
  Shield,
  Clock,
  MapPin,
  Search,
  Menu,
  X,
  Heart,
  Award,
  BookOpen,
  DollarSign,
  TrendingUp,
  Package,
  Sparkles,
  PartyPopper,
  HandHeart,
  CheckCircle2,
  AlertCircle,
  PlusCircle,
  BarChart3,
  CalendarCheck,
  Building2,
  Baby,
  SunMedium,
  HeartHandshake,
  GraduationCap,
} from 'lucide-react';

interface MemberDashboardProps {
  onLogout: () => void;
  onOpenAdminDashboard?: () => void;
}

export const MemberDashboard: React.FC<MemberDashboardProps> = ({
  onLogout,
  onOpenAdminDashboard,
}) => {
  const [activeTab, setActiveTab] = useState<
    'inicio' | 'eventos_gestao' | 'acoes_sociais' | 'membros' | 'pranchas' | 'frequencia' | 'boletins' | 'documentos' | 'perfil'
  >('inicio');

  // Sub-tabs for Event Management
  const [selectedEventId, setSelectedEventId] = useState<'consolidado' | 'quermesse' | 'pizza_do_bem' | 'boteco_cesg'>('consolidado');

  // Sub-tabs for Social Actions
  const [selectedSocialId, setSelectedSocialId] = useState<
    'consolidado' | 'fabrica_fraldas' | 'casa_de_maria' | 'cobertor_solidario' | 'narcoticos_aa' | 'escola_de_pais'
  >('consolidado');

  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  const triggerSuccessFeedback = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(null), 3500);
  };

  const sidebarLinks = [
    { id: 'inicio', label: 'Início & Painel Geral', icon: Home },
    { id: 'eventos_gestao', label: '🎪 Gestão de Eventos (Quermesse/Pizza/Boteco)', icon: PartyPopper, badge: 'Financeiro' },
    { id: 'acoes_sociais', label: '🤝 Obras Sociais & CESG (Fraldas/Maria/NA)', icon: HandHeart, badge: '5 Projetos' },
    { id: 'membros', label: 'Quadro de Membros & Past Veneráveis', icon: Users },
    { id: 'pranchas', label: 'Pranchas & Balaustres', icon: BookOpen },
    { id: 'frequencia', label: 'Frequência & Escala de Oficiais', icon: Calendar },
    { id: 'boletins', label: 'Decretos & Boletins GOMG', icon: Bell },
    { id: 'documentos', label: 'Biblioteca & Acervo Histórico', icon: FileText },
    { id: 'perfil', label: 'Meu Perfil Ritualístico', icon: User },
  ];

  // Consolidado de Eventos
  const allEventsList = Object.values(EVENTS_MANAGEMENT_DATA);
  const totalEventRevenue = allEventsList.reduce((acc, ev) => acc + ev.financials.revenueRealized, 0);
  const totalEventExpenses = allEventsList.reduce((acc, ev) => acc + ev.financials.expensesRealized, 0);
  const totalEventNetProfit = totalEventRevenue - totalEventExpenses;
  const totalEventVolunteers = allEventsList.reduce((acc, ev) => acc + ev.metrics.volunteersAssigned, 0);

  // Consolidado de Ações Sociais
  const allSocialList = Object.values(SOCIAL_ACTIONS_DATA);

  return (
    <div className="fixed inset-0 z-[500] w-full h-full bg-masonic-void text-masonic-ivory flex flex-col md:flex-row overflow-hidden font-sans select-none">
      
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP SIDEBAR NAVIGATION */}
      {/* ------------------------------------------------------------- */}
      <aside className="w-80 bg-masonic-dark border-r border-masonic-gold/20 flex flex-col justify-between p-4 shrink-0 hidden md:flex z-20 overflow-y-auto custom-scrollbar">
        <div>
          {/* Top Brand Seal */}
          <div className="flex items-center space-x-3 p-3 border-b border-masonic-gold/20 pb-4 mb-4">
            <LodgeEmblemLogo size={46} />
            <div>
              <span className="font-serif text-xs font-extrabold text-masonic-ivory block tracking-wider uppercase">
                PAZ, HARMONIA 297
              </span>
              <span className="font-mono text-[9px] text-masonic-crimson-light block uppercase font-bold">
                PORTAL PRIVADO DO MEMBRO
              </span>
            </div>
          </div>

          {/* LOGGED IN BROTHER AVATAR BADGE */}
          <div className="p-3 bg-masonic-slate/80 border border-masonic-gold/30 rounded-sm mb-4 flex items-center space-x-3">
            <div className="relative shrink-0">
              <img
                src={LOGGED_IN_BROTHER.avatar}
                alt={LOGGED_IN_BROTHER.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-masonic-gold shadow-gold-glow"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-masonic-dark rounded-full" title="Online" />
            </div>
            <div className="min-w-0">
              <span className="font-serif text-xs font-bold text-masonic-ivory block truncate">
                {LOGGED_IN_BROTHER.name}
              </span>
              <span className="font-mono text-[9.5px] text-masonic-gold block font-bold">
                {LOGGED_IN_BROTHER.role} • {LOGGED_IN_BROTHER.degree}
              </span>
              <span className="font-mono text-[8.5px] text-green-400 block">
                {LOGGED_IN_BROTHER.monthlyFeeStatus}
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id as any)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-sm font-serif text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-masonic-gold text-masonic-void font-bold shadow-gold-glow'
                      : 'text-masonic-ivory/80 hover:bg-masonic-slate hover:text-masonic-gold'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-masonic-void' : 'text-masonic-gold'}`} />
                    <span className="truncate">{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded-sm shrink-0 uppercase ${
                      isActive ? 'bg-masonic-void text-masonic-gold' : 'bg-masonic-gold/20 text-masonic-gold'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer & Administration Access */}
        <div className="pt-3 border-t border-masonic-gold/20 space-y-2">
          {onOpenAdminDashboard && (
            <button
              onClick={onOpenAdminDashboard}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 bg-masonic-crimson/20 border border-masonic-crimson/50 hover:bg-masonic-crimson/40 text-masonic-crimson-light rounded-sm font-serif text-[10px] tracking-wider uppercase font-bold transition-colors cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Painel da Diretoria (Admin)</span>
            </button>
          )}

          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center space-x-2 py-2 px-3 bg-masonic-slate hover:bg-masonic-gold/20 text-masonic-gold rounded-sm font-serif text-[11px] tracking-wider uppercase font-semibold transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Encerrar Sessão</span>
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* MAIN CONTENT AREA */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 flex flex-col h-full bg-masonic-void overflow-hidden">
        
        {/* Top Sticky Header */}
        <header className="h-16 border-b border-masonic-gold/20 bg-masonic-dark/95 backdrop-blur-md flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
          
          {/* Mobile Menu Trigger & Tab Title */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-masonic-gold border border-masonic-gold/30 rounded-sm"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h2 className="font-serif text-sm sm:text-base font-bold tracking-wider text-masonic-gold uppercase">
                {sidebarLinks.find((l) => l.id === activeTab)?.label.split('(')[0]}
              </h2>
              <span className="font-mono text-[9px] text-masonic-ivory/60 uppercase hidden sm:block">
                A.R.L.S. PAZ, HARMONIA & CONCÓRDIA Nº 297 • GOMG
              </span>
            </div>
          </div>

          {/* Quick Actions & Brother Goat Bot */}
          <div className="flex items-center space-x-3">
            {actionSuccessMsg && (
              <div className="px-3 py-1 bg-green-950/80 border border-green-500/50 text-green-300 font-mono text-[10px] rounded-sm flex items-center space-x-1.5 animate-fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span>{actionSuccessMsg}</span>
              </div>
            )}

            <button
              onClick={onLogout}
              className="md:hidden p-2 text-masonic-gold hover:text-masonic-crimson-light"
              title="Sair"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-masonic-dark border-b border-masonic-gold/30 p-4 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id as any);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-sm font-serif text-xs uppercase tracking-wider ${
                  activeTab === link.id ? 'bg-masonic-gold text-masonic-void font-bold' : 'text-masonic-ivory/80'
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Scrollable Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 custom-scrollbar">

          {/* ========================================================= */}
          {/* TAB: INÍCIO & VISÃO GERAL */}
          {/* ========================================================= */}
          {activeTab === 'inicio' && (
            <>
              {/* Top Banner Alert / Upcoming Session */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-masonic-slate via-masonic-dark to-masonic-slate border border-masonic-gold/40 rounded-sm shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-masonic-gold/20 border border-masonic-gold rounded-full text-masonic-gold shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 bg-masonic-crimson text-masonic-ivory font-mono text-[9px] font-bold uppercase rounded-sm">
                        PRÓXIMA SESSÃO RITUALÍSTICA
                      </span>
                      <span className="font-mono text-xs text-masonic-gold font-bold">19/08/2026 • 20h00</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-masonic-ivory mt-1">
                      Sessão de Instrução • Grau 2 (Companheiro Maçom)
                    </h3>
                    <p className="text-xs text-masonic-ivory/70 font-sans mt-0.5">
                      Trabalhos sobre a Geometria Sagrada e as Três Luzes. Traje a rigor e paramentos.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={() => {
                      setRsvpConfirmed(true);
                      triggerSuccessFeedback('Presença confirmada na sessão de 19/08!');
                    }}
                    className={`px-4 py-2.5 rounded-sm font-serif text-xs font-bold uppercase tracking-wider transition-all ${
                      rsvpConfirmed
                        ? 'bg-green-600/30 border border-green-500 text-green-300'
                        : 'bg-masonic-gold text-masonic-void hover:bg-masonic-gold-light shadow-gold-glow'
                    }`}
                  >
                    {rsvpConfirmed ? '✓ Presença Confirmada' : 'Confirmar Presença'}
                  </button>
                </div>
              </div>

              {/* Quick Navigation Cards: Eventos & Ações Sociais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Eventos Card */}
                <div
                  onClick={() => setActiveTab('eventos_gestao')}
                  className="p-6 bg-masonic-dark/90 border border-masonic-gold/30 hover:border-masonic-gold rounded-sm shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 bg-masonic-gold/15 rounded-sm text-masonic-gold">
                      <PartyPopper className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-masonic-gold uppercase font-bold group-hover:underline">
                      Abrir Módulo →
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-masonic-ivory uppercase group-hover:text-masonic-gold transition-colors">
                    Gestão de Eventos Beneficentes
                  </h4>
                  <p className="text-xs text-masonic-ivory/70 mt-1">
                    Administração, fluxo de caixa e escala das equipes: <strong>Quermesse</strong>, <strong>Pizza do Bem</strong> e <strong>Boteco do CESG</strong>.
                  </p>
                  <div className="mt-4 pt-3 border-t border-masonic-gold/15 flex items-center justify-between text-xs font-mono">
                    <span className="text-masonic-ivory/60">Arrecadação Líquida:</span>
                    <span className="text-green-400 font-bold">R$ {totalEventNetProfit.toLocaleString('pt-BR')},00</span>
                  </div>
                </div>

                {/* Ações Sociais Card */}
                <div
                  onClick={() => setActiveTab('acoes_sociais')}
                  className="p-6 bg-masonic-dark/90 border border-masonic-gold/30 hover:border-masonic-gold rounded-sm shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 bg-masonic-gold/15 rounded-sm text-masonic-gold">
                      <HandHeart className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-masonic-gold uppercase font-bold group-hover:underline">
                      Abrir Módulo →
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-masonic-ivory uppercase group-hover:text-masonic-gold transition-colors">
                    Ações Sociais & Filantropia (CESG)
                  </h4>
                  <p className="text-xs text-masonic-ivory/70 mt-1">
                    Painel das 5 obras ativas: <strong>Fábrica de Fraldas</strong>, <strong>Casa de Maria</strong>, <strong>Cobertor Solidário</strong>, <strong>NA/AA</strong> e <strong>Escola de Pais</strong>.
                  </p>
                  <div className="mt-4 pt-3 border-t border-masonic-gold/15 flex items-center justify-between text-xs font-mono">
                    <span className="text-masonic-ivory/60">Projetos em Atividade:</span>
                    <span className="text-masonic-gold font-bold">5 Frentes Permanentes</span>
                  </div>
                </div>

              </div>

              {/* Recent Notices */}
              <div className="masonic-frame p-6 bg-masonic-card border border-masonic-gold/25 rounded-sm shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-3">
                  <h3 className="font-serif text-base font-bold text-masonic-ivory uppercase flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-masonic-gold" />
                    <span>ÚLTIMOS COMUNICADOS E DECRETOS DO GOMG</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {DASHBOARD_NOTICES.map((notice) => (
                    <div key={notice.id} className="p-4 bg-masonic-dark border border-masonic-gold/15 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="px-2 py-0.5 bg-masonic-gold/20 border border-masonic-gold text-masonic-gold font-mono text-[9px] uppercase font-bold">
                            {notice.category}
                          </span>
                          <span className="font-mono text-[10px] text-masonic-ivory/60">{notice.date}</span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-masonic-ivory">
                          {notice.title}
                        </h4>
                        <p className="text-xs text-masonic-ivory/75 font-sans mt-1">
                          {notice.content}
                        </p>
                      </div>

                      <span className="font-mono text-[10px] text-masonic-gold/70 shrink-0">
                        {notice.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ========================================================= */}
          {/* TAB: GESTÃO DE EVENTOS (QUERMESSE, PIZZA DO BEM, BOTECO CESG) */}
          {/* ========================================================= */}
          {activeTab === 'eventos_gestao' && (
            <div className="space-y-6">
              
              {/* Module Header & Sub-Navigation Tabs */}
              <div className="p-6 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-masonic-gold/20 pb-4 mb-5">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase flex items-center space-x-2.5">
                      <PartyPopper className="w-5 h-5 text-masonic-gold" />
                      <span>ADMINISTRAÇÃO & FINANCEIRO DE EVENTOS BENEFICENTES</span>
                    </h3>
                    <p className="font-mono text-xs text-masonic-gold/80 mt-1">
                      Controle de receitas, despesas, escalas de trabalho e prestação de contas dos eventos da Loja e CESG
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => triggerSuccessFeedback('Relatório Financeiro baixado em PDF com sucesso!')}
                      className="px-3 py-1.5 bg-masonic-slate hover:bg-masonic-gold/20 border border-masonic-gold/40 text-masonic-gold rounded-sm font-mono text-xs uppercase flex items-center space-x-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Exportar Balanço PDF</span>
                    </button>
                  </div>
                </div>

                {/* Event Selector Tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedEventId('consolidado')}
                    className={`px-4 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedEventId === 'consolidado'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    📊 Visão Geral Consolidada
                  </button>

                  <button
                    onClick={() => setSelectedEventId('quermesse')}
                    className={`px-4 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedEventId === 'quermesse'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    🎪 Grande Quermesse
                  </button>

                  <button
                    onClick={() => setSelectedEventId('pizza_do_bem')}
                    className={`px-4 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedEventId === 'pizza_do_bem'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    🍕 Pizza do Bem (5ª Ed.)
                  </button>

                  <button
                    onClick={() => setSelectedEventId('boteco_cesg')}
                    className={`px-4 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedEventId === 'boteco_cesg'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    🍻 Boteco do CESG
                  </button>
                </div>
              </div>

              {/* ================= VIEW 1: CONSOLIDADO GERAL DE EVENTOS ================= */}
              {selectedEventId === 'consolidado' && (
                <div className="space-y-6">
                  {/* Financial KPI Summary Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                      <span className="font-mono text-[10px] text-masonic-ivory/60 uppercase block">Receita Bruta Total</span>
                      <span className="font-serif text-xl font-bold text-masonic-gold">
                        R$ {totalEventRevenue.toLocaleString('pt-BR')},00
                      </span>
                      <span className="text-[10px] text-masonic-gold/70 block mt-1 font-mono">Arrecadação acumulada</span>
                    </div>

                    <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                      <span className="font-mono text-[10px] text-masonic-ivory/60 uppercase block">Custos & Despesas</span>
                      <span className="font-serif text-xl font-bold text-red-400">
                        R$ {totalEventExpenses.toLocaleString('pt-BR')},00
                      </span>
                      <span className="text-[10px] text-red-300/70 block mt-1 font-mono">Insumos, infra e taxas</span>
                    </div>

                    <div className="p-4 bg-masonic-dark border border-masonic-gold/40 rounded-sm bg-gradient-to-br from-masonic-gold/10 to-transparent">
                      <span className="font-mono text-[10px] text-masonic-gold uppercase font-bold block">Lucro Líquido Beneficente</span>
                      <span className="font-serif text-xl font-bold text-green-400">
                        R$ {totalEventNetProfit.toLocaleString('pt-BR')},00
                      </span>
                      <span className="text-[10px] text-green-300/70 block mt-1 font-mono">100% destinado ao CESG</span>
                    </div>

                    <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                      <span className="font-mono text-[10px] text-masonic-ivory/60 uppercase block">Irmãos & Cunhadas Ativos</span>
                      <span className="font-serif text-xl font-bold text-masonic-ivory">
                        {totalEventVolunteers} Voluntários
                      </span>
                      <span className="text-[10px] text-masonic-ivory/70 block mt-1 font-mono">Escalas preenchidas</span>
                    </div>
                  </div>

                  {/* Comparative Cards for the 3 Events */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {allEventsList.map((ev) => (
                      <div
                        key={ev.id}
                        className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm shadow-md flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 bg-masonic-gold/20 text-masonic-gold font-mono text-[9px] font-bold uppercase rounded-sm">
                              {ev.status}
                            </span>
                            <span className="font-mono text-[10px] text-masonic-ivory/60">{ev.nextDate.split('•')[0]}</span>
                          </div>

                          <h4 className="font-serif text-base font-bold text-masonic-ivory">
                            {ev.name}
                          </h4>
                          <p className="text-xs text-masonic-ivory/70 mt-1 line-clamp-2">
                            {ev.subtitle}
                          </p>

                          <div className="mt-4 space-y-2 text-xs font-mono">
                            <div className="flex justify-between text-masonic-ivory/80">
                              <span>Meta Arrecadação:</span>
                              <span>R$ {ev.financials.targetFundraising.toLocaleString('pt-BR')},00</span>
                            </div>
                            <div className="flex justify-between font-bold text-green-400">
                              <span>Lucro Atual:</span>
                              <span>R$ {ev.financials.netProfit.toLocaleString('pt-BR')},00</span>
                            </div>
                            
                            {/* Progress bar */}
                            <div className="w-full h-2 bg-masonic-slate rounded-full overflow-hidden mt-1">
                              <div
                                className="h-full bg-gradient-to-r from-masonic-gold to-green-400 rounded-full"
                                style={{ width: `${Math.min(100, (ev.financials.netProfit / ev.financials.targetFundraising) * 100)}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedEventId(ev.id as any)}
                          className="mt-5 w-full py-2 bg-masonic-slate hover:bg-masonic-gold/20 border border-masonic-gold/40 text-masonic-gold font-serif text-xs uppercase font-bold rounded-sm transition-colors cursor-pointer"
                        >
                          Ver Detalhes, Escala & Caixa →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= VIEW 2: TELA DETALHADA DE CADA EVENTO ================= */}
              {selectedEventId !== 'consolidado' && (
                (() => {
                  const ev = EVENTS_MANAGEMENT_DATA[selectedEventId];
                  if (!ev) return null;

                  return (
                    <div className="space-y-6">
                      
                      {/* Event Banner */}
                      <div className="p-6 bg-gradient-to-r from-masonic-dark via-masonic-slate to-masonic-dark border border-masonic-gold/30 rounded-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-1.5">
                              <span className="px-2.5 py-0.5 bg-masonic-gold text-masonic-void font-mono text-[9.5px] uppercase font-bold rounded-sm">
                                {ev.status}
                              </span>
                              <span className="font-mono text-xs text-masonic-gold font-bold">Data: {ev.nextDate}</span>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-masonic-ivory">{ev.name}</h3>
                            <p className="text-xs text-masonic-ivory/80 mt-1">{ev.subtitle}</p>
                            <span className="font-mono text-[11px] text-masonic-gold block mt-2">
                              Coordenação: <strong>{ev.coordinator}</strong> • Destinação: <strong>{ev.metrics.beneficiaryCause}</strong>
                            </span>
                          </div>

                          <div className="flex items-center space-x-3 shrink-0">
                            <button
                              onClick={() => triggerSuccessFeedback(`Inscrição como voluntário no ${ev.name} registrada com sucesso!`)}
                              className="px-4 py-2.5 bg-masonic-gold hover:bg-masonic-gold-light text-masonic-void font-serif text-xs uppercase font-bold rounded-sm shadow-gold-glow transition-all cursor-pointer"
                            >
                              + Me Escalar no Evento
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Financial Detail Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                          <span className="font-mono text-[10px] text-masonic-ivory/60 uppercase block">Receita Atual</span>
                          <span className="font-serif text-xl font-bold text-masonic-gold">
                            R$ {ev.financials.revenueRealized.toLocaleString('pt-BR')},00
                          </span>
                          <span className="text-[10px] text-masonic-gold/70 block mt-1 font-mono">
                            Previsto: R$ {ev.financials.revenueExpected.toLocaleString('pt-BR')},00
                          </span>
                        </div>

                        <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                          <span className="font-mono text-[10px] text-masonic-ivory/60 uppercase block">Despesas Lançadas</span>
                          <span className="font-serif text-xl font-bold text-red-400">
                            R$ {ev.financials.expensesRealized.toLocaleString('pt-BR')},00
                          </span>
                          <span className="text-[10px] text-red-300/70 block mt-1 font-mono">
                            Orçamento: R$ {ev.financials.expensesExpected.toLocaleString('pt-BR')},00
                          </span>
                        </div>

                        <div className="p-4 bg-masonic-dark border border-green-500/30 rounded-sm bg-green-950/20">
                          <span className="font-mono text-[10px] text-green-400 uppercase font-bold block">Lucro Líquido Atual</span>
                          <span className="font-serif text-xl font-bold text-green-400">
                            R$ {ev.financials.netProfit.toLocaleString('pt-BR')},00
                          </span>
                          <span className="text-[10px] text-green-300/70 block mt-1 font-mono">
                            Meta: R$ {ev.financials.targetFundraising.toLocaleString('pt-BR')},00 ({Math.round((ev.financials.netProfit / ev.financials.targetFundraising) * 100)}%)
                          </span>
                        </div>
                      </div>

                      {/* Team & Shift Management Table */}
                      <div className="p-6 bg-masonic-card border border-masonic-gold/25 rounded-sm shadow-md space-y-4">
                        <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-3">
                          <h4 className="font-serif text-sm font-bold text-masonic-ivory uppercase flex items-center space-x-2">
                            <Users className="w-4 h-4 text-masonic-gold" />
                            <span>ESCALA DE SETORES & EQUIPES OPERATIVAS ({ev.metrics.volunteersAssigned} VOLUNTÁRIOS)</span>
                          </h4>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse text-xs font-mono">
                            <thead>
                              <tr className="border-b border-masonic-gold/30 text-masonic-gold uppercase">
                                <th className="p-2.5">SETOR / BARRACA</th>
                                <th className="p-2.5">RESPONSÁVEL</th>
                                <th className="p-2.5">EQUIPE</th>
                                <th className="p-2.5">STATUS</th>
                                <th className="p-2.5">DETALHES / LOGÍSTICA</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-masonic-gold/10">
                              {ev.sections.map((sec, idx) => (
                                <tr key={idx} className="hover:bg-masonic-slate/40 transition-colors">
                                  <td className="p-2.5 font-bold text-masonic-ivory">{sec.name}</td>
                                  <td className="p-2.5 text-masonic-gold">{sec.responsible}</td>
                                  <td className="p-2.5 text-masonic-ivory/80">{sec.teamCount} Irmãos/Cunhadas</td>
                                  <td className="p-2.5">
                                    <span className="px-2 py-0.5 bg-masonic-gold/20 border border-masonic-gold/50 text-masonic-gold rounded-sm text-[9.5px]">
                                      {sec.status}
                                    </span>
                                  </td>
                                  <td className="p-2.5 text-masonic-ivory/70 text-[11px]">{sec.details}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Recent Financial Transactions for this Event */}
                      <div className="p-6 bg-masonic-card border border-masonic-gold/25 rounded-sm shadow-md space-y-4">
                        <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-3">
                          <h4 className="font-serif text-sm font-bold text-masonic-ivory uppercase flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-masonic-gold" />
                            <span>EXTRATO DE LANÇAMENTOS DO EVENTO ({ev.name})</span>
                          </h4>
                          <span className="font-mono text-[10px] text-masonic-gold">Auditoria Tesouraria PHC nº 297</span>
                        </div>

                        <div className="divide-y divide-masonic-gold/10">
                          {ev.recentTransactions.map((tx) => (
                            <div key={tx.id} className="py-2.5 flex items-center justify-between text-xs font-mono">
                              <div className="flex items-center space-x-3">
                                <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold ${
                                  tx.type === 'RECEITA' ? 'bg-green-900/60 text-green-300 border border-green-500/40' : 'bg-red-900/60 text-red-300 border border-red-500/40'
                                }`}>
                                  {tx.type}
                                </span>
                                <div>
                                  <span className="text-masonic-ivory font-bold block">{tx.description}</span>
                                  <span className="text-masonic-ivory/50 text-[10px]">{tx.date} • Categoria: {tx.category}</span>
                                </div>
                              </div>

                              <span className={`font-bold ${tx.type === 'RECEITA' ? 'text-green-400' : 'text-red-400'}`}>
                                {tx.type === 'RECEITA' ? '+' : '-'} R$ {tx.amount.toLocaleString('pt-BR')},00
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  );
                })()
              )}

            </div>
          )}

          {/* ========================================================= */}
          {/* TAB: AÇÕES SOCIAIS & FILANTROPIA (CESG) */}
          {/* ========================================================= */}
          {activeTab === 'acoes_sociais' && (
            <div className="space-y-6">
              
              {/* Module Header & Sub-Navigation Tabs */}
              <div className="p-6 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-masonic-gold/20 pb-4 mb-5">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase flex items-center space-x-2.5">
                      <HandHeart className="w-5 h-5 text-masonic-gold" />
                      <span>CENTRO SOCIAL & OBRAS FILANTRÓPICAS DE GUARANÉSIA (CESG)</span>
                    </h3>
                    <p className="font-mono text-xs text-masonic-gold/80 mt-1">
                      Projetos permanentes de solidariedade mantidos pela A.R.L.S. Paz, Harmonia & Concórdia nº 297
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => triggerSuccessFeedback('Doação Fraternal ao Tronco de Beneficência registrada!')}
                      className="px-3.5 py-1.5 bg-masonic-gold hover:bg-masonic-gold-light text-masonic-void rounded-sm font-serif text-xs uppercase font-bold shadow-gold-glow transition-all"
                    >
                      + Doar ao Tronco Social
                    </button>
                  </div>
                </div>

                {/* Social Actions Tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedSocialId('consolidado')}
                    className={`px-3.5 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedSocialId === 'consolidado'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    ✨ Painel Geral de Impacto
                  </button>

                  <button
                    onClick={() => setSelectedSocialId('fabrica_fraldas')}
                    className={`px-3.5 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedSocialId === 'fabrica_fraldas'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    📦 Fábrica de Fraldas
                  </button>

                  <button
                    onClick={() => setSelectedSocialId('casa_de_maria')}
                    className={`px-3.5 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedSocialId === 'casa_de_maria'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    👶 Casa de Maria
                  </button>

                  <button
                    onClick={() => setSelectedSocialId('cobertor_solidario')}
                    className={`px-3.5 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedSocialId === 'cobertor_solidario'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    🧥 Cobertor Solidário
                  </button>

                  <button
                    onClick={() => setSelectedSocialId('narcoticos_aa')}
                    className={`px-3.5 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedSocialId === 'narcoticos_aa'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    🤝 Narcóticos Anônimos / AA
                  </button>

                  <button
                    onClick={() => setSelectedSocialId('escola_de_pais')}
                    className={`px-3.5 py-2 rounded-sm font-serif text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedSocialId === 'escola_de_pais'
                        ? 'bg-masonic-gold text-masonic-void shadow-gold-glow'
                        : 'bg-masonic-dark text-masonic-ivory/80 border border-masonic-gold/30 hover:border-masonic-gold'
                    }`}
                  >
                    🎓 Escola de Pais
                  </button>
                </div>
              </div>

              {/* ================= SOCIAL VIEW 1: PAINEL CONSOLIDADO ================= */}
              {selectedSocialId === 'consolidado' && (
                <div className="space-y-6">
                  
                  {/* Overall Impact Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                      <span className="font-mono text-[9px] text-masonic-ivory/60 uppercase block">Fraldas Geriátricas</span>
                      <span className="font-serif text-xl font-bold text-masonic-gold">48.500</span>
                      <span className="text-[9.5px] text-masonic-gold/70 block mt-1 font-mono">Unidades entregues</span>
                    </div>

                    <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                      <span className="font-mono text-[9px] text-masonic-ivory/60 uppercase block">Enxovais & Bebês</span>
                      <span className="font-serif text-xl font-bold text-masonic-ivory">185 Kits</span>
                      <span className="text-[9.5px] text-masonic-ivory/70 block mt-1 font-mono">Casa de Maria</span>
                    </div>

                    <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                      <span className="font-mono text-[9px] text-masonic-ivory/60 uppercase block">Cobertores Inverno</span>
                      <span className="font-serif text-xl font-bold text-masonic-ivory">1.250</span>
                      <span className="text-[9.5px] text-masonic-ivory/70 block mt-1 font-mono">Famílias aquecidas</span>
                    </div>

                    <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                      <span className="font-mono text-[9px] text-masonic-ivory/60 uppercase block">Reuniões NA / AA</span>
                      <span className="font-serif text-xl font-bold text-masonic-gold">144 / ano</span>
                      <span className="text-[9.5px] text-masonic-gold/70 block mt-1 font-mono">Espaço mantido</span>
                    </div>

                    <div className="p-4 bg-masonic-dark border border-masonic-gold/25 rounded-sm">
                      <span className="font-mono text-[9px] text-masonic-ivory/60 uppercase block">Escola de Pais</span>
                      <span className="font-serif text-xl font-bold text-green-400">620 Pais</span>
                      <span className="text-[9.5px] text-green-300/70 block mt-1 font-mono">Capacitados</span>
                    </div>
                  </div>

                  {/* 5 Project Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allSocialList.map((soc) => (
                      <div
                        key={soc.id}
                        className="p-5 bg-masonic-dark border border-masonic-gold/20 hover:border-masonic-gold/50 rounded-sm shadow-md flex flex-col justify-between transition-all"
                      >
                        <div>
                          <div className="flex items-center space-x-2 text-masonic-gold mb-2">
                            <Sparkles className="w-4 h-4" />
                            <span className="font-mono text-[10px] uppercase font-bold">{soc.schedule}</span>
                          </div>

                          <h4 className="font-serif text-base font-bold text-masonic-ivory">
                            {soc.name}
                          </h4>
                          <p className="text-xs text-masonic-ivory/75 mt-1 line-clamp-2">
                            {soc.tagline}
                          </p>

                          <div className="mt-4 p-3 bg-masonic-slate/60 border border-masonic-gold/15 rounded-sm space-y-1">
                            <span className="font-mono text-[10px] text-masonic-gold block font-bold">
                              Impacto Principal: {soc.impactMetrics.primaryNumber} {soc.impactMetrics.primaryLabel}
                            </span>
                            <span className="font-mono text-[9.5px] text-masonic-ivory/70 block">
                              Coordenação: {soc.coordinator.split('&')[0]}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedSocialId(soc.id as any)}
                          className="mt-5 w-full py-2 bg-masonic-slate hover:bg-masonic-gold/20 border border-masonic-gold/40 text-masonic-gold font-serif text-xs uppercase font-bold rounded-sm transition-colors cursor-pointer"
                        >
                          Ver Estoque, Metas & Plantões →
                        </button>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* ================= SOCIAL VIEW 2: TELA DETALHADA POR AÇÃO SOCIAL ================= */}
              {selectedSocialId !== 'consolidado' && (
                (() => {
                  const soc = SOCIAL_ACTIONS_DATA[selectedSocialId];
                  if (!soc) return null;

                  return (
                    <div className="space-y-6">
                      
                      {/* Social Project Hero Banner */}
                      <div className="p-6 bg-gradient-to-r from-masonic-dark via-masonic-slate to-masonic-dark border border-masonic-gold/30 rounded-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <span className="font-mono text-[10px] text-masonic-gold uppercase font-bold block mb-1">
                              {soc.schedule} • {soc.location}
                            </span>
                            <h3 className="font-serif text-xl font-bold text-masonic-ivory">{soc.name}</h3>
                            <p className="text-xs text-masonic-ivory/80 mt-1">{soc.tagline}</p>
                            <span className="font-mono text-[11px] text-masonic-gold block mt-2">
                              Coordenação Responsável: <strong>{soc.coordinator}</strong>
                            </span>
                          </div>

                          <div className="flex items-center space-x-3 shrink-0">
                            <button
                              onClick={() => triggerSuccessFeedback(`Plantão de voluntariado no projeto ${soc.name} agendado!`)}
                              className="px-4 py-2.5 bg-masonic-gold hover:bg-masonic-gold-light text-masonic-void font-serif text-xs uppercase font-bold rounded-sm shadow-gold-glow transition-all cursor-pointer"
                            >
                              + Me Escalar no Plantão
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 3 Key Impact Metric Boxes */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-masonic-dark border border-masonic-gold/30 rounded-sm text-center">
                          <span className="font-serif text-2xl font-bold text-masonic-gold block">{soc.impactMetrics.primaryNumber}</span>
                          <span className="font-mono text-[10px] text-masonic-ivory/70 uppercase block mt-1">{soc.impactMetrics.primaryLabel}</span>
                        </div>

                        <div className="p-4 bg-masonic-dark border border-masonic-gold/30 rounded-sm text-center">
                          <span className="font-serif text-2xl font-bold text-masonic-ivory block">{soc.impactMetrics.secondaryNumber}</span>
                          <span className="font-mono text-[10px] text-masonic-ivory/70 uppercase block mt-1">{soc.impactMetrics.secondaryLabel}</span>
                        </div>

                        <div className="p-4 bg-masonic-dark border border-green-500/30 rounded-sm bg-green-950/20 text-center">
                          <span className="font-serif text-2xl font-bold text-green-400 block">{soc.impactMetrics.tertiaryNumber}</span>
                          <span className="font-mono text-[10px] text-green-300/70 uppercase block mt-1">{soc.impactMetrics.tertiaryLabel}</span>
                        </div>
                      </div>

                      {/* Overview & Core Objectives */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        
                        <div className="p-6 bg-masonic-card border border-masonic-gold/25 rounded-sm space-y-3">
                          <h4 className="font-serif text-sm font-bold text-masonic-ivory uppercase flex items-center space-x-2 border-b border-masonic-gold/20 pb-2">
                            <BookOpen className="w-4 h-4 text-masonic-gold" />
                            <span>SOBRE O PROJETO & HISTÓRICO</span>
                          </h4>
                          <p className="text-xs text-masonic-ivory/80 leading-relaxed">
                            {soc.overview}
                          </p>
                        </div>

                        <div className="p-6 bg-masonic-card border border-masonic-gold/25 rounded-sm space-y-3">
                          <h4 className="font-serif text-sm font-bold text-masonic-ivory uppercase flex items-center space-x-2 border-b border-masonic-gold/20 pb-2">
                            <CheckCircle2 className="w-4 h-4 text-masonic-gold" />
                            <span>OBJETIVOS & DIRETRIZES DO CESG</span>
                          </h4>
                          <ul className="space-y-2 text-xs text-masonic-ivory/80 font-sans">
                            {soc.objectives.map((obj, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <span className="text-masonic-gold font-bold">•</span>
                                <span>{obj}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Resources & Raw Materials in Stock */}
                      <div className="p-6 bg-masonic-card border border-masonic-gold/25 rounded-sm shadow-md space-y-4">
                        <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-3">
                          <h4 className="font-serif text-sm font-bold text-masonic-ivory uppercase flex items-center space-x-2">
                            <Package className="w-4 h-4 text-masonic-gold" />
                            <span>ESTOQUE DE MATÉRIA-PRIMA & INSUMOS ({soc.name})</span>
                          </h4>
                          <span className="font-mono text-[10px] text-masonic-gold">Atualizado semanalmente pelo CESG</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {soc.resourcesInStock.map((res, idx) => (
                            <div key={idx} className="p-3.5 bg-masonic-dark border border-masonic-gold/20 rounded-sm">
                              <span className="text-xs font-bold text-masonic-ivory block truncate">{res.item}</span>
                              <span className="font-mono text-sm font-bold text-masonic-gold block mt-1">{res.quantity}</span>
                              <span className={`inline-block mt-2 px-2 py-0.5 rounded-sm font-mono text-[9px] uppercase font-bold ${
                                res.status === 'Estoque Seguro'
                                  ? 'bg-green-950/80 text-green-300 border border-green-500/40'
                                  : res.status === 'Necessita Reposição'
                                  ? 'bg-red-950/80 text-red-300 border border-red-500/40'
                                  : 'bg-yellow-950/80 text-yellow-300 border border-yellow-500/40'
                              }`}>
                                {res.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Upcoming Activities Schedule */}
                      <div className="p-6 bg-masonic-card border border-masonic-gold/25 rounded-sm shadow-md space-y-4">
                        <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-3">
                          <h4 className="font-serif text-sm font-bold text-masonic-ivory uppercase flex items-center space-x-2">
                            <CalendarCheck className="w-4 h-4 text-masonic-gold" />
                            <span>PRÓXIMAS AÇÕES & MUTIRÕES PROGRAMADOS</span>
                          </h4>
                        </div>

                        <div className="space-y-3">
                          {soc.upcomingActivities.map((act, idx) => (
                            <div key={idx} className="p-4 bg-masonic-dark border border-masonic-gold/15 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div>
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="px-2 py-0.5 bg-masonic-gold/20 border border-masonic-gold text-masonic-gold font-mono text-[9.5px] font-bold uppercase rounded-sm">
                                    {act.date}
                                  </span>
                                  <span className="font-mono text-[10px] text-masonic-gold/80">Responsável: {act.responsible}</span>
                                </div>
                                <h5 className="font-serif text-sm font-bold text-masonic-ivory">{act.title}</h5>
                                <p className="text-xs text-masonic-ivory/70 mt-0.5">{act.description}</p>
                              </div>

                              <button
                                onClick={() => triggerSuccessFeedback(`Presença confirmada no mutirão de ${act.date}!`)}
                                className="px-3 py-1.5 bg-masonic-slate hover:bg-masonic-gold/20 border border-masonic-gold/40 text-masonic-gold font-mono text-xs uppercase rounded-sm shrink-0 transition-colors cursor-pointer"
                              >
                                Confirmar Apoio
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  );
                })()
              )}

            </div>
          )}

          {/* ========================================================= */}
          {/* TAB: QUADRO DE MEMBROS & PAST VENERÁVEIS */}
          {/* ========================================================= */}
          {activeTab === 'membros' && (
            <div className="space-y-8">
              
              {/* Quadro de Obreiros com Fotos */}
              <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
                <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                      QUADRO FRATERNAL DE OBREIROS
                    </h3>
                    <span className="font-mono text-xs text-masonic-gold">A.R.L.S. PAZ, HARMONIA & CONCÓRDIA Nº 297</span>
                  </div>
                  <span className="px-3 py-1 bg-masonic-gold/20 border border-masonic-gold text-masonic-gold font-mono text-xs font-bold rounded-sm">
                    {DASHBOARD_MEMBERS.length} MEMBROS ATIVOS
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-masonic-gold/30 text-masonic-gold uppercase">
                        <th className="p-3">IRMÃO</th>
                        <th className="p-3">CARGO NA LOJA</th>
                        <th className="p-3">CIM</th>
                        <th className="p-3">GRAU</th>
                        <th className="p-3">PROFISSÃO</th>
                        <th className="p-3">CONTATO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-masonic-gold/10">
                      {DASHBOARD_MEMBERS.map((m) => (
                        <tr key={m.id} className="hover:bg-masonic-slate/40 transition-colors">
                          <td className="p-3 flex items-center space-x-3">
                            <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover border border-masonic-gold" />
                            <span className="font-serif font-bold text-masonic-ivory">{m.name}</span>
                          </td>
                          <td className="p-3 text-masonic-gold font-bold">{m.role}</td>
                          <td className="p-3 text-masonic-ivory/70">{m.cim}</td>
                          <td className="p-3 text-masonic-ivory/90">{m.degree}</td>
                          <td className="p-3 text-masonic-ivory/70">{m.profession}</td>
                          <td className="p-3 text-masonic-gold/80">{m.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Galeria de Past Veneráveis */}
              <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-4">
                <h3 className="font-serif text-lg font-bold text-masonic-ivory uppercase border-b border-masonic-gold/20 pb-3 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-masonic-gold" />
                  <span>GALERIA DE PAST VENERÁVEIS MESTRES</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {DASHBOARD_PAST_MASTERS.map((pm, idx) => (
                    <div key={idx} className="p-4 bg-masonic-dark border border-masonic-gold/20 rounded-sm">
                      <span className="font-mono text-xs text-masonic-gold font-bold block">{pm.period}</span>
                      <h4 className="font-serif text-sm font-bold text-masonic-ivory mt-1">{pm.name}</h4>
                      <p className="text-xs text-masonic-ivory/60 mt-0.5">{pm.title}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* TAB: PRANCHAS & BALAUSTRES */}
          {/* ========================================================= */}
          {activeTab === 'pranchas' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                    PRANCHAS DE ARQUITETURA & TRABALHOS FILOSÓFICOS
                  </h3>
                  <span className="font-mono text-xs text-masonic-gold">Repositório de Estudos Maçônicos</span>
                </div>
                <button
                  onClick={() => triggerSuccessFeedback('Formulário de submissão de nova prancha aberto!')}
                  className="px-4 py-2 bg-masonic-gold text-masonic-void font-serif text-xs uppercase font-bold rounded-sm shadow-gold-glow"
                >
                  + Enviar Prancha
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {DASHBOARD_PAPERS.map((p) => (
                  <div key={p.id} className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-masonic-gold font-mono text-[10px] mb-2">
                        <span>{p.degree}</span>
                        <span>{p.date}</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-masonic-ivory leading-snug">{p.title}</h4>
                      <span className="font-mono text-xs text-masonic-gold/80 block mt-2">Autor: {p.author}</span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-masonic-gold/15 flex items-center justify-between text-xs font-mono">
                      <span className="text-masonic-ivory/60">★ {p.likes} Reconhecimentos</span>
                      <button
                        onClick={() => triggerSuccessFeedback(`Download do texto "${p.title}" iniciado!`)}
                        className="text-masonic-gold hover:underline flex items-center space-x-1"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Ler Prancha</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB: FREQUÊNCIA & ESCALA DE OFICIAIS */}
          {/* ========================================================= */}
          {activeTab === 'frequencia' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <div className="border-b border-masonic-gold/20 pb-4">
                <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                  CALENDÁRIO & ESCALA DE OFICIAIS 2026
                </h3>
                <span className="font-mono text-xs text-masonic-gold">Sessões todas as Quartas-feiras às 20h00</span>
              </div>

              <div className="space-y-4">
                {DASHBOARD_MEETINGS.map((m) => (
                  <div key={m.id} className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2 text-masonic-gold font-mono text-xs mb-1">
                        <span className="font-bold">{m.date} às {m.time}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 bg-masonic-gold/10 border border-masonic-gold/30 rounded-sm">{m.degree}</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-masonic-ivory">{m.title}</h4>
                      <p className="text-xs text-masonic-ivory/70 mt-1">{m.workOrder}</p>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <button
                        onClick={() => triggerSuccessFeedback(`Presença confirmada para a sessão de ${m.date}!`)}
                        className="px-3 py-1.5 bg-masonic-gold/20 border border-masonic-gold text-masonic-gold font-serif text-xs uppercase font-bold rounded-sm hover:bg-masonic-gold hover:text-masonic-void transition-colors"
                      >
                        Confirmar Presença
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB: BOLETINS & DECRETOS */}
          {/* ========================================================= */}
          {activeTab === 'boletins' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <div className="border-b border-masonic-gold/20 pb-4">
                <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                  BOLETINS OFICIAIS & DECRETOS DO GOMG
                </h3>
                <span className="font-mono text-xs text-masonic-gold">Legislação e Comunicação Obediencial</span>
              </div>

              <div className="space-y-3">
                {DASHBOARD_NOTICES.map((n) => (
                  <div key={n.id} className="p-4 bg-masonic-dark border border-masonic-gold/15 rounded-sm">
                    <div className="flex items-center justify-between text-xs font-mono text-masonic-gold mb-1">
                      <span>{n.category} • {n.date}</span>
                      <span>{n.author}</span>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-masonic-ivory">{n.title}</h4>
                    <p className="text-xs text-masonic-ivory/70 mt-1">{n.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB: BIBLIOTECA & DOCUMENTOS */}
          {/* ========================================================= */}
          {activeTab === 'documentos' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <div className="border-b border-masonic-gold/20 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                    BIBLIOTECA & ACERVO HISTÓRICO
                  </h3>
                  <span className="font-mono text-xs text-masonic-gold">Rituais, Regulamentos e Atas Históricas</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DASHBOARD_DOCUMENTS.map((doc) => (
                  <div key={doc.id} className="p-4 bg-masonic-dark border border-masonic-gold/20 rounded-sm flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[9px] text-masonic-gold uppercase block">{doc.category} • {doc.degree}</span>
                      <h4 className="font-serif text-sm font-bold text-masonic-ivory mt-0.5">{doc.title}</h4>
                      <span className="font-mono text-[10px] text-masonic-ivory/50 block mt-1">{doc.size} • Atualizado em {doc.updatedAt}</span>
                    </div>
                    <button
                      onClick={() => triggerSuccessFeedback(`Download do documento "${doc.title}" iniciado!`)}
                      className="p-2.5 text-masonic-gold border border-masonic-gold/30 hover:bg-masonic-gold hover:text-masonic-void rounded-sm transition-colors"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB: MEU PERFIL */}
          {/* ========================================================= */}
          {activeTab === 'perfil' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <div className="border-b border-masonic-gold/20 pb-4">
                <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                  MEU PERFIL RITUALÍSTICO
                </h3>
                <span className="font-mono text-xs text-masonic-gold">Dados Cadastrais e Situação Perante a Oficina</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="flex flex-col items-center text-center p-6 bg-masonic-dark border border-masonic-gold/20 rounded-sm">
                  <img
                    src={LOGGED_IN_BROTHER.avatar}
                    alt={LOGGED_IN_BROTHER.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-masonic-gold shadow-gold-glow mb-4"
                  />
                  <h4 className="font-serif text-base font-bold text-masonic-ivory">{LOGGED_IN_BROTHER.name}</h4>
                  <span className="font-mono text-xs text-masonic-gold font-bold mt-1">{LOGGED_IN_BROTHER.role}</span>
                  <span className="font-mono text-[10px] text-masonic-ivory/60 mt-0.5">CIM: {LOGGED_IN_BROTHER.cim}</span>
                  <span className="mt-3 px-3 py-1 bg-green-950/80 border border-green-500/50 text-green-300 font-mono text-xs font-bold rounded-sm">
                    {LOGGED_IN_BROTHER.monthlyFeeStatus}
                  </span>
                </div>

                <div className="md:col-span-2 space-y-3 text-xs font-mono">
                  <div className="p-3 bg-masonic-dark border border-masonic-gold/15 rounded-sm flex justify-between">
                    <span className="text-masonic-ivory/60">Grau Maçônico:</span>
                    <span className="text-masonic-ivory font-bold">{LOGGED_IN_BROTHER.degree} (Mestre Maçom)</span>
                  </div>
                  <div className="p-3 bg-masonic-dark border border-masonic-gold/15 rounded-sm flex justify-between">
                    <span className="text-masonic-ivory/60">Data de Iniciação:</span>
                    <span className="text-masonic-ivory font-bold">{LOGGED_IN_BROTHER.initiationDate}</span>
                  </div>
                  <div className="p-3 bg-masonic-dark border border-masonic-gold/15 rounded-sm flex justify-between">
                    <span className="text-masonic-ivory/60">Oriente de Origem:</span>
                    <span className="text-masonic-ivory font-bold">{LOGGED_IN_BROTHER.oriente}</span>
                  </div>
                  <div className="p-3 bg-masonic-dark border border-masonic-gold/15 rounded-sm flex justify-between">
                    <span className="text-masonic-ivory/60">Loja Mãe:</span>
                    <span className="text-masonic-ivory font-bold">{LOGGED_IN_BROTHER.motherLodge}</span>
                  </div>
                  <div className="p-3 bg-masonic-dark border border-masonic-gold/15 rounded-sm flex justify-between">
                    <span className="text-masonic-ivory/60">Participação em Ações do CESG:</span>
                    <span className="text-masonic-gold font-bold">Voluntário Ativo na Fábrica de Fraldas e Pizza do Bem</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Floating Brother Goat AI Assistant */}
      <BrotherGoatChat />
    </div>
  );
};
