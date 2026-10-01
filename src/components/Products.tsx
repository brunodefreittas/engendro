import React, { useState } from 'react';
import { Language } from '../types';
import { productCategories, translations, companyData } from '../data';
import { Search, ArrowUpRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductsProps {
  lang: Language;
  onOpenCatalog: () => void;
}

export const Products: React.FC<ProductsProps> = ({ lang, onOpenCatalog }) => {
  const t = translations[lang].products;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleQuote = (productName: string) => {
    const message = encodeURIComponent(
      lang === 'pt'
        ? `Olá! Gostaria de solicitar um orçamento para o componente: ${productName}.`
        : `Hello! I would like to request a quote for the component: ${productName}.`
    );
    window.open(`https://wa.me/${companyData.whatsappRaw}?text=${message}`, '_blank');
  };

  const filteredCategories = productCategories
    .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => {
        const query = searchQuery.toLowerCase();
        const name = (lang === 'pt' ? item.namePt : item.nameEn).toLowerCase();
        const desc = (lang === 'pt' ? item.descriptionPt : item.descriptionEn).toLowerCase();
        const freq = item.frequencyRange.toLowerCase();
        const pkg = item.packageType.toLowerCase();
        return name.includes(query) || desc.includes(query) || freq.includes(query) || pkg.includes(query);
      })
    }))
    .filter((cat) => cat.items.length > 0);

  // Exact theme configuration matching the 3 Pillars (Blue, Emerald, Indigo)
  const categoryThemes: Record<string, { headerBg: string; hoverBg: string; buttonBg: string; buttonHover: string; textAccent: string; borderColor: string }> = {
    ressonadores: {
      headerBg: 'bg-blue-600 text-white',
      hoverBg: 'hover:bg-blue-50/50',
      buttonBg: 'bg-blue-600',
      buttonHover: 'hover:bg-blue-700',
      textAccent: 'text-blue-950',
      borderColor: 'border-blue-200',
    },
    osciladores: {
      headerBg: 'bg-emerald-600 text-white',
      hoverBg: 'hover:bg-emerald-50/50',
      buttonBg: 'bg-emerald-600',
      buttonHover: 'hover:bg-emerald-700',
      textAccent: 'text-emerald-950',
      borderColor: 'border-emerald-200',
    },
    filtros: {
      headerBg: 'bg-indigo-600 text-white',
      hoverBg: 'hover:bg-indigo-50/50',
      buttonBg: 'bg-indigo-600',
      buttonHover: 'hover:bg-indigo-700',
      textAccent: 'text-indigo-950',
      borderColor: 'border-indigo-200',
    }
  };

  return (
    <section id="products" className="py-12 sm:py-20 bg-slate-50/50 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-5xl font-light text-blue-950 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            {t.intro}
          </p>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-950 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'pt' ? 'Todos os Produtos' : 'All Products'}
          </motion.button>
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const activeColorClass = 
              cat.id === 'ressonadores' ? 'bg-blue-600 text-white shadow-md' :
              cat.id === 'osciladores' ? 'bg-emerald-600 text-white shadow-md' :
              'bg-indigo-600 text-white shadow-md';

            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  isActive
                    ? activeColorClass
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {lang === 'pt' ? cat.titlePt : cat.titleEn}
              </motion.button>
            );
          })}
        </div>

        {/* Interactive Technical Tables with Pillar Colors */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs">
              <p className="text-slate-500 text-sm">
                {lang === 'pt' ? 'Nenhum componente encontrado para a busca.' : 'No components found for your search.'}
              </p>
            </div>
          ) : (
            filteredCategories.map((cat, catIdx) => {
              const theme = categoryThemes[cat.id] || categoryThemes.ressonadores;
              return (
                <motion.div 
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className={`bg-white border ${theme.borderColor} rounded-2xl overflow-hidden shadow-md`}
                >
                  <div className={`${theme.headerBg} px-6 py-4 flex items-center justify-between shadow-sm`}>
                    <div>
                      <h3 className="text-lg font-bold tracking-wide">
                        {lang === 'pt' ? cat.titlePt : cat.titleEn}
                      </h3>
                      <p className="text-xs opacity-90 mt-0.5">
                        {lang === 'pt' ? cat.descriptionPt : cat.descriptionEn}
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
                          <th className="py-4 px-6">{t.tableHeaders.family}</th>
                          <th className="py-4 px-6">{t.tableHeaders.package}</th>
                          <th className="py-4 px-6">{t.tableHeaders.frequency}</th>
                          <th className="py-4 px-6">{t.tableHeaders.stability}</th>
                          <th className="py-4 px-6 text-right">{t.tableHeaders.action}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-sm">
                        {cat.items.map((item, idx) => {
                          const itemName = lang === 'pt' ? item.namePt : item.nameEn;
                          const itemDesc = lang === 'pt' ? item.descriptionPt : item.descriptionEn;
                          return (
                            <tr key={`${item.id}-${idx}`} className={`${theme.hoverBg} transition-colors group`}>
                              <td className="py-4 px-6 align-top">
                                <div className={`font-bold ${theme.textAccent} text-base mb-1`}>{itemName}</div>
                                <div className="text-xs text-slate-600 leading-relaxed font-normal">
                                  {itemDesc}
                                </div>
                              </td>
                              <td className="py-4 px-6 align-top font-mono text-xs text-slate-700 font-medium">
                                {item.packageType}
                              </td>
                              <td className="py-4 px-6 align-top font-mono text-xs text-slate-900 font-semibold">
                                {item.frequencyRange}
                              </td>
                              <td className="py-4 px-6 align-top text-xs text-slate-600">
                                {item.stability}
                              </td>
                              <td className="py-4 px-6 align-top text-right">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleQuote(itemName)}
                                  className={`inline-flex items-center gap-1.5 px-4 py-2 ${theme.buttonBg} ${theme.buttonHover} text-white font-bold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap`}
                                >
                                  <span>{t.requestQuote}</span>
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </motion.button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* PDF Catalog Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden bg-blue-950 rounded-2xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-45 pointer-events-none"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')` }}
          />
          <div className="absolute inset-0 bg-blue-950/65 pointer-events-none" />

          <div className="relative z-10 space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 text-blue-200 text-xs font-semibold backdrop-blur-xs">
              <FileText className="w-3.5 h-3.5" />
              <span>Documentação Oficial</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light">
              {lang === 'pt' ? 'Confira o catálogo completo dos componentes' : 'Check the complete components catalog'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              {lang === 'pt'
                ? 'Utilize os nossos canais para solicitar especificações técnicas detalhadas.'
                : 'Use our channels to request detailed technical specifications.'}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenCatalog}
            className="relative z-10 flex items-center gap-3 px-8 py-4 bg-white text-blue-950 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all whitespace-nowrap"
          >
            <FileText className="w-5 h-5 text-blue-700" />
            <span>{lang === 'pt' ? 'Baixar Catálogo PDF' : 'Download PDF Catalog'}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
