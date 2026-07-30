import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { motion } from 'motion/react';
import { MessageSquareQuote, Star, Quote, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 relative overflow-hidden bg-slate-950/80 border-t border-purple-900/40">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Depoimentos de Clientes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que dizem sobre <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">meu trabalho e entregas</span>
          </h2>
          <p className="mt-4 text-purple-100/80 text-sm sm:text-base leading-relaxed">
            A satisfação dos meus clientes e parceiros de negócios é o principal indicador da qualidade do meu código.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 rounded-3xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-xl flex flex-col justify-between shadow-xl relative group hover:border-purple-500/60 hover:bg-slate-900/95 transition-all duration-300 shadow-purple-950/30"
            >
              <Quote className="w-10 h-10 text-purple-500/20 absolute top-6 right-6 group-hover:text-purple-500/40 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Client Info (No photo - using styled initial avatar badge) */}
              <div className="pt-4 border-t border-purple-900/40 flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-violet-700 flex items-center justify-center text-white text-xs font-extrabold shadow-md shadow-purple-950/40 border border-purple-400/40 shrink-0">
                  {item.clientName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.clientName}</h3>
                  <p className="text-[11px] text-purple-200/80">
                    {item.clientRole} • <strong className="text-purple-300 font-semibold">{item.companyName}</strong>
                  </p>
                  <span className="inline-block mt-0.5 text-[10px] text-purple-300/60 font-mono">
                    {item.projectType}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note / Notice Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-purple-200/60 font-mono bg-purple-950/40 border border-purple-900/40 inline-block px-4 py-2 rounded-xl">
            💡 Nota: Os depoimentos acima representam feedbacks de clientes reais e exemplos de projetos entregues.
          </p>
        </div>

      </div>
    </section>
  );
};
