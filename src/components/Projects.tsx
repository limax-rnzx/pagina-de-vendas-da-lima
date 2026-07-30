import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { motion } from 'motion/react';
import { FolderGit2, ExternalLink, Eye, ArrowRight, ArrowUpRight, Layers, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'saas', label: 'SaaS' },
    { id: 'sistemas', label: 'Sistemas Empresas' },
    { id: 'automacao', label: 'Automações' },
    { id: 'web', label: 'Desenvolvimento Web' },
  ];

  const filteredProjects = selectedCategory === 'todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 md:py-28 relative overflow-hidden bg-slate-950 border-t border-purple-900/40">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfólio de Cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos desenvolvidos com <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">tecnologia de ponta</span>
          </h2>
          <p className="mt-4 text-purple-100/80 text-sm sm:text-base leading-relaxed">
            Conheça alguns dos softwares, plataformas SaaS e automações que criei para resolver desafios reais.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-purple-950/40 border border-purple-900/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl bg-slate-900/80 border border-purple-900/50 backdrop-blur-xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Tech Component Preview Container (No photo) */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950 border-b border-purple-900/40 p-5 flex flex-col justify-between font-mono">
                {/* Header Window Bar */}
                <div className="flex items-center justify-between text-xs text-purple-300/70 border-b border-purple-900/40 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-purple-300/80 tracking-wider">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Tech Highlights Graphic */}
                <div className="my-auto space-y-2 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-300 font-bold">{project.title}</span>
                    <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-800/60 text-purple-300 text-[10px]">
                      {project.completionYear}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-purple-800/40 text-[11px] text-purple-200/90 leading-snug">
                    <p className="text-purple-300/70 text-[10px] uppercase font-bold mb-1">// Destaque de Engenharia</p>
                    <p className="line-clamp-2">{project.features[0] || project.shortDescription}</p>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="flex items-center justify-between pt-2 border-t border-purple-900/40 text-[11px]">
                  <span className="text-purple-300/80">Cliente: <strong className="text-white font-sans">{project.clientType}</strong></span>
                  <span className="text-purple-400 font-bold hover:underline cursor-pointer flex items-center gap-1" onClick={() => setActiveProjectModal(project)}>
                    Explorar <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                {/* Quick Hover Action Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/80 backdrop-blur-xs">
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 text-white text-xs font-bold shadow-xl flex items-center gap-2 hover:from-purple-500 hover:to-fuchsia-500 transition-all transform group-hover:scale-105 duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    Ver Detalhes do Projeto
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-800/50 text-[11px] font-mono text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                  <span className="text-[11px] text-purple-300/80 font-mono">
                    Cliente: <strong className="text-white font-semibold">{project.clientType}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-bold text-purple-300 hover:text-purple-200 flex items-center gap-1 transition-colors"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
          onSelectService={onSelectService}
        />

      </div>
    </section>
  );
};
