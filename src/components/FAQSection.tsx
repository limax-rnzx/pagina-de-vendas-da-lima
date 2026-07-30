import React, { useState } from 'react';
import { FAQS, PEDRO_INFO } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden bg-slate-950 border-t border-purple-900/40">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">Frequentes (FAQ)</span>
          </h2>
          <p className="mt-3 text-purple-100/80 text-sm sm:text-base leading-relaxed">
            Respostas claras para as principais dúvidas sobre desenvolvimento, prazos, formas de pagamento e contratação.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-4 h-4 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar dúvida (ex: prazo, pagamento, suporte)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-purple-900/50 text-purple-100 placeholder-purple-300/50 text-xs sm:text-sm focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/80 transition-all shadow-inner"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-purple-500/50 shadow-lg shadow-purple-950/30'
                      : 'bg-slate-900/50 border-purple-900/40 hover:border-purple-800/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0"></span>
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-xl bg-purple-950/60 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-purple-500/30 text-purple-200' : 'text-purple-300/70'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-purple-100/90 leading-relaxed border-t border-purple-900/40 pt-4 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-purple-300/70 text-sm">
              Nenhuma pergunta encontrada para "{searchTerm}". Entre em contato direto pelo WhatsApp para tirar sua dúvida!
            </div>
          )}
        </div>

        {/* Bottom CTA for unlisted questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-purple-950/40 border border-purple-900/50">
          <p className="text-xs sm:text-sm text-purple-100/90">
            Ficou com alguma outra dúvida específica sobre o seu projeto?
          </p>
          <a
            href={PEDRO_INFO.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs font-bold text-purple-300 hover:text-purple-200 underline underline-offset-4"
          >
            Fale direto comigo no WhatsApp e receba suporte imediato →
          </a>
        </div>

      </div>
    </section>
  );
};
