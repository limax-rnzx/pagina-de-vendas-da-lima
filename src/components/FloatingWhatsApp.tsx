import React, { useState } from 'react';
import { PEDRO_INFO } from '../data/portfolioData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip Box */}
      {tooltipVisible && (
        <div className="relative p-3 rounded-2xl bg-slate-900/95 border border-slate-800 text-slate-200 text-xs shadow-2xl backdrop-blur-md max-w-xs animate-bounce-slow flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-medium text-slate-200">Fale com Pedro no WhatsApp!</span>
          </div>
          <button
            type="button"
            onClick={() => setTooltipVisible(false)}
            className="text-slate-500 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={PEDRO_INFO.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Atendimento via WhatsApp"
      >
        <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
          <MessageSquare className="w-7 h-7 text-emerald-400 group-hover:text-white transition-colors" />
        </div>
      </a>
    </div>
  );
};
