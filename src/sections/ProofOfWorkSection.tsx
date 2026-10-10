import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, ZoomIn, CheckCircle2 } from 'lucide-react';
import { RESEARCH_PAPER, TIMELINE, GALLERY_PHOTOS } from '../data/portfolioData';

interface ProofOfWorkSectionProps {
  onPhotoClick: (index: number) => void;
}

export const ProofOfWorkSection: React.FC<ProofOfWorkSectionProps> = ({ onPhotoClick }) => {
  return (
    <section
      id="proof"
      className="py-24 sm:py-32 bg-[#F4F4F0] border-b border-black/8"
      aria-label="Proof of Work, Academic Research, and National Stages"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 text-xs font-mono text-cobalt-700 font-semibold shadow-xs">
            <span>04 — PROOF OF WORK &amp; FIELDWORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-primary tracking-tightest leading-[1.1]">
            Rooms I've worked in.{' '}
            <span className="editorial-serif-accent font-normal text-cobalt-600 block sm:inline">
              Evidence on the record.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            From presenting peer-reviewed clinical AI research to national innovation stages at Bharat Mandapam and Ministry of Education bootcamps.
          </p>
        </div>

        {/* ── 1. SCHOLARLY RESEARCH SHOWCASE: ICAIEST-2026 ─────────── */}
        <div className="mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-black/8 shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Research Paper Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-editorial" />
                  <span>ICAIEST-2026 International Conference Presentation</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-ink-secondary">
                  Feb 27–28, 2026
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-ink-primary tracking-tight">
                {RESEARCH_PAPER.title}
              </h3>

              <div className="text-xs sm:text-sm font-mono text-ink-muted">
                {RESEARCH_PAPER.conference} · {RESEARCH_PAPER.venue}
              </div>

              <div className="p-4 rounded-xl bg-canvas-subtle border border-black/5 text-sm text-ink-secondary leading-relaxed">
                <strong className="text-ink-primary block mb-1 font-sans">
                  Core Thesis &amp; Abstract:
                </strong>
                {RESEARCH_PAPER.abstract}
              </div>

              {/* Key Contributions */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cobalt-700 font-semibold">
                  Key Scholarly Contributions:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-ink-secondary">
                  {RESEARCH_PAPER.keyContributions.map((kc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{kc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Research Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {RESEARCH_PAPER.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-zinc-100 text-ink-secondary text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Research Visual Certificate & Podium Frame */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => onPhotoClick(1)} // Index 1 is certificate
                className="group cursor-pointer rounded-2xl overflow-hidden border border-black/8 shadow-sm bg-zinc-100 relative"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={RESEARCH_PAPER.certificateImage}
                    alt="ICAIEST-2026 certificate presentation"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-white text-xs font-mono text-ink-secondary flex items-center justify-between border-t border-black/5">
                  <span>Certificate Ceremony</span>
                  <ZoomIn className="w-3.5 h-3.5 text-cobalt-600" />
                </div>
              </div>

              <div
                onClick={() => onPhotoClick(2)} // Index 2 is podium presentation
                className="group cursor-pointer rounded-2xl overflow-hidden border border-black/8 shadow-sm bg-zinc-100 relative"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={RESEARCH_PAPER.talkImage}
                    alt="ICAIEST-2026 paper presentation session"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-white text-xs font-mono text-ink-secondary flex items-center justify-between border-t border-black/5">
                  <span>Presentation Session</span>
                  <ZoomIn className="w-3.5 h-3.5 text-cobalt-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. CURATED NATIONAL STAGES TIMELINE ────────────────── */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase text-cobalt-600 font-semibold tracking-wider">
              National Recognition &amp; Bootcamps
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink-primary mt-1">
              Fieldwork, Summits &amp; Training
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-black/8 shadow-editorial flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cobalt-600 px-2.5 py-0.5 rounded-full bg-cobalt-50 border border-cobalt-200">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-ink-primary">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
                    <MapPin className="w-3.5 h-3.5 text-cobalt-600" />
                    <span>{item.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-mono text-ink-muted">
                  Organized by: {item.organization}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. CURATED PHOTOGRAPHIC ARCHIVE & LIGHTBOX ───────────── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
            <div>
              <span className="font-mono text-xs uppercase text-cobalt-600 font-semibold tracking-wider">
                Photographic Archive
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink-primary mt-1">
                Visual Proof of Presence
              </h3>
            </div>
            <span className="text-xs font-mono text-ink-muted">
              Click any photograph to inspect in high resolution
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_PHOTOS.map((photo, index) => {
              const isWide = photo.aspect === 'wide';
              return (
                <motion.div
                  key={photo.id}
                  whileHover={{ y: -3 }}
                  onClick={() => onPhotoClick(index)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border border-black/8 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 relative ${
                    isWide ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-100 relative">
                    <img
                      src={photo.imageSrc}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2 rounded-full bg-white/90 text-ink-primary shadow-md">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border-t border-black/5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                      <span>{photo.event}</span>
                      <span>{photo.year}</span>
                    </div>
                    <h5 className="font-display font-bold text-sm text-ink-primary line-clamp-1">
                      {photo.title}
                    </h5>
                    <p className="text-[11px] text-ink-secondary line-clamp-1">
                      {photo.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
