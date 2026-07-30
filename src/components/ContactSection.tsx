import React, { useState } from 'react';
import { PEDRO_INFO, SERVICES } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { MessageSquare, Mail, Send, Check, Copy, Linkedin, Github, Instagram, ArrowUpRight, Sparkles, Shield, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialServiceTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceTitle }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: initialServiceTitle || 'Desenvolvimento de SaaS Personalizados',
    projectDetails: '',
    estimatedBudget: 'A definir / Sob Consulta'
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PEDRO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Olá Pedro Gabriel! Meu nome é ${formData.name || 'Cliente'}.
Gostaria de solicitar um orçamento para o meu projeto:

📌 *Serviço de Interesse:* ${formData.serviceType}
📧 *E-mail:* ${formData.email || 'Não informado'}
📞 *Telefone/WhatsApp:* ${formData.phone || 'Não informado'}
💰 *Orçamento Estimado:* ${formData.estimatedBudget}

📝 *Detalhes do Projeto:*
${formData.projectDetails || 'Gostaria de agendar uma conversa para explicar os detalhes.'}

Aguardarei seu retorno!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${PEDRO_INFO.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 relative overflow-hidden bg-slate-950 border-t border-purple-900/40">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 via-fuchsia-600/15 to-violet-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Vamos Conversar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pronto para transformar sua ideia em um <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">software de sucesso?</span>
          </h2>
          <p className="mt-4 text-purple-100/80 text-sm sm:text-base leading-relaxed">
            Preencha o formulário rápido de simulação de projeto ou entre em contato diretamente pelo WhatsApp ou E-mail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Methods & Social Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-xl shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Contato Direto
                </h3>
                <p className="text-xs text-purple-200/80">
                  Respondo rapidamente em horário comercial. Fique à vontade para enviar uma mensagem.
                </p>
              </div>

              {/* WhatsApp Button */}
              <a
                href={PEDRO_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-purple-950/60 border border-purple-500/40 hover:bg-purple-900/60 transition-all flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center text-purple-200 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-purple-300 block font-bold">Atendimento Ágil</span>
                    <span className="text-sm font-bold text-white">Chamar no WhatsApp</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-purple-900/50 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-mono text-purple-300/80 block">E-mail Profissional</span>
                    <span className="text-xs font-bold text-white truncate block">{PEDRO_INFO.email}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-purple-950 hover:bg-purple-900 text-xs font-bold text-purple-200 transition-colors flex items-center gap-1.5 shrink-0 border border-purple-800/60"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-purple-300" />
                      <span className="text-purple-300">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-purple-300" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links Bar */}
              <div>
                <span className="text-xs font-mono uppercase text-purple-300/80 block mb-3 font-semibold">Redes Sociais & Portfólios</span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={PEDRO_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-purple-900/50 hover:border-purple-500/60 hover:bg-purple-950/40 transition-all text-center flex flex-col items-center gap-1 group"
                  >
                    <Linkedin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-purple-200">LinkedIn</span>
                  </a>

                  <a
                    href={PEDRO_INFO.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-purple-900/50 hover:border-purple-500/60 hover:bg-purple-950/40 transition-all text-center flex flex-col items-center gap-1 group"
                  >
                    <Github className="w-5 h-5 text-fuchsia-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-purple-200">GitHub</span>
                  </a>

                  <a
                    href={PEDRO_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-purple-900/50 hover:border-purple-500/60 hover:bg-purple-950/40 transition-all text-center flex flex-col items-center gap-1 group"
                  >
                    <Instagram className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-purple-200">Instagram</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Commitments Card */}
            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-900/50 text-xs text-purple-100/80 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Resposta Rápida</span>
              </div>
              <p className="leading-relaxed">
                Mensagens enviadas via formulário geram uma solicitação direta e organizada no meu WhatsApp corporativo para atendimento prioritário.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Budget Simulation Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendWhatsApp}
              className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-xl shadow-2xl space-y-5"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Simular Orçamento de Projeto</h3>
                <p className="text-xs text-purple-200/80">
                  Preencha as informações do seu projeto para gerar uma mensagem estruturada e receber uma estimativa inicial.
                </p>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1.5">Seu Nome ou Empresa *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: João Silva"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-purple-900/60 text-purple-100 text-xs focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/80 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1.5">Seu E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: joao@empresa.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-purple-900/60 text-purple-100 text-xs focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/80 transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Service Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1.5">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-purple-900/60 text-purple-100 text-xs focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/80 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1.5">Serviço Desejado *</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-purple-900/60 text-purple-100 text-xs focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/80 transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Outro Projeto Sob Medida">Outro Projeto Sob Medida</option>
                  </select>
                </div>
              </div>

              {/* Estimated Budget Range */}
              <div>
                <label className="block text-xs font-medium text-purple-200 mb-1.5">Faixa de Orçamento Estimado</label>
                <select
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-purple-900/60 text-purple-100 text-xs focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/80 transition-colors"
                >
                  <option value="A definir / Sob Consulta">A definir / Quero orçamento personalizado</option>
                  <option value="R$ 1.500 a R$ 3.000">R$ 1.500 a R$ 3.000 (Site / Automação simples)</option>
                  <option value="R$ 3.000 a R$ 7.000">R$ 3.000 a R$ 7.000 (Sistema Médio / Automação completa)</option>
                  <option value="R$ 7.000+">Acima de R$ 7.000 (SaaS Completo / Plataforma Robusta)</option>
                </select>
              </div>

              {/* Project Details textarea */}
              <div>
                <label className="block text-xs font-medium text-purple-200 mb-1.5">Descrição do Projeto ou Ideia *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Conte um pouco sobre o seu projeto, os objetivos da sua empresa e o que você precisa que o software faça..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-purple-900/60 text-purple-100 text-xs focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/80 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Enviar Solicitação via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
