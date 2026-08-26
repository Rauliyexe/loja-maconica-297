import React, { useState } from 'react';
import {
  Shield,
  Calendar,
  Users,
  DollarSign,
  FileText,
  Plus,
  Edit,
  Trash2,
  Check,
  UserCheck,
  TrendingUp,
  Download,
  Upload,
  AlertCircle,
  Clock,
  MapPin,
  CheckCircle2,
  Sliders,
  LogOut,
  ArrowLeft,
  Search,
  Receipt,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react';
import {
  DASHBOARD_NOTICES,
  DASHBOARD_DOCUMENTS,
  DASHBOARD_MEETINGS,
  DASHBOARD_MEMBERS,
  DASHBOARD_PAYMENTS,
} from '../data/mockData';

interface AdminDashboardProps {
  onLogout: () => void;
  onSwitchToMemberView?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onLogout,
  onSwitchToMemberView,
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState<
    'convocatorias' | 'tesouraria' | 'membros' | 'documentos' | 'decretos'
  >('tesouraria');

  const [adminRole, setAdminRole] = useState<'Venerável Mestre' | 'Secretário' | 'Tesoureiro'>('Tesoureiro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Datasets
  const [meetings, setMeetings] = useState(DASHBOARD_MEETINGS);
  const [members, setMembers] = useState(DASHBOARD_MEMBERS);
  const [payments, setPayments] = useState(DASHBOARD_PAYMENTS);

  // Forms
  const [isAddingMeeting, setIsAddingMeeting] = useState(false);
  const [newMeetingTitle, setNewMeetingTitle] = useState('');
  const [newMeetingDate, setNewMeetingDate] = useState('02/09/2026');
  const [newMeetingDegree, setNewMeetingDegree] = useState('Mestre');
  const [newMeetingWorkOrder, setNewMeetingWorkOrder] = useState('');

  const [troncoValue, setTroncoValue] = useState('14850');
  const [newTroncoEntry, setNewTroncoEntry] = useState('');
  const [entryDestination, setEntryDestination] = useState('CESG');

  const handleTogglePaymentStatus = (memberId: number) => {
    setPayments((prev) =>
      prev.map((p) => {
        if (p.id === memberId) {
          const newAgo = p.ago === 'Pago' ? 'Pendente' : 'Pago';
          return { ...p, ago: newAgo, lastDate: newAgo === 'Pago' ? '08/08/2026' : p.lastDate };
        }
        return p;
      })
    );
  };

  return (
    <div className="fixed inset-0 z-[200] w-full h-full bg-masonic-void text-masonic-ivory flex flex-col md:flex-row overflow-hidden font-sans select-none">
      
      {/* ------------------------------------------------------------- */}
      {/* ADMIN SIDEBAR NAVIGATION */}
      {/* ------------------------------------------------------------- */}
      <aside className="w-72 bg-masonic-dark border-r border-masonic-gold/30 flex flex-col justify-between p-4 shrink-0 hidden md:flex z-20">
        <div>
          <div className="p-3 border-b border-masonic-gold/20 pb-5 mb-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full border-2 border-masonic-gold bg-masonic-gold/20 flex items-center justify-center text-masonic-gold shrink-0 shadow-gold-glow">
                <Shield className="w-5 h-5 text-masonic-gold" />
              </div>
              <div>
                <span className="font-serif text-xs font-bold text-masonic-ivory block uppercase tracking-wider">
                  GESTÃO DA DIRETORIA
                </span>
                <span className="font-mono text-[9px] text-masonic-gold block uppercase font-bold">
                  PHC Nº 297 • GUARANÉSIA
                </span>
              </div>
            </div>

            <div className="mt-2">
              <label className="block font-mono text-[9px] uppercase text-masonic-gold/80 mb-1 font-bold">
                Papel Administrativo Ativo:
              </label>
              <select
                value={adminRole}
                onChange={(e) => setAdminRole(e.target.value as any)}
                className="w-full px-2.5 py-1.5 bg-masonic-slate border border-masonic-gold/40 text-masonic-gold font-mono text-xs rounded-sm focus:outline-none"
              >
                <option value="Tesoureiro">💰 Tesoureiro (Mensalidades & Caixa)</option>
                <option value="Venerável Mestre">👑 Venerável Mestre (Geral)</option>
                <option value="Secretário">✍️ Secretário (Convocatórias & Atas)</option>
              </select>
            </div>
          </div>

          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveAdminTab('tesouraria')}
              className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-sm font-serif text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeAdminTab === 'tesouraria'
                  ? 'bg-masonic-gold text-masonic-void font-bold shadow-gold-glow'
                  : 'text-masonic-ivory/80 hover:bg-masonic-slate hover:text-masonic-gold'
              }`}
            >
              <DollarSign className="w-4 h-4 shrink-0" />
              <span>Mensalidades & Tesouraria</span>
            </button>

            <button
              onClick={() => setActiveAdminTab('convocatorias')}
              className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-sm font-serif text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeAdminTab === 'convocatorias'
                  ? 'bg-masonic-gold text-masonic-void font-bold shadow-gold-glow'
                  : 'text-masonic-ivory/80 hover:bg-masonic-slate hover:text-masonic-gold'
              }`}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Sessões & Convocatórias</span>
            </button>

            <button
              onClick={() => setActiveAdminTab('membros')}
              className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-sm font-serif text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeAdminTab === 'membros'
                  ? 'bg-masonic-gold text-masonic-void font-bold shadow-gold-glow'
                  : 'text-masonic-ivory/80 hover:bg-masonic-slate hover:text-masonic-gold'
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>Gestão do Quadro</span>
            </button>

            <button
              onClick={() => setActiveAdminTab('documentos')}
              className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-sm font-serif text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeAdminTab === 'documentos'
                  ? 'bg-masonic-gold text-masonic-void font-bold shadow-gold-glow'
                  : 'text-masonic-ivory/80 hover:bg-masonic-slate hover:text-masonic-gold'
              }`}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Publicar Documentos</span>
            </button>
          </nav>
        </div>

        <div className="pt-4 border-t border-masonic-gold/20 space-y-2">
          {onSwitchToMemberView && (
            <button
              onClick={onSwitchToMemberView}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-masonic-gold/15 border border-masonic-gold/50 text-masonic-gold hover:bg-masonic-gold hover:text-masonic-void rounded-sm font-serif text-xs font-bold uppercase transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>VOLTAR AO PAINEL DO MEMBRO</span>
            </button>
          )}

          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-sm font-mono text-xs text-red-400 hover:bg-red-950/40 hover:text-red-300 transition-colors uppercase cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair do Sistema</span>
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* MAIN ADMIN CONTENT AREA */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-masonic-void">
        
        {/* Admin Header */}
        <header className="bg-masonic-dark/95 backdrop-blur-md border-b border-masonic-gold/30 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-20 shrink-0">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-masonic-gold border border-masonic-gold/30 rounded-sm"
              title="Menu Admin"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <span className="font-mono text-[9px] sm:text-[10px] text-masonic-gold uppercase tracking-widest block font-bold">
                DIRETORIA • {adminRole.toUpperCase()}
              </span>
              <h1 className="font-serif text-sm sm:text-lg font-bold text-masonic-ivory truncate">
                {activeAdminTab === 'tesouraria' && 'Controle da Tesouraria'}
                {activeAdminTab === 'convocatorias' && 'Convocatórias & Sessões'}
                {activeAdminTab === 'membros' && 'Gestão do Quadro'}
                {activeAdminTab === 'documentos' && 'Publicação de Documentos'}
                {activeAdminTab === 'decretos' && 'Decretos & Atos Oficiais'}
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {onSwitchToMemberView && (
              <button
                onClick={onSwitchToMemberView}
                className="px-2.5 sm:px-3 py-1.5 bg-masonic-gold/15 border border-masonic-gold text-masonic-gold text-[10px] sm:text-xs font-mono rounded-sm hover:bg-masonic-gold hover:text-masonic-void transition-colors shrink-0"
              >
                Voltar ao Membro
              </button>
            )}
          </div>
        </header>

        {/* Mobile Navigation Drawer for Admin */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-masonic-dark border-b border-masonic-gold/30 p-4 space-y-2 z-20 animate-fade-in">
            <div className="mb-2 pb-2 border-b border-masonic-gold/20 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-masonic-gold font-bold">Módulos Administrativos</span>
              <span className="text-[10px] font-mono text-masonic-ivory/60">{adminRole}</span>
            </div>

            <button
              onClick={() => {
                setActiveAdminTab('tesouraria');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-sm font-serif text-xs uppercase tracking-wider ${
                activeAdminTab === 'tesouraria' ? 'bg-masonic-gold text-masonic-void font-bold' : 'text-masonic-ivory/80'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Tesouraria & Mensalidades</span>
            </button>

            <button
              onClick={() => {
                setActiveAdminTab('convocatorias');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-sm font-serif text-xs uppercase tracking-wider ${
                activeAdminTab === 'convocatorias' ? 'bg-masonic-gold text-masonic-void font-bold' : 'text-masonic-ivory/80'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Convocatórias & Sessões</span>
            </button>

            <button
              onClick={() => {
                setActiveAdminTab('membros');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-sm font-serif text-xs uppercase tracking-wider ${
                activeAdminTab === 'membros' ? 'bg-masonic-gold text-masonic-void font-bold' : 'text-masonic-ivory/80'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Gestão do Quadro</span>
            </button>

            <button
              onClick={() => {
                setActiveAdminTab('documentos');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-sm font-serif text-xs uppercase tracking-wider ${
                activeAdminTab === 'documentos' ? 'bg-masonic-gold text-masonic-void font-bold' : 'text-masonic-ivory/80'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Publicar Documentos</span>
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-4 sm:p-8 space-y-8 max-w-6xl w-full mx-auto flex-1">
          
          {/* ========================================================= */}
          {/* ADMIN TAB: TESOURARIA & MENSALIDADES POR MEMBRO */}
          {/* ========================================================= */}
          {activeAdminTab === 'tesouraria' && (
            <div className="space-y-8">
              
              <div className="border-b border-masonic-gold/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                    TABELA DE MENSALIDADES DO QUADRO (2026)
                  </h2>
                  <p className="text-xs text-masonic-gold font-mono">Status mês a mês por Irmão, quitação Pix/Boleto e emissores de recibo</p>
                </div>

                <div className="flex space-x-2">
                  <span className="px-3 py-1.5 bg-green-950/80 border border-green-500 text-green-400 font-mono text-xs font-bold rounded-sm">
                    87.5% QUITAÇÃO AGOSTO
                  </span>
                </div>
              </div>

              {/* MONTHLY DUES TABLE PER MEMBER */}
              <div className="masonic-frame p-6 bg-masonic-card border border-masonic-gold/30 rounded-sm shadow-lg space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-masonic-gold/40 text-masonic-gold uppercase">
                        <th className="p-3">IRMÃO</th>
                        <th className="p-3">CIM</th>
                        <th className="p-3">VALOR</th>
                        <th className="p-3 text-center">JAN</th>
                        <th className="p-3 text-center">FEV</th>
                        <th className="p-3 text-center">MAR</th>
                        <th className="p-3 text-center">ABR</th>
                        <th className="p-3 text-center">MAI</th>
                        <th className="p-3 text-center">JUN</th>
                        <th className="p-3 text-center">JUL</th>
                        <th className="p-3 text-center">AGOSTO 2026</th>
                        <th className="p-3 text-right">AÇÕES DE TESOURARIA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-masonic-gold/15">
                      {payments.map((p) => (
                        <tr key={p.id} className="hover:bg-masonic-slate/60 transition-colors">
                          <td className="p-3 font-serif font-bold text-masonic-ivory">{p.name}</td>
                          <td className="p-3 text-masonic-ivory/70">{p.cim}</td>
                          <td className="p-3 text-masonic-gold font-bold">{p.fee}</td>
                          <td className="p-3 text-center"><span className="text-green-400">✓</span></td>
                          <td className="p-3 text-center"><span className="text-green-400">✓</span></td>
                          <td className="p-3 text-center"><span className="text-green-400">✓</span></td>
                          <td className="p-3 text-center"><span className="text-green-400">✓</span></td>
                          <td className="p-3 text-center"><span className="text-green-400">✓</span></td>
                          <td className="p-3 text-center"><span className="text-green-400">✓</span></td>
                          <td className="p-3 text-center"><span className="text-green-400">✓</span></td>
                          
                          {/* August Payment Badge & Toggle Action */}
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleTogglePaymentStatus(p.id)}
                              className={`px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase transition-all cursor-pointer ${
                                p.ago === 'Pago'
                                  ? 'bg-green-950/90 border border-green-500 text-green-400'
                                  : 'bg-amber-950/90 border border-amber-500 text-amber-300 animate-pulse'
                              }`}
                              title="Clique para dar baixa ou alternar status"
                            >
                              {p.ago === 'Pago' ? 'PAGO ✓' : 'PENDENTE ⚠'}
                            </button>
                          </td>

                          <td className="p-3 text-right space-x-2">
                            <button
                              onClick={() => alert(`Gerando recibo PDF de quitação para ${p.name}`)}
                              className="p-1.5 bg-masonic-gold/15 border border-masonic-gold text-masonic-gold hover:bg-masonic-gold hover:text-masonic-void rounded-sm transition-colors cursor-pointer"
                              title="Baixar Recibo de Quitação PDF"
                            >
                              <Receipt className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-masonic-card border border-masonic-gold/30 rounded-sm">
                  <span className="font-mono text-[10px] text-masonic-gold uppercase font-bold block mb-1">TRONCO DE BENEFICÊNCIA 2026</span>
                  <span className="font-serif text-3xl font-bold text-masonic-ivory">R$ {parseFloat(troncoValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>

                <div className="p-6 bg-masonic-card border border-masonic-gold/30 rounded-sm">
                  <span className="font-mono text-[10px] text-masonic-gold uppercase font-bold block mb-1">REPASSES AO CESG & CASA DE MARIA</span>
                  <span className="font-serif text-3xl font-bold text-green-400">100% REGULAR</span>
                </div>

                <div className="p-6 bg-masonic-card border border-masonic-gold/30 rounded-sm">
                  <span className="font-mono text-[10px] text-masonic-gold uppercase font-bold block mb-1">ARRECADAÇÃO DE MENSALIDADES</span>
                  <span className="font-serif text-3xl font-bold text-masonic-gold">R$ 2.000,00 / Mês</span>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* ADMIN TAB: SESSÕES & CONVOCATÓRIAS */}
          {/* ========================================================= */}
          {activeAdminTab === 'convocatorias' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                    CONVOCATÓRIAS & SESSÕES CONVOCADAS
                  </h2>
                  <p className="text-xs text-masonic-gold font-mono">Gerenciamento de datas, graus rituais e Ordens do Dia</p>
                </div>
              </div>

              <div className="space-y-4">
                {meetings.map((m) => (
                  <div key={m.id} className="p-5 bg-masonic-card border border-masonic-gold/30 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2.5 py-0.5 bg-masonic-gold/20 border border-masonic-gold text-masonic-gold font-mono text-[10px] font-bold uppercase">
                          {m.degree}
                        </span>
                        <span className="font-mono text-xs text-masonic-gold font-bold">Quarta-feira, {m.date} às {m.time}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-masonic-ivory">{m.title}</h4>
                      <p className="text-xs text-masonic-ivory/80 font-sans mt-1"><strong>Ordem do Dia:</strong> {m.workOrder}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* ADMIN TAB: QUADRO DE MEMBROS */}
          {/* ========================================================= */}
          {activeAdminTab === 'membros' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-masonic-gold/20 pb-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                    CADASTRO & REGULARIDADE DO QUADRO
                  </h2>
                  <p className="text-xs text-masonic-gold font-mono">Gestão de CIM, cargos e certidões do GOMG</p>
                </div>
              </div>

              <div className="bg-masonic-card border border-masonic-gold/30 rounded-sm p-4 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-masonic-gold/30 text-masonic-gold uppercase">
                      <th className="p-3">IRMÃO</th>
                      <th className="p-3">CIM</th>
                      <th className="p-3">CARGO</th>
                      <th className="p-3">GRAU</th>
                      <th className="p-3">AÇÕES</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-masonic-gold/15">
                    {members.map((m) => (
                      <tr key={m.id} className="hover:bg-masonic-slate/60">
                        <td className="p-3 font-serif font-bold text-masonic-ivory flex items-center space-x-3">
                          <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover border border-masonic-gold shrink-0" />
                          <span>{m.name}</span>
                        </td>
                        <td className="p-3 text-masonic-ivory/70">{m.cim}</td>
                        <td className="p-3 text-masonic-gold font-bold">{m.role}</td>
                        <td className="p-3"><span className="px-2 py-0.5 bg-masonic-gold/20 text-masonic-gold rounded-sm">{m.degree}</span></td>
                        <td className="p-3">
                          <button onClick={() => alert(`Emitindo certidão para ${m.name}`)} className="px-2.5 py-1 bg-masonic-gold/15 border border-masonic-gold text-masonic-gold text-[10px] uppercase rounded-sm">
                            Certidão GOMG
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* ADMIN TAB: PUBLICAR DOCUMENTOS */}
          {/* ========================================================= */}
          {activeAdminTab === 'documentos' && (
            <div className="space-y-6">
              <div className="border-b border-masonic-gold/20 pb-4">
                <h2 className="font-serif text-xl font-bold text-masonic-ivory uppercase">
                  PUBLICAR DOCUMENTOS & DECRETOS
                </h2>
                <p className="text-xs text-masonic-gold font-mono">Upload de PDFs para a biblioteca da Loja</p>
              </div>

              <div className="p-6 bg-masonic-card border border-masonic-gold/40 rounded-sm space-y-4">
                <h3 className="font-serif text-base font-bold text-masonic-gold uppercase">ENVIAR NOVO ARQUIVO PDF</h3>
                <div className="border-2 border-dashed border-masonic-gold/40 rounded-sm p-8 text-center space-y-3 bg-masonic-slate/50">
                  <Upload className="w-10 h-10 text-masonic-gold mx-auto" />
                  <p className="text-xs text-masonic-ivory font-serif">Arraste um arquivo PDF ou clique para selecionar</p>
                  <span className="font-mono text-[10px] text-masonic-gold/70 block">Tamanho máximo: 15MB • Formatos aceitos: PDF</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </main>

    </div>
  );
};
