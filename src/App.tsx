import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './sections/HeroSection';
import { SelectedWorkSection } from './sections/SelectedWorkSection';
import { AboutSection } from './sections/AboutSection';
import { ProofOfWorkSection } from './sections/ProofOfWorkSection';
import { ContactSection } from './sections/ContactSection';
import { PhotoLightbox } from './components/PhotoLightbox';
import { ProjectModal } from './components/ProjectModal';
import { Project, GALLERY_PHOTOS } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-canvas-bone text-ink-primary font-sans antialiased selection:bg-cobalt-600 selection:text-white">
      {/* Custom Fluid Desktop Cursor */}
      <CustomCursor />

      {/* Floating Editorial Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Sections */}
      <main>
        {/* 01 — Hero */}
        <HeroSection onContactClick={scrollToContact} />

        {/* 02 — Selected Work */}
        <SelectedWorkSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 03 — About & Expertise */}
        <AboutSection />

        {/* 04 — Proof of Work & Fieldwork */}
        <ProofOfWorkSection onPhotoClick={(idx) => setActivePhotoIndex(idx)} />
      </main>

      {/* 05 — Contact & Editorial Footer */}
      <ContactSection />

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* High-Performance Photo Lightbox Modal */}
      <PhotoLightbox
        photos={GALLERY_PHOTOS}
        activeIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(idx) => setActivePhotoIndex(idx)}
      />
    </div>
  );
};

export default App;
