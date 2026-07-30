import React, { useState, useEffect } from 'react';
import { PEDRO_INFO } from '../data/portfolioData';
import { Menu, X, Code2, MessageSquare, ChevronRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBudgetModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBudgetModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'sobre', 'servicos', 'diferenciais', 'projetos', 'depoimentos', 'faq', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Sobre Mim', href: '#sobre', id: 'sobre' },
    { name: 'Serviços', href: '#servicos', id: 'servicos' },
    { name: 'Diferenciais', href: '#diferenciais', id: 'diferenciais' },
    { name: 'Projetos', href: '#projetos', id: 'projetos' },
    { name: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-purple-900/50 shadow-2xl shadow-purple-950/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-violet-600 p-[1px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-purple-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white font-sans flex items-center gap-1">
              Pedro Gabriel
              <span className="inline-block w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            </span>
            <span className="block text-[11px] text-purple-300/80 font-medium tracking-wider uppercase -mt-0.5">
              Software & SaaS Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-purple-900/40 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 text-purple-200 border border-purple-500/50 shadow-sm shadow-purple-950/50 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-purple-950/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contato"
            onClick={(e) => {
              handleNavClick(e, '#contato');
              if (onOpenBudgetModal) onOpenBudgetModal();
            }}
            className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200 animate-spin-slow" />
            <span>Solicitar Orçamento</span>
            <ChevronRight className="w-3.5 h-3.5 text-purple-200 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 border border-purple-900/40 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6 text-slate-300" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-purple-900/50 backdrop-blur-2xl px-4 pt-4 pb-6 mt-3 space-y-2 shadow-2xl shadow-purple-950/50">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 text-xs font-medium rounded-lg flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                      : 'text-slate-300 hover:bg-purple-950/40 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-purple-900/40 flex flex-col gap-2">
            <a
              href="#contato"
              onClick={(e) => {
                handleNavClick(e, '#contato');
                if (onOpenBudgetModal) onOpenBudgetModal();
              }}
              className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Solicitar Orçamento Grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
