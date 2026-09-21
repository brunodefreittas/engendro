import React from 'react';
import { Language } from '../types';
import { translations, companyData } from '../data';
import { MessageSquare, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyData.whatsappRaw}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-blue-950 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Direct Card */}
          <div 
            onClick={handleWhatsApp}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group text-center sm:text-left"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mx-auto sm:mx-0 mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {t.whatsappLabel}
              </div>
              <div className="text-xl font-extrabold text-blue-950 font-mono-code mb-3">
                {companyData.whatsapp}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {lang === 'pt' ? 'Atendimento ágil e direto pelo WhatsApp para cotações e suporte.' : 'Fast and direct service via WhatsApp for quotes and support.'}
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-colors text-sm"
            >
              <span>{lang === 'pt' ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Email Card */}
          <a
            href={`mailto:${companyData.email}`}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group text-center sm:text-left"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-800 mx-auto sm:mx-0 mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {t.emailLabel}
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-blue-950 font-mono-code mb-3">
                {companyData.email}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {lang === 'pt' ? 'Envie sua especificação técnica ou pedido formal por e-mail.' : 'Send your technical specs or formal order via email.'}
              </p>
            </div>
            <div className="w-full flex items-center justify-center gap-2 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl transition-colors text-sm">
              <span>{lang === 'pt' ? 'Enviar E-mail' : 'Send Email'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between text-center sm:text-left">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mx-auto sm:mx-0 mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {t.addressLabel}
              </div>
              <div className="text-xl font-extrabold text-blue-950 mb-3">
                {t.addressValue}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {companyData.legalName}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Atendimento Nacional' : 'National Coverage'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
