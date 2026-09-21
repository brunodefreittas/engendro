import React from 'react';
import { Language } from '../types';
import { translations, companyData } from '../data';
import { FileText, X, MessageSquare, Download, CheckCircle2 } from 'lucide-react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyData.whatsappRaw}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 mb-6">
          <FileText className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-extrabold text-blue-950 mb-3">
          {lang === 'pt' ? 'Catálogo Completo em PDF' : 'Complete PDF Catalog'}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {lang === 'pt'
            ? 'O arquivo PDF oficial do catálogo completo está sendo integrado pela nossa equipe e o link definitivo será disponibilizado em breve.'
            : 'The official PDF catalog file is being integrated by our team and the final link will be available soon.'}
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
          <span className="text-xs text-blue-900 font-medium">
            {lang === 'pt'
              ? 'Para cotações urgentes, solicite agora mesmo pelo WhatsApp.'
              : 'For urgent quotations, request directly via WhatsApp.'}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'pt' ? 'Solicitar via WhatsApp' : 'Request via WhatsApp'}</span>
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors"
          >
            {lang === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
