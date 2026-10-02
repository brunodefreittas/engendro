import React, { useState } from 'react';
import { Language, BlogPost } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Blog } from './components/Blog';
import { ArticleView } from './components/ArticleView';
import { Contact } from './components/Contact';
import { CatalogModal } from './components/CatalogModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'article'>('home');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const handleNavigate = (view: 'home' | 'blog') => {
    setCurrentView(view);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: BlogPost) => {
    setSelectedArticle(article);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans flex flex-col justify-between">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCatalog={() => setCatalogModalOpen(true)}
        onNavigate={handleNavigate}
        currentView={currentView}
      />

      {/* Main Content View Switcher */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero
              lang={lang}
              onOpenCatalog={() => setCatalogModalOpen(true)}
            />
            <About lang={lang} />
            <Products
              lang={lang}
              onOpenCatalog={() => setCatalogModalOpen(true)}
            />
            <Contact lang={lang} />
          </>
        )}

        {currentView === 'blog' && (
          <Blog
            lang={lang}
            onSelectArticle={handleSelectArticle}
          />
        )}

        {currentView === 'article' && selectedArticle && (
          <ArticleView
            article={selectedArticle}
            lang={lang}
            onBack={() => {
              setCurrentView('blog');
              setSelectedArticle(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
        onNavigate={handleNavigate}
      />

      {/* Catalog Modal */}
      <CatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
