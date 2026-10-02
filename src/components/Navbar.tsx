import React, { useState } from 'react';
import { Language } from '../types';
import { translations, companyData } from '../data';
import { MessageSquare, FileText, Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenCatalog: () => void;
  onNavigate: (view: 'home' | 'blog') => void;
  currentView: 'home' | 'blog' | 'article';
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenCatalog, onNavigate, currentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyData.whatsappRaw}`, '_blank');
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex items-center gap-3"
        >
          <img
            src={`${companyData.baseUrl}logo-azul.svg`}
            alt="Engendro Eletrônicos"
            className="h-14 sm:h-16 w-auto object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              setTimeout(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className={`text-slate-700 hover:text-blue-900 font-medium text-sm transition-colors relative group py-1 ${
              currentView === 'home' ? '' : ''
            }`}
          >
            <span>{t.about}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full" />
          </a>
          <a 
            href="#products" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              setTimeout(() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-slate-700 hover:text-blue-900 font-medium text-sm transition-colors relative group py-1"
          >
            <span>{t.products}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full" />
          </a>
          <button 
            onClick={() => onNavigate('blog')}
            className={`text-slate-700 hover:text-blue-900 font-medium text-sm transition-colors relative group py-1 flex items-center gap-1.5 bg-transparent border-none cursor-pointer ${
              currentView === 'blog' || currentView === 'article' ? 'text-blue-900 font-semibold' : ''
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>{t.blog}</span>
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-900 transition-all duration-300 ${currentView === 'blog' || currentView === 'article' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-slate-700 hover:text-blue-900 font-medium text-sm transition-colors relative group py-1"
          >
            <span>{t.contact}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Actions & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200">
            <button
              onClick={() => setLang('pt')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'pt' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'en' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-700 hover:text-blue-900'
              }`}
            >
              EN
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenCatalog}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors"
          >
            <FileText className="w-4 h-4 text-blue-700" />
            <span>{t.catalog}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </motion.button>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg overflow-hidden"
          >
            <a
              href="#about"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home');
              }}
              className="block py-2 text-slate-700 hover:text-blue-900 font-medium border-b border-slate-100"
            >
              {t.about}
            </a>
            <a
              href="#products"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home');
              }}
              className="block py-2 text-slate-700 hover:text-blue-900 font-medium border-b border-slate-100"
            >
              {t.products}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('blog');
              }}
              className="w-full text-left py-2 text-slate-700 hover:text-blue-900 font-medium border-b border-slate-100 flex items-center gap-2 bg-transparent border-none"
            >
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>{t.blog}</span>
            </button>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home');
              }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
