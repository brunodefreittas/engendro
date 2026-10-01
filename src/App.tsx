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
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const handleNavigateHome = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: BlogPost) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCatalog={() => setCatalogModalOpen(true)}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Content Sections or Full Article View */}
      <main>
        {selectedArticle ? (
          <ArticleView
            article={selectedArticle}
            lang={lang}
            onBack={() => {
              setSelectedArticle(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
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
            <Blog
              lang={lang}
              onSelectArticle={handleSelectArticle}
            />
            <Contact lang={lang} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Catalog Modal */}
      <CatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
