import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['top', 'work', 'about', 'proof', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Proof of Work', href: '#proof', id: 'proof' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FBFBF9]/85 backdrop-blur-md border-b border-black/8 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Deepesh Kumar Pankaj — Return to top"
          >
            <div className="w-10 h-10 rounded-xl bg-ink-primary text-white flex items-center justify-center font-display font-bold text-sm tracking-wider shadow-sm group-hover:bg-cobalt-600 transition-colors">
              DKP
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base text-ink-primary tracking-tight">
                Deepesh Pankaj
              </span>
              <span className="text-[11px] font-mono text-ink-muted -mt-0.5">
                Builder · AI &amp; Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 px-3 py-1.5 rounded-full border border-black/8 shadow-xs backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-ink-primary text-white shadow-xs'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-black/4'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-live animate-pulse" />
              <span>Available for Collaborations</span>
            </div>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-primary hover:bg-cobalt-600 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-black/10 text-ink-primary hover:bg-zinc-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl bg-white border border-black/10 shadow-lg space-y-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-live animate-pulse" />
              <span>Available for Collaborations</span>
            </div>

            <div className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium text-ink-primary hover:bg-black/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-black/8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-ink-primary text-white text-sm font-semibold hover:bg-cobalt-600 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
