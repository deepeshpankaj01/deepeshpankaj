import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { HeroCanvas } from '../components/HeroCanvas';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-canvas-bone border-b border-black/8"
      aria-label="Introduction and positioning"
    >
      {/* Background Interactive Generative Neural Matrix */}
      <HeroCanvas />

      {/* Subtle Editorial Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Typographic Positioning Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Identity Moniker & Academic Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 text-xs font-mono"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white font-semibold">
                <Terminal className="w-3 h-3 text-cobalt-400" />
                <span>LNCT University · BCA Semester 3</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-editorial" />
                <span>ICAIEST-2026 Clinical AI Author</span>
              </span>
            </motion.div>

            {/* Giant Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-ink-primary tracking-tightest leading-[1.04]">
                Architecting{' '}
                <span className="editorial-serif-accent font-normal text-cobalt-600 block sm:inline">
                  Real Systems
                </span>{' '}
                from First Principles.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-ink-secondary tracking-tight">
                Deepesh Kumar Pankaj — Systems &amp; AI Developer · Founder
              </p>
            </motion.div>

            {/* Concise Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed"
            >
              I engineer and ship <strong>production AI web tools</strong>, clinical decision-support architectures, and civic platforms for India. I don't wait for graduation to write production code—I combine empirical computer science rigor with high-speed execution.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink-primary hover:bg-cobalt-600 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-ink-primary font-semibold text-sm transition-all duration-200 border border-black/10 shadow-xs"
              >
                <Mail className="w-4 h-4 text-cobalt-600" />
                <span>Say Hello</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-ink-secondary hover:text-ink-primary font-mono text-xs transition-all duration-200 border border-black/10 shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>github.com/deepeshpankaj01 ↗</span>
              </a>
            </motion.div>

            {/* Verified Metric Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-black/8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {METRICS.map((metric, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-ink-primary tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-ink-secondary">
                    {metric.label}
                  </div>
                  <div className="text-[11px] font-mono text-ink-muted">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carefully Framed Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer Editorial Framing with Asymmetric Accent */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cobalt-600/15 via-transparent to-amber-500/15 blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl overflow-hidden bg-white border border-black/10 shadow-editorial">
                {/* Real High-Resolution Portrait */}
                <div className="aspect-square overflow-hidden bg-zinc-100 relative">
                  <img
                    src="/images/profile.webp"
                    alt="Deepesh Kumar Pankaj — Systems and AI Developer"
                    width={400}
                    height={400}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Overlay Badging */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                      <Sparkles className="w-3 h-3 text-cobalt-400" />
                      <span>BCA '28 · LNCT</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[11px] text-zinc-300">
                      Bhopal, India
                    </span>
                  </div>
                </div>

                {/* Sub-caption Strip */}
                <div className="p-3 bg-white text-xs text-ink-secondary border-t border-black/5 flex items-center justify-between font-mono">
                  <span>Available for high-impact teams</span>
                  <span className="text-emerald-600 font-bold">● Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
