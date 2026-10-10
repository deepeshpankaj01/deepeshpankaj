import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { GalleryPhoto } from '../data/portfolioData';

interface PhotoLightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < photos.length;
  const currentPhoto = isOpen ? photos[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % photos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, activeIndex, photos.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.title}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/10 focus:outline-none"
            aria-label="Close photo viewer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex - 1 + photos.length) % photos.length);
            }}
            className="absolute left-4 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/10 hidden sm:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex + 1) % photos.length);
            }}
            className="absolute right-4 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/10 hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
          >
            <img
              src={currentPhoto.imageSrc}
              alt={currentPhoto.title}
              className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Photo Metadata Card */}
            <div className="mt-4 px-5 py-3 rounded-xl bg-zinc-950/80 border border-white/10 text-center max-w-xl backdrop-blur-md">
              <h4 className="text-white font-display font-bold text-base sm:text-lg">
                {currentPhoto.title}
              </h4>
              <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">
                {currentPhoto.caption}
              </p>
              <div className="flex items-center justify-center gap-4 mt-2 text-zinc-400 font-mono text-xs">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cobalt-400" />
                  {currentPhoto.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {currentPhoto.year}
                </span>
                <span className="text-zinc-500">
                  {activeIndex + 1} / {photos.length}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
