import React from 'react';
import { Language } from '../types';
import { translations, companyData } from '../data';
import { Mail, MessageSquare } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;
  const slogan = lang === 'pt' ? companyData.sloganPt : companyData.sloganEn;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyData.whatsappRaw}`, '_blank');
  };

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={`${companyData.baseUrl}logo-branca.svg`}
                alt="Engendro Eletrônicos"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <p className="text-slate-400 text-sm max-w-sm italic">
              "{slogan}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-wider text-slate-300 mb-4">
              {lang === 'pt' ? 'Navegação' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {translations[lang].nav.about}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  {translations[lang].nav.products}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {translations[lang].nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-sm font-light uppercase tracking-wider text-slate-300 mb-4">
              {lang === 'pt' ? 'Contato Direto' : 'Direct Contact'}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 hover:text-white transition-colors text-emerald-400 font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{companyData.whatsapp}</span>
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors text-blue-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>{companyData.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {companyData.legalName}. {t.rights}</p>
          <p>{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
};
