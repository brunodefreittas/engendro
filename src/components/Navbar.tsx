import React, { useState } from 'react';
import { Language } from '../types';
import { translations, companyData } from '../data';
import { MessageSquare, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenCatalog }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyData.whatsappRaw}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={`${companyData.baseUrl}logo-azul.svg`}
            alt="Engendro Eletrônicos"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-slate-700 hover:text-blue-900 font-medium text-sm transition-colors">
            {t.about}
          </a>
          <a href="#products" className="text-slate-700 hover:text-blue-900 font-medium text-sm transition-colors">
            {t.products}
          </a>
          <a href="#contact" className="text-slate-700 hover:text-blue-900 font-medium text-sm transition-colors">
            {t.contact}
          </a>
        </nav>

        {/* Actions & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
            <button
              onClick={() => setLang('pt')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'pt' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'en' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenCatalog}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors"
          >
            <FileText className="w-4 h-4 text-blue-700" />
            <span>{t.catalog}</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
            <button
              onClick={() => setLang('pt')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-full ${
                lang === 'pt' ? 'bg-blue-900 text-white' : 'text-slate-700'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-full ${
                lang === 'en' ? 'bg-blue-900 text-white' : 'text-slate-700'
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-blue-900 rounded-xl hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-blue-900 font-medium border-b border-slate-100"
          >
            {t.about}
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-blue-900 font-medium border-b border-slate-100"
          >
            {t.products}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-blue-900 font-medium border-b border-slate-100"
          >
            {t.contact}
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalog();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-900 font-semibold rounded-xl text-xs"
            >
              <FileText className="w-4 h-4 text-blue-700" />
              <span>{t.catalog}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-700 text-white font-semibold rounded-xl text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
