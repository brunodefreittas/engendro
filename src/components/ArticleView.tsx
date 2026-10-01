import React from 'react';
import { Language, BlogPost } from '../types';
import { translations, companyData } from '../data';
import { Calendar, Clock, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface ArticleViewProps {
  article: BlogPost;
  lang: Language;
  onBack: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, lang, onBack }) => {
  const t = translations[lang].blog;
  const title = lang === 'pt' ? article.titlePt : article.titleEn;
  const content = lang === 'pt' ? article.contentPt : article.contentEn;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(lang === 'pt' ? 'Link copiado para a área de transferência!' : 'Link copied to clipboard!');
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      lang === 'pt'
        ? `Olá! Estava lendo o artigo "${title}" no blog da Engendro e gostaria de discutir sobre.`
        : `Hello! I was reading the article "${title}" on Engendro's blog and would like to discuss it.`
    );
    window.open(`https://wa.me/${companyData.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="py-16 sm:py-24 bg-white font-sans"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>

        {/* Category & Title */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold border border-blue-200">
            {article.category}
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-blue-950 tracking-tight leading-tight">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pt-2 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-700" />
              <span className="font-semibold text-slate-700">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-700" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>{article.readTime} {t.minRead}</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-12 aspect-video bg-slate-900">
          <img 
            src={article.image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-slate lg:prose-lg max-w-none mb-16 text-slate-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Share & Discuss Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <h4 className="text-lg font-bold text-blue-950 mb-1">
              {lang === 'pt' ? 'Gostou deste artigo?' : 'Did you like this article?'}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === 'pt' ? 'Entre em contato com nossa engenharia para tirar dúvidas ou solicitar cotações.' : 'Contact our engineering team for questions or quotations.'}
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleShare}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap"
            >
              <Share2 className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Compartilhar' : 'Share'}</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-sm transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Discutir no WhatsApp' : 'Discuss on WhatsApp'}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
