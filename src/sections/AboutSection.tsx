import React from 'react';
import { Code2, Cpu, Layout, Server, Terminal, GraduationCap, Award, BookOpen, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-cobalt-600" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-amber-editorial" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-cobalt-600" />;
      case 'Server':
        return <Server className="w-4 h-4 text-emerald-600" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-ink-primary" />;
      default:
        return <Code2 className="w-4 h-4 text-cobalt-600" />;
    }
  };

  const pillars = [
    {
      role: 'The Builder',
      title: '4 Live Deployed Products',
      desc: 'HAi Pilot, Sathi, Fiira, DP Jewels — actively running on Vercel & Netlify with zero mockups.',
      icon: <Award className="w-5 h-5 text-cobalt-600" />,
    },
    {
      role: 'The Researcher',
      title: 'ICAIEST-2026 Paper Author',
      desc: 'Peer-reviewed clinical research on trust-centric, explainable oncology triage paradigms.',
      icon: <BookOpen className="w-5 h-5 text-amber-editorial" />,
    },
    {
      role: 'The Founder',
      title: 'Architecting Panchayat',
      desc: 'Hyperlocal civic network built around official Local Government Directory (LGD) identities.',
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
    },
    {
      role: 'The Scholar',
      title: 'LNCT University, Bhopal',
      desc: 'BCA (2025–2028), Semester 3. DAV Public School alumnus.',
      icon: <GraduationCap className="w-5 h-5 text-ink-primary" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-canvas-bone border-b border-black/8"
      aria-label="About Deepesh Kumar Pankaj and Technical Expertise"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 text-xs font-mono text-cobalt-700 font-semibold shadow-xs">
            <span>03 — ABOUT &amp; EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-primary tracking-tightest leading-[1.1]">
            Curiosity grounded in{' '}
            <span className="editorial-serif-accent font-normal text-cobalt-600 block sm:inline">
              production execution.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            I believe software engineering is an empirical craft. Rather than accumulating theoretical knowledge for years, I ship systems that test hypotheses against real users.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
            <p>
              I am currently in my third semester pursuing a Bachelor of Computer Applications (BCA) at{' '}
              <strong className="text-ink-primary font-semibold">LNCT University, Bhopal</strong>. While grounding myself in academic computer science foundations—Data Structures, Relational Database Theory, and Object-Oriented Architecture—I refuse to wait until graduation to build things that matter.
            </p>
            <p>
              To date, I have shipped <strong className="text-ink-primary font-semibold">four production web applications</strong> spanning clinical oncology decision support, multi-persona conversational companions, client-side biological health engines, and luxury brand e-commerce.
            </p>
            <p>
              In February 2026, I presented my clinical AI research paper at{' '}
              <strong className="text-ink-primary font-semibold">ICAIEST-2026</strong>, arguing for explainable, deterministic case retrieval in high-stakes healthcare. In April 2026, I participated in the prestigious{' '}
              <strong className="text-ink-primary font-semibold">IDE Bootcamp (Edition 3, Phase 2)</strong> organized by the Ministry of Education (MoE), Wadhwani Foundation, and SBI Foundation at MITS Gwalior.
            </p>

            {/* Academic Snapshot Card */}
            <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-editorial grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono mt-6">
              <div>
                <span className="text-xs text-ink-muted uppercase tracking-wider block">University</span>
                <span className="text-ink-primary font-semibold font-sans text-base block mt-0.5">
                  LNCT University, Bhopal
                </span>
                <span className="text-xs text-ink-muted">BCA (2025–2028) · Semester 3</span>
              </div>
              <div>
                <span className="text-xs text-ink-muted uppercase tracking-wider block">Schooling</span>
                <span className="text-ink-primary font-semibold font-sans text-base block mt-0.5">
                  DAV Public School
                </span>
                <span className="text-xs text-ink-muted">Rihand Nagar · CBSE Class X &amp; Class XII</span>
              </div>
            </div>
          </div>

          {/* 4 Identity Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-black/8 shadow-editorial hover:shadow-editorial-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-canvas-subtle border border-black/5">
                    {p.icon}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-cobalt-600 font-semibold uppercase">
                      {p.role}
                    </span>
                    <h3 className="font-display font-bold text-base text-ink-primary">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed pl-11">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Technical Arsenal: Pragmatic Breakdown ──────────────── */}
        <div className="pt-12 border-t border-black/8">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase text-cobalt-600 font-semibold tracking-wider">
              Technical Arsenal
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink-primary mt-1">
              Tested in shipped systems, not tutorials.
            </h3>
            <p className="text-sm text-ink-secondary mt-1">
              Languages, libraries, and frameworks I leverage to construct robust, high-performance web products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-black/8 shadow-editorial flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-3 border-b border-black/5">
                    {getCategoryIcon(cat.iconName)}
                    <h4 className="font-display font-bold text-sm text-ink-primary">
                      {cat.title}
                    </h4>
                  </div>

                  <ul className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center justify-between text-xs font-mono"
                      >
                        <span
                          className={
                            skill.highlight
                              ? 'text-ink-primary font-semibold'
                              : 'text-ink-secondary'
                          }
                        >
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-ink-muted uppercase">
                            {skill.level}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
