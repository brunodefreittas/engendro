import React, { useState } from 'react';
import { Language, BlogPost } from '../types';
import { translations, blogPosts } from '../data';
import { ArrowRight, Clock, Calendar, User, Search, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogProps {
  lang: Language;
  onSelectArticle: (article: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ lang, onSelectArticle }) => {
  const t = translations[lang].blog;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const query = searchQuery.toLowerCase();
    const title = (lang === 'pt' ? post.titlePt : post.titleEn).toLowerCase();
    const excerpt = (lang === 'pt' ? post.excerptPt : post.excerptEn).toLowerCase();
    const matchesQuery = title.includes(query) || excerpt.includes(query);
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <section id="blog" className="py-16 sm:py-24 bg-white relative font-sans border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Engendro Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-blue-950 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            {t.subtitle}
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'pt' ? 'Pesquisar artigos técnicos...' : 'Search technical articles...'}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 shadow-xs transition-all"
            />
          </div>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
              }`}
            >
              {cat === 'all' ? (lang === 'pt' ? 'Todos os Artigos' : 'All Articles') : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length === 0 ? (
            <div className="col-span-full py-16 text-center text-slate-500">
              {lang === 'pt' ? 'Nenhum artigo encontrado.' : 'No articles found.'}
            </div>
          ) : (
            filteredPosts.map((post, idx) => {
              const title = lang === 'pt' ? post.titlePt : post.titleEn;
              const excerpt = lang === 'pt' ? post.excerptPt : post.excerptEn;
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => onSelectArticle(post)}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="w-full h-48 overflow-hidden relative bg-slate-900">
                      <img 
                        src={post.image} 
                        alt={title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-blue-950/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full border border-blue-500/30">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-blue-700" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-700" />
                          <span>{post.readTime} {t.minRead}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                        {title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                        {excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-4">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.author}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 pt-4 group-hover:translate-x-1 transition-transform">
                      <span>{t.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
