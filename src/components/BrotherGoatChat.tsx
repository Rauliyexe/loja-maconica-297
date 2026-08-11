import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, ChevronRight } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'goat';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export const BrotherGoatChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'goat',
      text: 'Saudações Fraternais, meu Irmão! Sou o Irmão Bode, o Assistente Virtual de IA da A.R.L.S. Paz, Harmonia & Concórdia nº 297. Em que posso auxiliá-lo na sua instrução ou consulta hoje?',
      timestamp: 'Agora',
      suggestions: [
        'Próxima Sessão Ritualística',
        'Sobre a Fundação em 2015',
        'Projetos Sociais (CESG)',
        'Consultar Pranchas de Arquitetura',
      ],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setTimeout(() => {
      let responseText = 'T.F.A. meu estimado Irmão! Estou consultando o acervo digital da PHC 297...';
      const q = query.toLowerCase();

      if (q.includes('sessão') || q.includes('próxima') || q.includes('reunião')) {
        responseText = 'Nossas Sessões Rituais ocorrem todas as **Quartas-feiras às 20:00h** no Templo da PHC nº 297 no Oriente de Guaranésia - MG. Lembre-se de portar seus paramentos!';
      } else if (q.includes('fundação') || q.includes('história') || q.includes('2015')) {
        responseText = 'A A.R.L.S. Paz, Harmonia e Concórdia nº 297 foi fundada em **16 de Outubro de 2015**, sob a obediência do **Grande Oriente de Minas Gerais (GOMG)**.';
      } else if (q.includes('cesg') || q.includes('social') || q.includes('tronco')) {
        responseText = 'Nossos trabalhos fraternais apoiam ativamente o **CESG (Centro Educativo)** e a **Casa de Maria** em Guaranésia, praticando a beneficência e o amparo social.';
      } else if (q.includes('prancha') || q.includes('acervo') || q.includes('estudo')) {
        responseText = 'No painel privado do membro você pode baixar os PDFs das Pranchas de Arquitetura e Balaustres atualizados na aba *"Pranchas & Balaustres"*.';
      }

      const goatMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'goat',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, goatMsg]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[300]">
      {/* Floating Trigger Button: Goat Face Floating with Red Eye Glow on Hover */}
      {!isOpen && (
        <div className="relative group cursor-pointer flex flex-col items-center">
          
          {/* Hover Name Badge "BODE" */}
          <div className="absolute -top-9 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none z-20">
            <div className="px-3 py-1 bg-gradient-to-r from-masonic-dark via-masonic-slate to-masonic-dark border border-masonic-gold text-masonic-gold font-serif text-xs font-black uppercase tracking-[0.25em] rounded shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              BODE
            </div>
          </div>

          {/* Floating Goat Button Container */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-1 rounded-full transition-transform duration-500 group-hover:scale-110 focus:outline-none"
            title="Bode — Assistente IA"
          >
            {/* Soft Ambient Radial Shadow behind Floating Face */}
            <div className="absolute inset-0 rounded-full bg-masonic-gold/20 blur-xl opacity-60 group-hover:bg-masonic-crimson/50 group-hover:blur-2xl transition-all duration-500 -z-10" />

            {/* Red Eye Glow Filter Effects overlaid on Hover */}
            <div className="relative w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center">
              
              {/* Main Floating Goat Face PNG */}
              <img
                src="/assets/goat-head.png"
                alt="Irmão Bode IA"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)] group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.8)] transition-all duration-500"
              />

              {/* Red Eye Glow Aura Elements (Positioned precisely over eyes on hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                {/* Left Eye Glow Point */}
                <span className="absolute top-[48%] left-[37%] w-2.5 h-2.5 rounded-full bg-red-600 blur-[2px] shadow-[0_0_12px_#ef4444] animate-pulse" />
                {/* Right Eye Glow Point */}
                <span className="absolute top-[48%] right-[37%] w-2.5 h-2.5 rounded-full bg-red-600 blur-[2px] shadow-[0_0_12px_#ef4444] animate-pulse" />
              </div>

            </div>
          </button>
        </div>
      )}

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div className="w-[360px] sm:w-[420px] h-[540px] bg-gradient-to-b from-masonic-slate via-masonic-card to-masonic-dark border-2 border-masonic-gold/60 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(197,160,89,0.25)] flex flex-col overflow-hidden masonic-frame animate-fade-in">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-masonic-dark via-masonic-slate to-masonic-dark border-b border-masonic-gold/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-11 h-11 rounded-full border border-masonic-gold/60 bg-masonic-slate flex items-center justify-center overflow-hidden shrink-0 shadow-gold-glow">
                <img src="/assets/goat-head.png" alt="Bode" className="w-full h-full object-contain scale-110" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif text-sm font-bold text-masonic-ivory uppercase tracking-wider">
                    Irmão Bode IA
                  </span>
                  <span className="px-1.5 py-0.2 bg-masonic-gold/20 text-masonic-gold font-mono text-[9px] rounded border border-masonic-gold/40">
                    297
                  </span>
                </div>
                <span className="font-mono text-[10px] text-masonic-gold/90 block uppercase">
                  Assistente Fraternal • GOMG
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-masonic-ivory/60 hover:text-masonic-gold p-1.5 rounded-full hover:bg-masonic-gold/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-masonic-gold text-masonic-void font-medium rounded-br-none shadow-md'
                      : 'bg-masonic-slate/90 border border-masonic-gold/30 text-masonic-ivory rounded-bl-none shadow-lg'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Suggestion Pills */}
                  {msg.suggestions && (
                    <div className="mt-3 pt-2 border-t border-masonic-gold/20 flex flex-wrap gap-1.5">
                      {msg.suggestions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(sug)}
                          className="px-2.5 py-1 bg-masonic-gold/15 hover:bg-masonic-gold hover:text-masonic-void border border-masonic-gold/40 text-masonic-gold font-mono text-[10px] rounded-sm transition-all text-left flex items-center space-x-1"
                        >
                          <span>{sug}</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <span className="font-mono text-[9px] text-masonic-ivory/40 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-masonic-dark border-t border-masonic-gold/30 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Pergunte ao Irmão Bode..."
              className="flex-1 px-3 py-2 bg-masonic-slate border border-masonic-gold/30 rounded-sm text-masonic-ivory font-mono text-xs focus:outline-none focus:border-masonic-gold"
            />
            <button
              type="submit"
              className="p-2 bg-masonic-gold text-masonic-void font-bold rounded-sm hover:bg-masonic-gold-light transition-colors shrink-0"
              title="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
