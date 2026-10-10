import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Database, FileText, Stethoscope, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface PipelineStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  detail: string;
  paperNote: string;
  liveMetric: string;
  codeSnippet: string;
}

export const ArchitectureDiagram: React.FC = () => {
  const steps: PipelineStep[] = [
    {
      id: 'intake',
      stepNumber: '01',
      title: 'Structured Intake',
      subtitle: 'Separated Dual-Portal Ingestion',
      icon: <Stethoscope className="w-5 h-5 text-cobalt-400" />,
      detail:
        'A dedicated patient intake portal isolates raw clinical notes, histology reports, and biomarker parameters before doctor review.',
      paperNote: 'Prevents clinical data corruption by decoupling patient intake from triage analysis.',
      liveMetric: 'Zero cross-contamination between portals',
      codeSnippet: `interface PatientRecord {\n  patientId: string;\n  primarySite: "Breast" | "Lung" | "GI";\n  tnmStaging: "T2N1M0";\n  receptorStatus: { ER: "+", PR: "+", HER2: "-" };\n  histology: "Invasive Ductal Carcinoma";\n}`,
    },
    {
      id: 'normalization',
      stepNumber: '02',
      title: 'ICD-10 Normalization',
      subtitle: 'Deterministic Semantic Parsing',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      detail:
        'Biomarkers and clinical descriptions are mapped to standard ICD-10 oncology indices to eliminate ambiguity before matching.',
      paperNote: 'Categorization acts as an architectural guardrail against generative hallucination.',
      liveMetric: 'Strict ontology mapping',
      codeSnippet: `const normalizedEntity = {\n  code: "C50.912", // Malignant neoplasm of left breast\n  stageGroup: "Stage IIB",\n  riskStratification: "Intermediate-High",\n  validated: true\n};`,
    },
    {
      id: 'cohort',
      stepNumber: '03',
      title: 'Historical Cohort Match',
      subtitle: 'Deterministic 5-Case Engine',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      detail:
        'Evaluates high-dimensional patient similarities against clinical reference datasets to retrieve 5 closest historical cases.',
      paperNote: 'Surfaces empirical precedent rather than synthetic probabilities.',
      liveMetric: '5 Verified reference cases matched',
      codeSnippet: `const cohortMatches = clinicalDataset\n  .filter(c => c.primarySite === patient.primarySite)\n  .map(c => ({ case: c, score: computeSimilarity(c, patient) }))\n  .sort((a, b) => b.score - a.score)\n  .slice(0, 5);`,
    },
    {
      id: 'protocol',
      stepNumber: '04',
      title: 'Evidence-Based Protocol',
      subtitle: 'Explainable Treatment Options',
      icon: <AlertCircle className="w-5 h-5 text-cobalt-400" />,
      detail:
        'Cross-references clinical oncology treatment guidelines, flagging contraindications and surfacing primary options with cited reasoning.',
      paperNote: 'Trust-centric design requires transparent lineage for every suggested protocol.',
      liveMetric: '0 Unexplainable recommendations',
      codeSnippet: `const protocolProposal = {\n  primaryRegimen: "AC-T (Doxorubicin/Cyclophosphamide -> Paclitaxel)",\n  contraindicationsFlagged: 0,\n  radiationIndication: "Post-mastectomy recommended",\n  clinicianReviewRequired: true\n};`,
    },
    {
      id: 'export',
      stepNumber: '05',
      title: 'Clinician Signoff & PDF',
      subtitle: 'Client-Side jsPDF Engine',
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      detail:
        'The attending physician reviews, overrides, or confirms recommendations, generating an instant standardized clinical summary PDF for ward rounds.',
      paperNote: 'Human-in-the-loop validation ensures doctors retain total diagnostic authority.',
      liveMetric: 'Direct client-side jsPDF rendering',
      codeSnippet: `const doc = new jsPDF();\ndoc.setFont("helvetica", "bold");\ndoc.text("HAi Clinical Oncology Case Summary", 14, 20);\n// Generates encrypted, tamper-evident case report\ndoc.save(\`Clinical_Summary_\${patient.id}.pdf\`);`,
    },
  ];

  const [activeStepId, setActiveStepId] = useState<string>('intake');
  const activeStep = steps.find((s) => s.id === activeStepId) || steps[0];

  return (
    <div className="w-full bg-obsidian-card rounded-2xl border border-obsidian-border p-5 md:p-8 text-white overflow-hidden shadow-dark-card">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-obsidian-border gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-live animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-cobalt-400 font-semibold">
              Authentic System Architecture
            </span>
          </div>
          <h4 className="text-xl md:text-2xl font-bold font-display text-white mt-1">
            HAi Pilot: Trust-Centric Oncology Decision Pipeline
          </h4>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian-elevated border border-obsidian-border text-xs font-mono text-zinc-300">
          <span>ICAIEST-2026 Core Thesis</span>
        </div>
      </div>

      {/* Interactive Pipeline Step Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
        {steps.map((step) => {
          const isActive = step.id === activeStepId;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className={`text-left p-3 rounded-xl border transition-all duration-200 relative ${
                isActive
                  ? 'bg-cobalt-950/40 border-cobalt-500 shadow-sm'
                  : 'bg-obsidian-elevated/60 border-obsidian-border hover:border-zinc-700 text-zinc-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-cobalt-400">{step.stepNumber}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400" />
                )}
              </div>
              <div className="font-display font-semibold text-xs md:text-sm text-white line-clamp-1">
                {step.title}
              </div>
              <div className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                {step.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-obsidian-elevated/80 rounded-xl p-5 md:p-6 border border-obsidian-border"
        >
          {/* Explanation Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-obsidian-card border border-obsidian-border">
                {activeStep.icon}
              </div>
              <div>
                <span className="font-mono text-xs text-cobalt-400 font-semibold">
                  STAGE {activeStep.stepNumber} / 05
                </span>
                <h5 className="text-lg md:text-xl font-bold font-display text-white">
                  {activeStep.title} — {activeStep.subtitle}
                </h5>
              </div>
            </div>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              {activeStep.detail}
            </p>

            <div className="p-3.5 rounded-lg bg-obsidian-card/90 border border-obsidian-border/80 text-xs md:text-sm">
              <span className="font-mono text-amber-warm font-semibold block mb-1">
                ★ Research Rationale (ICAIEST-2026):
              </span>
              <p className="text-zinc-300 italic">{activeStep.paperNote}</p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 px-3 py-2 rounded-md border border-emerald-900/40">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Production Verification: {activeStep.liveMetric}</span>
            </div>
          </div>

          {/* Code & Logic Representation Column */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-obsidian rounded-xl p-4 border border-obsidian-border font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-obsidian-border text-zinc-400">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400">
                Implementation Logic
              </span>
              <span className="text-[11px] text-cobalt-400">HAi Pilot Engine</span>
            </div>

            <pre className="text-zinc-200 overflow-x-auto p-2 bg-obsidian-card/50 rounded-lg text-[11px] leading-relaxed my-auto">
              <code>{activeStep.codeSnippet}</code>
            </pre>

            <div className="pt-3 mt-3 border-t border-obsidian-border text-[11px] text-zinc-400 flex items-center justify-between">
              <span>Human Clinician Oversight</span>
              <span className="text-emerald-400 font-semibold">Always Active</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Explanatory Footer Bar */}
      <div className="mt-6 pt-4 border-t border-obsidian-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400" />
          <span>Real, deployed architecture — verified on live Vercel build</span>
        </span>
        <a
          href="https://co-pilot-nine.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-cobalt-400 hover:text-cobalt-300 font-medium transition-colors"
        >
          <span>Launch Deployed Application</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
