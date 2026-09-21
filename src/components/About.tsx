import React from 'react';
import { Language } from '../types';
import { translations } from '../data';
import { Award, TrendingUp, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <>
      <section id="about" className="py-12 sm:py-20 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-20"
          >
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-950 tracking-tight leading-tight">
                {t.title}
              </h2>
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative aspect-video sm:aspect-square bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
                  alt="Engenheiro e Escritório de Importação e Suprimento de Componentes Eletrônicos"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="pt-6 sm:pt-10 border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Pillar 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-blue-50/60 hover:bg-blue-50/90 p-8 rounded-2xl shadow-sm border border-blue-200/80 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-950/5 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-600/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-950 mb-3">{t.p1Title}</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{t.p1Desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200/60 flex items-center gap-2 text-xs font-semibold text-blue-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Padrão global</span>
                </div>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="bg-emerald-50/60 hover:bg-emerald-50/90 p-8 rounded-2xl shadow-sm border border-emerald-200/80 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-950/5 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-600/30">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 mb-3">{t.p2Title}</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{t.p2Desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <Zap className="w-4 h-4" />
                  <span>Competitividade</span>
                </div>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-indigo-50/60 hover:bg-indigo-50/90 p-8 rounded-2xl shadow-sm border border-indigo-200/80 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-950/5 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-600/30">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-indigo-950 mb-3">{t.p3Title}</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{t.p3Desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-indigo-200/60 flex items-center gap-2 text-xs font-semibold text-indigo-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Suprimento contínuo</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
