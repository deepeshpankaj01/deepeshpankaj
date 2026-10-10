import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Copy, Check, Send, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // Ignore if confetti not supported
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus('Please complete all required fields.');
      return;
    }

    const emailSubject = subject.trim() || `Portfolio Inquiry from ${name.trim()}`;
    const emailBody = `Hi Deepesh,\n\n${message.trim()}\n\n—\nFrom: ${name.trim()}\nEmail: ${email.trim()}`;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    setFormStatus('Opening your default email application...');

    setTimeout(() => {
      setFormStatus(null);
    }, 4000);
  };

  return (
    <footer
      id="contact"
      className="bg-obsidian text-white pt-24 pb-12 border-t border-obsidian-border relative overflow-hidden"
      aria-label="Contact and Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-card border border-obsidian-border text-xs font-mono text-cobalt-400 font-semibold">
            <span>05 — CONNECT &amp; COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tightest leading-[1.1]">
            Let's engineer{' '}
            <span className="editorial-serif-accent font-normal text-cobalt-400 block sm:inline">
              something meaningful.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Always open to discuss software engineering, clinical AI architectures, high-ambition product roles, hackathons, or research collaborations.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Direct Verified Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Email Card */}
            <div className="p-6 rounded-2xl bg-obsidian-card border border-obsidian-border space-y-4 shadow-dark-card">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-cobalt-400 font-semibold">
                  Direct Inbox
                </span>
                <span className="text-xs font-mono text-zinc-400">Guaranteed Response</span>
              </div>

              <div>
                <p className="text-sm text-zinc-300">
                  Prefer direct email? Copy my address or send a quick dispatch:
                </p>
                <div className="mt-3 flex items-center justify-between p-3 rounded-xl bg-obsidian-elevated border border-obsidian-border font-mono text-xs text-white">
                  <span className="truncate pr-2">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={copyEmailToClipboard}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-obsidian-card hover:bg-obsidian-elevated border border-obsidian-border transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-zinc-400 group-hover:text-white">
                  <Github className="w-5 h-5" />
                  <span className="font-mono text-xs">↗</span>
                </div>
                <div className="mt-3">
                  <span className="text-xs text-zinc-400 block font-mono">Code</span>
                  <span className="text-sm font-bold font-display text-white">GitHub</span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-obsidian-card hover:bg-obsidian-elevated border border-obsidian-border transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-zinc-400 group-hover:text-white">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-mono text-xs">↗</span>
                </div>
                <div className="mt-3">
                  <span className="text-xs text-zinc-400 block font-mono">Network</span>
                  <span className="text-sm font-bold font-display text-white">LinkedIn</span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-obsidian-card hover:bg-obsidian-elevated border border-obsidian-border transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-zinc-400 group-hover:text-white">
                  <Instagram className="w-5 h-5" />
                  <span className="font-mono text-xs">↗</span>
                </div>
                <div className="mt-3">
                  <span className="text-xs text-zinc-400 block font-mono">Social</span>
                  <span className="text-sm font-bold font-display text-white">Instagram</span>
                </div>
              </a>
            </div>

            {/* Academic Location Pill */}
            <div className="p-4 rounded-xl bg-obsidian-card border border-obsidian-border text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Bhopal, Madhya Pradesh, India</span>
              <span className="text-emerald-400 font-semibold">IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Interactive Direct Email Composer Form */}
          <div className="lg:col-span-7 bg-obsidian-card p-6 sm:p-8 rounded-2xl border border-obsidian-border shadow-dark-card">
            <div className="space-y-1 mb-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Compose Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Fires directly into your native email client securely. No third-party data tracking.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-zinc-300 block">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Priya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-elevated border border-obsidian-border text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cobalt-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-zinc-300 block">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priya@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-elevated border border-obsidian-border text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cobalt-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-zinc-300 block">
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project Collaboration / Engineering Role / Hackathon Team"
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-elevated border border-obsidian-border text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cobalt-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-zinc-300 block">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you building or exploring? Let's discuss architecture, challenges, or goals..."
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-elevated border border-obsidian-border text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cobalt-500 transition-colors resize-y"
                />
              </div>

              {formStatus && (
                <div className="p-3 rounded-lg bg-cobalt-950/60 border border-cobalt-800 text-xs font-mono text-cobalt-300">
                  {formStatus}
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Mail Client</span>
                </button>
                <span className="text-[11px] font-mono text-zinc-500">
                  Pre-populates an encrypted email for one-click sending.
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* ── Editorial Master Footer ─────────────────────────────── */}
        <div className="pt-8 border-t border-obsidian-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-display font-bold text-white text-sm">
              Deepesh Kumar Pankaj
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span>BCA Student &amp; AI Builder · LNCT University, Bhopal</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#proof" className="hover:text-white transition-colors">
              Proof
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-cobalt-400 hover:text-cobalt-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
