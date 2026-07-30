import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { motion } from 'motion/react';
import { Briefcase, Rocket, Building2, Cpu, Globe, Store, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Helper to resolve icon component dynamically
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-purple-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-fuchsia-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-purple-300" />;
      case 'Store':
        return <Store className="w-6 h-6 text-fuchsia-300" />;
      default:
        return <Briefcase className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 relative overflow-hidden bg-slate-950 border-t border-purple-900/40">
      {/* Background glow highlights */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Meus Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluções completas para <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">potencializar seu negócio</span>
          </h2>
          <p className="mt-4 text-purple-100/80 text-sm sm:text-base leading-relaxed">
            Do planejamento da arquitetura à entrega final, crio sistemas robustos e intuitivos adaptados exatamente às suas necessidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/60 hover:bg-slate-900/95 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
            >
              {/* Badge if present */}
              {service.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/40 text-purple-200 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-purple-300" />
                  {service.badge}
                </div>
              )}

              <div>
                {/* Icon box */}
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-purple-900/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-purple-500/60 transition-all duration-300 shadow-inner">
                  {renderIcon(service.iconName)}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Checklist Features */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-purple-900/40">
                  <span className="text-[11px] font-mono text-purple-300/80 uppercase tracking-wider block mb-2 font-semibold">
                    Destaques da Solução:
                  </span>
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-purple-100/90">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer & Action */}
              <div className="pt-4 border-t border-purple-900/40 mt-2">
                <a
                  href="#contato"
                  onClick={() => {
                    if (onSelectService) onSelectService(service.title);
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-purple-200 bg-slate-950/90 border border-purple-900/60 hover:border-purple-500/60 hover:bg-purple-500/20 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Orçamento para {service.id.toUpperCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-purple-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
