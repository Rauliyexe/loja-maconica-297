import React, { useState, useEffect } from 'react';
import { X, Lock, KeyRound, Mail, CheckCircle2, Shield, Eye, EyeOff } from 'lucide-react';
import { AllSeeingEye } from './AllSeeingEye';
import { LodgeEmblemLogo } from './LodgeEmblemLogo';

interface MemberLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const MemberLoginModal: React.FC<MemberLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('membro@lojamaconica297.org.br');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [isForgotView, setIsForgotView] = useState(false);

  const [animState, setAnimState] = useState<'hidden' | 'eye-gentle-zoom' | 'form-ready'>('hidden');

  const playSoftAlchemicalSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.4);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.0);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(750, ctx.currentTime);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(432, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(540, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc1.start(ctx.currentTime);
      osc2.start(ctx.currentTime);

      osc1.stop(ctx.currentTime + 3.2);
      osc2.stop(ctx.currentTime + 3.2);
    } catch (e) {
      console.log('Audio Context Error:', e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      playSoftAlchemicalSound();

      const rAF = requestAnimationFrame(() => {
        setAnimState('eye-gentle-zoom');
      });

      const formTimer = setTimeout(() => {
        setAnimState('form-ready');
      }, 1100);

      return () => {
        cancelAnimationFrame(rAF);
        clearTimeout(formTimer);
      };
    } else {
      setAnimState('hidden');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onLoginSuccess();
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotSent(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none">
      
      {/* Physics Animation Curves */}
      <style>{`
        .gentle-eye-zoom {
          transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease-out;
        }
        .gentle-card-reveal {
          transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.65s ease-out;
        }
      `}</style>

      {/* AMBER & GOLD SOLAR ETHEREAL BACKDROP */}
      <div
        className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
          animState !== 'hidden'
            ? 'bg-[radial-gradient(ellipse_at_center,_rgba(255,185,50,0.28)_0%,_rgba(10,5,2,0.98)_85%)] backdrop-blur-2xl opacity-100'
            : 'bg-masonic-void/0 opacity-0'
        }`}
      />

      {/* Background Starfield */}
      <div className="absolute inset-0 stars-bg opacity-35 pointer-events-none" />

      {/* ALL-SEEING EYE EMERGENCE ANIMATION (GOLDEN SOLAR RAYS) */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none gentle-eye-zoom ${
          animState === 'eye-gentle-zoom'
            ? 'scale-110 opacity-90 filter drop-shadow-[0_0_80px_rgba(255,200,60,0.75)]'
            : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-r from-amber-400/30 via-yellow-500/20 to-transparent blur-3xl opacity-70 animate-pulse-subtle" />
          <div className="absolute w-[680px] h-[680px] rounded-full border border-masonic-gold/50 animate-spin-slow opacity-75" />
          <AllSeeingEye size={640} />
        </div>
      </div>

      {/* MAIN REDESIGNED MASONIC MODAL CONTAINER */}
      <div
        className={`relative max-w-[460px] w-full bg-gradient-to-b from-masonic-slate/95 via-masonic-card/95 to-masonic-dark/95 backdrop-blur-3xl border border-masonic-gold/50 rounded-sm p-7 sm:p-9 shadow-[0_0_80px_rgba(197,160,89,0.35)] gentle-card-reveal transform z-10 masonic-frame ${
          animState === 'form-ready'
            ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto'
            : 'scale-95 opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-masonic-ivory/60 hover:text-masonic-gold transition-colors p-1.5 rounded-full hover:bg-masonic-gold/10"
          title="Fechar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER WITH OFFICIAL LODGE EMBLEM LOGO */}
        <div className="text-center mb-6 relative z-10 flex flex-col items-center">
          <div className="mb-3 relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-masonic-crimson/30 via-masonic-gold/30 to-masonic-crimson/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity -z-10" />
            <LodgeEmblemLogo size={110} />
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-masonic-crimson-deep/60 border border-masonic-crimson/50 text-masonic-crimson-light font-mono text-[10px] uppercase tracking-widest mb-1.5 shadow-[0_0_12px_rgba(220,38,38,0.3)]">
            <Shield className="w-3.5 h-3.5 text-masonic-gold" />
            <span>PORTAL RESTRITO • A.R.L.S. Nº 297</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.2em] text-masonic-ivory">
            {isForgotView ? 'Recuperar Acesso' : 'Área do Membro'}
          </h2>

          <div className="flex items-center justify-center space-x-3 my-2">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-masonic-crimson" />
            <span className="text-[10px] text-masonic-gold">❖</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-masonic-crimson" />
          </div>

          <p className="font-serif text-xs italic text-masonic-ivory/80 max-w-xs mx-auto">
            &ldquo;Paz, Harmonia & Concórdia • Oriente de Guaranésia - MG&rdquo;
          </p>
        </div>

        {isForgotView ? (
          /* FORGOT PASSWORD VIEW */
          <div className="relative z-10">
            {forgotSent ? (
              <div className="p-6 bg-masonic-gold/15 border border-masonic-gold/50 rounded-sm text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-masonic-gold mx-auto" />
                <h3 className="font-serif text-base font-bold text-masonic-ivory">Instruções Enviadas!</h3>
                <p className="text-xs text-masonic-ivory/80 font-sans">
                  Se o e-mail estiver cadastrado no Quadro de Obreiros da PHC nº 297, um link seguro de redefinição foi encaminhado.
                </p>
                <button
                  onClick={() => {
                    setIsForgotView(false);
                    setForgotSent(false);
                  }}
                  className="mt-2 w-full py-2.5 bg-masonic-gold text-masonic-void font-serif text-xs font-bold uppercase tracking-widest hover:bg-masonic-gold-light transition-colors"
                >
                  Voltar ao Login
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <p className="text-xs text-masonic-ivory/80 font-sans mb-4 text-center">
                  Informe seu e-mail ou registro cadastrado para receber as instruções de recuperação.
                </p>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-masonic-gold mb-1 font-bold">
                    E-mail Cadastrado
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-masonic-gold/60 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-masonic-slate/90 border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:ring-1 focus:ring-masonic-gold/40 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-masonic-gold via-masonic-gold-light to-masonic-gold-dark text-masonic-void font-serif text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:brightness-110 transition-all shadow-gold-glow"
                >
                  ENVIAR INSTRUÇÕES DE RECUPERAÇÃO
                </button>

                <button
                  type="button"
                  onClick={() => setIsForgotView(false)}
                  className="w-full text-center text-xs font-mono text-masonic-gold/70 hover:text-masonic-gold py-1"
                >
                  Cancelar e voltar ao login
                </button>
              </form>
            )}
          </div>
        ) : (
          /* LOGIN FORM VIEW */
          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-masonic-gold mb-1 font-bold">
                E-mail ou Registro de Membro
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-masonic-gold/60 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-masonic-slate/90 border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:ring-1 focus:ring-masonic-gold/40 focus:outline-none font-mono"
                  placeholder="membro@lojamaconica297.org.br"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block font-mono text-[10px] uppercase tracking-wider text-masonic-gold font-bold">
                  Senha Ritualística
                </label>
                <button
                  type="button"
                  onClick={() => setIsForgotView(true)}
                  className="text-[10px] font-mono text-masonic-crimson-light hover:text-masonic-gold transition-colors underline"
                >
                  Esqueceu a senha?
                </button>
              </div>

              <div className="relative">
                <Lock className="w-4 h-4 text-masonic-gold/60 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-masonic-slate/90 border border-masonic-gold/30 text-masonic-ivory text-xs rounded-sm focus:border-masonic-gold focus:ring-1 focus:ring-masonic-gold/40 focus:outline-none font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-masonic-ivory/50 hover:text-masonic-gold transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick Demo Access Credentials */}
            <div className="p-3 bg-masonic-crimson-deep/40 border border-masonic-crimson/40 rounded-sm font-mono text-[10px] text-masonic-ivory/80 space-y-1">
              <div className="flex items-center justify-between text-masonic-gold font-bold">
                <span>ACESSO RÁPIDO DE DEMONSTRAÇÃO:</span>
                <span className="px-1.5 py-0.5 bg-masonic-crimson-dark/60 rounded text-[9px] text-masonic-ivory">GOMG nº 297</span>
              </div>
              <div>E-mail: <span className="text-masonic-gold-light">membro@lojamaconica297.org.br</span></div>
              <div>Senha: <span className="text-masonic-gold-light">••••••••••••</span></div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-masonic-gold via-masonic-gold-light to-masonic-gold-dark text-masonic-void font-serif text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(197,160,89,0.3)] flex items-center justify-center space-x-2 group"
            >
              <KeyRound className="w-4 h-4 text-masonic-void group-hover:rotate-12 transition-transform" />
              <span>ENTRAR NO TEMPLO DIGITAL</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
