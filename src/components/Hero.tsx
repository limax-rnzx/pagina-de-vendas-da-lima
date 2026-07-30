import React from 'react';
import { PEDRO_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, MessageSquare, Terminal, ShieldCheck, Zap, Code2, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenBudgetModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBudgetModal }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Light Orbs & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(168,85,247,0.22),rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-purple-600/20 via-fuchsia-600/20 to-violet-700/20 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* High-tech Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b076420_1px,transparent_1px),linear-gradient(to_bottom,#3b076420_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-800/60 backdrop-blur-md shadow-lg shadow-purple-950/30 text-slate-300 text-xs font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 font-bold">Pedro Gabriel</span>
              <span className="text-purple-700">•</span>
              <span className="text-purple-200/90 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                Estudante de Informática & Dev
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
              Transformando ideias em{' '}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent underline decoration-purple-500/50 underline-offset-8">
                soluções digitais inteligentes
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-purple-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Olá! Sou <strong className="text-white font-semibold">Pedro Gabriel</strong>, Empreendedor Digital e Desenvolvedor de Software especializado em criar plataformas <strong className="text-purple-300 font-semibold">SaaS</strong>, automações de processos e sistemas sob medida para impulsionar negócios.
            </p>

            {/* Badges Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-purple-950/40 border border-purple-800/50 text-purple-200 text-xs flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>1 Ano na Área Tech</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-purple-950/40 border border-purple-800/50 text-purple-200 text-xs flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Software & SaaS Developer</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-purple-950/40 border border-purple-800/50 text-purple-200 text-xs flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                <span>100% Personalizado</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contato"
                onClick={() => {
                  if (onOpenBudgetModal) onOpenBudgetModal();
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-purple-100" />
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4 text-purple-100 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projetos"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-purple-200 bg-slate-900/80 border border-purple-800/60 hover:bg-purple-950/60 hover:text-white hover:border-purple-500/60 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 shadow-md"
              >
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Ver Meus Projetos</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Pedro's Avatar Card with Purple Glassmorphism FX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glowing purple aura behind avatar */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>

              {/* Main Glassmorphism Frame with Purple Accents */}
              <div className="relative rounded-3xl bg-slate-900/80 border border-purple-500/40 backdrop-blur-xl p-4 sm:p-5 shadow-2xl shadow-purple-950/40 overflow-hidden">
                {/* Header tag above photo */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-900/60">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-500/50 shadow-md shadow-purple-950/50">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                    <span className="text-xs font-['Syne'] font-extrabold tracking-wider bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent uppercase">
                      Pedro Gabriel
                    </span>
                  </div>
                </div>

                {/* High-tech Terminal & Code Card (No photo) */}
                <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-slate-950 p-4 font-mono text-xs shadow-inner space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-purple-300/70 border-b border-purple-900/50 pb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-purple-400" />
                      <span>pedro_gabriel_dev.ts</span>
                    </div>
                    <span className="text-purple-400 font-bold">TypeScript v5</span>
                  </div>

                  <div className="space-y-1.5 text-[11px] leading-relaxed text-purple-200/90">
                    <p><span className="text-fuchsia-400">const</span> <span className="text-purple-300 font-bold">developer</span> = &#123;</p>
                    <p className="pl-4"><span className="text-violet-300">name</span>: <span className="text-emerald-300">'Pedro Gabriel'</span>,</p>
                    <p className="pl-4"><span className="text-violet-300">role</span>: <span className="text-emerald-300">'Software & SaaS Developer'</span>,</p>
                    <p className="pl-4"><span className="text-violet-300">experience</span>: <span className="text-amber-300">'1+ Ano'</span>,</p>
                    <p className="pl-4"><span className="text-violet-300">stack</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'TypeScript'</span>, <span className="text-emerald-300">'Tailwind'</span>],</p>
                    <p className="pl-4"><span className="text-violet-300">status</span>: <span className="text-fuchsia-300">'Disponível para Novos Projetos'</span></p>
                    <p>&#125;;</p>
                  </div>

                  {/* Floating Overlay Badge */}
                  <div className="mt-3 p-3 rounded-xl bg-purple-950/80 border border-purple-500/40 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xs font-extrabold font-['Syne'] text-purple-200 flex items-center gap-1.5">
                          Sistemas Sob Medida
                          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                        </h3>
                        <p className="text-[10px] text-purple-300/80">Código limpo e de alta performance</p>
                      </div>
                      <div className="px-2 py-0.5 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[10px] font-bold">
                        100% On
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid below image */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40">
                    <span className="block text-purple-300/80 text-[10px] uppercase font-mono">Foco Principal</span>
                    <span className="font-bold text-purple-200">SaaS & Automação</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40">
                    <span className="block text-purple-300/80 text-[10px] uppercase font-mono">Formação</span>
                    <span className="font-bold text-purple-100">Est. Informática</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
