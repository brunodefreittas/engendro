import React, { useState } from 'react';
import { Language } from '../types';
import { productCategories, translations, companyData } from '../data';
import { CheckCircle2, MessageSquare, FileText, ArrowUpRight, Cpu, Play } from 'lucide-react';

interface ProductsProps {
  lang: Language;
  onOpenCatalog: () => void;
}

export const Products: React.FC<ProductsProps> = ({ lang, onOpenCatalog }) => {
  const t = translations[lang].products;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleQuote = (productName: string) => {
    const message = encodeURIComponent(
      lang === 'pt'
        ? `Olá! Gostaria de solicitar um orçamento para o produto: ${productName}.`
        : `Hello! I would like to request a quote for the product: ${productName}.`
    );
    window.open(`https://wa.me/${companyData.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-12 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold mb-4">
            <Cpu className="w-4 h-4 text-blue-700" />
            <span>{t.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-blue-950 tracking-tight mb-6">
            {t.title}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
            {t.intro}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {lang === 'pt' ? 'Todos os Produtos' : 'All Products'}
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {lang === 'pt' ? cat.titlePt : cat.titleEn}
            </button>
          ))}
        </div>

        {/* Product Categories & Items */}
        <div className="space-y-16">
          {productCategories
            .filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
            .map((cat) => (
              <div key={cat.id} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-xs">
                <div className="mb-8 border-b border-slate-200 pb-4">
                  <h3 className="text-2xl font-bold text-blue-950 mb-2">
                    {lang === 'pt' ? cat.titlePt : cat.titleEn}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base">
                    {lang === 'pt' ? cat.descriptionPt : cat.descriptionEn}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item, idx) => (
                    <div
                      key={`${item.id}-${idx}`}
                      className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Video / Photo Display */}
                        <div className="w-full h-52 rounded-lg bg-slate-900 mb-6 overflow-hidden relative flex items-center justify-center border border-slate-200">
                          <video
                            src={`${companyData.baseUrl}${item.video}`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              // Fallback to image if video fails to load
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.innerHTML = `<img src="${companyData.baseUrl}${item.image}" alt="${item.namePt}" class="w-full h-full object-contain p-4" />`;
                              }
                            }}
                          />
                          <div className="absolute top-3 right-3 bg-blue-900 text-blue-100 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                            {item.category}
                          </div>
                        </div>

                        <h4 className="text-lg font-bold text-blue-950 mb-2">
                          {lang === 'pt' ? item.namePt : item.nameEn}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                          {lang === 'pt' ? item.descriptionPt : item.descriptionEn}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {lang === 'pt' ? 'Pronta Entrega / Consulta' : 'Available'}
                        </span>
                        <button
                          onClick={() => handleQuote(lang === 'pt' ? item.namePt : item.nameEn)}
                          className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-50 hover:bg-blue-900 text-blue-900 hover:text-white text-xs font-bold rounded-lg transition-colors"
                        >
                          <span>{t.requestQuote}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* PDF Catalog Banner */}
        <div className="mt-16 relative overflow-hidden bg-blue-950 rounded-2xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
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
              {lang === 'pt' ? 'Baixe o Catálogo Completo' : 'Download Complete Catalog'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              {lang === 'pt'
                ? 'Tenha acesso a todas as especificações técnicas, frequências e tolerâncias em PDF.'
                : 'Get access to all technical specifications, frequencies and tolerances in PDF.'}
            </p>
          </div>
          <button
            onClick={onOpenCatalog}
            className="relative z-10 flex items-center gap-3 px-8 py-4 bg-white text-blue-950 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all whitespace-nowrap"
          >
            <FileText className="w-5 h-5 text-blue-700" />
            <span>{lang === 'pt' ? 'Baixar Catálogo PDF' : 'Download PDF Catalog'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
