import React from 'react';
import { PEDRO_INFO } from '../data/portfolioData';
import { Code2, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-purple-900/40 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-900/40">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-violet-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-purple-300" />
              </div>
            </div>
            <div>
              <span className="text-base font-extrabold text-white tracking-wide block font-display">
                Pedro Gabriel
              </span>
              <span className="text-[11px] text-purple-300/70 font-mono">
                Empreendedor Digital & Software Dev
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-purple-200/80">
            <a href="#home" className="hover:text-purple-300 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-purple-300 transition-colors">Sobre Mim</a>
            <a href="#servicos" className="hover:text-purple-300 transition-colors">Serviços</a>
            <a href="#projetos" className="hover:text-purple-300 transition-colors">Projetos</a>
            <a href="#faq" className="hover:text-purple-300 transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-purple-300 transition-colors">Contato</a>
          </div>

          {/* Scroll to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-purple-950/60 border border-purple-900/60 text-purple-200 hover:text-white hover:border-purple-500/60 hover:bg-purple-900/60 transition-all flex items-center gap-1.5 text-xs font-semibold shadow-sm"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-300" />
          </button>
        </div>

        {/* Required Footer Phrase */}
        <div className="pt-8 text-center space-y-3">
          <p className="text-xs sm:text-sm text-purple-100/90 font-medium max-w-3xl mx-auto leading-relaxed bg-purple-950/30 border border-purple-900/40 py-3.5 px-6 rounded-2xl">
            {PEDRO_INFO.footerPhrase}
          </p>

          <p className="text-[11px] text-purple-300/60 font-mono">
            © {new Date().getFullYear()} Pedro Gabriel. Todos os direitos reservados. Desenvolvido com React & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
};
