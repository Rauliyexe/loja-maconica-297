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
  ThumbsUp,
  UserCheck,
  CheckCircle2,
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
    'inicio' | 'perfil' | 'membros' | 'pranchas' | 'social' | 'frequencia' | 'boletins' | 'documentos'
  >('inicio');

  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);

  const sidebarLinks = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'membros', label: 'Quadro de Membros & Past Veneráveis', icon: Users },
    { id: 'pranchas', label: 'Pranchas & Balaustres', icon: BookOpen },
    { id: 'social', label: 'Tronco & Obras Sociais (CESG)', icon: Heart },
    { id: 'frequencia', label: 'Frequência & Escala de Oficiais', icon: Calendar },
    { id: 'boletins', label: 'Decretos & Boletins GOMG', icon: Bell },
    { id: 'documentos', label: 'Biblioteca & Acervo Histórico', icon: FileText },
    { id: 'perfil', label: 'Meu Perfil Ritualístico', icon: User },
  ];

  return (
    <div className="fixed inset-0 z-[500] w-full h-full bg-masonic-void text-masonic-ivory flex flex-col md:flex-row overflow-hidden font-sans select-none">
      
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP SIDEBAR NAVIGATION WITH BROTHER'S AVATAR PHOTO */}
      {/* ------------------------------------------------------------- */}
      <aside className="w-72 bg-masonic-dark border-r border-masonic-gold/20 flex flex-col justify-between p-4 shrink-0 hidden md:flex z-20">
        <div>
          {/* Top Brand Seal */}
          <div className="flex items-center space-x-3 p-3 border-b border-masonic-gold/20 pb-4 mb-4">
            <LodgeEmblemLogo size={48} />
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
          <div className="p-3 bg-masonic-slate/80 border border-masonic-gold/30 rounded-sm mb-5 flex items-center space-x-3">
            <div className="relative shrink-0">
              <img
                src={LOGGED_IN_BROTHER.avatar}
                alt={LOGGED_IN_BROTHER.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-masonic-gold shadow-gold-glow"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-masonic-dark rounded-full" title="Online" />
            </div>
            <div className="min-w-0">
              <span className="font-serif text-xs font-bold text-masonic-ivory block truncate">
                {LOGGED_IN_BROTHER.name}
              </span>
              <span className="font-mono text-[10px] text-masonic-gold block font-bold">
                {LOGGED_IN_BROTHER.role} • {LOGGED_IN_BROTHER.degree}
              </span>
              <span className="font-mono text-[9px] text-green-400 block">
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
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-sm font-serif text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-masonic-gold text-masonic-void font-bold shadow-gold-glow'
                      : 'text-masonic-ivory/80 hover:bg-masonic-slate hover:text-masonic-gold'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{link.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout Action Button & Admin Dashboard Switch */}
        <div className="pt-4 border-t border-masonic-gold/20 space-y-2">
          {onOpenAdminDashboard && (
            <button
              onClick={onOpenAdminDashboard}
              className="w-full flex items-center justify-center space-x-2 px-3.5 py-2.5 bg-masonic-gold/15 border border-masonic-gold/60 text-masonic-gold hover:bg-masonic-gold hover:text-masonic-void rounded-sm font-serif text-xs font-bold uppercase transition-all cursor-pointer shadow-gold-glow"
            >
              <Shield className="w-4 h-4" />
              <span>PAINEL DA DIRETORIA (ADMIN)</span>
            </button>
          )}

          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-sm font-mono text-xs text-red-400 hover:bg-red-950/40 hover:text-red-300 transition-colors uppercase cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair do Painel</span>
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE HEADER BAR */}
      {/* ------------------------------------------------------------- */}
      <div className="md:hidden bg-masonic-dark border-b border-masonic-gold/20 p-4 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center space-x-3">
          <img
            src={LOGGED_IN_BROTHER.avatar}
            alt={LOGGED_IN_BROTHER.name}
            className="w-9 h-9 rounded-full object-cover border border-masonic-gold"
          />
          <div>
            <span className="font-serif text-xs font-bold text-masonic-ivory block uppercase">{LOGGED_IN_BROTHER.name}</span>
            <span className="font-mono text-[9px] text-masonic-gold uppercase">{LOGGED_IN_BROTHER.role}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-masonic-gold border border-masonic-gold/30 rounded-sm"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <button
            onClick={onLogout}
            className="p-2 text-red-400 border border-red-500/30 rounded-sm"
            title="Sair"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-masonic-slate border-b border-masonic-gold/30 p-4 space-y-2 z-20">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id as any);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-sm font-serif text-xs uppercase tracking-wider ${
                  isActive
                    ? 'bg-masonic-gold text-masonic-void font-bold'
                    : 'text-masonic-ivory/80 hover:bg-masonic-dark'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MAIN DASHBOARD CONTENT AREA */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-masonic-void relative">
        
        {/* SACRED TEMPLE BACKGROUND IMAGE EXCLUSIVELY INSIDE MEMBER MAIN DASHBOARD */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/member-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-masonic-void/90 via-masonic-void/80 to-masonic-void/95 pointer-events-none z-0" />
        
        {/* Top Header Bar */}
        <header className="bg-masonic-dark/95 backdrop-blur-md border-b border-masonic-gold/20 px-6 py-3 flex items-center justify-between sticky top-0 z-20 shrink-0">
          <div className="flex items-center space-x-3 min-w-0">
            <img
              src={LOGGED_IN_BROTHER.avatar}
              alt={LOGGED_IN_BROTHER.name}
              className="w-9 h-9 rounded-full object-cover border-2 border-masonic-gold shadow-gold-glow shrink-0"
            />
            <div className="min-w-0">
              <span className="font-mono text-[9px] text-masonic-gold uppercase tracking-widest block font-bold truncate">
                SAUDAÇÃO RITUALÍSTICA • GOMG
              </span>
              <h1 className="font-serif text-sm sm:text-base font-bold text-masonic-ivory truncate flex items-center space-x-2">
                <span className="truncate">Boa noite, {LOGGED_IN_BROTHER.name}</span>
                <span className="px-2 py-0.5 bg-masonic-gold/20 border border-masonic-gold text-masonic-gold font-mono text-[9px] rounded-sm font-normal shrink-0 hidden lg:inline-block">
                  GRAU 3 • MESTRE MAÇOM
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            {/* Search Input */}
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-masonic-gold/60 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Buscar membros, pranchas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 bg-masonic-slate border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:outline-none w-56 xl:w-64"
              />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-4 sm:p-8 space-y-8 max-w-6xl w-full mx-auto flex-1 z-10 relative">
          
          {/* ========================================================= */}
          {/* TAB 1: INÍCIO (VISÃO GERAL & PAINEL DE CONTROLE) */}
          {/* ========================================================= */}
          {activeTab === 'inicio' && (
            <>
              {/* Welcome Banner */}
              <div className="masonic-frame p-6 sm:p-8 bg-gradient-to-r from-masonic-slate via-masonic-card to-masonic-dark border border-masonic-gold/40 rounded-sm shadow-card-lux relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="relative z-10 max-w-2xl">
                  <span className="font-mono text-xs text-masonic-gold tracking-widest uppercase block mb-1 font-bold">
                    ORIENTE DE GUARANÉSIA - MG • TRABALHOS 2026
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-masonic-ivory uppercase mb-3">
                    BEM-VINDO, {LOGGED_IN_BROTHER.name.toUpperCase()}
                  </h2>
                  <p className="text-xs sm:text-sm text-masonic-ivory/80 leading-relaxed font-serif">
                    Sessões convocadas todas as quartas-feiras às 20h. Acesse os balaustres aprovados, acompanhe o Tronco de Beneficência e consulte o acervo histórico da Loja.
                  </p>
                </div>

                <div className="relative z-10 shrink-0 text-center">
                  <img
                    src={LOGGED_IN_BROTHER.avatar}
                    alt={LOGGED_IN_BROTHER.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-masonic-gold shadow-[0_0_30px_rgba(197,160,89,0.5)] mx-auto mb-2"
                  />
                  <span className="px-3 py-1 bg-green-950/80 border border-green-500 text-green-400 font-mono text-[10px] font-bold rounded-sm block">
                    {LOGGED_IN_BROTHER.monthlyFeeStatus}
                  </span>
                </div>
              </div>

              {/* Grid 2 Columns: Next Meetings + RSVP & Tronco */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Next Meeting Convocada */}
                <div className="lg:col-span-7 masonic-frame p-6 bg-masonic-card border border-masonic-gold/25 rounded-sm shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-3">
                    <h3 className="font-serif text-base font-bold text-masonic-gold uppercase flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>PRÓXIMA SESSÃO CONVOCADA</span>
                    </h3>
                    <span className="font-mono text-[10px] text-masonic-ivory/60 uppercase">
                      CONFIRMAÇÃO DE ORDEM
                    </span>
                  </div>

                  {DASHBOARD_MEETINGS.slice(0, 1).map((m) => (
                    <div key={m.id} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-bold text-masonic-ivory">
                          {m.title}
                        </span>
                        <span className="px-2.5 py-1 bg-masonic-gold/20 border border-masonic-gold text-masonic-gold font-mono text-xs font-bold rounded-sm">
                          {m.degree}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs font-mono text-masonic-gold">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Quarta-feira, {m.date} às {m.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{m.temple}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-masonic-dark border border-masonic-gold/15 rounded-sm text-xs font-sans text-masonic-ivory/80">
                        <strong>Ordem do Dia:</strong> {m.workOrder}
                      </div>

                      {/* RSVP Instant Confirmation Button */}
                      <button
                        onClick={() => setRsvpConfirmed(!rsvpConfirmed)}
                        className={`w-full py-3 rounded-sm font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                          rsvpConfirmed
                            ? 'bg-green-600 text-white shadow-lg'
                            : 'bg-masonic-gold text-masonic-void hover:bg-masonic-gold-light shadow-gold-glow'
                        }`}
                      >
                        <UserCheck className="w-4 h-4" />
                        <span>{rsvpConfirmed ? 'PRESENÇA CONFIRMADA NA SESSÃO ✓' : 'CONFIRMAR PRESENÇA NA SESSÃO (RSVP)'}</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Benefits & Stats */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 bg-masonic-slate/80 border border-masonic-gold/20 rounded-sm">
                    <span className="font-mono text-[10px] text-masonic-gold uppercase block mb-1 font-bold">
                      TRONCO DE BENEFICÊNCIA 2026
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif text-2xl font-bold text-masonic-ivory">
                        R$ 14.850,00
                      </span>
                      <span className="font-mono text-xs text-green-400 font-bold">100% Destinado</span>
                    </div>
                    <p className="text-[11px] text-masonic-ivory/70 font-sans mt-2">
                      CESG, Casa de Maria, Fábrica de Fraldas e Escola de Pais.
                    </p>
                  </div>

                  <div className="p-5 bg-masonic-slate/80 border border-masonic-gold/20 rounded-sm">
                    <span className="font-mono text-[10px] text-masonic-gold uppercase block mb-1 font-bold">
                      FREQUÊNCIA E PRESENÇA RITUAL
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif text-2xl font-bold text-masonic-gold">
                        94.5%
                      </span>
                      <span className="font-mono text-xs text-masonic-ivory/70">Média Geral do Quadro</span>
                    </div>
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

                <div className="space-y-4">
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
          {/* TAB 2: QUADRO DE MEMBROS & PAST VENERÁVEIS */}
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
                    <tbody className="divide-y divide-masonic-gold/15">
                      {DASHBOARD_MEMBERS.map((m) => (
                        <tr key={m.id} className="hover:bg-masonic-slate/60 transition-colors">
                          <td className="p-3 font-serif font-bold text-masonic-ivory flex items-center space-x-3">
                            <img src={m.avatar} alt={m.name} className="w-9 h-9 rounded-full object-cover border border-masonic-gold shrink-0" />
                            <span>{m.name}</span>
                          </td>
                          <td className="p-3 text-masonic-gold font-bold">{m.role}</td>
                          <td className="p-3 text-masonic-ivory/70">{m.cim}</td>
                          <td className="p-3"><span className="px-2 py-0.5 bg-masonic-gold/15 border border-masonic-gold/40 text-masonic-gold rounded-sm">{m.degree}</span></td>
                          <td className="p-3 text-masonic-ivory/80">{m.profession}</td>
                          <td className="p-3 text-masonic-gold">{m.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Past Veneráveis */}
              <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
                <h3 className="font-serif text-xl font-bold text-masonic-gold uppercase border-b border-masonic-gold/20 pb-3 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-masonic-gold" />
                  <span>GALERIA DOS PAST VENERÁVEIS MASTERS</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {DASHBOARD_PAST_MASTERS.map((pm, i) => (
                    <div key={i} className="p-4 bg-masonic-dark border border-masonic-gold/20 rounded-sm space-y-2">
                      <span className="font-mono text-[10px] text-masonic-gold font-bold block">{pm.period}</span>
                      <h4 className="font-serif text-sm font-bold text-masonic-ivory">{pm.name}</h4>
                      <p className="text-xs text-masonic-ivory/70 font-sans">{pm.title}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: PRANCHAS DE ARQUITETURA & BALAUSTRES */}
          {/* ========================================================= */}
          {activeTab === 'pranchas' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-4">
                <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-masonic-gold" />
                  <span>PRANCHAS DE ARQUITETURA E PESQUISA RITUAL</span>
                </h3>
              </div>

              <div className="space-y-4">
                {DASHBOARD_PAPERS.map((paper) => (
                  <div key={paper.id} className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2 py-0.5 bg-masonic-gold/20 border border-masonic-gold text-masonic-gold font-mono text-[9px] uppercase font-bold">
                          {paper.degree}
                        </span>
                        <span className="font-mono text-[10px] text-masonic-ivory/60">{paper.date}</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-masonic-ivory">
                        {paper.title}
                      </h4>
                      <span className="font-mono text-xs text-masonic-gold/80 block mt-1">
                        Autor: {paper.author}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 shrink-0">
                      <span className="font-mono text-xs text-masonic-gold flex items-center space-x-1">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{paper.likes} aprovações</span>
                      </span>
                      <button
                        onClick={() => alert(`Lendo a prancha: ${paper.title}`)}
                        className="px-4 py-2 bg-masonic-gold text-masonic-void font-serif text-xs font-bold uppercase rounded-sm hover:bg-masonic-gold-light cursor-pointer"
                      >
                        Ler Prancha
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 4: TRONCO & OBRAS SOCIAIS (CESG, CASA DE MARIA) */}
          {/* ========================================================= */}
          {activeTab === 'social' && (
            <div className="space-y-8">
              <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
                <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-4">
                  <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-masonic-gold" />
                    <span>TRONCO DE BENEFICÊNCIA & PROJETOS SOCIAIS MANTIDOS</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* CESG */}
                  <div className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm space-y-3">
                    <span className="font-mono text-[10px] text-masonic-gold font-bold uppercase block">ENTIDADE PARCEIRA</span>
                    <h4 className="font-serif text-lg font-bold text-masonic-ivory">CESG — Centro Educativo e Social</h4>
                    <p className="text-xs text-masonic-ivory/80 font-sans leading-relaxed">
                      Gestão assumida pela Loja em 2017 para oferta de educação, reforço escolar e atividades esportivas para jovens de Guaranésia - MG.
                    </p>
                  </div>

                  {/* Casa de Maria */}
                  <div className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm space-y-3">
                    <span className="font-mono text-[10px] text-masonic-gold font-bold uppercase block">ENTIDADE PARCEIRA</span>
                    <h4 className="font-serif text-lg font-bold text-masonic-ivory">Casa de Maria</h4>
                    <p className="text-xs text-masonic-ivory/80 font-sans leading-relaxed">
                      Inaugurada em 12 de outubro de 2017 para recepção de doações, vestuário e cestas básicas direcionadas às famílias em vulnerabilidade.
                    </p>
                  </div>

                  {/* Fábrica de Fraldas */}
                  <div className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm space-y-3">
                    <span className="font-mono text-[10px] text-masonic-gold font-bold uppercase block">PROJETO SOCIAL</span>
                    <h4 className="font-serif text-lg font-bold text-masonic-ivory">Fábrica de Fraldas Geriatricas e Infantis</h4>
                    <p className="text-xs text-masonic-ivory/80 font-sans leading-relaxed">
                      Produção direta e distribuição gratuita de fraldas para idosos acamados e recém-nascidos da comunidade de Guaranésia.
                    </p>
                  </div>

                  {/* Escola de Pais */}
                  <div className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm space-y-3">
                    <span className="font-mono text-[10px] text-masonic-gold font-bold uppercase block">PROJETO SOCIAL</span>
                    <h4 className="font-serif text-lg font-bold text-masonic-ivory">Escola de Pais</h4>
                    <p className="text-xs text-masonic-ivory/80 font-sans leading-relaxed">
                      Ciclo de palestras e orientação psicológica para fortalecimento dos laços familiares no município.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 5: FREQUÊNCIA & ESCALA DE OFICIAIS */}
          {/* ========================================================= */}
          {activeTab === 'frequencia' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase border-b border-masonic-gold/20 pb-3">
                REGISTRO DE FREQUÊNCIA & ESCALA RITUAL
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm">
                  <span className="text-masonic-gold uppercase block mb-1">Presença Anual do Irmão:</span>
                  <span className="font-serif text-2xl font-bold text-masonic-gold">96.8%</span>
                </div>
                <div className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm">
                  <span className="text-masonic-gold uppercase block mb-1">Sessões Realizadas em 2026:</span>
                  <span className="font-serif text-2xl font-bold text-masonic-ivory">28 Sessões</span>
                </div>
                <div className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm">
                  <span className="text-masonic-gold uppercase block mb-1">Status Ritualístico:</span>
                  <span className="font-serif text-2xl font-bold text-green-400">Regular & Quite</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 6: DECRETOS & BOLETINS GOMG */}
          {/* ========================================================= */}
          {activeTab === 'boletins' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <h3 className="font-serif text-xl font-bold text-masonic-gold uppercase border-b border-masonic-gold/20 pb-3 flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>BOLETINS E DECRETOS OFICIAIS DO GOMG</span>
              </h3>

              <div className="space-y-4">
                {DASHBOARD_NOTICES.map((n) => (
                  <div key={n.id} className="p-5 bg-masonic-dark border border-masonic-gold/20 rounded-sm space-y-2">
                    <span className="font-mono text-[10px] text-masonic-gold font-bold block">{n.category} • {n.date}</span>
                    <h4 className="font-serif text-base font-bold text-masonic-ivory">{n.title}</h4>
                    <p className="text-xs text-masonic-ivory/80 font-sans">{n.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 7: BIBLIOTECA & ACERVO HISTÓRICO */}
          {/* ========================================================= */}
          {activeTab === 'documentos' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-4">
                <h3 className="font-serif text-xl font-bold text-masonic-gold uppercase flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>ACERVO DIGITAL E REPOSITÓRIO HISTÓRICO (2015 - 2026)</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DASHBOARD_DOCUMENTS.map((doc) => (
                  <div key={doc.id} className="p-4 bg-masonic-dark border border-masonic-gold/20 rounded-sm flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[9px] text-masonic-gold uppercase block mb-1 font-bold">
                        {doc.degree} • {doc.category}
                      </span>
                      <h4 className="font-serif text-xs font-bold text-masonic-ivory">
                        {doc.title}
                      </h4>
                      <span className="font-mono text-[10px] text-masonic-ivory/50 block mt-1">
                        Atualizado em {doc.updatedAt} • {doc.size}
                      </span>
                    </div>

                    <button
                      onClick={() => alert(`Baixando o documento oficial: ${doc.title}`)}
                      className="p-2.5 bg-masonic-gold/15 border border-masonic-gold text-masonic-gold hover:bg-masonic-gold hover:text-masonic-void transition-colors rounded-sm ml-3 shrink-0 cursor-pointer"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 8: MEU PERFIL RITUALÍSTICO (WITH PORTRAIT AVATAR PHOTO) */}
          {/* ========================================================= */}
          {activeTab === 'perfil' && (
            <div className="masonic-frame p-6 sm:p-8 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
              <h3 className="font-serif text-xl font-bold text-masonic-ivory uppercase border-b border-masonic-gold/20 pb-4 flex items-center justify-between">
                <span>DADOS RITUALÍSTICOS DO OBREIRO DA OFICINA</span>
                <span className="text-xs font-mono text-masonic-gold">{LOGGED_IN_BROTHER.monthlyFeeStatus}</span>
              </h3>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-masonic-gold/20 pb-6">
                <div className="relative">
                  <img
                    src={LOGGED_IN_BROTHER.avatar}
                    alt={LOGGED_IN_BROTHER.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-masonic-gold shadow-[0_0_30px_rgba(197,160,89,0.5)]"
                  />
                  <div className="absolute -bottom-2 inset-x-0 text-center">
                    <span className="px-2.5 py-0.5 bg-masonic-gold text-masonic-void font-mono text-[9px] font-bold uppercase rounded-sm shadow-sm">
                      {LOGGED_IN_BROTHER.degree}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="font-serif text-2xl font-bold text-masonic-ivory">{LOGGED_IN_BROTHER.name}</h4>
                  <p className="font-mono text-sm text-masonic-gold font-bold">{LOGGED_IN_BROTHER.role}</p>
                  <p className="font-mono text-xs text-masonic-ivory/70">CIM: {LOGGED_IN_BROTHER.cim} • Oriente de {LOGGED_IN_BROTHER.oriente}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
                <div className="p-4 bg-masonic-dark border border-masonic-gold/20 rounded-sm">
                  <span className="text-masonic-gold uppercase block mb-1 font-bold">Data de Iniciação:</span>
                  <span className="text-masonic-ivory font-serif text-sm font-bold">{LOGGED_IN_BROTHER.initiationDate}</span>
                </div>

                <div className="p-4 bg-masonic-dark border border-masonic-gold/20 rounded-sm">
                  <span className="text-masonic-gold uppercase block mb-1 font-bold">Loja-Mãe Concedente:</span>
                  <span className="text-masonic-ivory font-serif text-sm font-bold">{LOGGED_IN_BROTHER.motherLodge}</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </main>

      {/* Brother Goat AI Virtual Assistant Preview Widget */}
      <BrotherGoatChat />
    </div>
  );
};
