import React from 'react';
import { DIFFERENTIALS } from '../data/portfolioData';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, TrendingUp, Sparkles, Award, CheckCircle2 } from 'lucide-react';

export const Differentials: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-purple-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-fuchsia-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-violet-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-300" />;
      case 'Award':
        return <Award className="w-6 h-6 text-fuchsia-300" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 md:py-28 relative overflow-hidden bg-slate-950/80 border-t border-purple-900/40">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Por que me escolher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Diferenciais que garantem a <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">excelência do seu projeto</span>
          </h2>
          <p className="mt-4 text-purple-100/80 text-sm sm:text-base leading-relaxed">
            Mais do que entregar linhas de código, comprometo-me com o sucesso do seu negócio através de pilares fundamentais de qualidade.
          </p>
        </div>

        {/* Differentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-xl hover:border-purple-500/60 hover:bg-slate-900/95 transition-all duration-300 shadow-lg group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>

              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-purple-900/50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                  {renderIcon(item.iconName)}
                </div>
                <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-800/60">
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* Bonus Guarantee Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-950/60 via-fuchsia-950/40 to-slate-900/90 border border-purple-500/40 backdrop-blur-xl shadow-xl flex flex-col justify-between shadow-purple-950/40"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-[11px] font-bold uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-300" />
                Garantia de Satisfação
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Suporte & Acompanhamento</h3>
              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                Você não fica sozinho após o lançamento. Ofereço suporte dedicado e orientações completas para a operação do seu software.
              </p>
            </div>
            <div className="pt-4 mt-2">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-xs font-bold text-purple-300 hover:text-purple-200 transition-colors"
              >
                <span>Falar diretamente com Pedro Gabriel</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
