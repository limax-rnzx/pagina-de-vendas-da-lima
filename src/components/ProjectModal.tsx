import React from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Calendar, User, Tag, Check, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectService?: (serviceTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectService }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-purple-900/50 shadow-2xl p-6 sm:p-8 shadow-purple-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-950/80 text-purple-300 hover:text-white hover:bg-purple-900 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-200 text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
            {project.categoryLabel}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
        </div>

        {/* Tech Architecture Header Card (No photo) */}
        <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 p-5 mb-6 font-mono shadow-inner">
          <div className="flex items-center justify-between text-xs text-purple-300/70 border-b border-purple-900/50 pb-2.5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-[10px] uppercase font-bold text-purple-300">
              {project.categoryLabel} • {project.completionYear}
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-purple-200 font-bold font-sans text-sm">{project.title}</span>
              <span className="px-2 py-0.5 rounded bg-purple-900/80 border border-purple-500/40 text-purple-200 text-[10px]">
                Entregue
              </span>
            </div>
            <p className="text-purple-100/90 font-sans text-xs leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Project Meta Info */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-800/50 text-xs">
          <div>
            <span className="block text-purple-300/80 font-mono uppercase text-[10px] flex items-center gap-1">
              <User className="w-3 h-3 text-purple-400" /> Cliente
            </span>
            <span className="font-bold text-white mt-0.5 block">{project.clientType}</span>
          </div>
          <div>
            <span className="block text-purple-300/80 font-mono uppercase text-[10px] flex items-center gap-1">
              <Calendar className="w-3 h-3 text-purple-400" /> Ano de Lançamento
            </span>
            <span className="font-bold text-white mt-0.5 block">{project.completionYear}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block text-purple-300/80 font-mono uppercase text-[10px] flex items-center gap-1">
              <Tag className="w-3 h-3 text-purple-400" /> Categoria
            </span>
            <span className="font-bold text-purple-300 mt-0.5 block">{project.categoryLabel}</span>
          </div>
        </div>

        {/* Full Description */}
        <div className="space-y-4 mb-6">
          <h3 className="text-base font-bold text-white">Visão Geral do Projeto</h3>
          <p className="text-sm text-purple-100/90 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3 mb-6">
          <h3 className="text-base font-bold text-white">Recursos Implementados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-purple-100/90 p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/40">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase text-purple-300/80 mb-2">Tecnologias Utilizadas</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-800/50 text-purple-200 text-xs font-mono">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-purple-900/40 flex flex-col sm:flex-row gap-3">
          <a
            href="#contato"
            onClick={() => {
              onClose();
              if (onSelectService) onSelectService(`Projeto Similar a ${project.title}`);
            }}
            className="flex-1 py-3 px-6 rounded-xl text-center text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-fuchsia-500 transition-all flex items-center justify-center gap-2"
          >
            <span>Quero um Projeto Como Este</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-6 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
