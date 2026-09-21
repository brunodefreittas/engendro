import React from 'react';
import { Language } from '../types';
import { translations, companyData } from '../data';
import { MessageSquare, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  lang: Language;
  onOpenCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCatalog }) => {
  const t = translations[lang].hero;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyData.whatsappRaw}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-28 lg:py-36">
      {/* Background Image with Lighter Overlay */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center opacity-65"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/50 to-slate-950/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
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
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-slate-900/80 hover:bg-slate-900 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all backdrop-blur-xs"
            >
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
