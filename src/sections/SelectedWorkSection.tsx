import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Info } from 'lucide-react';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { Project, PROJECTS } from '../data/portfolioData';

interface SelectedWorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  const flagship = PROJECTS.find((p) => p.isFlagship) || PROJECTS[0];
  const supporting = PROJECTS.filter((p) => !p.isFlagship && !p.isLab);
  const labs = PROJECTS.filter((p) => p.isLab);

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#F4F4F0] border-b border-black/8 relative"
      aria-label="Selected engineering work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 text-xs font-mono text-cobalt-700 font-semibold shadow-xs">
            <span>02 — SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-primary tracking-tightest leading-[1.1]">
            Engineered for real users.{' '}
            <span className="editorial-serif-accent font-normal text-cobalt-600 block sm:inline">
              Verified in production.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Every application below is active, functional, and deployed on modern cloud infrastructure. No fabricated screenshots, placeholder metrics, or fake dashboards.
          </p>
        </div>

        {/* ── 1. FLAGSHIP PROJECT: HAi Pilot (HealthAI) ─────────── */}
        <div className="mb-20">
          <div className="bg-obsidian rounded-3xl p-6 sm:p-10 lg:p-12 border border-obsidian-border text-white shadow-dark-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-live animate-pulse" />
                    Live Deployed Product
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-950/60 text-amber-warm border border-amber-800/50">
                    ★ ICAIEST-2026 Peer-Reviewed Foundation
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                  {flagship.title}
                </h3>
                <p className="text-base sm:text-lg text-cobalt-300 font-medium">
                  {flagship.tagline}
                </p>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {flagship.summary}
                </p>

                {/* Key Technical Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {flagship.technicalHighlights.slice(0, 4).map((th, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{th}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {flagship.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-obsidian-elevated border border-obsidian-border font-mono text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  {flagship.liveUrl && (
                    <a
                      href={flagship.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white font-semibold text-sm transition-colors shadow-sm"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {flagship.githubUrl && (
                    <a
                      href={flagship.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-obsidian-elevated hover:bg-zinc-800 text-zinc-200 font-mono text-xs transition-colors border border-obsidian-border"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub (Co-pilot)</span>
                    </a>
                  )}
                  <button
                    onClick={() => onSelectProject(flagship)}
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Deep Architecture Specs →</span>
                  </button>
                </div>
              </div>

              {/* Research & Context Card */}
              <div className="lg:col-span-5 bg-obsidian-card p-6 rounded-2xl border border-obsidian-border space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-obsidian-border text-xs font-mono text-zinc-400">
                  <span className="text-amber-warm font-semibold">Scholarly Lineage</span>
                  <span>LNCT Bhopal · 2026</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base">
                    HAI: The Trust-Centric Paradigm in Clinical AI
                  </h4>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                    Published &amp; presented at ICAIEST-2026. This platform directly tests the hypothesis that deterministic historical case matching outperforms black-box generative models in high-stress clinical workflows.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-elevated border border-obsidian-border text-xs text-zinc-300 font-mono space-y-1">
                  <div className="text-cobalt-400">● 5 Case Matched Cohorts</div>
                  <div className="text-emerald-400">● ICD-10 Oncology Cross-Reference</div>
                  <div className="text-amber-400">● Instant jsPDF Case Export</div>
                </div>
              </div>
            </div>

            {/* Embedded Signature Interactive Architecture Diagram */}
            <div className="mt-8 pt-8 border-t border-obsidian-border">
              <ArchitectureDiagram />
            </div>
          </div>
        </div>

        {/* ── 2. SUPPORTING SHOWCASES: Sathi, Fiira, DP Jewels ───── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {supporting.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden border border-black/8 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Media Preview */}
                <div className="h-52 bg-zinc-100 overflow-hidden relative border-b border-black/5 group">
                  {project.previewImage ? (
                    <img
                      src={project.previewImage}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-zinc-400">
                      {project.title}
                    </div>
                  )}

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono text-ink-primary font-semibold shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-live" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-display font-bold text-ink-primary">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cobalt-600 font-semibold">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-ink-secondary line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-100 text-ink-secondary text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-black/5 flex items-center justify-between mt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-mono text-ink-secondary hover:text-ink-primary font-semibold flex items-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-black/5 text-ink-secondary hover:text-ink-primary transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-ink-primary text-white text-xs font-semibold hover:bg-cobalt-600 transition-colors shadow-xs"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── 3. ACTIVE LABS & IN-PROGRESS SYSTEMS: Panchayat & ANUVAA ─── */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/8 shadow-editorial">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/8 gap-2">
            <div>
              <span className="font-mono text-xs uppercase text-cobalt-600 font-semibold tracking-wider">
                Active Engineering Labs
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-ink-primary mt-0.5">
                Systems in Formulation &amp; Development
              </h3>
            </div>
            <span className="text-xs font-mono text-ink-muted">
              Long-term civic &amp; architectural missions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {labs.map((lab) => (
              <div
                key={lab.id}
                className="p-6 rounded-xl bg-canvas-subtle border border-black/5 flex flex-col justify-between hover:border-black/15 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xl text-ink-primary">
                      {lab.title}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-cobalt-50 text-cobalt-700 text-xs font-mono font-semibold border border-cobalt-200">
                      {lab.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-ink-muted">{lab.tagline}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {lab.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {lab.techStack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono text-ink-muted">
                        #{tech}
                      </span>
                    ))}
                  </div>

                  {lab.githubUrl && (
                    <a
                      href={lab.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-cobalt-600 hover:text-cobalt-700 font-semibold"
                    >
                      <span>Repository ↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
