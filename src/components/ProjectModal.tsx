import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-obsidian-card rounded-2xl border border-obsidian-border text-white p-6 sm:p-8 shadow-dark-card"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-obsidian-elevated hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-obsidian-border"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-cobalt-950/60 text-cobalt-400 border border-cobalt-800/50">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-obsidian-elevated text-zinc-300 border border-obsidian-border">
                    {project.badge}
                  </span>
                )}
                {project.status === 'live' && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-live animate-pulse" />
                    Verified Live
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {project.title}
              </h3>
              <p className="text-zinc-300 text-base font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Content Sections */}
            <div className="mt-6 space-y-6 text-sm text-zinc-300">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cobalt-400 mb-1.5 font-semibold">
                  The Problem &amp; Context
                </h4>
                <p className="leading-relaxed bg-obsidian-elevated/50 p-4 rounded-xl border border-obsidian-border">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cobalt-400 mb-1.5 font-semibold">
                  The Engineered Solution
                </h4>
                <p className="leading-relaxed bg-obsidian-elevated/50 p-4 rounded-xl border border-obsidian-border">
                  {project.solution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cobalt-400 mb-1.5 font-semibold">
                  Personal Contribution &amp; Architecture
                </h4>
                <p className="leading-relaxed bg-obsidian-elevated/50 p-4 rounded-xl border border-obsidian-border">
                  {project.myContribution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cobalt-400 mb-2 font-semibold">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2">
                  {project.technicalHighlights.map((th, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-200">{th}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Technologies &amp; Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-obsidian-elevated border border-obsidian-border font-mono text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="mt-8 pt-6 border-t border-obsidian-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-sm transition-colors shadow-sm"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-elevated hover:bg-zinc-800 text-zinc-200 font-medium text-sm transition-colors border border-obsidian-border"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                Close ESC
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
