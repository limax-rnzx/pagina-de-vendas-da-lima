import React, { useState } from 'react';
import { ABOUT_TEXT, SKILL_CATEGORIES, PEDRO_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { User, GraduationCap, Code2, Rocket, CheckCircle2, Zap, Award, Layers, Cpu, Database, Server, Terminal } from 'lucide-react';

export const AboutTrajectory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trajectory' | 'skills'>('trajectory');

  return (
    <section id="sobre" className="py-20 md:py-28 relative overflow-hidden bg-slate-950/80 border-t border-purple-900/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <User className="w-3.5 h-3.5" />
            <span>Sobre Mim & Trajetória</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Combinando tecnologia, visão de negócios e <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">paixão por software</span>
          </h2>
          <p className="mt-4 text-purple-100/80 text-sm sm:text-base leading-relaxed">
            Conheça minha história, minha formação e as competências técnicas que utilizo para criar soluções de alto padrão.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-purple-900/50 backdrop-blur-md shadow-lg shadow-purple-950/30">
            <button
              type="button"
              onClick={() => setActiveTab('trajectory')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'trajectory'
                  ? 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Minha Trajetória & Visão
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('skills')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              Minhas Habilidades Técnicas
            </button>
          </div>
        </div>

        {/* Tab Content: Trajectory & Story */}
        {activeTab === 'trajectory' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Main Narrative Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-xl shadow-xl shadow-purple-950/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full pointer-events-none"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-sm">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Trajetória no Desenvolvimento</h3>
                    <p className="text-xs text-purple-300 font-mono">1 Ano em Tecnologia • Estudante de Informática</p>
                  </div>
                </div>

                <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed mb-6">
                  {ABOUT_TEXT.trajectory}
                </p>

                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/50 mb-6">
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    Propósito Profissional
                  </h4>
                  <p className="text-purple-100/90 text-xs sm:text-sm leading-relaxed">
                    {ABOUT_TEXT.mission}
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {ABOUT_TEXT.pillars.map((pillar, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-900/40">
                      <h5 className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        {pillar.title}
                      </h5>
                      <p className="text-[11px] text-purple-200/80 leading-normal">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Card 1: Formação */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-md flex items-start gap-4 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Estudante de Informática</h4>
                  <p className="text-xs text-purple-200/80 mt-1">
                    Formação técnica contínua combinando fundamentos de algoritmos, engenharia de software, banco de dados e arquitetura de sistemas.
                  </p>
                </div>
              </div>

              {/* Card 2: Empreendedorismo Digital */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-md flex items-start gap-4 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-300 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Visão Empreendedora & SaaS</h4>
                  <p className="text-xs text-purple-200/80 mt-1">
                    Desenvolvimento com mentalidade de produto: usabilidade intuitiva, modelos de negócios viáveis e foco na experiência final do cliente.
                  </p>
                </div>
              </div>

              {/* Card 3: Status & Entrega */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-md flex items-start gap-4 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 shrink-0">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Soluções Sob Medida</h4>
                  <p className="text-xs text-purple-200/80 mt-1">
                    Criação de código limpo e moderno para que sua empresa tenha autonomia, velocidade e segurança sem depender de sistemas legados.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content: Skills Grid */}
        {activeTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-xl shadow-xl shadow-purple-950/20 space-y-5"
              >
                <div className="border-b border-purple-900/40 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="font-mono text-purple-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-purple-900/40">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};
