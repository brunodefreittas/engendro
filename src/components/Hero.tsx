import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, companyData } from '../data';
import { MessageSquare, FileText, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import bannerImg from '../assets/images/header_banner_components_1790876745185.jpg';

interface HeroProps {
  lang: Language;
  onOpenCatalog: () => void;
}

const productVideos = [
  'https://thinkddg.com/engendro/cristal1.mp4',
  'https://thinkddg.com/engendro/cristal2.mp4',
  'https://thinkddg.com/engendro/cristal3.mp4',
  'https://thinkddg.com/engendro/cristal4.mp4',
  'https://thinkddg.com/engendro/cristal6.mp4',
  'https://thinkddg.com/engendro/saw.mp4'
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCatalog }) => {
  const t = translations[lang].hero;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Automatically cycle videos every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % productVideos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyData.whatsappRaw}`, '_blank');
  };

  const activeVideoUrl = productVideos[currentVideoIndex];

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-24 lg:py-32">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-950/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/70 border border-blue-700/50 text-blue-200 text-xs font-semibold mb-6 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'pt' ? 'Importação e Distribuição Autorizada' : 'Authorized Import & Distribution'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight drop-shadow-md">
              {t.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 mb-10 leading-relaxed max-w-2xl drop-shadow-sm">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenCatalog}
                className="flex items-center justify-center gap-3 px-7 py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-700/25 transition-all"
              >
                <FileText className="w-5 h-5" />
                <span>{t.catalogBtn}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-3 px-7 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-700/25 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.whatsappBtn}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Square Continuous Rotating Component Videos Box (No Text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVideoUrl}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={activeVideoUrl} type="video/mp4" />
                  </video>
                </motion.div>
              </AnimatePresence>

              {/* Minimalist Indicators */}
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-1.5 pointer-events-none z-10">
                {productVideos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`h-1.5 rounded-full transition-all pointer-events-auto ${
                      idx === currentVideoIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/50'
                    }`}
                    aria-label={`Video ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
